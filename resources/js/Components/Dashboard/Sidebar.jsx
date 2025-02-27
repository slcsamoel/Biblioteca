import { Link } from "@inertiajs/inertia-react";
import React from "react";

export default function Sidebar() {
    return (
        <aside
            className="sidenav bg-default navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-4 "
            id="sidenav-main"
        >
            <div className="sidenav-header">
                <i
                    className="fas fa-times p-3 cursor-pointer opacity-5 position-absolute end-0 top-0 d-none d-xl-none opacity-8 text-white"
                    aria-hidden="true"
                    id="iconSidenav"
                />
                <Link
                    className="navbar-brand m-0"
                    href={route("dashboard")}
                    target="_blank"
                >
                    <span className="ms-1 font-weight-bold">Admin</span>
                </Link>
            </div>
            <hr className="horizontal dark mt-0" />
            <div
                className="collapse navbar-collapse  w-auto "
                id="sidenav-collapse-main"
            >
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link
                            className={`${
                                route().current("dashboard") && "active"
                            } nav-link`}
                            href={route("dashboard")}
                        >
                            <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                                <i className="ni ni-tv-2 text-primary text-sm opacity-10" />
                            </div>
                            <span className="nav-link-text ms-1">
                                Dashboard
                            </span>
                        </Link>

                        <Link
                            className={`${
                                route().current("usuariosBiblioteca.*") &&
                                "active"
                            } nav-link`}
                            href={route("usuariosBiblioteca.index")}
                        >
                            <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                                <i className="fas fa-user-tie text-warning text-sm opacity-10" />
                            </div>
                            <span className="nav-link-text ms-1">
                                Usuários da Biblioteca
                            </span>
                        </Link>

                        <Link
                            className={`${
                                route().current("livros.*") && "active"
                            } nav-link`}
                            href={route("livros.index")}
                        >
                            <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                                <i className="fas fa-user-tie text-warning text-sm opacity-10" />
                            </div>
                            <span className="nav-link-text ms-1">Livros</span>
                        </Link>

                        <Link
                            className={`${
                                route().current("emprestimos.*") && "active"
                            } nav-link`}
                            href={route("emprestimos.index")}
                        >
                            <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                                <i className="fas fa-user-tie text-warning text-sm opacity-10" />
                            </div>
                            <span className="nav-link-text ms-1">
                                Emprestimos
                            </span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            className="nav-link "
                            as="a"
                            method="post"
                            href={route("logout")}
                        >
                            <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                                <i className="fas fa-sign-out-alt text-danger text-sm opacity-10"></i>
                            </div>
                            <span className="nav-link-text ms-1">Log out</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </aside>
    );
}
