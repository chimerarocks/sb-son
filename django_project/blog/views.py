# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.http import HttpResponse
from django.shortcuts import render

def home(request):

	name = 'João'

	context = {
		'name': name,
		'languages': ['php', 'js', 'ruby', 'python']
	}

	return render(request, 'blog/home.html', context)
