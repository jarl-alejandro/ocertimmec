import React from "react";
import LivingConditions from "@/components/Inscription/LivingConditions";
import WorkingConditions from "@/components/Inscription/WorkingConditions";
import Citizens from "@/components/Inscription/Citizens";
import PersonalData from "@/components/Inscription/PersonalData";
import WorkExperience from "@/components/Inscription/WorkExperience";
import Training from "@/components/Inscription/Training";
import CurrentEducation from "@/components/Inscription/CurrentEducation";

export default function InscriptionForm() {
    function changeFile() {

    }

    function handleUpload() {

    }

    return (
        <section className="container mb-5">
            <div className="row row-cols-1">
                <article className="card border mb-3 bg-light">
                    <header className="card-header bg-transparent">
                        <h6 className="card-title text-primary">1.- FORMACIÓN ACTUAL</h6>
                    </header>
                    <CurrentEducation />
                </article>

                <article className="card border mb-3 bg-light">
                    <header className="card-header bg-transparent">
                        <h6 className="card-title text-primary">2.- CAPACITACIÓN O FORMACIÓN RECIBIDA</h6>
                    </header>
                    <Training />
                </article>

                <article className="card border mb-3 bg-light">
                    <header className="card-header bg-transparent">
                        <h6 className="card-title text-primary">3.- EXPERIENCIA LABORAL</h6>
                    </header>
                    <WorkExperience />
                </article>

                <article className="card border mb-3 bg-light">
                    <header className="card-header bg-transparent">
                        <h6 className="card-title text-primary">4.- DATOS GENERALES DEL ENCUESTADO</h6>
                    </header>
                    <PersonalData />
                </article>

                <article className="card border mb-3 bg-light">
                    <header className="card-header bg-transparent">
                        <h6 className="card-title text-primary">5.- CIUDADANOS/AS OCUPADOS/AS</h6>
                    </header>
                    <Citizens />
                </article>

                <article className="card border mb-3 bg-light">
                    <header className="card-header bg-transparent">
                        <h6 className="card-title text-primary">6.- CONDICIONES LABORALES <span>RECIBE POR PARTE DE SU PATRONO O EMPLEADOR:</span></h6>
                    </header>
                    <WorkingConditions />
                </article>

                <article className="card border mb-3 bg-light">
                    <header className="card-header bg-transparent">
                        <h6 className="card-title text-primary"> 7. DATOS DE CONDICIONES DE VIDA</h6>
                    </header>
                    <LivingConditions />
                </article>
            </div>

            <div className="d-flex justify-content-between align-items-center">  {/* Button and upload section */}
                <button
                    className="btn btn-primary"
                >
                    Guardar
                </button>
                <div className="d-flex flex-column align-items-center">
                    <input
                        type="file"
                        id="requisitos-pdf"
                        accept="application/pdf"
                        className="d-none"
                    />
                    <div className="btn btn-outline-primary">Subir requisitos</div>
                </div>
            </div>
        </section>
    )
}
