import styles from "@/components/Brands/brands.module.css";
import Image from "next/image";
import anes from "@/components/Brands/anes.png";
import ingauto from "@/components/Brands/ingauto.png";
import setec from "@/components/Brands/setec.png";
import senescyt from "@/components/Brands/senescyt.png";
import comercio from "@/components/Brands/comercio.png";
import aecap from "@/components/Brands/aecap.png";

export default function BrandsSlider() {
    return (
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
                            width={200}
                            height={50}
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
    )
}
