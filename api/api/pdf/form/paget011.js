import headert011 from './headert011'

function siglas(name, numberAplicacion) {
	const cero = 3
	name = name.toUpperCase()
	let siglas = ''

	let newArray = name.split(' ')

	if (newArray.length === 1) {
		siglas = name
	}
	else {
		newArray.forEach(item => {
			let array1 = item.split('')
			siglas += array1[0]
		})
	}

	let counter = numberAplicacion.toString().length
	let total = cero - counter
	let code = ''

	for (let i = 1; total >= i; i++) {
		code += '0'
	}

	return `OCCERTIMM-${siglas.toLocaleUpperCase()}-${code}${numberAplicacion}`
}

function formatDate(date) {
	let day = date.getDate() >= 10 ? date.getDate() : `0${date.getDate()}`
	let month = date.getMonth() >= 10 ? 1 + date.getMonth() : `0${date.getMonth() + 1}`
	return `${day}/${month}/${date.getFullYear()}`
}

const arrayData = [
	'Asiste puntualmente a la examinación y su presentación personal está acorde al ámbito de la examinación ejecutada:',
	'Durante el proceso de examinación, el experto cumple con los procedimientos establecidos y el uso de los formatos y documentos del proceso de certificación de personas de una manera:',
	'Durante el proceso de examinación, el experto evidenció el cumplimiento de normas de seguridad afines a la competencia a examinar de forma:',
	'Su interacción con el examinado en los aspectos, técnicos, de capacidades, conocimientos, destrezas y actitudes permitió obtener evidencias objetivas de una manera:',
	'Sus diferentes formas de expresión (oral, escrita y corporal), permitieron el desarrollo de la examinación de una forma:',
	'Propició un ambiente de cordialidad y respeto con el examinado.',
	'Respetó, cumplió e hizo cumplir lo estipulado en el código de ética y evidenció imparcialidad de una manera:',
	'Antes, durante y al finalizar el proceso de examinación la interacción con el personal de nombre del OEC  en el ámbito del proceso de examinación mantuvo una actitud de respeto.',
	'Al finalizar la examinación entrega todos los documentos y registros que permiten evidenciar el cumplimiento del proceso de una forma:',
	'La evaluación al examinador por parte del examinado recopilada en el formato de encuesta de satisfacción de los candidatos es positiva en al menos el 70%',
]

function page (props, certificate) {

let template = `
<section>
	${headert011(1)}
	<br/>
	<style>
		.center  {
			text-align: center;
		}
		.border-label-t11 {
			font-weight: bold;
		}

		.perfil-t11 {
			padding: 1rem 1px;
			background: #c6d9f1;
		}
		.tablet11 th {
			font-size: 14px;
			border: 1px solid black;
		}
		.tablet11 td{
			border: 1px solid black;
		}
		.border-t11 {
			border: 1px solid black;
			padding: 10px;
		}
	</style>
	
	<table style="width:100%;" class="tablet11">
		<tr >
			<td style="padding: 1rem" colspan="3">
				<label class="border-label-t11">Apellido/s y nombre/s del/la candidata a examinador/a: </label>
				<span>${ certificate.id_user.name.toUpperCase() }</span>
			</td>
		</tr>

		<tr>
			<td style="padding: 1rem">
				<label class="border-label-t11">C.C. </label>
				<span>${ certificate.id_user.cedula }</span>
			</td>

			<td style="padding: 1rem">
				<label class="border-label-t11">Código Nº: </label>
				<span>${ siglas(certificate.name, props.numberAplicacion)}</span>
			</td>

			<td style="padding: 1rem">
				<label class="border-label-t11">Fecha: </label>
				<span>${ formatDate(props.dateCertificate) }</span>
			</td>
		</tr>

		<tr>
			<td style="padding: 1rem"  colspan="3">
				<label class="border-label-t11">Lugar de la examinación práctica: </label>
				<span>${ props.placeCertificate }</span>
			</td>
		</tr>
	</table>
	<br/><br/>

	<div class="perfil-t11">
		<label class="border-label-t11">Perfil:</label>
		<span>${ certificate.name }</span>
	</div>

	<p>A continuación elija la cálificación para el desarrollo de la evaluación del examinador. Los puntajes se detallan:</p>

	<div style="margin: 0 auto;width: 60%;">
		<table style="width:100%;" class="tablet11">
			<td>1 Malo</td>
			<td>2 Regular</td>
			<td>3 Bueno</td>
			<td>4 Muy bueno</td>
			<td>5 Excelente</td>
		</table>
	</div>

	<br/>
	<table width="100%">
		<thead>
			<tr>
				<th width="5%"></th>
				<th width="75%"></th>
				<th  width="20%" class="border-t11" style="background:#d9d9d9;font-size:15px">PUNTAJE ASIGNADO</th>
			</tr>
		</thead>
		<tbody>
`

	arrayData.map((item, index) => {
		template += `
		<tr>
			<td class="border-t11 center">${index + 1}</td>
			<td class="border-t11">${item}</td>
			<td class="border-t11"></td>
		</tr>
		`
	})

	template += `
		</tbody>
	</table>

	<table width="60%" style="float: right">
		<tbody>
				<tr>
				<td width="67%" class="border-t11" style="font-weight:bold">NOTA MÁXIMA 50 PUNTOS</td>
				<td width="33.5%" class="border-t11"></td>
			</tr>
			<tr>
				<td class="border-t11" style="font-weight:bold">PORCENTAJE DE CUMPLITIEMPO </td>
				<td class="border-t11"></td>
			</tr>
		</tbody>
	</table>

	<div style='page-break-before: always;'></div>
	${headert011(2)}

<br/>
	<div class="commentst11">
		<style>
			.commentst11 label {
				display: inline-block;
				width: 65%;
			}
			.commentst11 span {
				display: inline-block;
				width: 34%;
				height: 1px;
				background: black;
			}
		</style>
		<label>COMENTARIOS DEL PERSONAL DE LA SETEC QUE REALIZÓ LA OBSERVACIÓN:</label>
		<span></span>
		<span style="width: 100%;margin-top:2rem;"></span>
	</div>
<br/><br/>
	<table style="width:100%">
		<tr>
			<td width="30%" style="white-space: nowrap;">RESPONSABLE DE EVALUACIÓN</td>
			<td colspan="3"></td>
		</tr>
		<tr>
			<td width="30%"></td>
			<td width="40%" style="border-top: 1px solid black;">Lcda. Lida Murillo Gordillo</td>
			<td width="20%" style="text-align:center;border-top: 1px solid black;">FIRMA</td>
			<td width="10%" style="text-align:center;border-top: 1px solid black;">FECHA</td>
		</tr>
		<tr><td><br/><br/></td></tr>
		<tr>
			<td style="white-space: nowrap;">RESPONSABLE DE EVALUACIÓN</td>
			<td colspan="3"></td>
		</tr>
		<tr>
			<td></td>
			<td style="border-top: 1px solid black;">Tec. Walter Mora Ledesma</td>
			<td style="text-align:center;border-top: 1px solid black;">FIRMA</td>
			<td style="text-align:center;border-top: 1px solid black;">FECHA</td>
		</tr>
	</table>
</section>
`

return template
}

export default page
