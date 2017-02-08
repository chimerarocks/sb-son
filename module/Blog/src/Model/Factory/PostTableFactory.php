<?php

namespace Blog\Model\Factory;

use Blog\Model\PostTable;
use Interop\Container\ContainerInterface;
use Zend\ServiceManager\Factory\FactoryInterface;

class PostTableFactory implements FactoryInterface
{
	public function __invoke(ContainerInterface $container, $requestedName, array $option = null)
	{
		$tableGateway = $container->get(\Blog\Model\PostTableGateway::class);
		return new PostTable($tableGateway);
	}
}