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
        Schema::create('usuarios_biblioteca', function (Blueprint $table) {
            $table->id('numero_cadastro');
            $table->string('nome');
            $table->string('email')->unique();
            $table->string('endereco')->nullable();
            $table->string('telefone')->nullable();
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('usuarios_biblioteca');
    }
};
