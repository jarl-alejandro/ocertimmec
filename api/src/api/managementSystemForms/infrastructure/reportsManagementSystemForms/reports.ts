import phantomHtmlToPdf from 'phantom-html-to-pdf'
import template from './form/template'
import template007 from './form/template007'

import Student from '../../../courses/domain/student'
import Certificate from '../../../certificate/domain/model'
import Planning from '../../../planning/domain/model'

const conversion = phantomHtmlToPdf()

async function generatePDF (req, res) {
	let id = req.params.id
	let student = await Student.findById(id)
	let certificate = await Certificate.findById(student.certificateId)
		.populate('id_user')

	let planning = await Planning.findOne({ 'rel': student.certificateId })

	conversion({
		encoding: 'utf8',
		html: template(student, certificate, planning),
		footer: '<div style="font-size:10px;float:left;position:absolute;bottom:2px;">Proceso de Reconocimiento como Organismo Evaluador de la Conformidad OEC - SETEC</div>',
	}, function (err, pdf) {
		pdf.stream.pipe(res)
	})
}

async function generatePDF007 (req, res) {
	let id = req.params.id
	let student = await Student.findById(id)
	let certificate = await Certificate.findById(student.certificateId)
		.populate('id_user')


	conversion({
		encoding: 'utf8',
		html: template007(student, certificate),
		footer: '<div style="font-size:10px;float:left;position:absolute;bottom:2px;">Proceso de Reconocimiento como Organismo Evaluador de la Conformidad OEC - SETEC</div>',
		paperSize: {
			orientation: 'landscape'
		}
	}, function (err, pdf) {
		pdf.stream.pipe(res)
	})
}

export {
	generatePDF,
	generatePDF007
}
