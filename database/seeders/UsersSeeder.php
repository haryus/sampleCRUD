<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UsersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $super_admin = User::updateOrCreate([
            'email' => 'harrypilongo@gmail.com',
            'password' => 'password',
            'first_name' => 'Haarhius',
            'last_name' => 'Pilongo',
            'contact_no' => '090909',
            'birthday' => '2024-07-01',
            'role_id' => '1',
            'created_by' => '1',
            'updated_by' => '1',
        ], [
            'password' => Hash::make('password'),
        ]);
    }
}
