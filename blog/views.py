from django.shortcuts import render
from django.http import HttpResponseRedirect
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User


def index(request):
    print(request.user.is_authenticated())
    if request.user.is_authenticated():
        return render(request, 'blog/index.html')
    else:
        return render(request, 'blog/main.html')


def redirect(request):
    return HttpResponseRedirect('/')


def login_page(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        user = authenticate(username=username, password=password)
        if user is not None:
            login(request, user)
            return HttpResponseRedirect('/')
        else:
            return render(request, 'blog/login_page.html', {'error': True})
    else:
        if request.user.is_authenticated():
            return render(request, 'blog/index.html')
        else:
            return render(request, 'blog/login_page.html')


def signin_page(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        email = request.POST['email']
        first = request.POST['first']
        last = request.POST['last']
        user = User.objects.create_user(
                            username,
                            email,
                            password)
        user.first_name = first
        user.last_name = last
        user.save()
        user = authenticate(username=username, password=password)
        login(request, user)
        return HttpResponseRedirect('/')
    else:
        if request.user.is_authenticated():
            return render(request, 'blog/index.html')
        else:
            return render(request, 'blog/signin_page.html')


def log_out(request):
    logout(request)
    return HttpResponseRedirect('/')
