from django.conf.urls import url, include
from . import views

urlpatterns = [
    url(r'^$', views.index),
    url(r'^login', views.login_page),
    url(r'^logout/', views.log_out),
    url(r'^signin', views.signin_page),
    url(r'^', views.redirect),
]
