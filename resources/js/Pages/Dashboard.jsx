import React from "react";
import Base from "../Layouts/Base";

export default function Dashboard(props) {
    const emprestimos = props.emprestimos;
    const livros = props.livros;
    const usuarios = props.usuarios;

    return (
        <>
            <div className="container-fluid py-4">
                <div className="row">
                    <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                        <div className="card">
                            <div className="card-body p-3">
                                <div className="row">
                                    <div className="col-8">
                                        <div className="numbers">
                                            <p className="text-sm mb-0 text-uppercase font-weight-bold">
                                                Emprestimos Realizados
                                            </p>
                                            <h5 className="font-weight-bolder">
                                                {emprestimos}
                                            </h5>
                                        </div>
                                    </div>
                                    <div className="col-4 text-end">
                                        <div className="icon icon-shape bg-gradient-primary shadow-primary text-center rounded-circle">
                                            <i
                                                className="ni ni-money-coins text-lg opacity-10"
                                                aria-hidden="true"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                        <div className="card">
                            <div className="card-body p-3">
                                <div className="row">
                                    <div className="col-8">
                                        <div className="numbers">
                                            <p className="text-sm mb-0 text-uppercase font-weight-bold">
                                                Usuarios da Biblioteca
                                            </p>
                                            <h5 className="font-weight-bolder">
                                                {usuarios}
                                            </h5>
                                        </div>
                                    </div>
                                    <div className="col-4 text-end">
                                        <div className="icon icon-shape bg-gradient-danger shadow-danger text-center rounded-circle">
                                            <i
                                                className="ni ni-world text-lg opacity-10"
                                                aria-hidden="true"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                        <div className="card">
                            <div className="card-body p-3">
                                <div className="row">
                                    <div className="col-8">
                                        <div className="numbers">
                                            <p className="text-sm mb-0 text-uppercase font-weight-bold">
                                                Livros Disponiveis
                                            </p>
                                            <h5 className="font-weight-bolder">
                                                {livros}
                                            </h5>
                                        </div>
                                    </div>
                                    <div className="col-4 text-end">
                                        <div className="icon icon-shape bg-gradient-success shadow-success text-center rounded-circle">
                                            <i
                                                className="ni ni-paper-diploma text-lg opacity-10"
                                                aria-hidden="true"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

Dashboard.layout = (page) => <Base children={page} title={"Dashboard"} />;
