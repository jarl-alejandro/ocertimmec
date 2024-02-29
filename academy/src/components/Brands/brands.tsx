export default function Brands() {
    return (
        <>
            {/* =======================
Client START */}
            <section className="py-5">
                <div className="container">
                    <div className="row justify-content-center my-4">
                        <div className="col-12">
                            {/* Slider START */}
                            <div className="tiny-slider arrow-round">
                                <div
                                    className="tiny-slider-inner"
                                    data-arrow="false"
                                    data-autoplay="true"
                                    data-dots="false"
                                    data-gutter={80}
                                    data-items-xl={6}
                                    data-items-lg={5}
                                    data-items-md={4}
                                    data-items-sm={3}
                                    data-items-xs={2}
                                >
                                    {/* Slide item START */}
                                    <div className="item">
                                        <img src="assets/images/client/coca-cola.svg" alt="" />
                                    </div>
                                    <div className="item">
                                        <img src="assets/images/client/android.svg" alt="" />
                                    </div>
                                    <div className="item">
                                        <img src="assets/images/client/envato.svg" alt="" />
                                    </div>
                                    <div className="item">
                                        <img src="assets/images/client/microsoft.svg" alt="" />
                                    </div>
                                    <div className="item">
                                        <img src="assets/images/client/netflix.svg" alt="" />
                                    </div>
                                    <div className="item">
                                        <img src="assets/images/client/google.svg" alt="" />
                                    </div>
                                    <div className="item">
                                        <img src="assets/images/client/linkedin.svg" alt="" />
                                    </div>
                                    {/* Slide item END */}
                                </div>
                            </div>
                            {/* Slider END */}
                        </div>
                    </div>
                </div>
            </section>
            {/* =======================
Client END */}
        </>

    )
}
