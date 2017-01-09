<?php

namespace CHROCKS\Http\Controllers\Api;

use CHROCKS\Http\Requests\UserRequest;
use CHROCKS\Http\Controllers\Controller;
use CHROCKS\Repositories\UserRepository;

class UsersController extends Controller
{
    /**
     * @var UserRepository
     */
    private $repository;

    public function __construct(UserRepository $repository)
    {
        $this->repository = $repository;
    }

    public function store(UserRequest $request)
    {
        $user = $this->repository->create($request->all());
        return response()->json($user, 201);
    }
}
