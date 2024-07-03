<?php

namespace Database\Seeders;

use App\Models\Interest;
use Illuminate\Database\Seeder;

class InterestsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Interest::create(['name' => 'Reading']);
        Interest::create(['name' => 'Cooking']);
        Interest::create(['name' => 'Watching TV']);
        Interest::create(['name' => 'Basketball']);
    }
}
