from django.urls import path
from . import views

urlpatterns = [
    path("api-overview/", views.apiOverview, name="api-overview"),
    path('login/', views.login),
    path('registration/', views.register),
    path('ngo-register/', views.ngo_register),
    path('community-register/', views.community_register),
    path('user-details/', views.user_details),
    path('update-ngo/', views.update_ngo),
    path('update-community/', views.update_community),
    path('update-user/', views.update_user),
    path('refresh/', views.refresh),
]
