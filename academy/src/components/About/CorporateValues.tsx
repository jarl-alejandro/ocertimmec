import styles from './corporateValues.module.css';

export default function CorporateValues() {
    return (
        <section className="position-relative bg-light row justify-content-center ">
            <figure className="fill-primary opacity-1 position-absolute top-50 end-0 me-n6 d-none d-sm-block">
                <svg width="211px" height="211px">
                    <path
                        d="M210.030,105.011 C210.030,163.014 163.010,210.029 105.012,210.029 C47.013,210.029 -0.005,163.014 -0.005,105.011 C-0.005,47.015 47.013,-0.004 105.012,-0.004 C163.010,-0.004 210.030,47.015 210.030,105.011 Z"/>
                </svg>
            </figure>

            <div className="container">
                <div className="row mb-6">
                    <div className="col-sm-10 col-xl-6 text-center mx-auto">
                        <h2>Propósito Organizacional de Occertimm</h2>
                        <p className="mb-0">
                            Nuestro dedicado equipo está aquí para ayudar a los profesionales a tener un impacto en el mundo. ¿Estás listo para alcanzar todo tu potencial? ¡Únete a nosotros! Capacitaciones y Certificaciones por competencias laborales.
                        </p>
                    </div>
                </div>
            </div>
            <div className="col-10">
                <div className={styles.items}>
                    <article className={styles.item}>
                        <h4 className="mt-3">MISIÓN</h4>
                        <p className="mb-0">
                            Contribuir al desarrollo integral de las personas y al enriquecimiento del capital
                            intelectual de las empresas e instituciones,
                            públicas y privadas a través de la implementación de capacitaciones y certificaciones, con
                            los más altos estándares de calidad y servicio,
                            acordes a los perfiles profesionales del mercado laboral.
                        </p>
                    </article>
                    <article className={styles.item}>
                        <h4 className="mt-3">VISIÓN</h4>
                        <p className="mb-0">
                            Ser una empresa líder en Santo Domingo y a nivel nacional en capacitaciones y
                            certificaciones de manera integral.

                        </p>
                    </article>
                    <article className={styles.item}>
                        <h4 className="mt-3">VALORES COORPORATIVOS</h4>
                        <ul>
                            <li className="badge rounded-pill text-bg-primary m-1">Innovación</li>
                            <li className="badge rounded-pill text-bg-primary m-1">Calidad</li>
                            <li className="badge rounded-pill text-bg-primary m-1">Disciplina</li>
                            <li className="badge rounded-pill text-bg-primary m-1">Excelencia</li>
                            <li className="badge rounded-pill text-bg-primary m-1">Honorabilidad</li>
                            <li className="badge rounded-pill text-bg-primary m-1">Respeto</li>
                            <li className="badge rounded-pill text-bg-primary m-1">Servicio</li>
                        </ul>
                    </article>
                </div>
            </div>

        </section>
    )
}
