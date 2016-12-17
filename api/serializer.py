import json
from .models import Post


def posts_json(posts):
    output = []
    for i in posts:
        output.append({
            'pk': i.pk,
            'body': i.body,
            'date': i.date.strftime("%Y-%m-%d %H:%M:%S"),
            'author': {
                'username': i.author.username,
                'email': i.author.email,
                'first': i.author.first_name,
                'last': i.author.last_name,
            }
        })

    return json.dumps(output)


def profile_json(user):
    output = {
        'username': user.username,
        'email': user.email,
        'first': user.first_name,
        'last': user.last_name,
    }
    return json.dumps(output)


def one_post_json(i):
    output = {
        'pk': i.pk,
        'body': i.body,
        'date': i.date.strftime("%Y-%m-%d %H:%M:%S"),
        'author': {
            'username': i.author.username,
            'email': i.author.email,
            'first': i.author.first_name,
            'last': i.author.last_name,
        }
    }
    return json.dumps(output)


def comrades(array):
    output = []
    for user in array:
        output.append({
            'username': user.username,
            'email': user.email,
            'first': user.first_name,
            'last': user.last_name,
        })
    return json.dumps(output)


def search_post(query):
    output = []
    for i in query:
        output.append({
            'pk': i.pk,
            'body': i.body[:25],
        })
    return json.dumps(output)


def single_post(post, likes, comments):
    output = {
        'pk': post.pk,
        'body': post.body,
        'date': post.date.strftime("%Y-%m-%d %H:%M:%S"),
        'author': {
            'username': post.author.username,
            'email': post.author.email,
            'first': post.author.first_name,
            'last': post.author.last_name,
        },
        'comments': [],
        'likes': likes,
    }

    for i in comments:
        output['comments'].append({
            'body': i.body,
            'date': i.date.strftime("%Y-%m-%d %H:%M:%S"),
            'author': {
                'username': i.author.username,
                'email': i.author.email,
                'first': i.author.first_name,
                'last': i.author.last_name,
            },
        })

    return json.dumps(output)


def comment_serialize(comment):
    output = {
        'body': comment.body,
        'date': comment.date.strftime("%Y-%m-%d %H:%M:%S"),
        'author': {
            'username': comment.author.username,
            'email': comment.author.email,
            'first': comment.author.first_name,
            'last': comment.author.last_name,
        }
    }
    return json.dumps(output)
