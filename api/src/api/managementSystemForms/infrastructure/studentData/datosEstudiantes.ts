import phantomHtmlToPdf from 'phantom-html-to-pdf'
import template from './template'
import Student from '../../../inscriptions/domain/student'

const conversion = phantomHtmlToPdf()

async function datosEstudiantes(req, res) {
	let id = req.params.id
	let student = await Student.findById(id)

	conversion({
		encoding: 'utf8',
		html: template(student),
	}, function (err, pdf) {
		pdf.stream.pipe(res)
	})
}

export default datosEstudiantes
