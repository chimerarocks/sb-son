<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\User;

class UsersController extends Controller
{
    public function index() 
    {
        $users = User::paginate();
        return $users;
    }

    public function show($id) 
    {
        $user = User::findOrFail($id);
        return $user;
    }
}