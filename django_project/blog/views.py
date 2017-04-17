# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.http import HttpResponse
from django.shortcuts import render

from blog.models import Category

def home(request):

	name = 'João'

	context = {
		'name': name,
		'languages': ['php', 'js', 'ruby', 'python'],
		'categories': Category.objects.all()
	}

	# Category.objects.create(name="Phyton")

	return render(request, 'blog/home.html', context)
