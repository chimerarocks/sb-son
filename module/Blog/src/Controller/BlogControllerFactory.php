<?php

namespace Blog\Controller;

use Interop\Container\ContainerInterface;

class BlogControllerFactory
{
    public function __invoke(ContainerInterface $container)
    {
        return new BlogController($container->get(\Blog\Categories::class)->getCategories());
    }
}