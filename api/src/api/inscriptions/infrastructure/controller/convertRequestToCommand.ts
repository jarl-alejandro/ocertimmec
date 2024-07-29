import {InscriptionCommand} from "../../domain/InscriptionCommand";
import {CourseRequest} from "./inscriptionController";

export function convertRequestToCommand(requestBody: any, documentFile: any, course: CourseRequest) {
	return {
		type: course.type.toLowerCase(),
		trainingId: course.type === 'Certificate' ? null : course.id,
		certificateId: course.type === 'Training' ? null : course.id,
		name: requestBody.name,
		lastName: requestBody.lastName,
		document: requestBody.document,
		birthdate: requestBody.birthdate,
		direction: requestBody.direction,
		province: requestBody.province,
		city: requestBody.city,
		celphone: requestBody.celphone,
		phone: requestBody.phone,
		email: requestBody.email,
		requirementsPDF: documentFile,

		//CurrentEducation
		primaryInstitutionName: requestBody.primaryInstitutionName,
		primaryCountry: requestBody.primaryCountry,
		primaryCity: requestBody.primaryCity,
		primaryDegree: requestBody.primaryDegree,
		secondaryInstitutionName: requestBody.secondaryInstitutionName,
		secondaryCountry: requestBody.secondaryCountry,
		secondaryCity: requestBody.secondaryCity,
		secondaryDegree: requestBody.secondaryDegree,
		technicalInstitutionName: requestBody.technicalInstitutionName,
		technicalCountry: requestBody.technicalCountry,
		technicalCity: requestBody.technicalCity,
		technicalDegree: requestBody.technicalDegree,
		tertiaryInstitutionName: requestBody.tertiaryInstitutionName,
		tertiaryCountry: requestBody.tertiaryCountry,
		tertiaryCity: requestBody.tertiaryCity,
		tertiaryDegree: requestBody.tertiaryDegree,
		quaternaryInstitutionName: requestBody.quaternaryInstitutionName,
		quaternaryCountry: requestBody.quaternaryCountry,
		quaternaryCity: requestBody.quaternaryCity,
		quaternaryDegree: requestBody.quaternaryDegree,

		// Training
		course1NameCourse: requestBody.course1NameCourse,
		course1InstitutionName: requestBody.course1InstitutionName,
		course1DateCourse: requestBody.course1DateCourse,
		course1HourCourse: requestBody.course1HourCourse,
		course2NameCourse: requestBody.course2NameCourse,
		course2InstitutionName: requestBody.course2InstitutionName,
		course2DateCourse: requestBody.course2DateCourse,
		course2HourCourse: requestBody.course2HourCourse,
		course3NameCourse: requestBody.course3NameCourse,
		course3InstitutionName: requestBody.course3InstitutionName,
		course3DateCourse: requestBody.course3DateCourse,
		course3HourCourse: requestBody.course3HourCourse,

		// WorkExperience
		experience1From: requestBody.experience1From,
		experience1To: requestBody.experience1To,
		experience1CompanyName: requestBody.experience1CompanyName,
		experience1CompanyAddress: requestBody.experience1CompanyAddress,
		experience1CompanyPhone: requestBody.experience1CompanyPhone,
		experience1JobFunction: requestBody.experience1JobFunction,
		experience2From: requestBody.experience2From,
		experience2To: requestBody.experience2To,
		experience2CompanyName: requestBody.experience2CompanyName,
		experience2CompanyAddress: requestBody.experience2CompanyAddress,
		experience2CompanyPhone: requestBody.experience2CompanyPhone,
		experience2JobFunction: requestBody.experience2JobFunction,
		experience3From: requestBody.experience3From,
		experience3To: requestBody.experience3To,
		experience3CompanyName: requestBody.experience3CompanyName,
		experience3CompanyAddress: requestBody.experience3CompanyAddress,
		experience3CompanyPhone: requestBody.experience3CompanyPhone,
		experience3JobFunction: requestBody.experience3JobFunction,

		// PersonalData
		experience3Autoidentificacion: requestBody.experience3Autoidentificacion,

		// Citizens
		tipoOcupacion: requestBody.tipoOcupacion,
		contrato: requestBody.contrato,

		// WorkingConditions
		workingConditionsSeguroMedico: requestBody.workingConditionsSeguroMedico,
		sueldoTrece: requestBody.sueldoTrece,
		sueldoCatorce: requestBody.sueldoCatorce,
		sueldo: requestBody.sueldo,
		cambioPuesto: requestBody.cambioPuesto,
		satisfechoEmpleo: requestBody.satisfechoEmpleo,
		agotadoEmpleo: requestBody.agotadoEmpleo,
		respetanTrabajo: requestBody.respetanTrabajo,
		jefesReconocenTrabajo: requestBody.jefesReconocenTrabajo,
		riesgosLaborales: requestBody.riesgosLaborales,
		deseaCambiarTrabajo: requestBody.deseaCambiarTrabajo,

		// LivingConditions
		livingConditionsSeguroMedico: requestBody.livingConditionsSeguroMedico,
		hijos: requestBody.hijos,
		cuantoHijos: requestBody.cuantoHijos,
		hijosMayorTres: requestBody.hijosMayorTres,
		estudian: requestBody.estudian,
		miembrosHogar: requestBody.miembrosHogar,
		propiedad: requestBody.propiedad,
		servicioBasico: requestBody.servicioBasico,
		discapacidad: requestBody.discapacidad,
		tipoDiscapacidad: requestBody.tipoDiscapacidad,
		socioEmpleo: requestBody.socioEmpleo,
	} as InscriptionCommand;

}
