<?php

use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\UsuarioBibliotecaController;
use App\Http\Controllers\LivroController;
use App\Http\Controllers\EmprestimoController;
use Illuminate\Support\Facades\Route;


Route::middleware('auth')->group(function () {
    Route::get('/', DashboardController::class)->name('dashboard');
    Route::post('logout', [LoginController::class, 'destroy'])->name('logout');
    Route::apiResource('usuariosBiblioteca', UsuarioBibliotecaController::class);
    Route::apiResource('livros', LivroController::class);
    Route::apiResource('emprestimos', EmprestimoController::class);
    Route::post('emprestimos/devolver/{emprestimo}', [EmprestimoController::class, 'devolver'])->name('emprestimos.devolver');
});

Route::middleware('guest')->group(function () {
    Route::get('login', [LoginController::class, 'create'])->name('login');
    Route::post('login', [LoginController::class, 'store']);
});
