"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const headerc003_1 = __importDefault(require("./headerc003"));
const date_1 = __importDefault(require("../date"));
const month = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre',
    'Octubre', 'Noviembre', 'Diciembre'
];
function generateUC(uc) {
    uc = parseInt(uc);
    let formatUc = '';
    for (let i = 1; i <= uc; i++) {
        formatUc += `UC${i}`;
        if (uc !== i) {
            formatUc += ', ';
        }
    }
    return formatUc;
}
function siglas(name, numberAplicacion) {
    const cero = 3;
    name = name.toUpperCase();
    let siglas = '';
    let newArray = name.split(' ');
    if (newArray.length === 1) {
        siglas = name;
    }
    else {
        newArray.forEach(item => {
            let array1 = item.split('');
            siglas += array1[0];
        });
    }
    let counter = numberAplicacion.toString().length;
    let total = cero - counter;
    let code = '';
    for (let i = 1; total >= i; i++) {
        code += '0';
    }
    return `OCCERTIMM-${siglas.toLocaleUpperCase()}-${code}${numberAplicacion}`;
}
function formatDate(date) {
    if (date) {
        let day = date.getDate() >= 10 ? date.getDate() : `0${date.getDate()}`;
        let month = date.getMonth() >= 10 ? 1 + date.getMonth() : `0${date.getMonth() + 1}`;
        return `${day}/${month}/${date.getFullYear()}`;
    }
}
function page(props, certificate) {
    let dateCerficate = new Date(props.dateCertificate);
    let fechaAplicacion = (0, date_1.default)(props.dateCertificate, 2);
    return `
	<section>
		${(0, headerc003_1.default)(1)}

		<br/><br/>
		<div>
			<label>Santo Domingo de los Colorados,</label>
			<span style="display:inline-block;width:25px;border-bottom: 1px solid black;">  ${dateCerficate.getDate()}</span>
			<label>de</label>
			<span style="display:inline-block;width:100px;border-bottom: 1px solid black;">  ${month[dateCerficate.getMonth()]}</span>
			<label>del ${dateCerficate.getFullYear()}</label>
		</div>
			
		<br/>

		<div>
			<label>Expediente No.</label>
			<span style="display:inline-block;width:50%;border-bottom: 1px solid black;font-size:11px">${siglas(certificate.name, props.numberAplicacion)}</span>

			<label>Aplicación Nº:</label>
			<span style="display:inline-block;width:60px;border-bottom: 1px solid black">000${props.numberAplicacion}</span>
		</div>
		<br/>
		<div style="">
			<label>Fecha de aplicación:</label>
			<span style="display:inline-block;width:20px;border-bottom: 1px solid black;">  ${fechaAplicacion.getDate()}</span>
			<label>/</label>
			<span style="display:inline-block;width:20px;border-bottom: 1px solid black;">  ${fechaAplicacion.getMonth() + 1}</span>
			<label>/</label>
			<span style="display:inline-block;width:40px;border-bottom: 1px solid black;">  ${fechaAplicacion.getFullYear()}</span>
		</div>

		<br/><br/>
		<div style="">
			<label>Estimado Sr./Sra</label>
			<span style="display:inline-block;width:350px;border-bottom: 1px solid black;">  ${props.name} ${props.lastName}</span>
		</div>
		<p>A fin de acceder como candidato al proceso de certificación deberá cumplir con los siguientes criterios:</p>

		<table style="font-size:14px">
			<thead>
				<tr style="background:#315496;">
					<th width="55%" style="color:white;border:1px solid black;">PRE REQUISITOS DE CUMPLIMIENTO</th>
					<th width="15%" style="color:white;border:1px solid black;">NO APLICA</th>
					<th width="15%" style="color:white;border:1px solid black;">CUMPLE</th>
					<th width="15%" style="color:white;border:1px solid black;">NO CUMPLE</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td style="border:1px solid black;">Entrega copia de cédula de ciudadanía y/o papeleta de votación (actualizadas)</td>
					<td style="border:1px solid black;"></td>
					<td style="border:1px solid black;"></td>
					<td style="border:1px solid black;"></td>
				</tr>
				<tr>
					<td style="border:1px solid black;">Entrega los documentos que aseguren un grado de experiencia laboral necesarios para la aplicación (de ser el caso)</td>
					<td style="border:1px solid black;"></td>
					<td style="border:1px solid black;"></td>
					<td style="border:1px solid black;"></td>
				</tr>
				<tr>
					<td style="border:1px solid black;">Entrega la documentación referente al nivel de educación mínimo para dar paso a la solicitud (de ser el caso)</td>
					<td style="border:1px solid black;"></td>
					<td style="border:1px solid black;"></td>
					<td style="border:1px solid black;"></td>
				</tr>
				<tr>
					<td style="border:1px solid black;">Entrega la documentación referente a las horas de capacitación mínimo para dar paso a la solicitud (de ser el caso)</td>
					<td style="border:1px solid black;"></td>
					<td style="border:1px solid black;"></td>
					<td style="border:1px solid black;"></td>
				</tr>
			</tbody>
		</table>

		<br/>
		<div>
			<label style="font-weight:bold;">Observaciones</label>
			<span style="display:inline-block;width:80%;height:1px;background:black;"></span>
		</div>
		<br/>
		<div>
			<label>MORA LEDESMA WALTER FILIBERTO con nombre comercial OCCERTIMM le notifica que su aplicación para la certificación de personas del/de los perfil/es de competencia laboral</label>
			<span style="display:inline-block;width:650px;border-bottom: 1px solid black;font-size:11px">${certificate.name}</span>
			<label>en la/s unidad/es de competencia:</label>
			<span style="display:inline-block;width:250px;border-bottom: 1px solid black;">${generateUC(certificate.uc)}</span>
			<label>ha sido:</label>
		</div>
	<br/><br/>
		<div >
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
		<p>Si su aplicación ha sido aceptada, se detalla la/s fecha/s, hora y dirección/es de donde se llevará/n a cabo la/s examinación/es de acuerdo a cada unidad de competencia del perfil que ha aplicado.</p>
		<p>(Marcar con una X en las celdas pintadas según corresponda, de ser necesario se continuará con la examinación en otras fechas programadas)</p>
		<br/>

		<table>
			<tr>
				<td width="10%" style="border: 1px solid black;">${certificate.uc >= 1 ? 'x' : ''}</td>
				<td width="12%" style="border: 1px solid black;">UC 1</td>
				<td width="20%" rowspan="3" style="border: 1px solid black;">Fecha:</td>
				<td width="10%" rowspan="3" style="border: 1px solid black;">${formatDate(dateCerficate)}</td>
				<td width="30%" rowspan="3" style="border: 1px solid black;">Sitio de Trabajo</td>
				<td width="30%" rowspan="3" style="border: 1px solid black;">Dirección:</td>
			</tr>
			<tr>
				<td style="border: 1px solid black;">${certificate.uc >= 2 ? 'x' : ''}</td>
				<td style="border: 1px solid black;">UC 2</td>
			</tr>
			<tr>
				<td style="border: 1px solid black;">${certificate.uc >= 3 ? 'x' : ''}</td>
				<td style="border: 1px solid black;">UC 3</td>
			</tr>
			<tr>
				<td style="border: 1px solid black;">${certificate.uc >= 4 ? 'x' : ''}</td>
				<td style="border: 1px solid black;">UC 4</td>
				<td rowspan="3" style="border: 1px solid black;">Hora:</td>
				<td rowspan="3" style="border: 1px solid black;">${props.hourCertificate}</td>
				<td rowspan="3" style="border: 1px solid black;">
					<strong>Instalaciones establecidas por</strong>
					<p style="margin:0">MORA LEDESMA WALTER FILIBERTO con nombre comercial OCCERTIMM</p>
				</td>
				<td rowspan="3" style="border: 1px solid black;">
					Dirección:
					${props.placeCertificate}
				</td>
			</tr>
			<tr>
				<td style="border: 1px solid black;">${certificate.uc >= 5 ? 'x' : ''}</td>
				<td style="border: 1px solid black;">UC 5</td>
			</tr>
			<tr>
				<td style="border: 1px solid black;">${certificate.uc >= 6 ? 'x' : ''}</td>
				<td style="border: 1px solid black;">UC 6</td>
			</tr>
		</table>
		<strong>**Cuando se realicen las examinaciones fueras de las instalaciones del OEC anexar fotografías</strong>

		<p>Para la examinación teórica y práctica es necesario que lleve consigo lo siguiente</p>
		<ul style="margin-left:50px">
			<li>Cédula de ciudadanía (original):</li>
			<li>Por favor llegue 15 minutos antes.</li>
		</ul>
		<p style="margin:0">Le deseamos mucho éxito.</p>
		<p style="margin:0">Sinceramente</p>
		<br/>
		<p style="width:250px;height:1px;background:black;"></p>
		<p style="margin:0">Tec. Walter Mora Ledesma</p>
		<p style="margin:0">Coordinador de Certificación</p>
	</section>
`;
}
exports.default = page;
