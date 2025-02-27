import { useForm } from "@inertiajs/inertia-react";
import React from "react";

export default function CreateLivro({ close }) {
    const { data, setData, post, reset, errors } = useForm({
        nome: "",
        autor: "",
        genero: "",
        situacao: 0,
    });
    const onChange = (e) => setData({ ...data, [e.target.id]: e.target.value });
    const onSubmit = (e) => {
        e.preventDefault();
        post(route("livros.store"), {
            data,
            onSuccess: () => {
                reset(), close();
            },
        });
    };

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
                        <label htmlFor="autor" className="col-form-label">
                            Autor:
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            name="autor"
                            value={data.autor}
                            onChange={onChange}
                            id="autor"
                        />
                        {errors && (
                            <div className="text-danger mt-1">
                                {errors.autor}
                            </div>
                        )}
                    </div>
                    <div className="form-group">
                        <label htmlFor="genero" className="col-form-label">
                            Gênero:
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            name="genero"
                            value={data.genero}
                            onChange={onChange}
                            id="genero"
                        />
                        {errors && (
                            <div className="text-danger mt-1">
                                {errors.genero}
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
