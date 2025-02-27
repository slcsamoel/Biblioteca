<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class UsuarioBiblioteca extends Model
{
    use HasFactory, SoftDeletes;
    protected $table = 'usuarios_biblioteca';
    protected $primaryKey = 'numero_cadastro';
    protected $fillable = [
        'nome',
        'email',
        'telefone',
        'endereco',
    ];
}
