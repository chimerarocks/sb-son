<?php

namespace Blog;

use Zend\ServiceManager\Factory\InvokableFactory;

return [
	'controllers' => [
		'factories' => [
			\Blog\Controller\BlogController::class => InvokableFactory::class
		]
	],
	'router' => [
		'routes' => [
			'blog' => [
				'type' => 'literal',
				'options' => [
					'route' => '/blog',
					'defaults' => [
						'controller' => \Blog\Controller\BlogController::class,
						'action' => 'index'
					]
				]
			]
		]
	],
	'view_manager' => [
		'template_path_stack' => [
			'blog' => __DIR__ . '/../view'
		]
	]
];