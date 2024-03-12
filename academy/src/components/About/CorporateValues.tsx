import styles from './corporateValues.module.css';

export default function CorporateValues() {
    return (
        <section className="bg-light  row justify-content-center">
            <section className="col-10">
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
            </section>
        </section>
    )
}
