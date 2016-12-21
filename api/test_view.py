import json
from django.http import HttpResponse
from .models import Post, Comment, Like
from django.contrib.auth.models import User
from django.core import serializers


def post_all(request):
    post = Post.objects.all()
    data = serializers.serialize("json", post)
    print(data)

    return HttpResponse(data)
