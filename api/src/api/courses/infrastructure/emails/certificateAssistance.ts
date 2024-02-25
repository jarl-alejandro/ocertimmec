import Student from '../../domain/student'
import config from '../../../../config'
import nodemailer from 'nodemailer'
import emailCertificateAssist from './emailCertificateAssist'


export default async function certificateAssistance (data) {
	const student = await Student.findById(data).populate('trainingId')

	if (!student.isCerficateAssiten) {
		const count = await Student.count({
			trainingId: student.trainingId._id,
			isCerficateAssiten: true
		})
		
		const payload = {
			date: new Date("Thu Aug 13 2020 08:02:45 GMT-0500 (hora de Ecuador)"),
			code: `OCCERTIMM-01-STODGO-ASIST-ARB-FUT-0001-000${count + 1}`
		}

		await Student.findByIdAndUpdate(data, {
			isCerficateAssiten: true,
			certificacion: payload
		}, { new: true })
	}

	const tranport = nodemailer.createTransport({
		host: 'smtp.gmail.com',
		port: 465,
		secure: true,
		auth: {
			user: config.EMAIL,
			pass: config.PASSWORD
		},
	})

	// const email = "jarlalejor@gmail.com"
	const email = student.email;
	const subject = `CERTIFICACIÓN DE ${student.trainingId.name.toUpperCase()}`

	const mailOptions = {
		from: config.EMAIL,
		to: email,
		subject,
		html: emailCertificateAssist(student)
	}

	tranport.sendMail(mailOptions, (err, info) => {
		if (err) console.log(err)
		console.log(info)
	})

}
