<?php

namespace CHROCKS\Http\Controllers\API;

use CHROCKS\Http\Controllers\Controller;
use CHROCKS\Repositories\BillPayRepository;


class BillPaysController extends Controller
{

    /**
     * @var BillPayRepository
     */
    protected $repository;

    public function __construct(BillPayRepository $repository)
    {
        $this->repository = $repository;
    }


    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return $this->repository->all();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  BillPayRequest $request
     *
     * @return \Illuminate\Http\Response
     */
    public function store(BillPayRequest $request)
    {
        $billPay = $this->repository->create($request->except('done'));
        return response()->json($billPay, 201);
    }


    /**
     * Display the specified resource.
     *
     * @param  int $id
     *
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $billPay = $this->repository->find($id);
        return $billPay;
    }


    /**
     * Update the specified resource in storage.
     *
     * @param  BillPayRequest $request
     * @param  string            $id
     *
     * @return Response
     */
    public function update(BillPayRequest $request, $id)
    {
        $billPay = $this->repository->update($request->all(), $id);
        return response()->json($billPay, 200);
    }


    /**
     * Remove the specified resource from storage.
     *
     * @param  int $id
     *
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $deleted = $this->repository->delete($id);

        if ($deleted) {
            return response()->json([], 204);
        } else {
            return response()->json([
                'error' => 'Resource cannot to be deleted'
            ],500);
        }
    }
}
