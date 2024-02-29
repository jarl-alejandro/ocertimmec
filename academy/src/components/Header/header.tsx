export default function Header() {
    return (
        <header className="navbar-light navbar-sticky">
            {/* Nav START */}
            <nav className="navbar navbar-expand-xl z-index-9">
                <div className="container">
                    {/* Logo START */}
                    <a className="navbar-brand" href="index.html">
                        <img
                            className="light-mode-item navbar-brand-item"
                            src="assets/images/logo.svg"
                            alt="logo"
                        />
                        <img
                            className="dark-mode-item navbar-brand-item"
                            src="assets/images/logo-light.svg"
                            alt="logo"
                        />
                    </a>
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
                    {/* Main navbar START */}
                    <div className="navbar-collapse collapse" id="navbarCollapse">
                        {/* Nav Search START */}
                        <div className="col-xxl-6">
                            <div className="nav my-3 my-xl-0 px-4 flex-nowrap align-items-center">
                                <div className="nav-item w-100">
                                    <form className="rounded position-relative">
                                        <input
                                            className="form-control pe-5 bg-secondary bg-opacity-10 border-0"
                                            type="search"
                                            placeholder="Search"
                                            aria-label="Search"
                                        />
                                        <button
                                            className="btn btn-link bg-transparent px-2 py-0 position-absolute top-50 end-0 translate-middle-y"
                                            type="submit"
                                        >
                                            <i className="fas fa-search fs-6 text-primary"/>
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        {/* Nav Search END */}
                        {/* Nav Main menu START */}
                        <ul className="navbar-nav navbar-nav-scroll ms-auto">
                            {/* Nav item 1 Demos */}
                            <li className="nav-item dropdown">
                                <a className="nav-link" href="index-3.html#">
                                    For Enterprise
                                </a>
                            </li>
                            {/* Nav item 2 Eduhub Business */}
                            <li className="nav-item dropdown">
                                <a className="nav-link" href="index-3.html#">
                                    Eduhub Business
                                </a>
                            </li>
                            {/* Nav item 3 My learning */}
                            <li className="nav-item">
                                <a className="nav-link" href="index-3.html#">
                                    My learning
                                </a>
                            </li>
                        </ul>
                        {/* Nav Main menu END */}
                    </div>
                    {/* Main navbar END */}
                    {/* Profile and notification START */}
                    <ul className="nav flex-row align-items-center list-unstyled ms-xl-auto">
                        {/* Wishlist START */}
                        <li className="nav-item ms-0 ms-sm-2 d-none d-sm-block">
                            <a className="btn btn-light btn-round mb-0" href="index-3.html#">
                                {" "}
                                <i className="bi bi-heart fa-fw"/>
                            </a>
                        </li>
                        {/* Wishlist END */}
                        {/* Notification dropdown START */}
                        <li className="nav-item ms-2 ms-sm-3 dropdown">
                            {/* Notification button */}
                            <a
                                className="btn btn-light btn-round mb-0"
                                href="index-3.html#"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                                data-bs-auto-close="outside"
                            >
                                <i className="bi bi-bell fa-fw"/>
                            </a>
                            {/* Notification dote */}
                            <span className="notif-badge animation-blink"/>
                            {/* Notification dropdown menu START */}
                            <div
                                className="dropdown-menu dropdown-animation dropdown-menu-end dropdown-menu-size-md p-0 shadow-lg border-0">
                                <div className="card bg-transparent">
                                    <div
                                        className="card-header bg-transparent border-bottom py-4 d-flex justify-content-between align-items-center">
                                        <h6 className="m-0">
                                            Notifications{" "}
                                            <span className="badge bg-danger bg-opacity-10 text-danger ms-2">
                    2 new
                  </span>
                                        </h6>
                                        <a className="small" href="index-3.html#">
                                            Clear all
                                        </a>
                                    </div>
                                    <div className="card-body p-0">
                                        <ul className="list-group list-unstyled list-group-flush">
                                            {/* Notif item */}
                                            <li>
                                                <a
                                                    href="index-3.html#"
                                                    className="list-group-item-action border-0 border-bottom d-flex p-3"
                                                >
                                                    <div className="me-3">
                                                        <div className="avatar avatar-md">
                                                            <img
                                                                className="avatar-img rounded-circle"
                                                                src="assets/images/avatar/03.jpg"
                                                                alt="avatar"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <h6 className="mb-1">
                                                            Update v2.3 completed successfully
                                                        </h6>
                                                        <p className="small text-body m-0">
                                                            What's new! Find out about new features
                                                        </p>
                                                        <small className="text-body">5 min ago</small>
                                                    </div>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    {/* Button */}
                                    <div
                                        className="card-footer bg-transparent border-0 py-3 text-center position-relative">
                                        <a href="index-3.html#" className="stretched-link">
                                            See all incoming activity
                                        </a>
                                    </div>
                                </div>
                            </div>
                            {/* Notification dropdown menu END */}
                        </li>
                        {/* Notification dropdown END */}
                        {/* Profile dropdown START */}
                        <li className="nav-item ms-3 dropdown">
                            {/* Avatar */}
                            <a
                                className="avatar avatar-sm p-0"
                                href="index-3.html#"
                                id="profileDropdown"
                                role="button"
                                data-bs-auto-close="outside"
                                data-bs-display="static"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                <img
                                    className="avatar-img rounded-circle"
                                    src="assets/images/avatar/01.jpg"
                                    alt="avatar"
                                />
                            </a>
                            {/* Profile dropdown START */}
                            <ul
                                className="dropdown-menu dropdown-animation dropdown-menu-end shadow pt-3"
                                aria-labelledby="profileDropdown"
                            >
                                {/* Profile info */}
                                <li className="px-3 mb-3">
                                    <div className="d-flex align-items-center">
                                        {/* Avatar */}
                                        <div className="avatar me-3">
                                            <img
                                                className="avatar-img rounded-circle shadow"
                                                src="assets/images/avatar/01.jpg"
                                                alt="avatar"
                                            />
                                        </div>
                                        <div>
                                            <a className="h6" href="index-3.html#">
                                                Lori Ferguson
                                            </a>
                                            <p className="small m-0">
                                                <a
                                                    href="https://demo.stackcodes.net/cdn-cgi/l/email-protection"
                                                    className="__cf_email__"
                                                    data-cfemail="e88d90898598848da88f85898184c68b8785"
                                                >
                                                    [email&nbsp;protected]
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                </li>
                                {/* Links */}
                                <li>
                                    {" "}
                                    <hr className="dropdown-divider"/>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="index-3.html#">
                                        <i className="bi bi-person fa-fw me-2"/>
                                        Edit Profile
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="index-3.html#">
                                        <i className="bi bi-gear fa-fw me-2"/>
                                        Account Settings
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="index-3.html#">
                                        <i className="bi bi-info-circle fa-fw me-2"/>
                                        Help
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="dropdown-item bg-danger-soft-hover"
                                        href="index-3.html#"
                                    >
                                        <i className="bi bi-power fa-fw me-2"/>
                                        Sign Out
                                    </a>
                                </li>
                                <li>
                                    {" "}
                                    <hr className="dropdown-divider"/>
                                </li>
                                {/* Dark mode options START */}
                                <li>
                                    <div
                                        className="bg-light dark-mode-switch theme-icon-active d-flex align-items-center p-1 rounded mt-2">
                                        <button
                                            type="button"
                                            className="btn btn-sm mb-0"
                                            data-bs-theme-value="light"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={16}
                                                height={16}
                                                fill="currentColor"
                                                className="bi bi-sun fa-fw mode-switch"
                                                viewBox="0 0 16 16"
                                            >
                                                <path
                                                    d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/>
                                                <use href="#"/>
                                            </svg>
                                            {" "}
                                            Light
                                        </button>
                                        <button
                                            type="button"
                                            className="btn btn-sm mb-0"
                                            data-bs-theme-value="dark"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={16}
                                                height={16}
                                                fill="currentColor"
                                                className="bi bi-moon-stars fa-fw mode-switch"
                                                viewBox="0 0 16 16"
                                            >
                                                <path
                                                    d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278zM4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286z"/>
                                                <path
                                                    d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z"/>
                                                <use href="#"/>
                                            </svg>
                                            {" "}
                                            Dark
                                        </button>
                                        <button
                                            type="button"
                                            className="btn btn-sm mb-0 active"
                                            data-bs-theme-value="auto"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={16}
                                                height={16}
                                                fill="currentColor"
                                                className="bi bi-circle-half fa-fw mode-switch"
                                                viewBox="0 0 16 16"
                                            >
                                                <path d="M8 15A7 7 0 1 0 8 1v14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16z"/>
                                                <use href="#"/>
                                            </svg>
                                            {" "}
                                            Auto
                                        </button>
                                    </div>
                                </li>
                                {/* Dark mode options END*/}
                            </ul>
                            {/* Profile dropdown END */}
                        </li>
                    </ul>
                    {/* Profile and notification END */}
                </div>
            </nav>
            {/* Nav END */}
            <hr className="my-0"/>
            {/* Category Nav link START */}
            <nav className="navbar navbar-expand-xl nav-category">
                <div className="container px-0">
                    {/* Responsive navbar toggler */}
                    <button
                        className="navbar-toggler m-auto w-100"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarCollapse2"
                        aria-controls="navbarCollapse2"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <i className="bi bi-grid-fill"/> Category
                    </button>
                    {/* Main navbar START */}
                    <div className="navbar-collapse w-100 collapse" id="navbarCollapse2">
                        {/* Nav Main menu START */}
                        <ul className="navbar-nav navbar-nav-scroll mx-auto">
                            {/* Nav item 1 link */}
                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle active"
                                    href="index-3.html#"
                                    id="demoMenu"
                                    data-bs-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                >
                                    Development
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="demoMenu">
                                    <li>
                                        {" "}
                                        <a className="dropdown-item" href="index-3.html#">
                                            Web Development
                                        </a>{" "}
                                    </li>
                                    <li>
                                        {" "}
                                        <a className="dropdown-item" href="index-3.html#">
                                            Data Science
                                        </a>{" "}
                                    </li>
                                    <li>
                                        {" "}
                                        <a className="dropdown-item" href="index-3.html#">
                                            Mobile Development
                                        </a>{" "}
                                    </li>
                                    <li>
                                        {" "}
                                        <a className="dropdown-item" href="index-3.html#">
                                            Programing Language
                                        </a>{" "}
                                    </li>
                                    <li>
                                        {" "}
                                        <a className="dropdown-item" href="index-3.html#">
                                            Software Testing
                                        </a>{" "}
                                    </li>
                                    <li>
                                        {" "}
                                        <a className="dropdown-item" href="index-3.html#">
                                            Software Engineering
                                        </a>{" "}
                                    </li>
                                    <li>
                                        {" "}
                                        <a className="dropdown-item" href="index-3.html#">
                                            Software Development Tools
                                        </a>{" "}
                                    </li>
                                </ul>
                            </li>
                            {/* Navmitem 2 link */}
                            <li className="nav-item">
                                <a className="nav-link" href="index-3.html#">
                                    Finance &amp; Accounting
                                </a>
                            </li>
                            {/* Nav item 3 link */}
                            <li className="nav-item">
                                <a className="nav-link" href="index-3.html#">
                                    Personal Development
                                </a>
                            </li>
                            {/* Nav item 4 link*/}
                            <li className="nav-item">
                                <a className="nav-link" href="index-3.html#">
                                    IT &amp; Software
                                </a>
                            </li>
                            {/* Nav item 5 link*/}
                            <li className="nav-item">
                                <a className="nav-link" href="index-3.html#">
                                    Personal Development
                                </a>
                            </li>
                        </ul>
                    </div>
                    {/* Main navbar END */}
                </div>
            </nav>
            {/* Category Nav link END */}
        </header>
    )
}