<?php

namespace Blog\Controller\Factory;

use Blog\Controller\BlogController;
use Blog\Model\PostTable;
use Interop\Container\ContainerInterface;
use Zend\ServiceManager\Factory\FactoryInterface;

class BlogControllerFactory implements FactoryInterface
{
	public function __invoke(ContainerInterface $container,	$requestedName, array $options = null)
	{
		return new BlogController(
			$container->get(PostTable::class)
		);
	}
}