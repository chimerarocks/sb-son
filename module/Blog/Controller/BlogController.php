<?php

namespace Blog\Controller;

use Zend\Mvc\Controller\AbstractActionController;

class BlogController extends AbstractActionController
{
	public function indexAction()
	{
		return new ViewModel();
	}
}