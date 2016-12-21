from django.conf.urls import url, include
from . import views
from . import stream_views
from . import single_view
from . import comment_view
from . import test_view


test_patterns = [
    url(r'^post/all', test_view.post_all),
]

edit_patterns = [
    url(r'^post/(\d+)', single_view.update_post),
]

search_patterns = [
    url(r'^post/', stream_views.search_post),
]

comment_patterns = [
    url(r'^add/(\d+)/', comment_view.add_comment),
    url(r'^get/(\d+)/', comment_view.get_comment),
    url(r'^update/(\d+)/', comment_view.update_comment),
    url(r'^delete/(\d+)/', comment_view.delete_comment),
]

urlpatterns = [
    url(r'^postsof/all', views.all_posts),
    url(r'^postsof/(\w+)/', views.postof),
    url(r'^comrades/', views.comrades),
    url(r'^deletepost/(\d+)/', views.deletepost),
    url(r'^newpost/', views.new_post),
    url(r'^profile/', views.profile),
    url(r'^search/', include(search_patterns)),
    url(r'^single/(\d+)/', single_view.post),
    url(r'^comment/', include(comment_patterns)),
    url(r'^test/', include(test_patterns)),
    url(r'^edit/', include(edit_patterns)),
]
