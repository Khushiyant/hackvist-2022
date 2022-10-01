from django.urls import path
from . import views

urlpatterns = [
    path('chatroom/<str:room>/', views.room, name='room'),
    path('chatroom/checkview', views.checkview, name='entry'),
    path('chatroom/send', views.send, name='send'),
    path('chatroom/get-messages/<str:room>/', views.get_messages, name='getMessages'),
]

