# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.http import HttpResponse
from django.shortcuts import render

from blog.models import Category, Post

def home(request):

	name = 'João'

	# category_python = Category.objects.get(pk=6)

	# post = Post()
	# post.name = 'My first very Post'
	# post.content = 'Content of my first Post'
	# post.status = 'Draft'
	# post.category = category_python
	# post.save()

	posts = Post.objects.filter(status='Published')

	context = {
		'name': name,
		'languages': ['php', 'js', 'ruby', 'python'],
		'categories': Category.objects.all(),
		'posts': posts
	}

	#Category.objects.create(name="JS")


	return render(request, 'blog/home.html', context)
