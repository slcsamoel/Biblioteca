<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Emprestimo extends Model
{
    use HasFactory, SoftDeletes;
    protected $table = 'emprestimos';
    protected $primaryKey = 'numero_emprestimo';
    protected $fillable = [
        'numero_usuario',
        'numero_livro',
        'data_emprestimo',
        'data_devolucao',
        'situacao',
    ];

    public function usuario()
    {
        return $this->belongsTo(UsuarioBiblioteca::class, 'numero_usuario', 'numero_cadastro');
    }
    public function livro()
    {
        return $this->belongsTo(Livro::class, 'numero_livro', 'numero_registro');
    }
}
