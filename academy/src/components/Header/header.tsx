import dynamic from "next/dynamic";
import Image from 'next/image';
import logo from './logo.png';
import Link from 'next/link';
import lang from '@/dictionaries/es.json';
import ActiveLink from "@/components/Header/ActiveLink";

const Theme = dynamic(() => import("./Theme"), { ssr: false });

export default function Header() {

    return (
        <header className="navbar-light navbar-sticky">
            {/* Nav START */}
            <nav className="navbar navbar-expand-xl z-index-9">
                <div className="container">
                    {/* Logo START */}
                    <Link className="navbar-brand" href="/">
                        <Image
                            src={logo}
                            width={70}
                            height={50}
                            alt="Logo occertimm"
                        />
                    </Link>
                    {/* Logo END */}
                    {/* Responsive navbar toggler */}
                    <button
                        className="navbar-toggler ms-auto"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarCollapse"
                        aria-controls="navbarCollapse"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-animation">
                          <span/>
                          <span/>
                          <span/>
                        </span>
                    </button>
                    <div className="navbar-collapse collapse" id="navbarCollapse">
                        <div className="col-xxl-6">
                            <div className="nav my-3 my-xl-0 px-4 flex-nowrap align-items-center">
                                <div className="nav-item w-100">
                                    <form className="rounded position-relative">
                                        <input className="form-control pe-5 bg-secondary bg-opacity-10 border-0"
                                               type="search" placeholder={lang.search_training_certification}
                                               aria-label="Search"/>
                                        <button
                                            className="btn btn-link bg-transparent px-2 py-0 position-absolute top-50 end-0 translate-middle-y"
                                            type="submit">
                                            <i className="fas fa-search fs-6 text-primary"></i>
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>

                        <ul className="navbar-nav navbar-nav-scroll ms-auto">
                            <li className="nav-item dropdown">
                                <ActiveLink className="nav-link" href="/about" activeClassName="active">
                                    {lang.about_me}
                                </ActiveLink>
                            </li>
                            <li className="nav-item dropdown">
                                <ActiveLink className="nav-link" href="/training-certification" activeClassName="active">
                                    {lang.training_certification}
                                </ActiveLink>
                            </li>
                            <li className="nav-item">
                                <ActiveLink className="nav-link" href="/contact" activeClassName="active">
                                    {lang.contact}
                                </ActiveLink>
                            </li>
                        </ul>
                        {/* Nav Main menu END */}
                    </div>
                    {/* Main navbar END */}
                </div>
            </nav>

            <Theme />

            {/* Nav END */}
            <hr className="my-0"/>
        </header>
    )
}
// className={checkActivePath(href) ? 'active' : ''
