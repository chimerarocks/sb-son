<?php

namespace Blog\Controller\Factory;

use Blog\Controller\BlogController;
use Blog\Form\PostForm;
use Blog\InputFilter\PostInputFilter;
use Blog\Model\PostTable;
use Interop\Container\ContainerInterface;
use Zend\ServiceManager\Factory\FactoryInterface;

class BlogControllerFactory implements FactoryInterface
{
	public function __invoke(ContainerInterface $container,	$requestedName, array $options = null)
	{
		$postTable = $container->get(PostTable::class);
		$postForm  = $container->get(PostForm::class);
		$postForm->setInputFilter(new PostInputFilter);
		return new BlogController(
			$postTable,
			$postForm
		);
	}
}