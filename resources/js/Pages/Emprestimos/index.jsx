import { Link } from "@inertiajs/inertia-react";
import React, { useState } from "react";
import Dialog from "../../Components/Dashboard/Dialog";
import Base from "../../Layouts/Base";
import useDialog from "../../Hooks/useDialog";
import CreateEmprestimo from "../../Components/Dashboard/Emprestimos/CreateEmprestimo";
import EditEmprestimo from "../../Components/Dashboard/Emprestimos/EditEmprestimo";
import { Inertia } from "@inertiajs/inertia";

export default function Index(props) {
    const { data: emprestimos, links, meta } = props.emprestimos;
    const livros = props.livros;
    const usuarios = props.usuarios;
    const [state, setState] = useState({});
    const [addDialogHandler, addCloseTrigger, addTrigger] = useDialog();
    const [updateDialogHandler, updateCloseTrigger, updateTrigger] =
        useDialog();
    const [destroyDialogHandler, destroyCloseTrigger, destroyTrigger] =
        useDialog();

    const openUpdateDialog = (emprestimo) => {
        setState(emprestimo);
        updateDialogHandler();
    };
    const openDestroyDialog = (emprestimo) => {
        setState(emprestimo);
        destroyDialogHandler();
    };
    const devolverEmprestimo = () => {
        Inertia.post(`emprestimos/devolver/${state.numero_emprestimo}`, {
            onSuccess: () => destroyCloseTrigger(),
        });
    };

    const checkSituacao = (situacao) => {
        if (situacao === 1) {
            return "Emprestado";
        } else if (situacao === 2) {
            return "Atrasado";
        } else {
            return "Devolvido";
        }
    };

    return (
        <>
            <div className="container-fluid py-4">
                <Dialog trigger={addTrigger} title="Criar novo Emprestimo">
                    <CreateEmprestimo
                        close={addCloseTrigger}
                        livros={livros}
                        usuarios={usuarios}
                    />
                </Dialog>

                <Dialog trigger={updateTrigger} title={`Alterar Emprestimo:`}>
                    <EditEmprestimo
                        emprestimo={state}
                        close={updateCloseTrigger}
                        livros={livros}
                        usuarios={usuarios}
                    />
                </Dialog>

                <Dialog trigger={destroyTrigger} title={`Informar devolução:`}>
                    <p>Informar devolução do Livro</p>
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
                            onClick={devolverEmprestimo}
                            className="btn bg-gradient-primary"
                        >
                            Devolver
                        </button>
                    </div>
                </Dialog>

                <div className="row pb-4">
                    <div className="col-12 w-100">
                        <div className="card h-100 w-100">
                            <div className="card-header pb-0">
                                <div className="row">
                                    <div className="col-md-6">
                                        <h6>Emprestimos Da Biblioteca</h6>
                                    </div>
                                    <div className="col-md-6 d-flex justify-content-end">
                                        <button
                                            onClick={addDialogHandler}
                                            type="button"
                                            className="btn bg-gradient-success btn-block mb-3"
                                            data-bs-toggle="modal"
                                            data-bs-target="#exampleModalMessage"
                                        >
                                            Criar novo Emprestimo
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
                                                    #Num_Emprestimo
                                                </th>
                                                <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2 text-left">
                                                    Nome do Usuario
                                                </th>
                                                <th className="text-uppercase text-secondary text-xxs font-weight-bolder text-left opacity-7 ps-2">
                                                    Nome do Livro
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
                                            {emprestimos.map(
                                                (emprestimo, index) => (
                                                    <tr
                                                        key={
                                                            emprestimo.numero_emprestimo
                                                        }
                                                    >
                                                        <td className="text-center">
                                                            {meta.from + index}
                                                        </td>
                                                        <td className="text-left">
                                                            <div className="d-flex px-2">
                                                                <div className="my-auto">
                                                                    <h6 className="mb-0 text-sm">
                                                                        {
                                                                            emprestimo
                                                                                .usuario
                                                                                .nome
                                                                        }
                                                                    </h6>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="text-left">
                                                            <p className="text-sm font-weight-bold mb-0">
                                                                {
                                                                    emprestimo
                                                                        .livro
                                                                        .nome
                                                                }
                                                            </p>
                                                        </td>
                                                        <td className="text-left">
                                                            <p className="text-sm font-weight-bold mb-0">
                                                                {checkSituacao(
                                                                    emprestimo.situacao
                                                                )}
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
                                                                            emprestimo
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
                                                                            emprestimo
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
                                                )
                                            )}
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
    <Base key={page} children={page} title={"Emprestimos da Biblioteca"} />
);
