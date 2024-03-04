import styles from './brands.module.css';
import anes from './anes.jpeg';
import ingauto from './ingauto.png';
import setec from './setec.png';
import senescyt from './senescyt.png';
import comercio from './comercio.jpeg';
import aecap from './aecap.jpg';
import Image from "next/image";


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
                                <div className={styles.item}>
                                    <Image
                                        src={anes}
                                        width={160}
                                        height={100}
                                        alt="Anes"
                                    />
                                </div>
                                <div className={styles.item}>
                                    <Image
                                        src={ingauto}
                                        width={260}
                                        height={100}
                                        alt="ingauto"
                                    />
                                </div>
                                <div className={styles.item}>
                                    <Image
                                        src={setec}
                                        width={260}
                                        height={100}
                                        alt="setec"
                                    />
                                </div>
                                <div className={styles.item}>
                                    <Image
                                        src={senescyt}
                                        width={260}
                                        height={100}
                                        alt="senescyt"
                                    />
                                </div>
                                <div className={styles.item}>
                                    <Image
                                        src={comercio}
                                        width={160}
                                        height={60}
                                        alt="comercio"
                                    />
                                </div>
                                <div className={styles.item}>
                                    <Image
                                        src={aecap}
                                        width={260}
                                        height={100}
                                        alt="aecap"
                                    />
                                </div>

                            </div>
                        </div>
                        {/* Slider END */}
                    </div>
                </div>
            </div>
        </section>
    )
}
