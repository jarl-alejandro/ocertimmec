import styles from './brands.module.css';


export default function Brands() {
    return (
        <section className="py-5">
            <div className="container">
                <div className="row justify-content-center my-4">
                    <div className="col-12">
                        {/* Slider START */}
                        <div className="tiny-slider arrow-round">
                            <div
                                className="d-flex justify-content-between align-items-center"
                            >
                                {/* Slide item START */}
                                <div className={styles.item}>
                                    <img src="assets/images/client/coca-cola.svg" alt=""/>
                                </div>
                                <div className={styles.item}>
                                    <img src="assets/images/client/android.svg" alt=""/>
                                </div>
                                <div className={styles.item}>
                                    <img src="assets/images/client/envato.svg" alt=""/>
                                </div>
                                <div className={styles.item}>
                                    <img src="assets/images/client/microsoft.svg" alt=""/>
                                </div>
                                <div className={styles.item}>
                                    <img src="assets/images/client/netflix.svg" alt=""/>
                                </div>
                                <div className={styles.item}>
                                    <img src="assets/images/client/google.svg" alt=""/>
                                </div>
                                <div className={styles.item}>
                                    <img src="assets/images/client/linkedin.svg" alt=""/>
                                </div>
                                {/* Slide item END */}
                            </div>
                        </div>
                        {/* Slider END */}
                    </div>
                </div>
            </div>
        </section>
    )
}
