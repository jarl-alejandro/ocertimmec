import {LastInscription, StudentInfo} from "@/core/domain/StudentInfo";
import {InscriptionCommand} from "@/core/domain/InscriptionCommand";
import {DateUtils} from "@/utils/DateUtils";

export function fillFormFromStudentInfo(setValue: any, studentInfo: StudentInfo): void {
    const inscriptionCommand = transformStudentInfoToInscriptionCommandAdapter(studentInfo);

    (Object.keys(inscriptionCommand) as (keyof InscriptionCommand)[]).forEach((key) => {
        setValue(key, inscriptionCommand[key]);
    });
}

export function transformStudentInfoToInscriptionCommandAdapter(studentInfo: StudentInfo): InscriptionCommand {
    const lastInscription: LastInscription = studentInfo.lastInscription as LastInscription;
    return {
        name: studentInfo.name,
        lastName: studentInfo.lastName,
        document: lastInscription.document,
        birthdate: DateUtils.formatDate(lastInscription.birthdate),
        direction: lastInscription.direction,
        province: lastInscription.province,
        city: lastInscription.city,
        celphone: lastInscription.celphone,
        phone: lastInscription.phone,
        email: lastInscription.email,
        requirementsPDF: null,

        // CurrentEducation
        primaryInstitutionName: lastInscription.primaria.name,
        primaryCountry: lastInscription.primaria.pais,
        primaryCity: lastInscription.primaria.ciudad,
        primaryDegree: lastInscription.primaria.titulo,
        secondaryInstitutionName: lastInscription.secundaria.name,
        secondaryCountry: lastInscription.secundaria.pais,
        secondaryCity: lastInscription.secundaria.ciudad,
        secondaryDegree: lastInscription.secundaria.titulo,
        technicalInstitutionName: lastInscription.tecnico.name,
        technicalCountry: lastInscription.tecnico.pais,
        technicalCity: lastInscription.tecnico.ciudad,
        technicalDegree: lastInscription.tecnico.titulo,
        tertiaryInstitutionName: lastInscription.tercerNivel.name,
        tertiaryCountry: lastInscription.tercerNivel.pais,
        tertiaryCity: lastInscription.tercerNivel.ciudad,
        tertiaryDegree: lastInscription.tercerNivel.titulo,
        quaternaryInstitutionName: lastInscription.cuartoNivel.name,
        quaternaryCountry: lastInscription.cuartoNivel.pais,
        quaternaryCity: lastInscription.cuartoNivel.ciudad,
        quaternaryDegree: lastInscription.cuartoNivel.titulo,

        // Training
        course1NameCourse: lastInscription.capacitacion1.nameCourse,
        course1InstitutionName: lastInscription.capacitacion1.nameInstitucion,
        course1DateCourse: DateUtils.formatDate(lastInscription.capacitacion1.dateCourse),
        course1HourCourse: lastInscription.capacitacion1.hourCourse,
        course2NameCourse: lastInscription.capacitacion2.nameCourse,
        course2InstitutionName: lastInscription.capacitacion2.nameInstitucion,
        course2DateCourse: DateUtils.formatDate(lastInscription.capacitacion2.dateCourse),
        course2HourCourse: lastInscription.capacitacion2.hourCourse,
        course3NameCourse: lastInscription.capacitacion3.nameCourse,
        course3InstitutionName: lastInscription.capacitacion3.nameInstitucion,
        course3DateCourse: DateUtils.formatDate(lastInscription.capacitacion3.dateCourse),
        course3HourCourse: lastInscription.capacitacion3.hourCourse,

        // WorkExperience
        experience1From: DateUtils.formatDate(lastInscription.experiencia1.desde),
        experience1To: DateUtils.formatDate(lastInscription.experiencia1.hasta),
        experience1CompanyName: lastInscription.experiencia1.name,
        experience1CompanyAddress: lastInscription.experiencia1.direction,
        experience1CompanyPhone: lastInscription.experiencia1.phone,
        experience1JobFunction: lastInscription.experiencia1.funcion,
        experience2From: DateUtils.formatDate(lastInscription.experiencia2.desde),
        experience2To: DateUtils.formatDate(lastInscription.experiencia2.hasta),
        experience2CompanyName: lastInscription.experiencia2.name,
        experience2CompanyAddress: lastInscription.experiencia2.direction,
        experience2CompanyPhone: lastInscription.experiencia2.phone,
        experience2JobFunction: lastInscription.experiencia2.funcion,
        experience3From: DateUtils.formatDate(lastInscription.experiencia3.desde),
        experience3To: DateUtils.formatDate(lastInscription.experiencia3.hasta),
        experience3CompanyName: lastInscription.experiencia3.name,
        experience3CompanyAddress: lastInscription.experiencia3.direction,
        experience3CompanyPhone: lastInscription.experiencia3.phone,
        experience3JobFunction: lastInscription.experiencia3.funcion,

        // PersonalData
        experience3Autoidentificacion: lastInscription.autoidentificacion,

        // Citizens
        tipoOcupacion: lastInscription.tipoOcupacion,
        contrato: lastInscription.contrato,

        // WorkingConditions
        workingConditionsSeguroMedico: lastInscription.seguroMedio,
        sueldoTrece: lastInscription.sueldoTrece,
        sueldoCatorce: lastInscription.sueldoCatorce,
        sueldo: lastInscription.sueldo,
        cambioPuesto: lastInscription.cambioPuesto,
        satisfechoEmpleo: lastInscription.satisfechoEmpleo,
        agotadoEmpleo: lastInscription.agotadoEmpleo,
        respetanTrabajo: lastInscription.respetanTrabajo,
        jefesReconocenTrabajo: lastInscription.jefesRecoTrab,
        riesgosLaborales: lastInscription.riesgoLaboral,
        deseaCambiarTrabajo: lastInscription.deseariaCambiarTrabajo,

        // LivingConditions
        livingConditionsSeguroMedico: lastInscription.seguroMedico,
        hijos: lastInscription.hijos,
        cuantoHijos: lastInscription.cuantoHijos,
        hijosMayorTres: lastInscription.hijosMayorTres,
        estudian: lastInscription.estudian,
        miembrosHogar: lastInscription.miembrosHogar,
        propiedad: lastInscription.propiedad,
        servicioBasico: lastInscription.servicioBasico,
        discapacidad: lastInscription.discapacidad,
        tipoDiscapacidad: lastInscription.tipoDiscapacidad,
        socioEmpleo: lastInscription.socioEmpleo,

        trainingId: lastInscription.trainingId,
        certificateId: lastInscription.certificateId
    };
}