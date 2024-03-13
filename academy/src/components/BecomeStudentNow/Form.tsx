export default function Form() {
    return (
        <>
            {/* Title */}
            <h3 className="mb-3 text-white">Contáctanos</h3>
            {/* Form START */}
            <form className="row g-3 position-relative">
                {/* First name */}
                <div className="col-md-12 bg-dark-input">
                    <label className="form-label text-white text-opacity-50">
                        Tu nombre <span className="text-danger">*</span>
                    </label>
                    <input type="text" className="form-control" id="firstName"/>
                </div>

                {/* Email */}
                <div className="col-md-12 bg-dark-input">
                    <label className="form-label text-white text-opacity-50">
                        Email <span className="text-danger">*</span>
                    </label>
                    <input type="email" className="form-control" id="email"/>
                </div>

                <div className="col-md-12 bg-dark-input">
                    <label className="form-label text-white text-opacity-50">
                        Asunto <span className="text-danger">*</span>
                    </label>
                    <input type="text" className="form-control" id="subject"/>
                </div>

                <div className="col-12 bg-dark-input">
                    <label className="form-label text-white text-opacity-50">
                        Mensaje
                    </label>
                    <textarea
                        className="form-control"
                        rows={3}
                        placeholder=""
                        defaultValue={""}
                    />
                </div>
                {/* Button */}
                <div className="col-12 bg-dark-input">
                    <div className="d-grid">
                        <button className="btn btn-lg btn-primary">Enviar mensaje</button>
                    </div>
                    <p className="mb-0 text-white text-opacity-50 small">
                        Campo requerido con <span className="text-danger fw-bold">*</span>{" "}
                        son necesarios
                    </p>
                </div>
            </form>
            {/* Form END */}
        </>
    )
}
