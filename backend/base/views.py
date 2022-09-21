import json

from django.contrib.auth import authenticate
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken

from .models import NGO, Community, UserAccount
from .serializers import (CommunitySerializer, NGOSerializer,
                          UserAccountSerializer, UserLoginSerializer,
                          UserRegistrationSerializer)


def get_tokens_for_user(user):
    refresh = RefreshToken.for_user(user)

    return {
        'refresh': str(refresh),
        'access': str(refresh.access_token),
    }


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def refresh(request):
    user = request.user
    token = get_tokens_for_user(user)

    return Response({'token': token}, status=status.HTTP_200_OK)


@api_view(['GET'])
def apiOverview(request):
    overview = json.load(open('json/api.json'))
    return Response(overview, status=status.HTTP_200_OK)


@api_view(['POST'])
def register(request):
    data = request.data
    serializer = UserRegistrationSerializer(data=data)
    serializer.is_valid(raise_exception=True)
    user = serializer.save()
    token = get_tokens_for_user(user)

    return Response({'token': token, 'message': 'Registration Successful'}, status=status.HTTP_201_CREATED)


@api_view(['POST'])
def login(request):
    serializer = UserLoginSerializer(data=request.data)
    serializer.is_valid(raise_exception=True)
    email = serializer.validated_data['email']
    password = serializer.validated_data['password']
    user = authenticate(email=email, password=password)
    if user is not None:
        token = get_tokens_for_user(user)
        return Response({'token': token, 'msg': 'Login Success'}, status=status.HTTP_200_OK)
    else:
        return Response({'errors': {'non_field_errors': ['Email or Password is not Valid']}}, status=status.HTTP_404_NOT_FOUND)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def ngo_register(request):
    user = request.user
    if user.user_type == 'Community':
        data = request.data
        data['user'] = user.id
        serializer = NGOSerializer(data=data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response({'message': 'Community Registration Successful'}, status=status.HTTP_201_CREATED)
    else:
        return Response({'message': 'You are not a NGO User'}, status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def community_register(request):    
    user = request.user
    if user.user_type == 'Community':
        data = request.data
        data['user'] = user.id
        serializer = CommunitySerializer(data=data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response({'message': 'Community Registration Successful'}, status=status.HTTP_201_CREATED)
    else:
        return Response({'message': 'You are not a Community User'}, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def user_details(request):
    user = request.user
    serializer = UserAccountSerializer(user)
    return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def ngo_details(request):
    ngo = NGO.objects.get(user=request.user)
    serializer = NGOSerializer(ngo)
    return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def update_ngo(request):
    user = request.user
    ngo = NGO.objects.get(user=user)
    serializer = NGOSerializer(instance=ngo, data=request.data)
    serializer.is_valid(raise_exception=True)
    serializer.save()
    return Response({'message': 'NGO Details Updated'}, status=status.HTTP_200_OK)


@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def update_community(request):
    user = request.user
    community = Community.objects.get(user=user)
    serializer = CommunitySerializer(instance=community, data=request.data)
    serializer.is_valid(raise_exception=True)
    serializer.save()
    return Response({'message': 'Community Details Updated'}, status=status.HTTP_200_OK)


@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def update_user(request):
    user = request.user
    serializer = UserAccountSerializer(instance=user, data=request.data)
    serializer.is_valid(raise_exception=True)
    serializer.save()
    return Response({'message': 'User Details Updated'}, status=status.HTTP_200_OK)
