"use client";

import { SubmitHandler, useForm } from 'react-hook-form';

import Citizens from "@/components/Inscription/Citizens";
import CurrentEducation from "@/components/Inscription/CurrentEducation";
import { EnrollmentProcess } from "./EnrollmentProcess";
import LivingConditions from "@/components/Inscription/LivingConditions";
import PersonalData from "@/components/Inscription/PersonalData";
import React from "react";
import Training from "@/components/Inscription/Training";
import WorkExperience from "@/components/Inscription/WorkExperience";
import WorkingConditions from "@/components/Inscription/WorkingConditions";
import { useEffect } from 'react'

interface FormValues {
    name: string;
    lastName: string;
    document: string;
    birthdate: string;
    direction: string;
    province: string;
    city: string;
    celphone: string;
    phone: string;
    email: string;
}
/**
    reset({
      query: 'Initial query value',
      name: 'Initial name',
      email: 'initial@example.com',
    });
 */
export default function InscriptionForm() {
    const { register, handleSubmit, setValue, formState: { errors } } = useForm<FormValues>({});



    const onSubmit: SubmitHandler<FormValues> = async (data) => {
        console.log(data);
        // Aquí puedes agregar tu lógica de envío del formulario
    };


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row row-cols-1">
            <article className="card border mb-3 bg-light">
                <header className="card-header bg-transparent">
                    <h5 className="card-title text-primary">1.- PROCESO DE INSCRIPCIÓN</h5>
                </header>
                <EnrollmentProcess errors={errors} register={register} />
            </article>


            <article className="card border mb-3 bg-light">
                <header className="card-header bg-transparent">
                    <h5 className="card-title text-primary">2.- FORMACIÓN ACTUAL</h5>
                </header>
                <CurrentEducation register={register} />
            </article>

            <article className="card border mb-3 bg-light">
                <header className="card-header bg-transparent">
                    <h5 className="card-title text-primary">3.- CAPACITACIÓN O FORMACIÓN RECIBIDA</h5>
                </header>
                <Training register={register} />
            </article>

            <article className="card border mb-3 bg-light">
                <header className="card-header bg-transparent">
                    <h5 className="card-title text-primary">4.- EXPERIENCIA LABORAL</h5>
                </header>
                <WorkExperience register={register} />
            </article>

            <article className="card border mb-3 bg-light">
                <header className="card-header bg-transparent">
                    <h5 className="card-title text-primary">5.- DATOS GENERALES DEL ENCUESTADO</h5>
                </header>
                <PersonalData register={register} />
            </article>

            <article className="card border mb-3 bg-light">
                <header className="card-header bg-transparent">
                    <h5 className="card-title text-primary">6.- CIUDADANOS/AS OCUPADOS/AS</h5>
                </header>
                <Citizens register={register} />
            </article>

            <article className="card border mb-3 bg-light">
                <header className="card-header bg-transparent">
                    <h5 className="card-title text-primary">7.- CONDICIONES LABORALES <span>RECIBE POR PARTE DE SU PATRONO O EMPLEADOR:</span></h5>
                </header>
                <WorkingConditions register={register} />
            </article>

            <article className="card border mb-3 bg-light">
                <header className="card-header bg-transparent">
                    <h5 className="card-title text-primary">8. DATOS DE CONDICIONES DE VIDA</h5>
                </header>
                <LivingConditions register={register} />
            </article>
        </div>

        <div className="d-flex justify-content-between align-items-center p-4">  {/* Button and upload section */}
            <div className="d-flex flex-column align-items-center">
                <input
                    type="file"
                    id="requisitos-pdf"
                    accept="application/pdf"
                    className="d-none"
                />
                <div className="btn btn-outline-primary">Subir requisitos</div>

            </div>
            <button className="btn btn-primary">Guardar</button>
        </div>
    </form>
    )
}
