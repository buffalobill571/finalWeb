from django.conf.urls import url, include
from . import views
from . import stream_views
from . import single_view
from . import comment_view


search_patterns = [
    url(r'^post/', stream_views.search_post),
]

comment_patterns = [
    url(r'add/(\d+)', comment_view.add_comment)
]

urlpatterns = [
    url(r'^postsof/all', views.all_posts),
    url(r'^postsof/(\w+)', views.postof),
    url(r'^comrades/', views.comrades),
    url(r'^deletepost/(\d+)', views.deletepost),
    url(r'^newpost/', views.new_post),
    url(r'^profile/', views.profile),
    url(r'^search/', include(search_patterns)),
    url(r'^single/(\d+)', single_view.post),
    url(r'^comment/', include(comment_patterns)),
]
