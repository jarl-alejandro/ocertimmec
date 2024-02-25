import headerc012 from './headerc012'
import esquemas from './esquemas'

const month = [
	'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre',
	'Octubre', 'Noviembre', 'Diciembre'
]


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

function generateUC(uc) {
	uc = parseInt(uc)
	let formatUc = ''

	for (let i = 1; i <= uc; i++) {
		formatUc += `UC${i}`
		if (uc !== i) formatUc += ', '
	}

	return formatUc
}

function page(props, certificate, planning) { 
	let dateCerficate = new Date(props.dateCertificate)

const template = `
<section>
	${headerc012(1)}
	<br/><br/>
	<h3 style="text-align:center;">
		REGISTRO DE AUSENCIA A LA EXAMINACIÓN
	</h3>
	<br/><br/>

	<style>
		.page12-header span {
			display: inline-block;
		}
	</style>
	<div class="page12-header">
		<span>El Sr./a/Srta. Candidato/a:</span>
		<span style="width:70%;border-bottom: 1px solid black">${ props.name} ${props.lastName }</span>
		<span>, con</span>

		<p style="margin:0;display:inline-block;">Expediente N.º:</p>
		<span style="width:40%;border-bottom:1px solid black;font-size:11px">
			${ siglas(certificate.name, props.numberAplicacion)}
		</span>

		<span>, convocado para la examinación del esquema de certificación:</span>
		<span style="width:50%;border-bottom:1px solid black;font-size:11px">${ certificate.squemaCode }</span>

		<span>del perfil</span>
		<span style="width:70%;border-bottom:1px solid black;font-size:11px">${ certificate.name }</span>
		
		<span>en las unidades de competencia (UC): </span>
		<span style="width:20%;border-bottom:1px solid black">${generateUC(certificate.uc)}</span>
		
		<span>para la examinación TEÓRICA </span>
		<span style="width:5%;border-bottom:1px solid black">X</span>

		<span>PRÁCTICA</span>
		<span style="width:5%;border-bottom:1px solid black">X</span>

		<span>el día:</span>
		<span style="width:5%;border-bottom:1px solid black">${ dateCerficate.getDate() }</span>

		<span>de:</span>
		<span style="width:5%;border-bottom:1px solid black">${ dateCerficate.getMonth() + 1 }</span>

		<span>de 2018</span>

		<span>, a las</span>
		<span style="width:8%;border-bottom:1px solid black">${ props.hourCertificate }</span>
		<span>h&nbsp;&nbsp;</span>

		<span>, en: (lugar/dirección)</span>
		<span style="width:60%;border-bottom:1px solid black">${props.placeCertificate}</span>

		<span>con el Examinador/a:</span>
		<span style="width:50%;border-bottom:1px solid black">${ certificate.id_user.name }</span>
	</div>
	<br/>

	<div>
		<table style="width:35%;margin:0 auto;">
			<tr>
				<td width="20%" style="border:1px solid black"></td>
				<td width="80%" style="border:1px solid black">ACEPTADO</td>
			</tr>
			<tr>
				<td width="20%" style="border:1px solid black"></td>
				<td width="80%" style="border:1px solid black">NO ACEPTADO</td>
			</tr>
		</table>
	</div>

	<br/>
	<p>Cabe recalcar que de ser el caso podrá abrirse un nuevo proceso de examinación de la competencia, si el candidato/a así lo requiere, siguiendo nuevamente todo el proceso para la certificación.</p>
	<br/>

	<div class="page12-date">
		<style>
			.page12-date span {
				display: inline-block;
			}
		</style>
		<span>Fecha: </span>
		<span style="width:30px;border-bottom:1px solid black;">${ dateCerficate.getDate() }</span>
		<span>de </span>
		<span style="width:30px;border-bottom:1px solid black;">${ dateCerficate.getMonth() + 1}</span>
		<span>de, 2018</span>
	</div>

	<br/><br/><br/>
	<p>Para constancia</p>
	<br/><br/><br/><br/>

		<section>
		<style>
			.firma12jarl-12 {
				display:inline-block;
				width: 35%;
				vertical-align:top;
			}
			.firma12jarl-12 p {
				margin: 0;
			}
		</style>
		<article class="firma12jarl-12">
			<span style="display:inline-block;width:80%;height:1px;background:black"></span>
			<p>Nombre:</p>
			<p>C.I.:</p>
			<p style="font-weight:bold">Supervisor</p>
		</article>

		<article style="float:right" class="firma12jarl-12">
			<span style="display:inline-block;width:80%;height:1px;background:black"></span>
			<p>Nombre:</p>
			<p>C.I.:</p>
			<p style="font-weight:bold">Examinador/a</p>
		</article>
	</section>
<div style='page-break-before: always;'></div>
	${headerc012(2)}

	<h3 style="text-align:center">SOLICITUD DE CAMBIO DE FECHA POR AUSENCIA A LA EXAMINACIÓN.</h3>
	<br/><br/>
	<div class="datepage12occ">
		<style>
			.datepage12occ span {
				display:inline-block;
				border-bottom: 1px solid black;
				width: 70px;
			}
		</style>
		<label>Santo Domingo de los Colorados,</label>
		<span> ${ dateCerficate.getDate() }</span>
		<label>de</label>
		<span style="width: 100px !important;">${ month[dateCerficate.getMonth()] }</span>
		<label>de</label>
		<span>${dateCerficate.getFullYear()}</span>
	</div>
	<br/>
	<p>Coordinador de comité de certificación </p>

	<h3 style="margin:0">ASUNTO: Solicitud de cambio de fecha. </h3>
	<br/>

	<div class="soliocce">
	<style>
		.soliocce span {
			display:inline-block;
			border-bottom: 1px solid black;
			width: 70px;
		}
	</style>
		<label>Por medio del presente, Yo </label>
		<span style="width:60%">${props.name} ${props.lastName}</span>
		<label>candidato para la examinación solicito se asigne lugar y fecha para rendir la examinación</label>
		<label>correspondiente al siguiente esquema de certificación:</label>
		<span style="width:25%">${ certificate.squemaCode }</span>
		<label>del Perfil:</label>
		<span style="width:70%;font-size:11px">${ certificate.name }</span>
		<label>en las unidades de competencia (UC):</label>
		<span style="width:40%">UC${generateUC(certificate.uc)}</span>
	</div>
	<br/><br/><br/>
	<div>
		<p>
			<label>Firma:</label>
			<span style="display:inline-block;width:150px;height:1px;background:black"></span>
		</p>
		<p>Nombre: ${props.name} ${props.lastName}</p>
		<p>Candidato para la examinación</p>
	</div>

	<br/><br/><br/>
	<table style="font-size:13px;width:100%">
		<tr>
			<th colspan="4" style="background:#d9d9d9;border: 1px solid black;text-align:center;">
				<p style="margin:0">USO EXCLUSIVO DE MORA LEDESMA WALTER FILIBERTO CON NOMBRE COMERCIAL OCCERTIMM  </p>
				<p style="margin:0">Notificación de nueva fecha para examinación debido a la ausencia y/o cambio de fecha</p>
			</th>
		</tr>
		<tr>
			<td colspan="2" style="border: 1px solid black;text-align:center;">
				<p style="margin:0">Se acepta la solicitud:</p>
				<p style="margin:0">
					<span>SI________</span>
					<span>NO________</span>
				</p>
			</td>

			<td colspan="2" style="border: 1px solid black;text-align:center;">
				<p style="margin:0;font-weight:bold;margin-top:50px;">Firma: <span style="display:inline-block;width:95px;height:1px;background:black"></span></p>
				<p style="margin:0">Coordinador/a y/o Analista de Certificación</p>
				<p style="margin:0">Nombre: MORA MURILLO WALTER ALFREDO</p>
			</td>
		</tr>
		<tr>
			<th colspan="4" style="background:#d9d9d9;border: 1px solid black;text-align:left;">FECHA DE NUEVA EXAMINACIÓN</th>
		</tr>
		<tr>
			<td style="border: 1px solid black;font-weight:bold">FECHA</td>
			<td style="border: 1px solid black;font-weight:bold">HORA</td>
			<td style="border: 1px solid black;font-weight:bold">Ciudad y Dirección</td>
			<td style="border: 1px solid black;">En el caso de tener alguna duda, favor comunicarse lo antes posible con MORA LEDESMA WALTER FILIBERTO con nombre comercial OCCERTIMM  </td>
		</tr>
	</table>
</section>
`

	return template
}
export default page
