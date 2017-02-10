<?php

namespace User;

use Zend\ServiceManager\Factory\InvokableFactory;

return [
	'router' => [
		'routes' => [
			'login' => [
				'type' => 'literal',
				'options' => [
					'route' => '/auth/login',
					'constraints' => [
						'actions' => '[a-zA-Z][a-zA-Z0-9_-]*',
						'id' 	  => '[0-9]+'
					],
					'defaults' => [
						'controller' => \User\Controller\AuthController::class,
						'action' => 'login'
					]
				]
			],
			'logout' => [
				'type' => 'literal',
				'options' => [
					'route' => '/auth/logout',
					'constraints' => [
						'actions' => '[a-zA-Z][a-zA-Z0-9_-]*',
						'id' 	  => '[0-9]+'
					],
					'defaults' => [
						'controller' => \User\Controller\AuthController::class,
						'action' => 'logout'
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