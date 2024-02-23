import headerc014 from './headerc014'

function formatDate(date) {
	let day = date.getDate() >= 10 ? date.getDate() : `0${date.getDate()}`
	let month = date.getMonth() + 1 >= 10 ? 1 + date.getMonth() : `0${date.getMonth() + 1}`
	return `${day}/${month}/${date.getFullYear()}`
}

const month = [
	'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre',
	'Octubre', 'Noviembre', 'Diciembre'
]

function page (props) {
	let date = new Date()
	let dateCerficate = new Date(props.dateCertificate)

	const template = `
<section>
	${ headerc014(1) }
	<br/>
	<div>
		<label>Santo Domingo de los Colorados,</label>
			<span style="display:inline-block;width:60px;border-bottom: 1px solid black;">  ${ dateCerficate.getDate() }</span>
		<label>de</label>
		<span style="display:inline-block;width:130px;border-bottom: 1px solid black;">  ${ month[dateCerficate.getMonth()]}</span>
		<label>del ${dateCerficate.getFullYear()}</label>
	</div>
	<br/>

	<br/>
	<p style="margin:0">Sr.</p>
	<p style="margin:0">Presente</p>

	<h3>ASUNTO: Notificación de Suspensión o retiro de la certificación obtenida en una o varias unidades de competencia.</h3>
	<br/>
	<p>De nuestra consideración:</p>
	<br/>
	<p>Por este medio le informamos que su Certificación por Competencias Laborales ha sido, suspendida o retirada por el/los siguientes/s motivos:</p>
	<h3>SUSPENSIÓN</h3>
	<ul style="margin-left:40px;">
		<li>Actos que puedan poner en riesgo la reputación de MORA LEDESMA WALTER FILIBERTO con nombre comercial OCCERTIMM   como cuerpo certificador o de la SETEC como entidad que otorgo el reconocimiento.</li>
		<li><br/></li>
		<li>No presentar en los plazos establecidos la información requerida para la vigilancia.</li>
		<li><br/></li>
		<li>Quejas con fundamento sobre la conducta ética o profesional de la persona certificada.</li>
		<li><br/></li>
		<li>En los casos de que la Persona Certificada no cumpla con los criterios de vigilancia de acuerdo al esquema de certificación.</li>
		<li><br/></li>
		<li>Presentar documentación falsa para obtener o mantener la certificación.</li>
	</ul>

	<h3>RETIRO</h3>
	<ul style="margin-left:40px;">
		<li>Por solicitud escrita del Titular (persona certificada)</li>
		<li><br/></li>
		<li>Mal uso del certificado, entendiéndose que es el uso no adecuado o distinto al objeto del    Certificado de Competencia otorgado por MORA LEDESMA WALTER FILIBERTO con nombre comercial OCCERTIMM. </li>
		<li><br/></li>
		<li>Incumplimiento comprobado del Acuerdo de Cumplimiento con los lineamientos para personas Certificadas (C009).</li>
		<li><br/></li>
		<li>En los casos de que la Persona Certificada no cumpla con los criterios de vigilancia de acuerdo al esquema de certificación.</li>
		<li><br/></li>
		<li>Incapacidad notificada y/o demostrada de la persona certificada en relación a la competencia laboral certificada.</li>
	</ul>
	<br/>
	<p>Se le recuerda, que el usuario del Certificado descarga y libera a MORA LEDESMA WALTER FILIBERTO con nombre comercial OCCERTIMM al de toda responsabilidad administrativa, civil o penal, que se pudieren derivar del uso del mismo. El usuario declara además que es de su exclusiva responsabilidad el uso del presente Certificado, siendo el único responsable en la ejecución de las actividades que realice como resultado de la obtención del referido instrumento. </p>
	<br/>
	<h4>Por lo tanto, usted debe entregar su CERTIFICADO al recibir esta notificación.</h4>
<div style='page-break-before: always;'></div>
	${ headerc014(2) }
	<br/><br/>
	<p>Atentamente</p>
	<br/>

		<br/>
<br/><br/>
	<section>
		<style>
			.firma-14 {
				display:inline-block;
				width: 40%;
				vertical-align:top;
			}
			.firma-14 p {
				margin: 0;
			}
		</style>
		<article class="firma-14">
			<span style="display:inline-block;width:95%;height:1px;background:black"></span>
			<p>Tec. Walter Mora Ledesma</p>
			<p>Coordinado OEC</p>
			<p>OPERADORA DE CAPACITACIÓN Y CERTIFICACIÓN MORA MURILLO  </p>
		</article>
		<br/><br/>
	</section>
	<p>Recibido por:</p>
		<br/><br/><br/><br/><br/><br/>
	<table>
		<tr>
			<td width="40%" style="border-bottom:1px solid black">${props.name} ${props.lastName}</td>
			<td width="5%"></td>
			<td width="25%" style="border-bottom:1px solid black">${ props.fechaAceptacion ? formatDate(props.fechaAceptacion) : '' }</td>
			<td width="5%"></td>
			<td width="25%" style="border-bottom:1px solid black"></td>
		</tr>
		<tr>
			<td style="text-align:center">Nombre de la persona certificada </td>
			<td></td>
			<td style="text-align:center">Fecha</td>
			<td></td>
			<td style="text-align:center">Firma</td>
		</tr>
	</table>

</section>
`

	return template
}
export default page
