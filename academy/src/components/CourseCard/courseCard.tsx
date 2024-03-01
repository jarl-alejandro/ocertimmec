import Link from "next/link";

export default function CourseCard() {
    return (
    <div className="col-md-6 col-xl-4">
        <div className="card shadow-hover overflow-hidden bg-transparent">
            <div className="position-relative">
                {/* Image */}
                <img
                    className="card-img-top"
                    src="assets/images/courses/4by3/16.jpg"
                    alt="Card image"
                />
                {/* Overlay */}
                <div className="bg-overlay bg-dark opacity-4"/>
            </div>
            {/* Card body */}
            <div className="card-body">
                {/* Badge and icon */}
                <div className="d-flex justify-content-between mb-3">
                    <div className="hstack gap-2">
                        <a
                            href="javascript:void(0)"
                            className="badge bg-orange bg-opacity-10 text-orange"
                        >
                            Todos los niveles
                        </a>
                        <a href="index-3.html#" className="badge text-bg-dark">
                            Certificación
                        </a>
                    </div>
                </div>
                {/* Title */}
                <h5 className="card-title">
                    <Link href="/">
                        ATENCIÓN EN EL HOGAR Y LA COMUNIDAD DE PERSONAS CON DISCAPACIDAD
                    </Link>
                </h5>
                {/* Rating */}
                <ul className="list-inline">
                    <li className="list-inline-item h6 fw-light mb-0">4.5</li>
                    <li className="list-inline-item me-0 small">
                        <i className="fas fa-star text-warning"/>
                    </li>
                    <li className="list-inline-item me-0 small">
                        <i className="fas fa-star text-warning"/>
                    </li>
                    <li className="list-inline-item me-0 small">
                        <i className="fas fa-star text-warning"/>
                    </li>
                    <li className="list-inline-item me-0 small">
                        <i className="fas fa-star text-warning"/>
                    </li>
                    <li className="list-inline-item me-0 small">
                        <i className="fas fa-star-half-alt text-warning"/>
                    </li>
                </ul>
                {/* Divider */}
            </div>
        </div>
    </div>
    )
}