from django.db import models
from django.contrib.auth.models import User


class Post(models.Model):
    body = models.TextField()
    date = models.DateTimeField(auto_now_add=True, blank=True)
    author = models.ForeignKey(User)

    def __str__(self):
        # self.date.strftime("%Y-%m-%d %H:%M:%S")
        if len(self.body) < 10:
            return self.body
        else:
            return self.body[:10]


class Comment(models.Model):
    body = models.TextField()
    date = models.DateTimeField(auto_now_add=True, blank=True)
    author = models.ForeignKey(User)
    post = models.ForeignKey(Post)

    def __str__(self):
        if len(self.body) < 10:
            return self.body
        else:
            return self.body[:10]


class Like(models.Model):
    post = models.ForeignKey(Post)
    author = models.ForeignKey(User)

    def __str__(self):
        return self.author.username
