<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('emprestimos', function (Blueprint $table) {
            $table->id('numero_emprestimo');
            $table->unsignedBigInteger('numero_usuario');
            $table->unsignedBigInteger('numero_livro');
            $table->date('data_emprestimo');
            $table->date('data_devolucao');
            $table->tinyInteger('situacao');
            $table->softDeletes();
            $table->timestamps();

            $table->foreign('numero_usuario')->references('numero_cadastro')->on('usuarios_biblioteca');
            $table->foreign('numero_livro')->references('numero_registro')->on('livros');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('emprestimo');
    }
};
