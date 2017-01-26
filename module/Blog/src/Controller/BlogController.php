<?php

namespace Blog\Controller;

use Zend\Mvc\Controller\AbstractActionController;
use Zend\View\Model\ViewModel;

class BlogController extends AbstractActionController
{
	public function indexAction()
	{
		$posts = [
			['title' => 'Post 1', 'content' => 'Content 1'],
			['title' => 'Post 2', 'content' => 'Content 2'],
			['title' => 'Post 3', 'content' => 'Content 3'],
			['title' => 'Post 4', 'content' => 'Content 4']
		];
		return new ViewModel([
			'posts' => $posts
		]);
	}
}