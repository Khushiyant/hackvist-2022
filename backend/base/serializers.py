from rest_framework import serializers

from .models import (NGO, Community, DonationQuote, Event, SocialProject,
                     UserAccount)


class UserRegistrationSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = UserAccount
        fields = ['email', 'name', 'phone', 'profile_image', 'user_type', 'password']

    def create(self, validate_data):
        return UserAccount.objects.create_user(**validate_data)


class UserLoginSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(max_length=255)

    class Meta:
        model = UserAccount
        fields = ['email', 'password']


class DonationQuoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = DonationQuote
        fields = '__all__'


class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserAccount
        fields = "__all__"


class NGOSerializer(serializers.ModelSerializer):
    class Meta:
        model = NGO
        fields = '__all__'


class CommunitySerializer(serializers.ModelSerializer):
    class Meta:
        model = Community
        fields = '__all__'


class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = '__all__'


class SocialProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = SocialProject
        fields = '__all__'


class DonationQuoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = DonationQuote
        fields = '__all__'
