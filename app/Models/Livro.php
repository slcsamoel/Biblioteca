<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Livro extends Model
{
    use HasFactory, SoftDeletes;
    protected $table = 'livros';
    protected $primaryKey = 'numero_registro';
    protected $fillable = [
        'nome',
        'autor',
        'genero',
        'situacao',
    ];
}
