import path from 'path'
import nodemailer from 'nodemailer'
import fs from 'fs'

import Student from '../domain/student'
import emailFinishRegisterOnCourse from '../infrastructure/emails/emailFinishRegisterOnCourse'
import Params from '../domain/params'
import certificateAssistance from '../infrastructure/emails/certificateAssistance'
import config from "../../../enviroments/config";


async function finalizarInscripcion (payload, io, socket) {
	let id_user = socket.id
	const route = path.join(__dirname, '..', '..', '..', 'media')
	let namePDF = ''

	if (payload.file) {
		namePDF = `${payload.inscripcionId}-pdf-requisitos`
		fs.writeFile(`${route}/${namePDF}`, payload.file, err => {
			if (err) console.log(`Error al subir el archivo -> ${err}`)
		})
	}

	let updated = await Student.findByIdAndUpdate(payload.inscripcionId,
		{ ...payload, pdfRequisitos: namePDF, isComplete: true },
		{ new: true }
	)

	let object = {
		type: updated.type.toUpperCase() === 'CERTIFICATE' ? 'certificación' : 'capacitación',
		name: `${updated.name} ${updated.lastName}`,
		nameCurso: 'Finalizó el registro'
	}
	io.emit('notificacion', object)

	console.log(updated)
	io.sockets.connected[id_user].emit('terminar::register')
	io.emit('registerInscripcion')
	io.emit('finalizar::inscripcion', payload)
}

async function finishRegister (payload, io) {
	const student = await Student.findById(payload.id).populate('certificateId')
	const name = student.certificateId.name.toString().toUpperCase()

	let param = await Params.findOneAndUpdate(
		{ name },
		{ name, $inc: { 'counter': 1 } },
		{ upsert: true, 'new': true })
	updatedStudent(param.counter, io, payload)

}

async function updatedStudent(count, io, payload) {
	await Student.findByIdAndUpdate(payload.id,
		{
			isAll: true,
			codigoCertificado: payload.code,
			placeCertificate: payload.placeCertificate,
			dateCertificate: payload.date,
			hourCertificate: payload.hour,
			notaCertificate: payload.nota,
			numberAplicacion: count
		}, { new: true });
	io.emit('registerInscripcion')
}

async function certificate (payload, io) {
	if (payload.noCertificate) {
		let updated = await Student.findByIdAndUpdate(payload.id,
			{
				isNoCertificateSetec: true,
			}, { new: true }
		)
	}
	else {
		let updated = await Student.findByIdAndUpdate(payload.id,
			{
				isCertificateSetec: true,
				codeSetec: payload.codeSetec,
				dateExpedicion: payload.dateExpedicion,
				dateExpiracion: payload.dateExpiracion,
			}, { new: true }
		)

	}

	io.emit('registerInscripcion')
}

async function verificarEmail (payload, io) {
	await Student.findByIdAndUpdate(payload,
		{ isVerifiy: true, fechaAceptacion: new Date() }, { new: true }
	)

	io.emit('registerInscripcion')

	let query = await Student.findById(payload).populate('certificateId')

	const tranport = nodemailer.createTransport({
		host: 'smtp.gmail.com',
		port: 465,
		secure: true,
		auth: {
			user: config.EMAIL,
			pass: config.PASSWORD
		},
	})

	const mailOptions = {
		from: config.EMAIL,
		to: query.email as string,
		subject: `CERTIFICACIÓN DE ${query.certificateId.name.toUpperCase()}`,
		html: emailFinishRegisterOnCourse(query._id, query)
	}

	tranport.sendMail(mailOptions, (err, info) => {
		if (err) console.log(err)
		console.log(info)
	})

}

async function deleted (data, io) {
	let updated = await Student.findByIdAndUpdate(data.id, { isActive: false }, { new: true })
	io.emit('updated::student')
}

async function updated(data, io, socket) {
	let id_user = socket.id

	let updated = await Student.findByIdAndUpdate(data.inscripcionId, { ...data, isComplete: true, isVerifiy: true }, { new: true })
	io.sockets.connected[id_user].emit('terminar::register')
}

function ioCourse (socket, io) {
	socket.on('certificate::assistance', data => certificateAssistance(data,))

	socket.on('finalizar::inscripcion', data => finalizarInscripcion(data, io, socket))
	socket.on('verificar::email', data => verificarEmail(data, io))
	socket.on('finish::register', data => finishRegister(data, io))

	socket.on('registerInscripcion', data => {
		let object = {
			type: data.type.toUpperCase() === 'CERTIFICATE' ? 'certificación' : 'capacitación',
			name: `${data.name} ${data.lastName}`,
			nameCurso: data.nameCurso
		}
		io.emit('notificacion', object)
		io.emit('registerInscripcion')
	})

	socket.on('deleted::student', data => deleted(data, io))
	socket.on('certificado::estudiante', data => certificate(data, io))
	socket.on('updated::student::inscripcion', data => updated(data, io, socket))
}

export default ioCourse
