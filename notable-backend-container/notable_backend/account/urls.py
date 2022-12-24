from django.urls import path
from . import views as account_views

urlpatterns = [
    path('login/',account_views.LoginView().as_view(),name='login'),
    path('register/',account_views.RegisterView().as_view(),name='register'),
]