from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager
from django.utils import timezone

class UserAccountManager(BaseUserManager):
    def create_user(self, email, name, password=None, phone=None, description=None, location=None, coordinator=None):
        if not email:
            raise ValueError('Users must have an email address')

        user = self.model(
            email=self.normalize_email(email),
            name=name,
            phone=phone,
            description=description,
            location=location,
            coordinator=coordinator,
        )

        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, name, password=None, phone=None, description=None, location=None, coordinator=None):
        if not email:
            raise ValueError('Users must have an email address')

        user = self.create_user(
            email=self.normalize_email(email),
            password=password,
            name=name,
            phone=phone,
            description=description,
            location=location,
            coordinator=coordinator,
        )

        user.is_superuser = True
        user.is_staff = True

        user.save(using=self._db)
        return user

class UserAccount(AbstractBaseUser):
    name = models.CharField(max_length=255)
    email = models.EmailField(max_length=255, unique=True)
    phone = models.CharField(max_length=10, unique=True)
    description = models.TextField()
    location = models.CharField(max_length=255)
    coordinator = models.models.CharField(max_length=50, default='None')

    objects = UserAccountManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ["__all__"]

    def get_name(self):
        return self.name

    def __str__(self):
        return self.email

class NGO(models.Model):
    user = models.ForeignKey(UserAccount, on_delete=models.CASCADE)
    staff_count = models.IntegerField()
    volunteers_count = models.IntegerField()

    # auditing model
    created_at = models.DateTimeField(default=timezone.now)
    updated_at = models.DateTimeField(auto_now=True)

    def get_name(self):
        return self.name

    def __str__(self):
        return self.email

class Community(models.Model):
    user = models.ForeignKey(UserAccount, on_delete=models.CASCADE)
    members_count = models.IntegerField()

    # auditing model
    created_at = models.DateTimeField(default=timezone.now)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name