<?php
/**
 * @link      http://github.com/zendframework/ZendSkeletonApplication for the canonical source repository
 * @copyright Copyright (c) 2005-2016 Zend Technologies USA Inc. (http://www.zend.com)
 * @license   http://framework.zend.com/license/new-bsd New BSD License
 */

namespace Blog;

use Zend\Router\Http\Literal;
use Zend\Router\Http\Segment;
use Zend\ServiceManager\Factory\InvokableFactory;

return [
    'router' => [
        'routes' => [
            'home' => [
                'type' => Literal::class,
                'options' => [
                    'route'    => '/blog',
                    'defaults' => [
                        'controller' => Controller\BlogController::class,
                        'action'     => 'index',
                    ],
                ],
            ],
        ],
    ],
    'controllers' => [
        'factories' => [
            Controller\BlogController::class => Controller\BlogControllerFactory::class,
        ],
    ],
    'view_manager' => [
        'template_path_stack' => [
            __DIR__ . '/../view',
        ],
        'template_map' => [
            'layout/layout'           => __DIR__ . '/../../Application/view/layout/layout.phtml',
            'error/404'               => __DIR__ . '/../../Application/view/error/404.phtml',
            'error/index'             => __DIR__ . '/../../Application/view/error/index.phtml',
        ],
    ],
    'service_manager' => [
        'services' => [
            'categories' => [
                'PHP',
                'Zend',
                'Symfony',
                'Laravel'
            ]
        ],
        'invokables' => [
            \Blog\Categories::class => \Blog\Categories::class
        ]
    ]
];
