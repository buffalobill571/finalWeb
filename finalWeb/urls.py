from django.conf.urls import url, include
from django.http import HttpResponseRedirect
from django.contrib import admin


def redirect(request):
    return HttpResponseRedirect('admin/')


urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^admin', redirect),
    url(r'^api/', include('api.urls')),
    url(r'^', include('blog.urls')),
]
