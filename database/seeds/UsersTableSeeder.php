<?php

use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(\CHROCKS\Models\User::class)->create([
            'email' => 'admin@user.com',
        ]);
        factory(\CHROCKS\Models\User::class, 20)->create();
    }
}
