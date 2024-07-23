import Certificate from '../../certificate/domain/model'
import type { Certificate as CertificateType } from "../../certificate/domain/model";
import Planning from '../../planning/domain/model'
import Student from '../domain/student'
import Training from '../../training/domain/model'
import config from '../../../enviroments/config'
import emailFinishRegisterOnCourse from '../infrastructure/emails/emailFinishRegisterOnCourse'
import express from 'express'
import nodemailer from 'nodemailer'
import path from 'path'

async function register (req, res) {

	let student = new Student({
		isVerifiy: true,
		fechaAceptacion: new Date(),

		document: req.body.document.toString(),
		name: req.body.name,
		lastName: req.body.lastName,
		birthdate: req.body.birthdate,
		direction: req.body.direction,
		province: req.body.province,
		city: req.body.city,
		phone: req.body.phone,
		celphone: req.body.celphone,
		fechaAplicacion: req.body.fechaAplicacion,
		email: req.body.email,
		type: req.body.type,
		work: req.body.work,
		nameCompany: req.body.nameCompany,
		activity: req.body.activity,
		experience: req.body.experience,
		numberTrainig: req.body.numberTrainig,
		traning: req.body.traning,
		level: req.body.level,
	})

	if (req.body.type === 'training') {
		student.trainingId = req.body.trainingId
	}
	if (req.body.type === 'certificate') {
		student.certificateId = req.body.certificateId
	}

	try {
		const newStudent = await student.save();

		if (req.body.type === 'certificate') {
			const query = await Student.findById(newStudent._id).populate('certificateId trainingId')
			const tranport = nodemailer.createTransport({
				host: 'smtp.gmail.com',
				port: 465,
				secure: true,
				auth: {
					user: config.EMAIL,
					pass: config.PASSWORD
				},
			})

			let certificateName = '';

			if (query && query.certificateId && typeof query.certificateId === 'object' && 'name' in query.certificateId) {
				const certificate = query.certificateId as CertificateType & Document;
				certificateName = certificate.name.toUpperCase();
			} else {
				certificateName = 'Nombre no disponible';
			}

			const mailOptions = {
				from: config.EMAIL,
				to: query.email as string,
				subject: `CERTIFICACIÓN DE ${certificateName}`,
				html: emailFinishRegisterOnCourse(query._id, query)
			}

			tranport.sendMail(mailOptions, (err, info) => {
				if (err) console.log(err)
				console.log(info)
			})

			res.send({
				status: 201,
				message: 'Se ha guardado con exito felicidades'
			})
		}
	} catch (err) {
		console.log(err)
		res.send({ status: 500, message: 'No se pudo registrar intente nuevamenete' })
	}
}


async function getInscripcion (req, res) {
	let query = await Student.findById(req.params.id)
	res.send(query)
}

async function getInscriptiones (req, res) {
	let query = await Student.find({
		isActive: { $ne: false },
		isCertificateSetec: { $ne: true },
		isNoCertificateSetec: { $ne: true }
	})
		.populate('certificateId')
		.populate('trainingId')

	res.send(query)
}

async function getCertfificate (req, res) {
	let query = await Student.find({ isActive: { $ne: false }, isCertificateSetec: true })
		.populate('certificateId')
		.populate('trainingId')

	res.send(query)
}

async function getNoCertfificate (req, res) {
	let query = await Student.find({ isActive: { $ne: false }, isNoCertificateSetec: true })
		.populate('certificateId')
		.populate('trainingId')

	res.send(query)
}

async function getCertificateTraining (req, res) {
	const certificate = await Certificate.find({ isActive: { $ne: false } })
	const training = await Training.find({ isActive: { $ne: false } })

	res.send([...certificate, ...training])
}

function getDescargar (req, res) {
	const route = path.join(__dirname, '..', '..', '..', 'media', req.params.name)
	res.download(route)
}

async function notify(req, res) {
	let query = await Student.find({
		$or: [
			{ isComplete: true },
			{ isVerifiy: false },
			{ isAll: false },
		]
	}, { type: 1, name: 1, lastName: 1, certificateId: 1, trainingId: 1 })
		.populate('certificateId')
		.populate('trainingId')

	res.send(query)
}

const router = express.Router()

router.get('/inscripciones', getInscriptiones)
router.get('/student-certificados', getCertfificate)
router.get('/student-no-certificados', getNoCertfificate)
router.get('/inscription/:id', getInscripcion)

router.get('/notificaciones', notify)
router.post('/registrame', register)
router.get('/training-certificate', getCertificateTraining)
router.get('/descargar-requisitos/:name', getDescargar)

router.get('/students', async (req,res) => {
	let array = []

	const query = await Student.find({ isComplete: true }).populate('certificateId.id_user')

	query.map(async (item, index) => {
		let planning = await Planning.find({ rel: item.certificateId._id.toString() })
		let object = { item, planning }
		array.push(object)

		if (query.length === index + 1) res.send(array)
	})
})


export default router
