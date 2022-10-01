from django.urls import path
from . import views

urlpatterns = [
    path("api-overview/", views.api_overview, name="api-overview"), #Implemented
    path('login/', views.login, name="login"), #Implemented
    path('registration/', views.register, name="registration"), #Implemented
    path('ngo-register/', views.ngo_register, name="ngo-register"), #Implemented
    path('community-register/', views.community_register, name="community-register"), #Implemented
    path('user-details/', views.user_details, name="user-details"), #Implemented
    path('ngo-details/', views.ngo_details, name="ngo-details"),
    path('community-details/', views.community_details, name="community-details"),
    path('update-ngo/', views.update_ngo, name="update-ngo"),
    path('update-community/', views.update_community, name="update-community"),
    path('update-user/', views.update_user, name="update-user"),
    path('create-social-project/', views.create_social_project, name="create-social-project"),
    path('create-event/', views.create_event, name="create-event"),
    path('create-donation/', views.create_donation, name="create-donation"),
    path('get-all-events/', views.get_all_events, name="get-all-events"),
    path('get-all-projects/', views.get_all_projects, name="get-all-projects"),
    path('get-all-ngo-states/', views.get_all_ngo_states, name="get-all-ngo"), #Implemented
    path('get-all-donations/', views.get_all_donations, name="get-all-quotes"),
    path('accept-donation/<int:id>', views.accept_donation, name="accept-donation"),
    path('reject-donation/<int:id>', views.reject_donation, name="reject-donation"),
    path('change-password/', views.change_password, name="change-password"),  
    path('refresh/', views.refresh, name="refresh"), #Implemented
    path('valid-registeration-id/<str:state>/<str:id>', views.valid_registeration_id, name="valid-registeration-id"), #Implemented
    path('stats/', views.stats, name="stats"),
]
