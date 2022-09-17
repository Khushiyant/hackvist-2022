import email
from django.db import models
from django.contrib.auth.models import AbstractUser

class UserAccount(AbstractUser):
    pass

class NGO(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    user = models.ForeignKey(UserAccount, on_delete=models.CASCADE)
    location = models.CharField(max_length=100)
    staff_count = models.IntegerField()
    volunteers_count = models.IntegerField()
    coordinator = models.ForeignKey(UserAccount, on_delete=models.CASCADE, related_name="coordinator")
    email = models.EmailField()
    phone = models.CharField(max_length=10)

    def __str__(self):
        return self.name

class Community(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    user = models.ForeignKey(UserAccount, on_delete=models.CASCADE)
    location = models.CharField(max_length=100)
    members_count = models.IntegerField()
    coordinator = models.ForeignKey(UserAccount, on_delete=models.CASCADE, related_name="coordinator")
    email = models.EmailField()
    phone = models.CharField(max_length=10)

    def __str__(self):
        return self.name