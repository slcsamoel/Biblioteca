<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Emprestimo;
use App\Models\UsuarioBiblioteca;
use App\Models\Livro;

class DashboardController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request)
    {

        $emprestimos = Emprestimo::all()->count();
        $usuarios = UsuarioBiblioteca::all()->count();
        $livros = Livro::all()->count();

        return inertia('Dashboard', [
            'emprestimos' => $emprestimos,
            'usuarios' => $usuarios,
            'livros' => $livros
        ]);
    }
}
