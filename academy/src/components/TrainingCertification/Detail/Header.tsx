import {TrainingCertificate} from "@/core/domain/TrainingCertification";

export default function Header({ courseDetail }: { courseDetail: TrainingCertificate }) {
    return (
        <section className="bg-light py-0 py-sm-5">
            <div className="container">
                <div className="row py-1">
                    <div className="col-lg-8">
                        <h1>{ courseDetail.name }</h1>
                        <p>
                            Lugar de capacitación: <span>{ courseDetail?.place }</span>
                        </p>
                        <ul className="list-inline mb-0">
                            <li className="list-inline-item h6 me-3 mb-1 mb-sm-0">
                                <i className="fas fa-signal text-success me-2"/>
                                Todos los niveles
                            </li>
                            <li className="list-inline-item h6 mb-0">
                                <i className="fas fa-globe text-info me-2"/>
                                Español
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}
