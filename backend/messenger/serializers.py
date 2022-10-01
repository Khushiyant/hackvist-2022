from rest_framework import serializers
from base.models import UserAccount
from messenger.models import Message

class MessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Message
        fields = '__all__'