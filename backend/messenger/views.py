from django.shortcuts import render
from base.models import UserAccount, DonationQuote
from messenger.models import Message
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from .serializers import MessageSerializer
from base.serializers import DonationQuoteSerializer


@permission_classes(['IsAuthenticated'])
def room(request, room):
    context = {
        'username': request.user.name,
        'room': room,
        'room_details': UserAccount.objects.get(name=room)
    }
    return render(request, 'room.html', context)


@api_view(['GET'])
@permission_classes(['IsAuthenticated'])
def get_messages(request, room):
    room_details = UserAccount.objects.get(name=room)

    messages = Message.objects.filter(room=room_details.id)
    return Response({"messages": list(messages.values())})


@api_view(['POST'])
@permission_classes(['IsAuthenticated'])
def send(request):
    data = request.data
    data['sender'] = request.user.id
    data['room'] = UserAccount.objects.get(name=data['room']).id
    serializer = MessageSerializer(data=data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)


@api_view(['POST'])
# @permission_classes(['IsAuthenticated'])
def checkview(request):
    data = request.data
    data['sender'] = request.user.id
    data['room'] = UserAccount.objects.get(name=data['name']).id

    # Check if the user has a accepted donation quote
    donation_quote = DonationQuote.objects.filter(
        user=request.user.id, is_accepted=True, reciever = UserAccount.objects.get(name=data['name']))
    if donation_quote:
        # redirect to the room endpoint
        return Response({'redirect': f'/chatroom/{data["name"]}/'})
    else:
        return Response({'message': 'You don\'t access to this room'})

