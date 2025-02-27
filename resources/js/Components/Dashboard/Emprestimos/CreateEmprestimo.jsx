import { useForm } from "@inertiajs/inertia-react";
import React, { useState, useEffect } from "react";

export default function CreateEmprestimo({ close, livros, usuarios }) {
    const { data, setData, post, processing, errors } = useForm({
        numero_usuario: "",
        numero_livro: "",
        data_devolucao: "",
    });

    const onChange = (e) => setData({ ...data, [e.target.id]: e.target.value });
    const onSubmit = (e) => {
        e.preventDefault();
        post(route("emprestimos.store"));
        close();
    };

    return (
        <>
            <form onSubmit={onSubmit}>
                <div className="modal-body">
                    <div className="form-group">
                        <label
                            htmlFor="numero_usuario"
                            className="col-form-label"
                        >
                            Usuario:
                        </label>
                        <select
                            className="form-control"
                            name="numero_usuario"
                            value={data.numero_usuario}
                            onChange={onChange}
                            id="numero_usuario"
                        >
                            <option value="">Selecione o Usuario</option>
                            {usuarios.map((usuario) => (
                                <option
                                    key={usuario.numero_cadastro}
                                    value={usuario.numero_cadastro}
                                >
                                    {usuario.nome}
                                </option>
                            ))}
                        </select>
                        {errors && (
                            <div className="text-danger mt-1">
                                {errors.numero_usuario}
                            </div>
                        )}
                    </div>

                    <div className="form-group">
                        <label
                            htmlFor="numero_livro"
                            className="col-form-label"
                        >
                            Livros:
                        </label>
                        <select
                            className="form-control"
                            name="numero_livro"
                            value={data.numero_livro}
                            onChange={onChange}
                            id="numero_livro"
                        >
                            <option value="">Selecione o Livro</option>
                            {livros.map((livro) => (
                                <option
                                    key={livro.numero_registro}
                                    value={livro.numero_registro}
                                >
                                    {livro.nome}
                                </option>
                            ))}
                        </select>
                        {errors && (
                            <div className="text-danger mt-1">
                                {errors.numero_livro}
                            </div>
                        )}
                    </div>

                    <div className="form-group">
                        <label
                            htmlFor="data_devolucao"
                            className="col-form-label"
                        >
                            Data Devolução:
                        </label>
                        <input
                            type="date"
                            className="form-control"
                            name="data_devolucao"
                            value={data.data_devolucao}
                            onChange={onChange}
                            id="data_devolucao"
                        />
                        {errors && (
                            <div className="text-danger mt-1">
                                {errors.data_devolucao}
                            </div>
                        )}
                    </div>
                </div>
                <div className="modal-footer">
                    <button
                        type="button"
                        className="btn bg-gradient-secondary"
                        data-bs-dismiss="modal"
                    >
                        Fechar
                    </button>
                    <button type="submit" className="btn bg-gradient-primary">
                        Salvar
                    </button>
                </div>
            </form>
        </>
    );
}
