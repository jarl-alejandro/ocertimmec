import phantomHtmlToPdf from 'phantom-html-to-pdf'
import template from './template'
import Student from '../../../courses/domain/student'

const conversion = phantomHtmlToPdf()

async function generatePDF(req, res) {
	let id = req.params.id
	let student = await Student.findById(id).populate('certificateId')

	conversion({
		encoding: 'utf8',
		html: template(student),
		paperSize: {
			format: 'A4',
			orientation: 'portrait',
			margin: { bottom: '0.4cm', left: '0cm', right: '0cm', top: '0.5cm' },
		}
	}, function (err, pdf) {
		pdf.stream.pipe(res)
	})
		/*
	res.send(template(student))
	*/

}

export default generatePDF
