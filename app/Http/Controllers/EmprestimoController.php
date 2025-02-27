<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Resources\EmprestimoResource;
use App\Models\Emprestimo;
use App\Models\UsuarioBiblioteca;
use App\Models\Livro;

class EmprestimoController extends Controller
{
    public function index()
    {
        $emprestimos = EmprestimoResource::collection(Emprestimo::with(['usuario', 'livro'])->paginate(10));
        $livros = Livro::all();
        $usuarios = UsuarioBiblioteca::all();
        return inertia('Emprestimos/index', [
            'emprestimos' =>  $emprestimos,
            'livros' => $livros,
            'usuarios' => $usuarios,
        ]);
    }

    public function store(Request $request)
    {
        $this->validate($request, [
            'numero_usuario' => 'required',
            'numero_livro' => 'required',
            'data_devolucao' => 'required',
        ]);


        if ($request->data_devolucao < now()) {
            return back()->with([
                'type' => 'error',
                'message' => 'A data de devolução não pode ser menor que a data atual.',
            ]);
        }

        $livro = Livro::find($request->numero_livro);
        if ($livro->situacao == 1) {
            return back()->with([
                'type' => 'error',
                'message' => 'O livro está emprestado.',
            ]);
        }

        $emprestimo = new Emprestimo();
        $emprestimo->numero_usuario = $request->numero_usuario;
        $emprestimo->numero_livro = $request->numero_livro;
        $emprestimo->data_emprestimo = now();
        $emprestimo->data_devolucao = $request->data_devolucao;
        $emprestimo->situacao = 1; //situaacao 1 = emprestado

        try {
            $emprestimo->save();
            $livro->situacao = 1;
            $livro->save();
            return back()->with([
                'type' => 'success',
                'message' => 'O livro foi emprestado com sucesso.',
            ]);
        } catch (\Exception $e) {
            return back()->with([
                'type' => 'error',
                'message' => 'Ocorreu um erro ao emprestar o livro.',
            ]);
        }
    }

    public function update(Request $request, $emprestimo)
    {
        $this->validate($request, [
            'numero_usuario' => 'required',
            'numero_livro' => 'required',
            'data_devolucao' => 'required',
            'situacao' => 'required',
        ]);

        $emprestimo = Emprestimo::find($emprestimo);
        $emprestimo->numero_usuario = $request->numero_usuario;
        $emprestimo->numero_livro = $request->numero_livro;
        $emprestimo->data_devolucao = $request->data_devolucao;
        $emprestimo->situacao = $request->situacao;

        $livro = Livro::find($request->numero_livro);


        try {
            $emprestimo->save();
            if ($request->situacao == 0) {
                $livro->situacao = 0;
                $livro->save();
            }
            return back()->with([
                'type' => 'success',
                'message' => 'O emprestimo foi atualizado',
            ]);
        } catch (\Exception $e) {
            return back()->with([
                'type' => 'error',
                'message' => 'Ocorreu um erro ao atualizar o emprestimo.',
            ]);
        }
    }

    public function devolver($emprestimo)
    {
        try {
            $emprestimo = Emprestimo::find($emprestimo);
            $emprestimo->situacao = 0;
            $emprestimo->save();
            $livro = Livro::find($emprestimo->numero_livro);
            $livro->situacao = 0;
            $livro->save();
            return back()->with([
                'type' => 'success',
                'message' => 'O livro foi devolvido com sucesso.',
            ]);
        } catch (\Exception $e) {
            return back()->with([
                'type' => 'error',
                'message' => 'Ocorreu um erro ao devolver o livro.',
            ]);
        }
    }
}
