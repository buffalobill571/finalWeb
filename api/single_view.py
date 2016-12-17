from django.contrib.auth.models import User
from django.http import HttpResponse

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
