<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Resources\LivroResource;
use App\Models\Livro;

class LivroController extends Controller
{
    public function index()
    {
        $livros = LivroResource::collection(Livro::latest()->paginate(10));
        return inertia('Livros/index', [
            'livros' =>  $livros
        ]);
    }

    public function store(Request $request)
    {
        $this->validate($request, [
            'nome' => 'required',
            'autor' => 'required',
            'genero' => 'required',
            'situacao' => 'required',
        ]);
        $livro = new Livro();
        $livro->nome = $request->nome;
        $livro->autor = $request->autor;
        $livro->genero = $request->genero;
        $livro->situacao = $request->situacao;
        try {

            $livro->save();
            return back()->with([
                'type' => 'success',
                'message' => 'o livro foi criado',
            ]);
        } catch (\Exception $e) {
            return back()->with([
                'type' => 'error',
                'message' => 'Ocorreu um erro ao criar o livro.',
            ]);
        }
    }
    public function update(Request $request, $livro)
    {
        $this->validate($request, [
            'nome' => 'required',
            'autor' => 'required',
            'genero' => 'required',
            'situacao' => 'required',
        ]);

        $livro = Livro::find($livro);
        $livro->nome = $request->nome;
        $livro->autor = $request->autor;
        $livro->genero = $request->genero;
        $livro->situacao = $request->situacao;
        try {
            $livro->save();
            return back()->with([
                'type' => 'success',
                'message' => 'o livro foi atualizado',
            ]);
        } catch (\Exception $e) {
            return back()->with([
                'type' => 'error',
                'message' => 'Ocorreu um erro ao atualizar o livro.',
            ]);
        }
    }

    public function destroy($livro)
    {
        try {
            $livro = Livro::find($livro);
            $livro->delete();
            return back()->with([
                'type' => 'success',
                'message' => 'o livro foi deletado',
            ]);
        } catch (\Exception $e) {
            return back()->with([
                'type' => 'error',
                'message' => 'Ocorreu um erro ao deletar o livro.',
            ]);
        }
    }
}
