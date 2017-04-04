<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$app->get('/', function () use ($app) {
    return $app->version();
});

$app->get('/hello/{name}', [
	'as' 	=> 'hello',
	'uses' 	=> 'HelloController@index'
]);

$app->group(['prefix' => 'api'], function() use ($app) {
	$app->get('/users', 'Api\UsersController@index');
	$app->get('/users/{id}', 'Api\UsersController@show');
	$app->post('/users', 'Api\UsersController@create');
	$app->put('/users/{id}', 'Api\UsersController@update');
	$app->delete('/users/{id}', 'Api\UsersController@destroy');
});