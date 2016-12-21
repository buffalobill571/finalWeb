from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import User
from django.http import HttpResponse, HttpResponseRedirect
from django.contrib.auth import authenticate, login, logout
from django.http import JsonResponse
from .models import Post
import json
from . import serializer


@login_required
@csrf_exempt
def new_post(request):
    user = request.user
    print(request.body.decode())
    dic = json.loads(request.body.decode())
    post = Post(body=dic['body'], author=user)
    print(post)
    post.save()
    return HttpResponse(
                    serializer.one_post_json(post),
                    content_type='application/json',
                    )


@login_required
@csrf_exempt
def deletepost(request, num):
    num = int(num)
    post = Post.objects.get(pk=num).delete()
    return HttpResponse()


@login_required
@csrf_exempt
def postof(request, username):
    user = User.objects.all().get(username=username)
    posts = list(
        Post.objects.all().filter(author=user).order_by("-pk")
    )
    return HttpResponse(
                    serializer.posts_json(posts),
                    content_type='application/json',
                    )


@login_required
def all_posts(request):
    posts = list(Post.objects.all().order_by('-pk'))
    return HttpResponse(
                    serializer.posts_json(posts),
                    content_type='application/json',
                    )


@login_required
def profile(request):
    user = request.user
    return HttpResponse(
        serializer.profile_json(user),
        content_type='application/json',
    )


@login_required
def comrades(request):
    comrades = User.objects.all()
    return HttpResponse(
        serializer.comrades(comrades),
        content_type='application/json',
    )
