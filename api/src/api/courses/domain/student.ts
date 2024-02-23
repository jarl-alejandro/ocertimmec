import mongoose from 'mongoose'
const deepPopulate = require('mongoose-deep-populate')(mongoose)

const StudentSchema = new mongoose.Schema({
	isCerficateAssiten: { type: Boolean, default: false  },
	certificacion: {
		type: {},
		default: {
			date: new Date(),
			code: 'OCCERTIMM-01-STODGO-ASIST-ARB-FUT-0001-0001'
		}
	},

	isActive: { type: Boolean, default: true },
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
	isVerifiy: { type: Boolean, default: false },
	isComplete: { type: Boolean, default: false },
	isAll : { type: Boolean, default: false },
	fechaAplicacion: { type: Date, default: Date.now() },
	fechaAceptacion: { type: Date, default: Date.now() },
	numberAplicacion: { type: Number, default: 0 },
	codigoCertificado: { type: String, default: '', uppercase: true },
	placeCertificate: { type: String, default: '', uppercase: true },
	dateCertificate: { type: Date },
	hourCertificate: { type: String },
	notaCertificate: { type: String },
	certificateId: { type: mongoose.Schema.ObjectId, ref: 'Certificate' },
	trainingId: { type: mongoose.Schema.ObjectId, ref: 'Trainings' },

	isNoCertificateSetec: { type: Boolean, default: false },
	isCertificateSetec: { type: Boolean, default: false },
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

StudentSchema.plugin(deepPopulate);
const Student = mongoose.model('Student', StudentSchema, 'Student')

export default Student
