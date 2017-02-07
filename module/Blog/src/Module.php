<?php

namespace Blog;

use Blog\Controller\BlogController;
use Blog\Model;
use Blog\Model\Factory\PostTableFactory;
use Zend\ModuleManager\Feature\ConfigProviderInterface;
use Zend\ModuleManager\Feature\ControllerProviderInterface;
use Zend\ModuleManager\Feature\ServiceProviderInterface;

class Module implements ConfigProviderInterface, ServiceProviderInterface, ControllerProviderInterface
{
	public function getConfig()
	{
		return include __DIR__ . '/../config/module.config.php';
	}

	public function getServiceConfig()
	{	return [
			'factories' => [
				Model\PostTable::class => PostTableFactory::class,
				Model\PostTableGateway::class => Model\Factory\PostTableGatewayFactory::class
			]
		];
	}

	public function getControllerConfig()
	{
		return [
			'factories' => [
				BlogController::class => BlogControllerFactory::class
			]
		];
	}
}