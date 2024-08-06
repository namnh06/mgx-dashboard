<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $password = env('USER_SEEDER_PASSWORD');

        $users = [
            ['name' => 'Cole Thompson', 'email' => 'cole@mygrainexchange.com', 'password' => Hash::make($password)],
            ['name' => 'Connor Moody', 'email' => 'connor@mygrainexchange.com', 'password' => Hash::make($password)],
            ['name' => 'Luke Derkson', 'email' => 'luke@mygrainexchange.com', 'password' => Hash::make($password)],
        ];

        DB::table('users')->insert($users);
    }
}
