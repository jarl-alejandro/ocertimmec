import Student from '../../domain/student'
import config from '../../../../enviroments/config'
import nodemailer from 'nodemailer'
import emailCertificateAssist from './emailCertificateAssist'
import Mail from "nodemailer/lib/mailer";
import type { Training } from "../../../training/domain/model";


export default async function certificateAssistance(data: any) {
	const student = await Student.findById(data).populate('trainingId')

	if (!student.isCerficateAssiten) {
		const count = await Student.countDocuments({
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

	const mailOptions: Mail.Options = {
		from: config.EMAIL,
		to: student.email as string,
		subject: `CERTIFICACIÓN DE ${(student.trainingId as Training).name.toUpperCase()}`,
		html: emailCertificateAssist(student)
	}

	tranport.sendMail(mailOptions, (err, info) => {
		if (err) console.log(err)
		console.log(info)
	})

}
