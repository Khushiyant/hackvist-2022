from django.urls import path
from . import views

urlpatterns = [
    path("api-overview/", views.apiOverview, name="api-overview"),
    path('login/', views.login),
    path('registration/', views.register),
    path('refresh/', views.refresh),
]
