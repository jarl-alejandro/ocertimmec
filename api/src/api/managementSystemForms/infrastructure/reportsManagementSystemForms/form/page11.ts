import headerc011 from './headerc011'
import control from './control'

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
	if (!date) {
		return '';
	}
	let day = date.getDate() >= 10 ? date.getDate() : `0${date.getDate()}`
	let month = date.getMonth() + 1 >= 10 ? 1 + date.getMonth() : `0${date.getMonth() + 1}`
	return `${day}/${month}/${date.getFullYear()}`
}

function page(props) {
	let edad = calcularEdad(new Date(props.birthdate), new Date(props.fechaAplicacion))

let template = `
<section>
	${headerc011(1)}
	<br/>
	<p>MORA LEDESMA WALTER FILIBERTO con nombre comercial OCCERTIMM   y la SETEC ponen a disposición de los usuarios este instrumento, para comunicar quejas y apelaciones en relación a los servicios de certificación de personas.</p>
	<br/>
	<p>Cada queja o apelación debe ser presentada por escrito y firmada por el interesado, entregada vía oficio, correo electrónico, fax u otros medios en la oficina de certificación de:</p>
	<br/>
	<p>MORA LEDESMA WALTER FILIBERTO con nombre comercial OCCERTIMM:</p>
	<br/>
	<ul style="margin-left:60px">
		<li>
			<span style="display:inline-block;text-decoration:underline;width:200px">Dirección física:</span>
			<span>Cooperativa Unión Cívica, Principal s/n y calle 11</span>
		</li>
		<li>
			<span style="display:inline-block;text-decoration:underline;width:200px">Teléfono:</span>
			<span>023766135 - 0989231482</span>
		</li>
		<li>
			<span style="display:inline-block;text-decoration:underline;width:200px">Correo electrónico:</span>
			<span>occertimm@gmail.com</span>
		</li>
	</ul>
	<br/>
	<h3>SETEC</h3>
	<ul style="margin-left:60px">
		<li>
			<span style="display:inline-block;text-decoration:underline;width:200px">Dirección física:</span>
			<span>Av. Amazonas N38-42 y Villalengua Quito - Ecuador</span>
		</li>
		<li>
			<span style="display:inline-block;text-decoration:underline;width:200px">Teléfono:</span>
			<span>02-2257802 – 02-2257803</span>
		</li>
		<li>
			<span style="display:inline-block;text-decoration:underline;width:200px">Correo electrónico:</span>
			<span>contacto.ciudadano@setec.gob.ec</span>
		</li>
	</ul>
	<br/>
	<p>MORA LEDESMA WALTER FILIBERTO con nombre comercial OCCERTIMM Y LA SETEC se comprometen a investigar y resolver los quejas y apelaciones, comunicando oportunamente las conclusiones a los peticionarios. </p>
	<br/>
	<p>Todas las quejas y apelaciones serán manejadas de manera confidencial, justa, imparcial, constructiva y oportuna.</p>
	<br/>
	<p>ENTREGUE UN EJEMPLAR EN EL OEC Y UN EJEMPLAR EN LA SETEC</p>
	<h4 style="text-decoration:uderline">Marque lo que corresponde:</h4>
	<article style="border:1px solid black;width:85%;margin: 0 auto;">
		<h3 style="margin-left:15px;margin-top:0">
			<span style="display:inline-block;vertical-align:top;border: 1px solid black;width:20px;height:20px;margin-top:5px;"></span>
			<span style="display:inline-block;line-height:5px;vertical-align:center;">Queja</span>
		</h3>
		<ul style="margin-left:30px">
			<li>Si usted es usuario de los servicios de Certificación de Personas por competencias laborales de MORA LEDESMA WALTER FILIBERTO con nombre comercial OCCERTIMM (Postulante, candidato a la certificación o persona certificada) y desea expresar una insatisfacción a MORA LEDESMA WALTER FILIBERTO con nombre comercial OCCERTIMM en relación al servicio prestado.</li>
			<br/>
			<li>Si usted es una <strong>persona natural o jurídica</strong> y desea expresar una <span style="text-decoration:underline">insatisfacción a MORA LEDESMA WALTER FILIBERTO con nombre comercial OCCERTIMM en relación a las actividades y/o conducta de una persona certificada</span> o de un proceso de certificación en cualquiera de sus procesos.</li>
		</ul>
	</article>
	<br/>

	<article style="border:1px solid black;width:85%;margin: 0 auto;">
		<h3 style="margin-left:15px;margin-top:0">
			<span style="display:inline-block;vertical-align:top;border: 1px solid black;width:20px;height:20px;margin-top:5px;"></span>
			<span style="display:inline-block;line-height:5px;vertical-align:center;">Apelación</span>
		</h3>
		<ul style="margin-left:30px">
			<li>Si usted es usuario de los servicios de Certificación de Personas por competencias laborales de MORA LEDESMA WALTER FILIBERTO con nombre comercial OCCERTIMM (Postulante, candidato a la certificación o persona certificada) y desea solicitar la reconsideración de cualquier decisión en relación a su estado deseado de certificación.</li>
		</ul>
	</article>
	<div style='page-break-before: always;'></div>
	${headerc011(2)}
	<br/>

	<h3>Nombre de la autoridad a quien se dirige la queja o apelación:</h3>
	<br/>
	<h3 style="text-decoration:underline">2. Datos de identificación de quien presenta la queja o apelación:</h3>
	<br/>

	<table style="font-weight:bold;">
		<tr>
			<td colspan="2" style="border:1px solid black;height:50px">
				Nombres completos:
				${ props.name } ${ props.lastName }
			</td>
			<td style="border:1px solid black;height:50px">
				Número de cédula de ciudadanía o pasaporte:
				${ props.document }
			</td>
		</tr>
		<tr>
			<td colspan="3" style="border:1px solid black">
				Lugar de domicilio: ${ props.direction }
			</td>
		</tr>
		<tr>
			<td width="40%" style="border:1px solid black">Nacionalidad:</td>
			<td width="20%" style="border:1px solid black">Edad: ${ edad ? edad : '' }</td>
			<td width="40%" style="border:1px solid black">Profesión u ocupación: ${ props.activity }</td>
		</tr>
		<tr>
			<td style="border:1px solid black">Teléfonos de contacto: ${ props.phone }</td>
			<td style="border:1px solid black">Domicilio:</td>
			<td style="border:1px solid black">Celular/es: ${ props.celphone }</td>
		</tr>
	</table>
	<br/>
	<h3>
		<span style="text-decoration:underline">3. Detalle del acto o acción motivo de la queja o apelación; mismo que, deberá contener el correspondiente respaldo documental</span>
		<span style="font-weight:normal"> (puede anexar otra hoja con la descripción detallada de su queja o apelación).</span>
	</h3>
	<h3 style="text-decoration:underline">4. Lugar en donde recibirá las notificaciones respectivas:</h3>
	<br/>
	<table style="font-weight:bold;width:100%;">
		<tr>
			<td style="border:1px solid black" colspan="2">Ciudad y dirección domiciliaria:  ${ props.direction }</td>
		</tr>
		<tr>
			<td width="50%" style="height:50px;border:1px solid black" style="height:50px;">Teléfono(s): ${ props.phone }</td>
			<td width="50%" style="height:50px;border:1px solid black" style="height:50px;">Dirección de correo electrónico: ${ props.email }</td>
		</tr>
	</table>
	<br/>
	<h3>
		<span style="text-decoration:underline">5. Descripción de los anexos que se adjuntan</span>
		<span style="font-weight:normal"> (puede anexar otra hoja con la descripción detallada de los anexos que se adjuntan a su queja o apelación como respaldos).</span>
	</h3>
	<br/>
	<table style="width:100%">
		<tr>
			<td style="height:50px;font-weight:bold;border:1px solid black">Nombre: ${props.name} ${props.lastName}</td>
			<td style="height:50px;font-weight:bold;border:1px solid black">Número de cédula de ciudadanía: ${props.document}</td>
		</tr>
		<tr>
			<td style="height:50px;font-weight:bold;border:1px solid black">Firma:</td>
			<td style="height:50px;font-weight:bold;border:1px solid black">Fecha: ${ formatDate(props.dateCertificate) }</td>
		</tr>
	</table>
	<br/>
	<h3>PERSONAL QUE RECEPTA LA QUEJA:</h3>
	<p>Nombre: MORA MURILLO WALTER ALFREDO</p>
	<p>Cargo: ANALISTA</p>
	<p>Firma:</p>
	<p>Fecha: ${ formatDate(props.dateCertificate) }</p>
</section>
`

	return template
}
export default page
