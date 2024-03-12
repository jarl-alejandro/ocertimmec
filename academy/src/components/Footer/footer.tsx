import Image from "next/image";
import logo from "@/components/Header/logo.png";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-dark pt-5">
            <div className="container">
                <div className="row g-4">
                    <div className="col-lg-5">
                        <Link className="me-0" href="/">
                            <Image
                                src={logo}
                                width={130}
                                height={60}
                                alt="Logo occertimm"
                            />
                        </Link>
                        <p className="my-3 text-body-secondary">
                            Nuestro dedicado equipo está aquí para ayudar a los profesionales a tener un impacto en el mundo. ¿Estás listo para alcanzar todo tu potencial? ¡Únete a nosotros!
                            Capacitaciones y Certificaciones por competencias laborales.
                        </p>
                        {/* Social media icon */}
                        <ul className="list-inline mb-0 mt-3">
                            <li className="list-inline-item">
                                <a
                                    className="btn btn-white btn-sm shadow px-2 text-facebook"
                                    href="https://www.facebook.com/occertimmec/"
                                    target="_blank"
                                >
                                    <i className="fab fa-fw fa-facebook-f"/>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-3">
                        <div className="row g-4">
                            {/* Link block */}
                            <div className="col-12">
                                <h5 className="mb-2 mb-md-4 text-white">Empresa</h5>
                                <ul className="nav flex-column text-primary-hover">
                                    <li className="nav-item">
                                        <Link className="nav-link" href="/about">
                                            Quienes somos
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" href="/contact">
                                            Contacta con nosotros
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3">
                        <h5 className="mb-2 mb-md-4 text-white">Contacto</h5>
                        <p className="mb-2 text-body-secondary">
                            <span className="h6 fw-light text-white ms-2">+593 99 787 7988</span>
                        </p>
                        <p className="mb-2 text-body-secondary">
                            <span className="h6 fw-light text-white ms-2">+593 98 923 1482</span>
                        </p>
                        <p className="mb-2 text-body-secondary">
                            <span className="h6 fw-light text-white ms-2">+593 02 376 6135</span>
                        </p>

                        <p className="mb-0 text-body-secondary">
                            Email:
                            <span className="h6 fw-light text-white ms-2">
                              <a className="text-white" href="mailto:destinatario@example.com">
                                occertimm@gmail.com
                              </a>
                            </span>
                        </p>
                    </div>
                    {/* Widget 3 END */}
                </div>


                <hr className="mt-4 mb-0"/>
                <div className="py-3">
                    <div className="container px-0">
                        <div
                            className="d-lg-flex justify-content-between align-items-center py-3 text-center text-md-left">
                            <div className="text-body-secondary">
                                Hecho por ©2024 Alejandro Rivas.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
