<?php

namespace User;

use Zend\ServiceManager\Factory\InvokableFactory;

return [
	'controllers' => [
		'factories' => [
			// \User\Controller\UserController::class => InvokableFactory::class
		]
	],
	'router' => [
		'routes' => [
			'user' => [
				'type' => 'segment',
				'options' => [
					//é possivel ter um wildcard pra controller, é melhor criando um alias
					'route' => '/user[/:action[/:id]]',
					'constraints' => [
						'actions' => '[a-zA-Z][a-zA-Z0-9_-]*',
						'id' 	  => '[0-9]+'
					],
					'defaults' => [
						'controller' => \User\Controller\UserController::class,
						'action' => 'index'
					]
				]
			]

		]
	],
	'view_manager' => [
		'template_path_stack' => [
			'user' => __DIR__ . '/../view'
		]
	]
];