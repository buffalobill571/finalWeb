from django.contrib.auth.models import User
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.decorators import login_required
import json

from . import serializer
from .models import Post, Comment, Like


@csrf_exempt
@login_required
def add_comment(request, pk):
    pk = int(pk)
    get_data = json.loads(request.body.decode())
    comment = Comment(
                body=get_data['body'],
                post=Post.objects.get(pk=pk),
                author=request.user,
                )
    comment.save()
    return HttpResponse(
        serializer.comment_serialize(comment)
    )


def get_comment(request, pk):
    pk = int(pk)
    comment = Comment.objects.get(pk=pk)

    return HttpResponse(
        serializer.comment_serialize(comment)
    )


@csrf_exempt
@login_required
def update_comment(request, pk):
    pk = int(pk)
    comment = Comment.objects.get(pk=pk)
    comment.body = json.loads(request.body.decode())['body']
    comment.save()

    return HttpResponse()


@csrf_exempt
@login_required
def delete_comment(request, pk):
    pk = int(pk)
    Comment.objects.get(pk=pk).delete()
    return HttpResponse()
