from django.contrib import admin
from django.urls import path
from backend.views import *
from django.conf.urls import url

urlpatterns = [
    url(r'^index/$', index, name='index'),
    url(r'^test/$', test_vue_resource_post, name='test_vue_resource_post'),
]
