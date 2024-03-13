export default function Header() {
    return (
        <section className="bg-light py-0 py-sm-5">
            <div className="container">
                <div className="row py-5">
                    <div className="col-lg-8">

                        {/* Title */}
                        <h1>The Complete Digital Marketing Course - 12 Courses in 1</h1>
                        <p>
                            Satisfied conveying a dependent contented he gentleman agreeable do
                        </p>
                        {/* Content */}
                        <ul className="list-inline mb-0">
                            <li className="list-inline-item h6 me-3 mb-1 mb-sm-0">
                                <i className="fas fa-star text-warning me-2"/>
                                4.5/5.0
                            </li>

                            <li className="list-inline-item h6 me-3 mb-1 mb-sm-0">
                                <i className="fas fa-signal text-success me-2"/>
                                All levels
                            </li>
                            <li className="list-inline-item h6 mb-0">
                                <i className="fas fa-globe text-info me-2"/>
                                English
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}
