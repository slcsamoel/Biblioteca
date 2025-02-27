import { useForm } from "@inertiajs/inertia-react";
import React, { useState, useEffect } from "react";

export default function EditEmprestimo({
    close,
    emprestimo,
    livros,
    usuarios,
}) {
    const { data, setData, put, processing, errors } = useForm({
        numero_usuario: emprestimo.numero_usuario,
        numero_livro: emprestimo.numero_livro,
        data_devolucao: emprestimo.data_devolucao,
        situacao: emprestimo.situacao,
    });

    const onChange = (e) => setData({ ...data, [e.target.id]: e.target.value });

    const onSubmit = (e) => {
        e.preventDefault();
        put(`emprestimos/${emprestimo.numero_emprestimo}`, {
            data,
            onSuccess: () => {
                reset(), close();
            },
        });
    };

    useEffect(() => {
        setData({
            numero_usuario: emprestimo.numero_usuario,
            numero_livro: emprestimo.numero_livro,
            data_devolucao: emprestimo.data_devolucao,
            situacao: emprestimo.situacao,
        });
    }, [emprestimo]);

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
                            disabled
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
                            disabled
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
                            disabled={data.situacao == 0 ? true : false}
                        />
                        {errors && (
                            <div className="text-danger mt-1">
                                {errors.data_devolucao}
                            </div>
                        )}
                    </div>
                    <div className="form-group">
                        <label htmlFor="situacao" className="col-form-label">
                            Situação:
                        </label>
                        <select
                            className="form-control"
                            name="situacao"
                            value={data.situacao}
                            onChange={onChange}
                            id="situacao"
                            disabled={data.situacao == 0 ? true : false}
                        >
                            <option value="0">Finalizado</option>
                            <option value="1">Emprestado</option>
                            <option value="2">Atrasado</option>
                        </select>
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
