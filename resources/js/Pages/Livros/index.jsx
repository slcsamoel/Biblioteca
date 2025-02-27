import { Link } from "@inertiajs/inertia-react";
import React, { useState } from "react";
import Dialog from "../../Components/Dashboard/Dialog";
import Base from "../../Layouts/Base";
import useDialog from "../../Hooks/useDialog";
import CreateLivro from "../../Components/Dashboard/Livros/CreateLivro";
import EditLivro from "../../Components/Dashboard/Livros/EditLivro";
import { Inertia } from "@inertiajs/inertia";

export default function Index(props) {
    const { data: livros, links, meta } = props.livros;
    const [state, setState] = useState([]);
    const [addDialogHandler, addCloseTrigger, addTrigger] = useDialog();
    const [updateDialogHandler, updateCloseTrigger, updateTrigger] =
        useDialog();
    const [destroyDialogHandler, destroyCloseTrigger, destroyTrigger] =
        useDialog();

    const openUpdateDialog = (livro) => {
        setState(livro);
        updateDialogHandler();
    };
    const openDestroyDialog = (livro) => {
        setState(livro);
        destroyDialogHandler();
    };
    const destroyBook = () => {
        Inertia.delete(`livros/${state.numero_registro}`, {
            onSuccess: () => destroyCloseTrigger(),
        });
    };
    return (
        <>
            <div className="container-fluid py-4">
                <Dialog trigger={addTrigger} title="Criar novo Livro">
                    <CreateLivro close={addCloseTrigger} />
                </Dialog>

                <Dialog
                    trigger={updateTrigger}
                    title={`Alterar Livro: ${state.nome}`}
                >
                    <EditLivro livro={state} close={updateCloseTrigger} />
                </Dialog>

                <Dialog
                    trigger={destroyTrigger}
                    title={`Deletar Livro: ${state.nome}`}
                >
                    <p>Deletar o Livro ?</p>
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
                            onClick={destroyBook}
                            className="btn bg-gradient-danger"
                        >
                            Deletar
                        </button>
                    </div>
                </Dialog>

                <div className="row pb-4">
                    <div className="col-12 w-100">
                        <div className="card h-100 w-100">
                            <div className="card-header pb-0">
                                <div className="row">
                                    <div className="col-md-6">
                                        <h6>Livros Da Biblioteca</h6>
                                    </div>
                                    <div className="col-md-6 d-flex justify-content-end">
                                        <button
                                            onClick={addDialogHandler}
                                            type="button"
                                            className="btn bg-gradient-success btn-block mb-3"
                                            data-bs-toggle="modal"
                                            data-bs-target="#exampleModalMessage"
                                        >
                                            Criar novo Livro
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body px-0 pt-0 pb-2">
                                <div
                                    className="table-responsive-xxl p-0"
                                    width="100%"
                                >
                                    <table
                                        className="table align-items-center justify-content-center mb-0"
                                        width="100%"
                                    >
                                        <thead>
                                            <tr>
                                                <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 text-centter">
                                                    #Num_Registro
                                                </th>
                                                <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2 text-left">
                                                    Nome
                                                </th>
                                                <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2 text-left">
                                                    Autor
                                                </th>
                                                <th className="text-uppercase text-secondary text-xxs font-weight-bolder text-left opacity-7 ps-2">
                                                    Genero
                                                </th>
                                                <th className="text-uppercase text-secondary text-xxs font-weight-bolder text-left opacity-7 ps-2">
                                                    Situação
                                                </th>
                                                <th className="text-uppercase text-secondary text-xxs font-weight-bolder text-center opacity-7 ps-2">
                                                    Actions
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {livros.map((livro, index) => (
                                                <tr key={livro.numero_registro}>
                                                    <td className="text-center">
                                                        {meta.from + index}
                                                    </td>
                                                    <td className="text-left">
                                                        <div className="d-flex px-2">
                                                            <div className="my-auto">
                                                                <h6 className="mb-0 text-sm">
                                                                    {livro.nome}
                                                                </h6>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="text-left">
                                                        <p className="text-sm font-weight-bold mb-0">
                                                            {livro.autor}
                                                        </p>
                                                    </td>
                                                    <td className="text-left">
                                                        <p className="text-sm font-weight-bold mb-0">
                                                            {livro.genero}
                                                        </p>
                                                    </td>
                                                    <td className="text-left">
                                                        <p className="text-sm font-weight-bold mb-0">
                                                            {livro.situacao ===
                                                            0
                                                                ? "Disponível"
                                                                : "Emprestado"}
                                                        </p>
                                                    </td>
                                                    <td
                                                        className="align-middle text-center"
                                                        width="10%"
                                                    >
                                                        <div>
                                                            <button
                                                                type="button"
                                                                onClick={() =>
                                                                    openUpdateDialog(
                                                                        livro
                                                                    )
                                                                }
                                                                className="btn btn-vimeo btn-icon-only mx-2"
                                                            >
                                                                <span className="btn-inner--icon">
                                                                    <i className="fas fa-pencil-alt"></i>
                                                                </span>
                                                            </button>
                                                            <button
                                                                type="button"
                                                                onClick={() =>
                                                                    openDestroyDialog(
                                                                        livro
                                                                    )
                                                                }
                                                                className="btn btn-youtube btn-icon-only"
                                                            >
                                                                <span className="btn-inner--icon">
                                                                    <i className="fas fa-trash"></i>
                                                                </span>
                                                            </button>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <nav aria-label="Page navigation example">
                    <ul className="pagination justify-content-center">
                        {meta.links.map((link, k) => (
                            <li key={k} className="page-item">
                                <Link
                                    disabled={link.url == null ? true : false}
                                    as="button"
                                    className={`${link.active && "bg-info"} ${
                                        link.url == null &&
                                        "btn bg-gradient-secondary text-white"
                                    } page-link`}
                                    href={link.url || ""}
                                    dangerouslySetInnerHTML={{
                                        __html: link.label,
                                    }}
                                />
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </>
    );
}

Index.layout = (page) => (
    <Base key={page} children={page} title={"Livros da Biblioteca"} />
);
