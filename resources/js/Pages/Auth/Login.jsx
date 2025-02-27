import { Link, useForm } from "@inertiajs/inertia-react";
import React from "react";
import Auth from "../../Layouts/Auth";

export default function Login({ errors }) {
    const { data, setData, post } = useForm({
        email: "",
        password: "",
        remember: "",
    });

    const changeHandler = (e) =>
        setData({ ...data, [e.target.id]: e.target.value });

    const submitHandler = (e) => {
        e.preventDefault();
        post(route("login"), data);
    };
    return (
        <>
            <div className="page-header min-vh-100">
                <div className="container">
                    <div className="col-xl-4 col-lg-5 col-md-7 d-flex flex-column mx-auto">
                        <div className="card card-plain">
                            <div className="card z-index-0">
                                <div className="card-header text-center pt-4">
                                    <h5>Login Painel</h5>
                                </div>
                                <div className="card-body">
                                    <form
                                        role="form"
                                        onSubmit={submitHandler}
                                        noValidate
                                    >
                                        <div className="mb-3">
                                            <input
                                                value={data.email}
                                                onChange={changeHandler}
                                                type="email"
                                                name="email"
                                                id="email"
                                                className="form-control form-control-lg"
                                                placeholder="Email"
                                                aria-label="Email"
                                            />
                                            {errors && (
                                                <div className="text-danger mt-1">
                                                    {errors.email}
                                                </div>
                                            )}
                                        </div>
                                        <div className="mb-3">
                                            <input
                                                value={data.password}
                                                onChange={changeHandler}
                                                type="password"
                                                name="password"
                                                id="password"
                                                className="form-control form-control-lg"
                                                placeholder="Password"
                                                aria-label="Password"
                                            />
                                            {errors && (
                                                <div className="text-danger mt-1">
                                                    {errors.password}
                                                </div>
                                            )}
                                        </div>
                                        <div className="text-center">
                                            <button
                                                type="submit"
                                                className="btn btn-lg btn-primary btn-lg w-100 mt-4 mb-0"
                                            >
                                                Sign in
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

Login.layout = (page) => <Auth children={page} title={"Login"} />;
