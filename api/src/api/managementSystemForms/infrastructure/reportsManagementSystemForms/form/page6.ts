import headerc006 from './headerc006'
import control from './control'
import type {Certificate} from "../../../../certificate/domain/model";

function formatDate(date) {
	if (!date) {
		return '';
	}
	let day = date.getDate() >= 10 ? date.getDate() : `0${date.getDate()}`
	let month = date.getMonth() + 1 >= 10 ? 1 + date.getMonth() : `0${date.getMonth() + 1}`
	return `${day}/${month}/${date.getFullYear()}`
}

function adapterList(list: string[]) {
	return list.map(item => {
		return `
		<tr>
			<td style="border:1px solid black;">${item}</td>
			<td style="border:1px solid black;"></td>
			<td style="border:1px solid black;"></td>
			<td style="border:1px solid black;"></td>
		</tr>
		`;
	}).join('');
}

function page(props, certificate: Certificate, planning) {
	const materials: string[] = certificate.materials || [];
	const tools: string[] = certificate.tools || [];
	const equipments: string[] = certificate.equipments || [];

	const materialsHTML = adapterList(materials);
	const toolsHTML = adapterList(tools);
	const equipmentsHTML = adapterList(equipments);

const template = `
<style>
	.side table {
		width: 100%;
	}
	.side th {
		background: #315496;
		color: white;
	}
	.side td {
		height: 28px;
	}

</style>
<section>
	${headerc006(1)}
	<br/>
	<p style="border:1px solid black;text-align:center;padding: 20px 0;">
		LISTA DE VERIFICACIÓN DEL LUGAR DE EXAMINACIÓN
		DEL  ESQUEMA DE CERTIFICACIÓN
	</p>
<br/>
	<table style="width:100%">
		<tr>
			<td width="50%" style="border:1px solid black;">NOMBRE DEL LUGAR DE EXAMINACIÓN:</td>
			<td width="50%" style="border:1px solid black;"> ${certificate.place ? certificate.place : ''} </td>
		</tr>
		<tr>
			<td width="50%" style="border:1px solid black;">FECHA DE VERIFICACIÓN:</td>
			<td width="50%" style="border:1px solid black;">${ props.fechaAceptacion ? formatDate(props.fechaAceptacion) : '' }</td>
		</tr>
	</table>

	<br/>
	<div>
		<label style="font-weight:bold;width:10%">PERFIL:</label>
		<span style="display:inline-block;width:90%;border-bottom:1px solid black;font-size:11px">	${ certificate.name ? certificate.name : '' }</span>
	</div>
	<br/>
	<section>
		<article style="display:inline-block;width:48%;vertical-align: top;" class="side">
			<table style="font-size:14px;">
				<thead>
					<tr>
						<th width="70%" style="border:1px solid black;font-size:12px">INFRAESTRUCTURA LABORATORIOS - ESPACIOS PARA PRÁCTICAS</th>
						<th width="10%" style="border:1px solid black;">SI</th>
						<th width="10%" style="border:1px solid black;">NO</th>
						<th width="10%" style="border:1px solid black;">N/A</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td style="border:1px solid black;"></td>
						<td style="border:1px solid black;"></td>
						<td style="border:1px solid black;"></td>
						<td style="border:1px solid black;"></td>
					</tr>
					<tr>
						<td style="border:1px solid black;"></td>
						<td style="border:1px solid black;"></td>
						<td style="border:1px solid black;"></td>
						<td style="border:1px solid black;"></td>
					</tr>
					<tr>
						<td style="border:1px solid black;"></td>
						<td style="border:1px solid black;"></td>
						<td style="border:1px solid black;"></td>
						<td style="border:1px solid black;"></td>
					</tr>
				</tbody>
			</table>
			<br/>
			<table style="font-size:14px;">
				<thead>
					<tr style="">
						<th width="70%" style="border:1px solid black;font-size:12px">EQUIPOS DE PROTECCIÓN PERSONAL</th>
						<th width="10%" style="border:1px solid black;">SI</th>
						<th width="10%" style="border:1px solid black;">NO</th>
						<th width="10%" style="border:1px solid black;">N/A</th>
					</tr>
				</thead>
				<tbody>
					${equipmentsHTML}
				</tbody>
			</table>
			<br/>
				<table style="font-size:14px;">
				<thead>
					<tr>
						<th width="70%" style="border:1px solid black;font-size:12px"">MATERIALES</th>
						<th width="10%" style="border:1px solid black;">SI</th>
						<th width="10%" style="border:1px solid black;">NO</th>
						<th width="10%" style="border:1px solid black;">N/A</th>
					</tr>
				</thead>
				<tbody>
							${materialsHTML}
				</tbody>
			</table>
			<table>
				<tr>
					<td style="border:1px solid black;" colspan="2">REVISADO POR:</td>
				</tr>
				<tr>
					<td style="border:1px solid black;">NOMBRE:</td>
					<td style="border:1px solid black;font-size:12px">Ing. Walter Mora Murillo</td>
				</tr>
				<tr>
					<td style="border:1px solid black;">CARGO:</td>
					<td style="border:1px solid black;font-size:12px">Analista de certificación y control</td>
				</tr>
				<tr>
					<td style="border:1px solid black;">FIRMA:</td>
					<td style="border:1px solid black;min-height:30px"></td>
				</tr>
			</table>
		</article>

		<article style="display:inline-block;width:48%;vertical-align: top;float: right;" class="side">
		<table style="font-size:14px;">
				<thead>
					<tr style="">
						<th width="70%" style="padding: 10 0;border:1px solid black;font-size:12px"">HERRAMIENTAS - EQUIPOS</th>
						<th width="10%" style="padding: 10 0;border:1px solid black;">SI</th>
						<th width="10%" style="padding: 10 0;border:1px solid black;">NO</th>
						<th width="10%" style="padding: 10 0;border:1px solid black;">N/A</th>
					</tr>
				</thead>
				<tbody>
							${toolsHTML}
					<tr>
						<td style="border:1px solid black;font-size:12px"" colspan="4">OBSERVACIONES  DEL LUGAR DE EXAMINACIÓN</td>
					</tr>
					<tr>
						<td style="border:1px solid black;height:90px" colspan="4"></td>
					</tr>
				</tbody>
			</table>

		</article>
		</section>
</section>
`
	return template
}
export default page
