import headerc005 from './headerc005'

function formatDate(date) {
	if (!date) {
		return '';
	}
	let day = date.getDate() >= 10 ? date.getDate() : `0${date.getDate()}`
	let month = date.getMonth() + 1 >= 10 ? 1 + date.getMonth() : `0${date.getMonth() + 1}`
	return `${day}/${month}/${date.getFullYear()}`
}

function page(props, certificate, planning) {
	const template = `
<section>
	${headerc005(1)}
	<br/>

	<table style="width:100%;">
		<tr>
			<td style="height:100px;font-size:11px;border:1px solid black;padding-left:5px;">
				Fecha de la examinación:
				${ props.dateCertificate ? formatDate(props.dateCertificate) : '' }
			</td>
			<td style="height:100px;font-size:11px;border:1px solid black;padding-left:5px;">
				Perfil a examinar:
				${ certificate.name ? certificate.name : '' }
			</td>
		</tr>
		<tr>
			<td style="height:100px;font-size:11px;border:1px solid black;padding-left:5px;">
				Nombre Examinador:
				${ certificate.id_user.name ? certificate.id_user.name : '' }
			</td>
			<td style="height:100px;font-size:11px;border:1px solid black;padding-left:5px;">
				Nombre Candidato:
				${ props.name } ${ props.lastName }
			</td>
		</tr>
	</table>
	<br/>
	<p>
		MORA LEDESMA WALTER FILIBERTO con nombre comercial OCCERTIMM está comprometido a mantener la imparcialidad en sus procesos de examinación y certificación, por lo que es importante que se declare cualquier conflicto de interés real o percibido con el candidato a examinar antes de llevar a cabo la examinación. 
		Un conflicto de interés real o percibido puede existir a través de cualquier de las siguientes situaciones:
	</p>

	<div style="margin-left:30px">
		<p style="font-size:12px;">1. Haber impartido algún curso de capacitación o formación al candidato durante los últimos dos años.</p>
		<p style="font-size:12px;">2. Tener algún tipo de relación personal directa o indirecta con el candidato.</p>
		<p style="font-size:12px;">3. Haber sostenido alguna relación profesional directa (por ejemplo, jefe directo o subordinado directo) con el candidato durante los últimos dos años.</p>
		<p style="font-size:12px;">4. Intereses personales o beneficio propio.</p>
		<p style="font-size:12px;">5. Amenazas o intimidación en relación a la examinación de este candidato.</p>
		<p style="font-size:12px;">6. Intereses financieros de mi persona o de la institución que represento.</p>
		<p style="font-size:12px;">7. Cualquier situación que puede afectar el juicio objetivo del examinador y poner en riesgo que el proceso de examinación sea justo, fiable y objetivo.</p>
	</div>
	<br/>

	<p>Por lo tanto, declaro bajo juramento que:</p>
	<table>
		<tr>
			<td width="10%" style="border:1px solid black;background:#d9d9d9"></td>
			<td width="90%" style="border:1px solid black;">NO MANTENGO NINGÚN CONFLICTO DE INTERÉS REAL O PERCIBIDO CON EL CANDIDATO A EXAMINAR; ó</td>
		</tr>
		<tr>
			<td style="border:1px solid black;background:#d9d9d9"></td>
			<td style="border:1px solid black;">
				<label>EXISTE UN CONFLICTO DE INTERÉS REAL O PERCIBIDO CON EL CANDIDATO A EXAMINAR DEBIDO A LA SIGUIENTE SITUACIÓN:</label>
				<span style="display:inline-block;width:150px;height:1px;background:black"></span>
				<label>
					(La situación será analizada por parte de personal de MORA LEDESMA WALTER FILIBERTO con nombre comercial OCCERTIMM para determina si es necesario conseguir otro examinador):
				</label>
			</td>
		</tr>
	</table>
		<br/>
		<br/>

		<table style="width:100%">
			<tr>
				<td width="33%" style="border-bottom:1px solid black;white-space:nowrap;">${certificate.id_user.name ? certificate.id_user.name : ''}</td>
				<td width="10%"></td>
				<td width="26%" style="border-bottom:1px solid black"></td>
				<td width="10%"></td>
				<td width="26%" style="border-bottom:1px solid black">${ !!props.dateCertificate && formatDate(props.dateCertificate) }</td>
			</tr>
			<tr>
			<td style="text-align:center">NOMBRE EXAMINADOR</td>
			<td></td>
			<td style="text-align:center">FIRMA</td>
			<td></td>
			<td style="text-align:center">FECHA</td>
			</tr>
		</table>
</section>
`

	return template
}
export default page
