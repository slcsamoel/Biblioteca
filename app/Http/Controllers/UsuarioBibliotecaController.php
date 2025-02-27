<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Resources\UsuarioBibliotecaResource;
use App\Models\UsuarioBiblioteca;


class UsuarioBibliotecaController extends Controller
{

    public function index()
    {
        $usuariosBiblioteca = UsuarioBibliotecaResource::collection(UsuarioBiblioteca::latest()->paginate(10));
        return inertia('UsuariosBiblioteca/index', [
            'usuariosBiblioteca' =>  $usuariosBiblioteca
        ]);
    }

    public function store(Request $request)
    {
        $this->validate($request, [
            'nome' => 'required',
            'email' => 'required|email|unique:usuarios_biblioteca',
            'telefone' => 'required',
            'endereco' => 'required',
        ]);


        $usuarioBiblioteca = new UsuarioBiblioteca();
        $usuarioBiblioteca->nome = $request->nome;
        $usuarioBiblioteca->email = $request->email;
        $usuarioBiblioteca->telefone = $request->telefone;
        $usuarioBiblioteca->endereco = $request->endereco;

        try {
            $usuarioBiblioteca->save();

            return back()->with([
                'type' => 'success',
                'message' => 'o usuário foi criado',
            ]);
        } catch (\Exception $e) {
            return back()->with([
                'type' => 'error',
                'message' => 'Ocorreu um erro ao criar o usuário.',
            ]);
        }
    }

    public function update(Request $request, $usuarioBiblioteca)
    {
        $this->validate($request, [
            'nome' => 'required',
            'email' => 'required|email',
            'telefone' => 'required',
            'endereco' => 'required',
        ]);

        $usuarioBiblioteca = UsuarioBiblioteca::find($usuarioBiblioteca);
        $usuarioBiblioteca->nome = $request->nome;
        $usuarioBiblioteca->email = $request->email;
        $usuarioBiblioteca->telefone = $request->telefone;
        $usuarioBiblioteca->endereco = $request->endereco;

        try {
            $usuarioBiblioteca->save();

            return back()->with([
                'type' => 'success',
                'message' => 'o usuário foi atualizado',
            ]);
        } catch (\Exception $e) {
            return back()->with([
                'type' => 'error',
                'message' => 'Ocorreu um erro ao atualizar o usuário.',
            ]);
        }
    }

    public function destroy($usuarioBiblioteca)
    {
        try {
            $usuarioBiblioteca = UsuarioBiblioteca::find($usuarioBiblioteca);
            $usuarioBiblioteca->delete();
            return back()->with([
                'type' => 'success',
                'message' => 'o usuário foi excluído',
            ]);
        } catch (\Exception $e) {
            return back()->with([
                'type' => 'error',
                'message' => 'Ocorreu um erro ao excluir o usuário.',
            ]);
        }
    }
}
