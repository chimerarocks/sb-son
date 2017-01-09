<?php

namespace CHROCKS\Transformers;

use League\Fractal\TransformerAbstract;
use CHROCKS\Models\BillPay;

/**
 * Class BillPayTransformer
 * @package namespace CHROCKS\Transformers;
 */
class BillPayTransformer extends TransformerAbstract
{

    /**
     * Transform the \BillPay entity
     * @param \BillPay $model
     *
     * @return array
     */
    public function transform(BillPay $model)
    {
        return [
            'id'         => (int) $model->id,
            'name'       => $model->name,
            'date_due'   => $model->date_due,
            'value'      => (float) $model->value,
            'done'       => (bool) $model->done,
            /* place your other model properties here */

            'created_at' => $model->created_at,
            'updated_at' => $model->updated_at
        ];
    }
}
