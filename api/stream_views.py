from .models import Post
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.decorators import login_required
from django.http import HttpResponse
from . import serializer


def search_post(request):
    if 'term' in request.GET:
        term = request.GET['term']
        posts = Post.objects.filter(body__istartswith=term)
        return HttpResponse(
            serializer.search_post(posts)
        )
