<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;

class WelcomeController extends Controller
{
    public function index() 
    {
        $name = 'João';
        return view('welcome', ['name' => $name]);
    }
}