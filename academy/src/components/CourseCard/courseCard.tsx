import Link from "next/link";
import {TrainingCertificate} from "@/core/domain/TrainingCertification";
import Image from "next/image";

export default function CourseCard({ course }: { course: TrainingCertificate }) {
    return (
        <div className="card border shadow-hover overflow-hidden bg-transparent">
            <div className="position-relative">
                {/* Image */}
                <Image
                    src={`${process.env.API_URL_MEDIA}/${course?.photo}`}
                    width={416.656}
                    height={486.656}
                    className="card-img-top"
                    alt={course?.name}
                />
            </div>
            {/* Card body */}
            <div className="card-body card-footer">
                <div>
                    {/* Badge and icon */}
                    <div className="d-flex justify-content-between mb-3">
                        <div className="hstack gap-2">
                            <a
                                className="badge bg-orange bg-opacity-10 text-orange"
                            >
                                Todos los niveles
                            </a>
                            <a href="index-3.html#" className="badge text-bg-dark">
                                {course?.type === 'Training' ? 'Capacitación' : 'Certificación'}
                            </a>
                        </div>
                    </div>

                    {/* Title */}
                    <h5 className="card-title">
                        <Link href={`/training-certification/${course?._id}`}>
                            {course?.name}
                        </Link>
                    </h5>
                    {!!course?.cost && (
                        <h4 className="text-success mb-0">USD$ {parseFloat(course?.cost.toString()).toFixed(2)}</h4>
                    )}
                </div>


                <div className="d-flex align-items-center justify-content-between">
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

                    <div className="d-flex align-items-center">
                        <Link  href={`/training-certification/${course?._id}`}
                               style={{ marginInlineEnd: '1rem' }}
                               className="btn btn-sm btn-info-soft mb-0">
                            {course?.type === 'Training' ? 'Ver Capacitación' : 'Ver Certificación'}
                        </Link>

                        <Link  href={`/training-certification/${course?._id}`} className="btn btn-sm btn-primary-soft mb-0">
                            {course?.type === 'Training' ? 'Capacítate' : 'Certifícate'}
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    )
}
