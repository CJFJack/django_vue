from django.contrib import admin
from django.urls import path
from backend.views import *
from django.conf.urls import url

urlpatterns = [
    url(r'^index/$', index, name='index'),
]
