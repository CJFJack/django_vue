from django.shortcuts import render
from backend.models import Test
from django.core import serializers
from django.http import JsonResponse
from django.views.decorators.csrf import ensure_csrf_cookie
import json


def index(request):
    if request.method == 'GET':
        return render(request, 'index.html')


@ensure_csrf_cookie
def test_vue_resource_post(request):
    if request.method == 'POST':
        raw_data = json.loads(request.body.decode('utf-8'))
        title = raw_data.get('title', '')
        response = {}
        if title:
            test = Test.objects.filter(title=title)
        else:
            test = Test.objects.all()
        response['result'] = json.loads(serializers.serialize("json", test))
        return JsonResponse(response)
