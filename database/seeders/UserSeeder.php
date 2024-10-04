<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Faker\Factory as Faker;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeders.
     */
    public function run(): void
    {
        for($i = 1; $i <=5; $i++) :
            $faker = Faker::create();
            // DB::table('users')->insert([
            //     'name' => Str::random(10),
            //     'email' => Str::random(10).'@example.com',
            //     'password' => Hash::make('password'),
            // ]);
            DB::table('users')->insert([
                'name' => $faker->name,
                'email' => $faker->email,
                'password' => Hash::make('rahasia'),
            ]);
        endfor;
    }
}
