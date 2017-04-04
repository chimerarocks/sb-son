<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Request;

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

    public function store(Request $request) 
    {
        $user = User::create($request->all());
        return $user;
    }
}