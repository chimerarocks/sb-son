<?php

namespace CHROCKS\Repositories;

use Prettus\Repository\Contracts\RepositoryInterface;

/**
 * Interface BillPayRepository
 * @package namespace CHROCKS\Repositories;
 */
interface BillPayRepository extends RepositoryInterface, RepositoryMultitenancyInterface
{
    public function calculateTotal();
}
