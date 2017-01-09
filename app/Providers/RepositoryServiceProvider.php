<?php

namespace CHROCKS\Providers;

use Illuminate\Support\ServiceProvider;

class RepositoryServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap the application services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }

    /**
     * Register the application services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->bind(\CHROCKS\Repositories\CategoryRepository::class, \CHROCKS\Repositories\CategoryRepositoryEloquent::class);
        $this->app->bind(\CHROCKS\Repositories\BillPayRepository::class, \CHROCKS\Repositories\BillPayRepositoryEloquent::class);
        //:end-bindings:
    }
}
