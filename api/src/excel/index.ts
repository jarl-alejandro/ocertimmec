import Student from '../api/inscriptions/domain/student'
import Planning from '../api/planning/domain/model'

import type { Certificate as CertificateType } from "../api/certificate/domain/model";
import {UserDocument} from "../api/users/domain/model";

import path from 'path'
import Excel from 'exceljs'

async function generateExcel (req, res) {
	const db = path.join('./db.xlsx')
	const workbook = new Excel.Workbook()
	const query = await Student.find({ isComplete: true })
		.populate('certificateId certificateId.id_user')

	let start = 16
	let indice = 5

	await workbook.xlsx.readFile(db)
	let worksheet = workbook.getWorksheet(1)

	query.map(async (item, index) => {
		let planning = await Planning.find({ rel: item.certificateId._id.toString() })
		let row = worksheet.getRow(start)

		const certificate = item.certificateId as CertificateType & Document;
		const user = certificate.id_user as UserDocument & Document;

		row.getCell(1).value = indice
		row.getCell(2).value = formatDate(item.fechaAplicacion)
		row.getCell(3).value = formatDate(item.fechaAplicacion)
		row.getCell(4).value = item.lastName as string
		row.getCell(5).value = item.name as string
		row.getCell(6).value = item.document as string
		row.getCell(7).value = item.email as string
		row.getCell(8).value = calcularEdad(item.birthdate, item.fechaAceptacion)
		row.getCell(9).value = item.phone as string
		row.getCell(10).value = item.celphone as string
		row.getCell(11).value = "NO"
		row.getCell(12).value = "NO"
		row.getCell(13).value = certificate.name.toString();
		row.getCell(14).value = certificate.uc.toString() >= '1' ? 'X' : ''
		row.getCell(15).value = certificate.uc.toString() >= '2' ? 'X' : ''
		row.getCell(16).value = certificate.uc.toString() >= '3' ? 'X' : ''
		row.getCell(17).value = certificate.uc.toString() >= '4' ? 'X' : ''
		row.getCell(18).value = certificate.uc.toString() >= '5' ? 'X' : ''
		row.getCell(19).value = certificate.uc.toString() >= '6' ? 'X' : ''
		row.getCell(20).value = "SI"
		row.getCell(21).value = "SI"
		row.getCell(22).value = "NO"
		row.getCell(23).value = "NO"
		row.getCell(24).value = "NO"
		row.getCell(25).value = formatDate(item.dateCertificate)
		row.getCell(26).value = "SI"
		row.getCell(27).value = certificate.uc.toString() >= '1' ? 'X' : ''
		row.getCell(28).value = certificate.uc.toString() >= '1' ? 'X' : ''
		row.getCell(29).value = certificate.uc.toString() >= '1' ? '100' : ''
		row.getCell(30).value = certificate.uc.toString() >= '2' ? 'X' : ''
		row.getCell(31).value = certificate.uc.toString() >= '2' ? 'X' : ''
		row.getCell(32).value = certificate.uc.toString() >= '2' ? '100' : ''
		row.getCell(33).value = certificate.uc.toString() >= '3' ? 'X' : ''
		row.getCell(34).value = certificate.uc.toString() >= '3' ? 'X' : ''
		row.getCell(35).value = certificate.uc.toString() >= '3' ? '100' : ''
		row.getCell(36).value = certificate.uc.toString() >= '4' ? 'X' : ''
		row.getCell(37).value = certificate.uc.toString() >= '4' ? 'X' : ''
		row.getCell(38).value = certificate.uc.toString() >= '4' ? '100' : ''
		row.getCell(39).value = certificate.uc.toString() >= '5' ? 'X' : ''
		row.getCell(40).value = certificate.uc.toString() >= '5' ? 'X' : ''
		row.getCell(41).value = certificate.uc.toString() >= '5' ? '100' : ''
		row.getCell(42).value = certificate.uc.toString() >= '6' ? 'X' : ''
		row.getCell(43).value = certificate.uc.toString() >= '6' ? 'X' : ''
		row.getCell(44).value = certificate.uc.toString() >= '6' ? '100' : ''
		row.getCell(45).value = "NO"
		row.getCell(46).value = user.name.toString();
		row.getCell(47).value = "MIKE PINEDA"
		row.getCell(48).value = formatDate(item.dateCertificate)
		row.getCell(49).value = "SI"
		row.getCell(50).value = certificate.uc.toString() >= '1' ? 'X' : ''
		row.getCell(51).value = certificate.uc.toString() >= '2' ? 'X' : ''
		row.getCell(52).value = certificate.uc.toString() >= '3' ? 'X' : ''
		row.getCell(53).value = certificate.uc.toString() >= '4' ? 'X' : ''
		row.getCell(54).value = certificate.uc.toString() >= '5' ? 'X' : ''
		row.getCell(55).value = certificate.uc.toString() >= '6' ? 'X' : ''
		row.getCell(56).value = "NO"
		row.getCell(57).value = "MIKE PINEDA"
		row.getCell(58).value = user.name.toString();
		row.getCell(59).value = formatDate(item.dateCertificate)
		row.getCell(60).value = formatDate(item.dateCertificate)
		row.getCell(61).value = formatDate(item.dateCertificate)
		row.getCell(62).value = formatDate(item.dateCertificate)
		row.getCell(63).value = formatDate(item.dateCertificate)
		row.getCell(64).value = formatDate(item.dateCertificate)
		row.getCell(65).value = "NO"
		row.getCell(66).value = item.codigoCertificado as string
		row.getCell(67).value = certificate.name.toString();
		row.getCell(68).value = ucFormat(certificate.uc.toString())
		row.getCell(69).value = ucFormat(certificate.uc.toString())
		row.getCell(70).value = formatDate(item.dateCertificate)
		row.getCell(71).value = formatDatePlus(item.dateCertificate)
		row.getCell(72).value = "V-001"
		row.getCell(73).value = "VIGENTE"
		row.getCell(74).value = formatDate(item.dateCertificate)
		row.getCell(75).value = ''
		row.getCell(76).value = "TELÉFONO / EMAIL"
		row.getCell(77).value = ''
		row.getCell(78).value = "NINGUNA"

		row.commit()
		start += 1

		indice += 1

		if (query.length === index + 1) {
			await workbook.xlsx.writeFile(db)
			res.download(db);
		}

	})

}

export default generateExcel

function calcularEdad(fecha, fecha2) {
	var hoy = new Date(fecha2);
	var cumpleanos = new Date(fecha);
	var edad = hoy.getFullYear() - cumpleanos.getFullYear();
	var m = hoy.getMonth() - cumpleanos.getMonth();

	if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
		edad--;
	}

	return edad;
}

function formatDate(date) {
	if (date) {
		let day = date.getDate() >= 10 ? date.getDate() : `0${date.getDate()}`
		let month = date.getMonth() + 1 >= 10 ? 1 + date.getMonth() : `0${date.getMonth() + 1}`
		return `${day}/${month}/${date.getFullYear()}`
	}
	return '';
}

function formatDatePlus (date) {
	if (date) {
		date = new Date(date)
		date.setDate(date.getDate() + 5)

		let day = date.getDate() >= 10 ? date.getDate() : `0${date.getDate()}`
		let month = date.getMonth() + 1 >= 10 ? 1 + date.getMonth() : `0${date.getMonth() + 1}`
		return `${day}/${month}/${date.getFullYear()}`
	}
}

function ucFormat (num) {
	num = parseInt(num)
	let ucData = ""

	for (let i = 1; i <= num; i++) {
		ucData += `UC${i} `
	}

	return ucData
}
