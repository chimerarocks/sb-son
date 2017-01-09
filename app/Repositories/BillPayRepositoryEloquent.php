<?php

namespace CHROCKS\Repositories;

use CHROCKS\Models\Category;
use CHROCKS\Presenters\BillPayPresenter;
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

    public function applyMultitenancy()
    {
        BillPay::clearBootedModels();
    }

    public function presenter()
    {
        return BillPayPresenter::class;
    }

    public function calculateTotal()
    {
        $result = [
            'count' => 0,
            'count_paid' => 0,
            'total_to_be_paid' => 0
        ];
        $billPays = $this->skipPresenter()->all();
        $result['count'] = $billPays->count();
        foreach($billPays->toArray() as $billPay) {
            $done = (bool) $billPay['done'];
            if ($done) {
                $result['count_paid']++;
            } else {
                $value = (float) $billPay->value;
                $result['total_to_be_paid'] += $value;
            }
        }
        return $result;
    }
}
