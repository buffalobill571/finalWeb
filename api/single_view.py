from django.contrib.auth.models import User
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.decorators import login_required
import json

from . import serializer
from .models import Post, Comment, Like


def post(request, pk):
    pk = int(pk)
    post = Post.objects.all().get(pk=pk)
    comments = Comment.objects.all().filter(post=post)
    likes = Like.objects.all().filter(post=post).count()

    return HttpResponse(
        serializer.single_post(post, likes, comments)
    )


@csrf_exempt
@login_required
def update_post(request, pk):
    pk = int(pk)
    body = json.loads(request.body.decode())
    post = Post.objects.all().get(pk=pk)
    print(body)
    post.body = body['body']
    post.save()

    return HttpResponse()
