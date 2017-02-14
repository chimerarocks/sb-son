<?php

namespace Blog;

use Zend\ServiceManager\Factory\InvokableFactory;

return [
	'controllers' => [
		'factories' => [
			// \Blog\Controller\BlogController::class => InvokableFactory::class
		]
	],
	'router' => [
		'routes' => [
			'admin-blog' => [
				'type' => 'literal',
				'options' => [
					'route' => '/admin'
				],
				'may_terminate' => false,
				'child_routes' => [
					'blog' => [
						'type' => 'segment',
						'options' => [
							//é possivel ter um wildcard pra controller, é melhor criando um alias
							'route' => '/blog[/:action[/:id]]',
							'constraints' => [
								'actions' => '[a-zA-Z][a-zA-Z0-9_-]*',
								'id' 	  => '[0-9]+'
							],
							'defaults' => [
								'controller' => \Blog\Controller\BlogController::class,
								'action' => 'index'
							]
						]
					]
				]
			],
            'site-post' => [
                'type' => 'segment',
                'options' => [
                    'route' => '/post[/:action[/:id]]',
                    'constraints' => [
                        'action' => '[a-zA-Z][a-zA-Z0-9_-]*',
                        'id' => '[0-9]+',
                    ],
                    'defaults' => [
                        'controller' => Controller\PostController::class,
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