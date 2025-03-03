import { useForm } from "@inertiajs/inertia-react";
import React, { useEffect } from "react";

export default function EditUsuarioBiblioteca({ close, usuario }) {
    const { data, setData, put, reset, errors } = useForm({
        nome: usuario.nome,
        email: usuario.email,
        telefone: usuario.telefone,
        endereco: usuario.endereco,
    });
    console.log(usuario);
    const onChange = (e) => setData({ ...data, [e.target.id]: e.target.value });
    const onSubmit = (e) => {
        e.preventDefault();
        put(`usuariosBiblioteca/${usuario.numero_cadastro}`, {
            data,
            onSuccess: () => {
                reset(), close();
            },
        });
    };

    useEffect(() => {
        setData({
            nome: usuario.nome,
            email: usuario.email,
            telefone: usuario.telefone,
            endereco: usuario.endereco,
            status: usuario.status,
        });
    }, [usuario]);

    return (
        <>
            <form onSubmit={onSubmit}>
                <div className="modal-body">
                    <div className="form-group">
                        <label htmlFor="nome" className="col-form-label">
                            Nome:
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            name="nome"
                            value={data.nome}
                            onChange={onChange}
                            id="nome"
                        />
                        {errors && (
                            <div className="text-danger mt-1">
                                {errors.nome}
                            </div>
                        )}
                    </div>
                    <div className="form-group">
                        <label htmlFor="email" className="col-form-label">
                            Email:
                        </label>
                        <input
                            type="email"
                            className="form-control"
                            name="email"
                            value={data.email}
                            onChange={onChange}
                            id="email"
                        />
                        {errors && (
                            <div className="text-danger mt-1">
                                {errors.email}
                            </div>
                        )}
                    </div>
                    <div className="form-group">
                        <label htmlFor="telefone" className="col-form-label">
                            Telefone:
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            name="telefone"
                            value={data.telefone}
                            onChange={onChange}
                            id="telefone"
                        />
                        {errors && (
                            <div className="text-danger mt-1">
                                {errors.telefone}
                            </div>
                        )}
                    </div>
                    <div className="form-group">
                        <label htmlFor="endereco" className="col-form-label">
                            Endereço:
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            name="endereco"
                            value={data.endereco}
                            onChange={onChange}
                            id="endereco"
                        />
                        {errors && (
                            <div className="text-danger mt-1">
                                {errors.endereco}
                            </div>
                        )}
                    </div>
                    <div className="modal-footer">
                        <button
                            type="button"
                            className="btn bg-gradient-secondary"
                            data-bs-dismiss="modal"
                        >
                            Fechar
                        </button>
                        <button
                            type="submit"
                            className="btn bg-gradient-primary"
                        >
                            Salvar
                        </button>
                    </div>
                </div>
            </form>
        </>
    );
}
