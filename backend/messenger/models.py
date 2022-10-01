from django.db import models
from datetime import datetime
from base.models import UserAccount

class Message(models.Model):
    sender = models.ForeignKey(UserAccount, on_delete=models.CASCADE, related_name='sender')
    room = models.ForeignKey(UserAccount, on_delete=models.CASCADE, related_name='room')
    message = models.TextField()
    timestamp = models.DateTimeField(default=datetime.now, blank=True)

    def __str__(self):
        return self.message

    class Meta:
        ordering = ['timestamp']
