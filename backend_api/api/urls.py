from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from .views import UserView

router = routers.DefaultRouter()
router.register('users', UserView)

urlpatterns = [
    path('', include(router.urls)),
]
