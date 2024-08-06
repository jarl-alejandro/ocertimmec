import headerc007 from './headerc007'

function page(props, certificate) {
	let user = certificate.id_user.name.split(' ')
	let name = `${user[0]} ${user[1]}`
	let lastName = `${user[2]} ${user[3]}`
	
const template = `
<section class="page7-horizontal">
	<style>
		.page7-horizontal-asd {
			-webkit-transform: rotate(90deg);
			transform: rotate(90deg);
		}
		.side {
			font-size: 14px;
			width: 100%;
		}
		.side th {
			background: #315496;
			font-weight: normal;
			color: white;
			font-size:12px;
			border: 1px solid black;
		}
		.side td {
			height: 48px;
			border: 1px solid black;
		}
		.table-cc07 {
		}
	</style>

		${ headerc007() }
		<br/>
		<div>
			<label>LUGAR DE LA EXAMINACIÓN:</label>
			<span style="display:inline-block;width:60%;border-bottom:1px solid black">${ props.placeCertificate }</span>
		</div>
		<br/>
		<table class="table-cc07">
			<tr>
				<td width="20%">EXAMINACIÓN</td>
				<td width="20%">PRÁCTICA</td>
				<td style="border:1px solid black;" width="8%">X</td>
				<td width="8%"></td>
				<td width="20%">TEÓRICA</td>
				<td style="border:1px solid black;" width="8%">X</td>
			</tr>
		</table>
		<br/>
		<table class="side table-cc07">
			<thead>
				<tr>
					<th width="5%">Nº</th>
					<th width="30%">APELLIDOS</th>
					<th width="30%">NOMBRES</th>
					<th width="20%">Nº CEDULA</th>
					<th width="37%">CORREO ELECTRÓNICO</th>
					<th width="20%">TELF. CONVENCIONAL</th>
					<th width="20%">TELF. CELULAR</th>
					<th width="20%">FIRMA</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>1</td>
					<td>PINEDA ROMO</td>
					<td>MIKE HARVIC</td>
					<td>1723104988</td>
					<td  style=font-size:16px">lemm2504@hotmail.com</td>
					<td>023766135</td>
					<td>0989231482</td>
					<td></td>
				</tr>
				<tr>
					<td>2</td>
					<td>${ lastName.toUpperCase() }</td>
					<td>${ name.toUpperCase() }</td>
					<td>${ certificate.id_user.cedula }</td>
					<td style=font-size:16px">${ certificate.id_user.email }</td>
					<td></td>
					<td></td>
					<td></td>
				</tr>
				<tr>
					<td>3</td>
					<td>${props.lastName}</td>
					<td>${props.name}</td>
					<td>${props.document}</td>
					<td style=font-size:16px">${props.email}</td>
					<td>${props.phone}</td>
					<td></td>
					<td></td>
				</tr>
			</tbody>
		</table>

		<br/><br/><br/><br/><br/><br/>
		<article style="width:40%;margin:0 auto;text-align:center">
			<span style="display:inline-block;width:100%;height:1px;background:black;"></span>
			<p style="margin:0;font-weight:bold;font-size:14px;">Analista de certificación y control</p>
			<p style="margin:0;font-size:14px;">Nombre: Ing. Walter Mora Murillo</p>
			<p style="margin:0;font-size:14px;">C.C.: 1723278386</p>
		</article>
</section>
`

return template
}
export default page
