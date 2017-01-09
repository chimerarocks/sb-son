<?php

namespace CHROCKS\Repositories;

use Prettus\Repository\Eloquent\BaseRepository;
use Prettus\Repository\Criteria\RequestCriteria;
use CHROCKS\Repositories\BillPayRepository;
use CHROCKS\Models\BillPay;
use CHROCKS\Validators\BillPayValidator;

/**
 * Class BillPayRepositoryEloquent
 * @package namespace CHROCKS\Repositories;
 */
class BillPayRepositoryEloquent extends BaseRepository implements BillPayRepository
{
    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return BillPay::class;
    }

    

    /**
     * Boot up the repository, pushing criteria
     */
    public function boot()
    {
        $this->pushCriteria(app(RequestCriteria::class));
    }
}
