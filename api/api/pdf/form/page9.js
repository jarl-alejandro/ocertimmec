import headerc009 from './headerc009'
import control from './control'

function formatDate(date) {
	let day = date.getDate() >= 10 ? date.getDate() : `0${date.getDate()}`
	let month = date.getMonth() + 1 >= 10 ? 1 + date.getMonth() : `0${date.getMonth() + 1}`
	return `${day}/${month}/${date.getFullYear()}`
}

function page(props, certificate, planning) {
const template = `

<section>
	${headerc009(1)}
	<br/>

	<style>
		.page9Table {
			width:100%;
		}
		.page9Table th {
			text-align:left;
			font-size: 14px;
			padding-left: 15px;
		}
		.page9Table th, .page9Table td {
			border: 1px solid black;
		}
	</style>
	<table class="page9Table">
		<tr>
			<th width="40%">Nombre de la persona certificada:</th>
			<td width="60%">${ props.name} ${props.lastName }</td>
		</tr>
		<tr>
			<th width="40%">Cédula de Ciudadanía:</th>
			<td width="60%">${ props.document }</td>
		</tr>
		<tr>
			<th width="40%">Fecha:</th>
			<td width="60%">${ props.dateCertificate ? formatDate(props.dateCertificate) : '' }</td>
		</tr>
		<tr>
			<th width="40%">Dirección:</th>
			<td width="60%">${ props.direction }</td>
		</tr>
		<tr>
			<th width="40%">Teléfono:</th>
			<td width="60%">${ props.phone }</td>
		</tr>
		<tr>
			<th width="40%">Correo electrónico:</th>
			<td width="60%">${ props.email }</td>
		</tr>
	</table>
	<p>El presente acuerdo compromete a la persona certificada a cumplirlo durante el período de vigencia de su certificación:</p>
	<div style="margin-left:30px;">
		<p>1. El logotipo de MORA LEDESMA WALTER FILIBERTO con nombre comercial OCCERTIMM   no puede ser usado bajo ningún concepto, ni en tarjetas de presentación de la persona certificada, ni en papelería, etc. </p>
		<span style="display:inline-block;width:5px;height:5px;"></span>
		<p>2. No está permitido el uso del logotipo de la SETEC o cualquier otra organización relacionada con la certificación.</p>
		<span style="display:inline-block;width:5px;height:5px;"></span>
		<p>3. El NOMBRE de MORA LEDESMA WALTER FILIBERTO con nombre comercial OCCERTIMM y de la SETEC no serán responsables de cualquier costo ocasionado por el mal uso de sus logotipos, certificados o marcas.</p>
		<span style="display:inline-block;width:5px;height:5px;"></span>
		<p>4. Cuando se haga referencia a la certificación siempre debe apegarse estrictamente al alcance de esta (Unidades de competencia o el esquema del perfil con el cual fue certificado).</p>
		<span style="display:inline-block;width:5px;height:5px;"></span>
		<p>5. No se pondrá en riesgo de perjudicar los nombres de MORA LEDESMA WALTER FILIBERTO con nombre comercial OCCERTIMM y de la SETEC a través de actos o hechos referentes al proceso de certificación.</p>
		<span style="display:inline-block;width:5px;height:5px;"></span>
		<p>6. No se podrá usar el certificado o hacer referencia a la certificación en el caso de suspensión o revocación del mismo. </p>
		<span style="display:inline-block;width:5px;height:5px;"></span>
		<p>7. En el caso de revocación de la certificación o cambio del alcance, el certificado debe ser devuelto a MORA LEDESMA WALTER FILIBERTO con nombre comercial OCCERTIMM.</p>
		<span style="display:inline-block;width:5px;height:5px;"></span>
		<p>8. La persona certificada tiene la obligación de notificar por escrito a MORA LEDESMA WALTER FILIBERTO con nombre comercial OCCERTIMM   de manera inmediata cualquier aspecto que pueda afectar su capacidad de cumplir con los requisitos de competencia bajo los cuales fue certificado (accidentes, etc.).</p>
		<span style="display:inline-block;width:5px;height:5px;"></span>
		<p>9. MORA LEDESMA WALTER FILIBERTO con nombre comercial OCCERTIMM   podrá tomar las acciones jurídicas que sean pertinentes ante cualquier mal uso y no cumplimiento con lo establecido en este acuerdo.</p>
		<span style="display:inline-block;width:5px;height:5px;"></span>
		<p>10. El usuario del Certificado (persona certificada) descarga y libera a MORA LEDESMA WALTER FILIBERTO con nombre comercial OCCERTIMM   de toda responsabilidad administrativa, civil o penal, que se pudieren derivar del uso del mismo. El usuario declara</p>
		<p>El usuario del Certificado (persona certificada) descarga y libera a MORA LEDESMA WALTER FILIBERTO con nombre comercial OCCERTIMM   de toda responsabilidad administrativa, civil o penal, que se pudieren derivar del uso del mismo. El usuario declara</p>

			<br/><br/><br/><br/><br/>
	<section class="box-firma">
		<style>
			.box-firma {
				width: 40%;
				margin:0 auto;
				text-align:center;
			}
			.firma {
				display:inline-block;
				width: 100%;
				margin:0 auto;
				vertical-align:top;
			}
			.box-firma p {
				margin: 0;
			}
		</style>
		<article class="firma">
			<span style="display:inline-block;width:95%;height:1px;background:black"></span>
			<p style="font-weight:bold">Firma de la persona certificada</p>
		</article>
	</section>
	</div>
</section>
`

return template
}
export default page
