from django.urls import path
from . import views

urlpatterns = [
    path("tweets/<str:field>", views.tweet_searching),
]