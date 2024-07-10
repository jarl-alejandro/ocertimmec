"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const headerc013_1 = __importDefault(require("./headerc013"));
const date_1 = __importDefault(require("../date"));
const data = [
    { name: 'Aplicación para la certificación de personas (C001) debidamente llena y firmada ' },
    { name: 'Copias de Cédula de Ciudadanía y/o Papeleta de Votación (actualizadas)' },
    { name: 'Copia de los documentos que respalden la solicitud (pre-requisitos)' },
    { name: 'Copia del Pago de las Tasas de acuerdo a la certificación solicitada (de ser el caso)' },
    { name: 'Evaluación diagnostica de lecto-escritura y calculo básico (C002) (de ser el caso)' },
    { name: 'Aceptación o no aceptación de la aplicación para la certificación (C003)' },
    { name: 'Código de Ética y Conducta para el Examinado (C004) (original)' },
    { name: 'Código de Ética y Conducta para el personal involucrado en el proceso de Certificación de Personas (T006) (solo del examinador)' },
    { name: 'Declaración de Imparcialidad en la Examinación de Competencia (C005) (original)' },
    { name: 'Lista de verificación del lugar de examinación (C006) (Por lugar de examinación, de ser el caso)' },
    { name: 'Lista de asistencia a la examinación (C007)' },
    { name: 'Registro de personas descargado del Sistema para el proceso de certificación de cualificaciones' },
    { name: 'Examinación de la competencia (exámen teórico, exámen práctico, registro de resultados y preguntas - respuestas de la examinación por competencias' },
    { name: 'Notificación de certificación o no certificación (C008)' },
    { name: 'Acuerdo de cumplimiento con lineamientos para personas certificadas (C009)' },
    { name: 'Encuesta de Satisfacción del examinado (C010) (original)' },
    { name: 'Formulario para quejas y apelaciones en relación a los servicios de certificación de personas (C011) (de ser el caso)' },
    { name: 'Registro de ausencia y solicitud de cambio de fecha de la examinación (C012) (de ser el caso)' },
    { name: 'Certificado de competencia laboral' },
    { name: 'Evaluación de desempeño al examinador (T011)' },
];
function formatDate(date) {
    // console.log(date)
    let day = date.getDate() >= 10 ? date.getDate() : `0${date.getDate()}`;
    let month = date.getMonth() + 1 + 1 >= 10 ? 1 + date.getMonth() : `0${date.getMonth() + 1}`;
    return `${day}/${month}/${date.getFullYear()}`;
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
function page(props, certificate) {
    let fechaRecivida = (0, date_1.default)(props.dateCertificate, 2);
    let fechaAceptda = (0, date_1.default)(props.dateCertificate, 1);
    //	console.log(props.dateCertificate)
    let template = `
<section>
	${(0, headerc013_1.default)(1)}
	<br/>

	<style>
		.table13-datos {
			width:100%;
		}
		.table13-datos-title {
			font-weight:bold;
			font-size: 13px;
		}
		.table13-datos-border {
			border-bottom: 1px solid black;
		}
	</style>
	<table class="table13-datos">
		<tr>
			<td width="50%" class="table13-datos-title">NOMBRE CANDIDATO:</td>
			<td width="50%" class="table13-datos-border">${props.name} ${props.lastName}</td>
		</tr>
				<tr>
			<td width="50%" class="table13-datos-title">CÉDULA DE CIUDADANÍA:</td>
			<td width="50%" class="table13-datos-border">${props.document}</td>
		</tr>
		<tr>
			<td width="50%" class="table13-datos-title">NÚMERO DEL EXPEDIENTE:</td>
			<td width="50%" class="table13-datos-border">${siglas(certificate.name, props.numberAplicacion)}</td>
		</tr>
		<tr>
			<td width="50%" class="table13-datos-title">FECHA APLICACIÓN RECIBIDA:</td>
			<td width="50%" class="table13-datos-border">${props.dateCertificate ? formatDate(fechaRecivida) : ''}</td>
		</tr>
		<tr>
			<td width="50%" class="table13-datos-title">FECHA APLICACIÓN ACEPTADA: </td>
			<td width="50%" class="table13-datos-border">${props.dateCertificate ? formatDate(fechaAceptda) : ''}</td>
		</tr>
	</table>

	<br/><br/>
	
	
	<style>
		.poll13occe {
			width: 100%;
			font-size:14px;
		}
		.poll13occe th {
			color: white;
			background: #315496;
			border: 1px solid black;
			padding: 12px 0;
		}
		.poll13occe td {
			border: 1px solid black;
		}
	</style>
	<table class="poll13occe">
		<thead>
			<tr>
				<th width="10%">N°</th>
				<th width="60%">REGISTROS</th>
				<th width="10%">N/A</th>
				<th width="10%">CUMPLE</th>
				<th width="10%">NO CUMPLE</th>
			</tr>
		</thead>
		<tbody>`;
    data.map((item, index) => {
        template += `
				<tr>
					<td>${index + 1}</td>
					<td>${item.name}</td>
					<td></td>
					<td></td>
					<td></td>
				</tr>
			`;
    });
    template += `
		</tbody>
	</table>
	<br/>
	<p>
		<span>ULTIMA FECHA DE VERIFICACIÓN:</span>
		<span style="display:inline-block;width:60%;height:1px;background:black;"></span>
	</p>
	<p>EXPEDIENTE REVISADO POR: Analista de certificación y control</p>
	<br/><br/><br/>
	<p>
		<span>Firma:</span>
		<span style="display:inline-block;width:30%;height:1px;background:black;"></span>
	</p>

</section>
`;
    return template;
}
exports.default = page;
