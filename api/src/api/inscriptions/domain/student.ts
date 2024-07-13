import mongoose, { Document, PopulatedDoc, Schema, Types, model } from 'mongoose';

import {Certificate} from "../../certificate/domain/model";
import {Training} from "../../training/domain/model";

export interface Student extends Document {
	_id: Types.ObjectId;
	isCerficateAssiten: Boolean,
	certificacion: {
		date: Date,
		code: string
	},
	isActive: Boolean,
	pdfRequisitos: string,
	document: string,
	name: string,
	lastName: string,
	birthdate: Date,
	direction: string,
	province: string,
	city: string,
	phone: string,
	celphone: string,
	email: string,
	type: string,
	work: string,
	nameCompany: string,
	activity: string,
	experience: string,
	numberTrainig: string,
	traning: string,
	level: string,
	isVerifiy: Boolean,
	isComplete: Boolean,
	isAll : Boolean,
	fechaAplicacion: Date,
	fechaAceptacion: Date,
	numberAplicacion: Number,
	codigoCertificado: string,
	placeCertificate: string,
	dateCertificate: Date
	hourCertificate: string,
	notaCertificate: string,

	certificateId: PopulatedDoc<Certificate & Document>,
	trainingId: PopulatedDoc<Training & Document>

	isNoCertificateSetec: Boolean,
	isCertificateSetec: Boolean,
	codeSetec: string,
	dateExpedicion: Date
	dateExpiracion: Date

	primaria: {
		name: string,
		pais: string,
		ciudad: string,
		titulo: string,
	},
	secundaria: {
		name: string,
		pais: string,
		ciudad: string,
		titulo: string,
	},
	tecnico: {
		name: string,
		pais: string,
		ciudad: string,
		titulo: string,
	},
	tercerNivel: {
		name: string,
		pais: string,
		ciudad: string,
		titulo: string,
	},
	cuartoNivel: {
		name: string,
		pais: string,
		ciudad: string,
		titulo: string,
	},
	capacitacion1: {
		nameCourse: string,
		nameInstitucion: string,
		dateCourse: Date,
		hourCourse: string,
	},
	capacitacion2: {
		nameCourse: string,
		nameInstitucion: string,
		dateCourse: Date,
		hourCourse: string,
	},
	capacitacion3: {
		nameCourse: string,
		nameInstitucion: string,
		dateCourse: Date,
		hourCourse: string,
	},
	experiencia1: {
		desde: Date,
		hasta: Date,
		name: string,
		direction: string,
		phone: string,
		funcion: string,
	},
	experiencia2: {
		desde: Date,
		hasta: Date,
		name: string,
		direction: string,
		phone: string,
		funcion: string,
	},
	experiencia3: {
		desde: Date,
		hasta: Date,
		name: string,
		direction: string,
		phone: string,
		funcion: string,
	},
	autoidentificacion: string,
	tipoOcupacion: string,
	contrato: string,
	seguroMedio: string,
	sueldoTrece: string,
	sueldoCatorce: string,
	sueldo: string,
	cambioPuesto: string,
	satisfechoEmpleo: string,
	agotadoEmpleo: string,
	respetanTrabajo: string,
	jefesRecoTrab: string,
	riesgoLaboral: string,
	deseariaCambiarTrabajo: string,
	seguroMedico: string,
	hijos: string,
	cuantoHijos: string,
	hijosMayorTres: string,
	estudian: string,
	miembrosHogar: string,
	propiedad: string,
	servicioBasico: string,
	discapacidad: string,
	tipoDiscapacidad: string,
	socioEmpleo: string,
}

const StudentSchema = new Schema<Student>({
	isCerficateAssiten: Boolean,
	certificacion: {
		type: {},
		default: {
			date: new Date(),
			code: 'OCCERTIMM-01-STODGO-ASIST-ARB-FUT-0001-0001'
		}
	},

	isActive: Boolean,
	pdfRequisitos: { type: String, default: '',  },

	document: { type: String, default: '' },
	name: { type: String, default: '', uppercase: true, },
	lastName: { type: String, default: '', uppercase: true },
	birthdate: { type: Date, default: Date.now() },
	direction: { type: String, default: '', uppercase: true },
	province: { type: String, default: '', uppercase: true },
	city: { type: String, default: '', uppercase: true },
	phone: { type: String, default: '', uppercase: true },
	celphone: { type: String, default: '', uppercase: true },
	email: { type: String, default: '' },
	type: { type: String, default: '', uppercase: true },
	work: { type: String, default: '', uppercase: true },
	nameCompany: { type: String, default: '', uppercase: true },
	activity: { type: String, default: '', uppercase: true },
	experience: { type: String, default: '', uppercase: true },
	numberTrainig: { type: String, default: '', uppercase: true },
	traning: { type: String, default: '', uppercase: true },
	level: { type: String, default: '', uppercase: true },
	isVerifiy: Boolean,
	isComplete: Boolean,
	isAll : Boolean,
	fechaAplicacion: { type: Date, default: Date.now() },
	fechaAceptacion: { type: Date, default: Date.now() },
	numberAplicacion: { type: Number, default: 0 },
	codigoCertificado: { type: String, default: '', uppercase: true },
	placeCertificate: { type: String, default: '', uppercase: true },
	dateCertificate: { type: Date },
	hourCertificate: { type: String },
	notaCertificate: { type: String },
	certificateId: { type: Types.ObjectId, ref: 'Certificate' },
	trainingId: { type: Types.ObjectId, ref: 'Trainings' },

	isNoCertificateSetec: Boolean,
	isCertificateSetec: Boolean,
	codeSetec: { type: String },
	dateExpedicion: { type: Date },
	dateExpiracion: { type: Date },

	primaria: {
		name: { type: String, default: '', uppercase: true },
		pais: { type: String, default: '', uppercase: true },
		ciudad: { type: String, default: '', uppercase: true },
		titulo: { type: String, default: '', uppercase: true }
	},
	secundaria: {
		name: { type: String, default: '', uppercase: true },
		pais: { type: String, default: '', uppercase: true },
		ciudad: { type: String, default: '', uppercase: true },
		titulo: { type: String, default: '', uppercase: true }
	},
	tecnico: {
		name: { type: String, default: '', uppercase: true },
		pais: { type: String, default: '', uppercase: true },
		ciudad: { type: String, default: '', uppercase: true },
		titulo: { type: String, default: '', uppercase: true }
	},
	tercerNivel: {
		name: { type: String, default: '', uppercase: true },
		pais: { type: String, default: '', uppercase: true },
		ciudad: { type: String, default: '', uppercase: true },
		titulo: { type: String, default: '', uppercase: true }
	},
	cuartoNivel: {
		name: { type: String, default: '', uppercase: true },
		pais: { type: String, default: '', uppercase: true },
		ciudad: { type: String, default: '', uppercase: true },
		titulo: { type: String, default: '', uppercase: true }
	},
	capacitacion1: {
		nameCourse: { type: String, default: '', uppercase: true },
		nameInstitucion: { type: String, default: '', uppercase: true },
		dateCourse: { type: Date, default: Date.now() },
		hourCourse: { type: String, default: '', uppercase: true },
	},
	capacitacion2: {
		nameCourse: { type: String, default: '', uppercase: true },
		nameInstitucion: { type: String, default: '', uppercase: true },
		dateCourse: { type: Date, default: Date.now() },
		hourCourse: { type: String, default: '', uppercase: true },
	},
	capacitacion3: {
		nameCourse: { type: String, default: '', uppercase: true },
		nameInstitucion: { type: String, default: '', uppercase: true },
		dateCourse: { type: Date, default: Date.now() },
		hourCourse: { type: String, default: '', uppercase: true },
	},
	experiencia1: {
		desde: { type: Date, default: Date.now() },
		hasta: { type: Date, default: Date.now() },
		name: { type: String, default: '', uppercase: true },
		direction: { type: String, default: '', uppercase: true },
		phone: { type: String, default: '', uppercase: true },
		funcion: { type: String, default: '', uppercase: true }
	},
	experiencia2: {
		desde: { type: Date, default: Date.now() },
		hasta: { type: Date, default: Date.now() },
		name: { type: String, default: '', uppercase: true },
		direction: { type: String, default: '', uppercase: true },
		phone: { type: String, default: '', uppercase: true },
		funcion: { type: String, default: '', uppercase: true }
	},
	experiencia3: {
		desde: { type: Date, default: Date.now() },
		hasta: { type: Date, default: Date.now() },
		name: { type: String, default: '', uppercase: true },
		direction: { type: String, default: '', uppercase: true },
		phone: { type: String, default: '', uppercase: true },
		funcion: { type: String, default: '', uppercase: true }
	},
	autoidentificacion: { type: String, default: '', uppercase: true },
	tipoOcupacion: { type: String, default: '', uppercase: true },
	contrato: { type: String, default: '', uppercase: true },
	seguroMedio: { type: String, default: '', uppercase: true },
	sueldoTrece: { type: String, default: '', uppercase: true },
	sueldoCatorce: { type: String, default: '', uppercase: true },
	sueldo: { type: String, default: '', uppercase: true },
	cambioPuesto: { type: String, default: '', uppercase: true },
	satisfechoEmpleo: { type: String, default: '', uppercase: true },
	agotadoEmpleo: { type: String, default: '', uppercase: true },
	respetanTrabajo: { type: String, default: '', uppercase: true },
	jefesRecoTrab: { type: String, default: '', uppercase: true },
	riesgoLaboral: { type: String, default: '', uppercase: true },
	deseariaCambiarTrabajo: { type: String, default: '', uppercase: true },
	seguroMedico: { type: String, default: '', uppercase: true },
	hijos: { type: String, default: '', uppercase: true },
	cuantoHijos: { type: String, default: '', uppercase: true },
	hijosMayorTres: { type: String, default: '', uppercase: true },
	estudian: { type: String, default: '', uppercase: true },
	miembrosHogar: { type: String, default: '', uppercase: true },
	propiedad: { type: String, default: '', uppercase: true },
	servicioBasico: { type: String, default: '', uppercase: true },
	discapacidad: { type: String, default: '', uppercase: true },
	tipoDiscapacidad: { type: String, default: '', uppercase: true },
	socioEmpleo: { type: String, default: '', uppercase: true },
})

// StudentSchema.plugin(deepPopulate(mongoose));
StudentSchema.plugin(require('mongoose-deep-populate')(mongoose));
export default model<Student>('Student', StudentSchema, 'Student')

