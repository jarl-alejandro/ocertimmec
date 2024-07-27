"use client";

import React, {useCallback, useEffect, useRef, useState} from "react";
import {SubmitHandler, useForm} from 'react-hook-form';
import toast, {Toaster} from 'react-hot-toast';

import Citizens from "@/components/Inscription/Citizens";
import CurrentEducation from "@/components/Inscription/CurrentEducation";
import {EnrollmentProcess} from "./EnrollmentProcess";
import {InscriptionCommand} from '@/core/domain/InscriptionCommand';
import LivingConditions from "@/components/Inscription/LivingConditions";
import PersonalData from "@/components/Inscription/PersonalData";
import {Subject} from "rxjs";
import Training from "@/components/Inscription/Training";
import WorkExperience from "@/components/Inscription/WorkExperience";
import WorkingConditions from "@/components/Inscription/WorkingConditions";
import {debounceTime} from "rxjs/operators";
import {useRouter} from 'next/navigation'
import {StudentInfo} from "@/core/domain/StudentInfo";
import {isNullOrUndefined} from "@/utils/isNullOrUndefined";
import {fillFormFromStudentInfo} from "@/core/domain/studentInfoToInscriptionCommandAdapter";
import {Profiles} from "@/components/Inscription/Profiles";

interface Props {
    trainingId: string | null;
    certificateId: string | null;
}


export default function InscriptionForm(props: Props) {
    const { register, handleSubmit, setValue, formState: { errors }, reset, watch } = useForm<InscriptionCommand>({});
    const [isSendForm, setSendForm] = useState(false)
    const router = useRouter();

    const onChange$ = useRef(new Subject<string>());
    const subscription = useRef<any>(null);

    // Manejar cambios en el valor
    const handleChangeValue = useCallback((value: string) => {
      onChange$.current.next(value);
    }, []);

    const findStudent = (document: string) => {
        const courseId = props.certificateId || props.trainingId;
        const isCertificate = !isNullOrUndefined(props.certificateId);
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/find/student/${document}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify( { document, courseId, isCertificate }),
        })
        .then(response => response.json())
        .then(data => {
            const studentInfo: StudentInfo = data?.studentInfo;
            if (!isNullOrUndefined(studentInfo)) {
                setValue('name', studentInfo.name)
                setValue('lastName', studentInfo.lastName)
            }
            if (!isNullOrUndefined(studentInfo?.lastInscription)) {
                fillFormFromStudentInfo(setValue, studentInfo);

                console.log(studentInfo)
            }
        })
    }
  
    useEffect(() => {
        subscription.current = onChange$.current.pipe(debounceTime(800))
          .subscribe((debounced: string) => {
              if (debounced) {
                  findStudent(debounced);
              }
          });
  
      return () => {
        if (subscription.current) {
          subscription.current.unsubscribe();
        }
      };
    }, []);
  
    // Watch the 'search' field
    const searchValue = watch('document', '');

    useEffect(() => {
      handleChangeValue(searchValue);
    }, [searchValue]);

    const onSubmit: SubmitHandler<InscriptionCommand> = async (data: InscriptionCommand) => {
        if (isSendForm) {
            return;
        }
        const formData = new FormData();
        const toastId = toast.loading('Loading...');
        setSendForm(true);
        // Append all form fields to FormData
        Object.entries(data).forEach(([key, value]) => {
            if (key === "courses") {
                const jsonString = JSON.stringify(value);
                formData.append(key, jsonString);
            }
            else if (key === "requirementsPDF" && value instanceof FileList) {
                if (value.length > 0) {
                    formData.append(key, value[0]);
                }
            } else {
                formData.append(key, value as string);
            }
        });

        fetch(`${process.env.NEXT_PUBLIC_API_URL}/inscription`, {
          method: 'POST',
          body: formData,
        })
        .then(response => response.json())
        .then(result => {
            setSendForm(false);
            toast.dismiss(toastId);
            toast.success('¡Su inscripción se ha realizado con éxito!')
            setTimeout(() => router.replace('/'), 1000);
        });
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row row-cols-1">
                <article className="card border mb-3 bg-light">
                    <header className="card-header bg-transparent">
                        <h5 className="card-title text-primary">PERFILES</h5>
                    </header>
                    <Profiles
                        courseId={props.certificateId || props.trainingId}
                        register={register}
                        setValue={setValue}
                    />
                </article>

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
                    <CurrentEducation register={register}/>
                </article>

                <article className="card border mb-3 bg-light">
                    <header className="card-header bg-transparent">
                        <h5 className="card-title text-primary">3.- CAPACITACIÓN O FORMACIÓN RECIBIDA</h5>
                    </header>
                    <Training register={register}/>
                </article>

                <article className="card border mb-3 bg-light">
                    <header className="card-header bg-transparent">
                        <h5 className="card-title text-primary">4.- EXPERIENCIA LABORAL</h5>
                    </header>
                    <WorkExperience register={register}/>
                </article>

                <article className="card border mb-3 bg-light">
                    <header className="card-header bg-transparent">
                        <h5 className="card-title text-primary">5.- DATOS GENERALES DEL ENCUESTADO</h5>
                    </header>
                    <PersonalData register={register}/>
                </article>

                <article className="card border mb-3 bg-light">
                    <header className="card-header bg-transparent">
                        <h5 className="card-title text-primary">6.- CIUDADANOS/AS OCUPADOS/AS</h5>
                    </header>
                    <Citizens register={register}/>
                </article>

                <article className="card border mb-3 bg-light">
                    <header className="card-header bg-transparent">
                        <h5 className="card-title text-primary">7.- CONDICIONES LABORALES <span>RECIBE POR PARTE DE SU PATRONO O EMPLEADOR:</span>
                        </h5>
                    </header>
                    <WorkingConditions register={register}/>
                </article>

                <article className="card border mb-3 bg-light">
                    <header className="card-header bg-transparent">
                        <h5 className="card-title text-primary">8. DATOS DE CONDICIONES DE VIDA</h5>
                    </header>
                    <LivingConditions register={register}/>
                </article>
            </div>

            <div className="d-flex justify-content-between align-items-center p-4">  {/* Button and upload section */}
                <div className="d-flex flex-column align-items-center">
                    <input
                        type="file"
                        id="requirementsPDF"
                        accept="application/pdf"
                        className="d-none"
                    {...register('requirementsPDF')}
                />
                <label htmlFor='requirementsPDF' className="btn btn-outline-primary">Subir requisitos</label>
            </div>
            <button className="btn btn-primary">Guardar</button>
        </div>
        <Toaster />
    </form>
    )
}
