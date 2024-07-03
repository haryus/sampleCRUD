<?php

namespace Database\Seeders;

use App\Models\ClientInterest;
use Illuminate\Database\Seeder;

class ClientInterestsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        ClientInterest::updateOrCreate([
            'user_id' => '1',
            'interest_id' => '1'
        ]);
    }
}
