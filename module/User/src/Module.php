<?php

namespace User;

use User\Controller\AuthController;
use Zend\ModuleManager\Feature\ConfigProviderInterface;
use Zend\ModuleManager\Feature\ControllerProviderInterface;
use Zend\ModuleManager\Feature\ServiceProviderInterface;
use Zend\ServiceManager\Factory\InvokableFactory;

class Module implements ConfigProviderInterface, ServiceProviderInterface, ControllerProviderInterface
{
	public function getConfig()
	{
		return include __DIR__ . '/../config/module.config.php';
	}

	public function getServiceConfig()
	{	return [
			'factories' => [

			]
		];
	}

	public function getControllerConfig()
	{
		return [
			'factories' => [
				AuthController::class => InvokableFactory::class
			]
		];
	}
}