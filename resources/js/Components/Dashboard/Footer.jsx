import React from "react";

export default function Footer() {
    return (
        <>
            <footer className="footer mt-auto pb-4">
                <div className="container-fluid">
                    <div className="row align-items-center justify-content-lg-between">
                        <div className="col-lg-6 mb-lg-0 mb-4">
                            <div className="copyright text-center text-sm text-muted text-lg-start">
                                <i className="fa fa-heart" /> by
                                <a
                                    href="https://github.com/slcsamoel"
                                    className="font-weight-bold"
                                    target="_blank"
                                >
                                    {" "}
                                    Samoel{" "}
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-6"></div>
                    </div>
                </div>
            </footer>
        </>
    );
}
