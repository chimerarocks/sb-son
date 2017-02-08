<?php

namespace Blog\Form\Factory;

use Blog\Form\PostForm;
use Interop\Container\ContainerInterface;

class PostFormFactory
{
	public function __invoke(ContainerInterface $container)
	{
		return new PostForm();
	}
}