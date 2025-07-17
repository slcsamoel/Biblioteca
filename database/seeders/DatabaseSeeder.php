<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use DateTime; 

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'name' => 'Administrador',
            'email' => 'admin@sistema.com',
            'password' => Hash::make('12345678'),
            'created_at' => new DateTime(),
            'updated_at' => new DateTime(),
        ]);

        DB::table('usuarios_biblioteca')->insert([
            'nome' => 'Usuário 1',
            'email' => 'usuario1@sistema.com',
            'endereco' => 'Rua dos Bobos, 0',
            'telefone' => '123456789',
            'created_at' => new DateTime(),
            'updated_at' => new DateTime(),
        ]);

        DB::table('livros')->insert([
            'nome' => 'livro 1',
            'autor' => 'Autor 1',
            'genero' => 'Humor',
            'situacao' => 0,
            'created_at' => new DateTime(),
            'updated_at' => new DateTime(),
        ]);
    }
}
