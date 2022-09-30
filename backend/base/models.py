from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
from django.db import models
from django.utils import timezone


class UserTypes(models.TextChoices):
    NGO = 'NGO'
    COMMUNITY = 'COMMUNITY'
    INDIVIDUAL = 'INDIVIDUAL'


class DonationTypes(models.TextChoices):
    MONETARY = 'MONETARY'
    FOOD = 'FOOD'
    CLOTHES = 'CLOTHES'
    OTHERS = 'OTHERS'


class UserAccountManager(BaseUserManager):
    def create_user(self, email, name, password=None, phone=None, profile_image=None, user_type=UserTypes.INDIVIDUAL):
        if not email:
            raise ValueError('Users must have an email address')

        user = self.model(
            email=self.normalize_email(email),
            name=name,
            phone=phone,
            profile_image=profile_image,
            user_type=user_type,
        )

        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, name, password=None, phone=None, profile_image=None, user_type=UserTypes.INDIVIDUAL):
        if not email:
            raise ValueError('Users must have an email address')

        user = self.create_user(
            email=self.normalize_email(email),
            password=password,
            name=name,
            phone=phone,
            profile_image=profile_image,
            user_type=user_type,
        )

        user.is_superuser = True
        user.is_staff = True

        user.save(using=self._db)
        return user


class UserAccount(AbstractBaseUser, PermissionsMixin):
    name = models.CharField(max_length=255)
    email = models.EmailField(max_length=255, unique=True)
    phone = models.CharField(max_length=10, unique=True)
    profile_image = models.URLField(max_length=300, null=True, blank=True)
    user_type = models.CharField(
        max_length=20, choices=UserTypes.choices, default=UserTypes.INDIVIDUAL)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    volunteer_at = models.CharField(max_length=10, unique=False)

    premium_user_at = models.DateTimeField(null=True, default=None)
    is_registeration_complete = models.BooleanField(default=False)

    # audit fields
    created_at = models.DateTimeField(default=timezone.now)
    updated_at = models.DateTimeField(auto_now=True)

    objects = UserAccountManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ["name", "phone", "user_type"]

    def get_name(self):
        return self.name

    def __str__(self):
        return self.email


class NGO(models.Model):
    user = models.OneToOneField(UserAccount, on_delete=models.CASCADE)
    registration_number = models.CharField(max_length=255, default=None)
    staff_count = models.IntegerField()
    volunteers_count = models.IntegerField()
    coordinator = models.CharField(max_length=50, default='None')
    description = models.TextField()
    location = models.CharField(max_length=255)

    # auditing model
    created_at = models.DateTimeField(default=timezone.now)
    updated_at = models.DateTimeField(auto_now=True)

    def get_name(self):
        return self.user.name

    def __str__(self):
        return self.user.email


class Community(models.Model):
    user = models.OneToOneField(UserAccount, on_delete=models.CASCADE)
    members_count = models.IntegerField()
    coordinator = models.CharField(max_length=50, default='None')
    description = models.TextField()
    location = models.CharField(max_length=255)

    # auditing model
    created_at = models.DateTimeField(default=timezone.now)
    updated_at = models.DateTimeField(auto_now=True)

    def get_name(self):
        return self.user.name

    def __str__(self):
        return self.user.email


class Event(models.Model):
    organiser = models.ForeignKey(UserAccount, on_delete=models.CASCADE)
    name = models.CharField(max_length=255)
    description = models.TextField()
    location = models.CharField(max_length=255)
    start_date = models.DateTimeField()
    end_date = models.DateTimeField()
    active_at = models.DateTimeField(null=True)

    # auditing model
    created_at = models.DateTimeField(default=timezone.now)
    updated_at = models.DateTimeField(auto_now=True)

    def get_name(self):
        return self.name

    def __str__(self):
        return self.name


class SocialProject(models.Model):
    maintainer = models.ForeignKey(UserAccount, on_delete=models.CASCADE)
    name = models.CharField(max_length=255)
    description = models.TextField()
    location = models.CharField(max_length=255)
    start_date = models.DateTimeField()
    end_date = models.DateTimeField()
    active_at = models.DateTimeField(null=True)

    # auditing model
    created_at = models.DateTimeField(default=timezone.now)
    updated_at = models.DateTimeField(auto_now=True)

    def get_name(self):
        return self.name

    def __str__(self):
        return self.name


class DonationQuote(models.Model):
    donor = models.ForeignKey(
        UserAccount, on_delete=models.CASCADE, related_name='donor')
    receiver = models.ForeignKey(
        UserAccount, on_delete=models.CASCADE, related_name='receiver')

    donation_type = models.CharField(
        max_length=20, choices=DonationTypes.choices, default=DonationTypes.MONETARY)
    description = models.TextField()
    active_at = models.DateTimeField(default=timezone.now)

    is_accepted = models.BooleanField(null=True, default=None)

    # auditing model
    created_at = models.DateTimeField(default=timezone.now)
    updated_at = models.DateTimeField(auto_now=True)

    def get_name(self):
        return self.donor.name

    def __str__(self):
        return self.donor.email
