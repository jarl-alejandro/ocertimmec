import QRCode from 'qrcode'
import Student from '../../../inscriptions/domain/student'
import config from '../../../../enviroments/config'
import express from 'express'
import phantomHtmlToPdf from 'phantom-html-to-pdf'
import template from './template'

const conversion = phantomHtmlToPdf()

async function handleCertificate (req, res) {
	let student = await Student.findById(
		req.params.userId,
		{ certificacion: 1, name: 1, lastName: 1, trainingId: 1 }
	)
	.populate('trainingId trainingId.id_user')

	const urlPDF = `${config.API}/certificado-capacitacion/${student._id}/certificacion-asistencia`

	QRCode.toDataURL(urlPDF, function (err, url) {
		conversion({
			encoding: 'utf8',
			html: template(student, url),
			paperSize: {
				format: 'A4',
				orientation: 'landscape',
				margin: { bottom: '0cm', left: '0cm', right: '0cm', top: '0cm' },
			},
		}, function (err, pdf) {
			pdf.stream.pipe(res)
		})
	})
}


const router = express.Router()
router.get('/certificado-capacitacion/:userId/certificacion-asistencia', handleCertificate)

export default router
