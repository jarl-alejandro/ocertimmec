"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const headerc001_1 = __importDefault(require("./headerc001"));
const page2_1 = __importDefault(require("./page2"));
const page3_1 = __importDefault(require("./page3"));
const page4_1 = __importDefault(require("./page4"));
const page5_1 = __importDefault(require("./page5"));
const page6_1 = __importDefault(require("./page6"));
const page8_1 = __importDefault(require("./page8"));
const page9_1 = __importDefault(require("./page9"));
const page10_1 = __importDefault(require("./page10"));
const page11_1 = __importDefault(require("./page11"));
const page12_1 = __importDefault(require("./page12"));
const page13_1 = __importDefault(require("./page13"));
const paget006_1 = __importDefault(require("./paget006"));
const paget011_1 = __importDefault(require("./paget011"));
const esquemas_1 = __importDefault(require("./esquemas"));
const config_1 = __importDefault(require("../../../../../enviroments/config"));
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
    let text = JSON.stringify(date);
    text = text.split('T')[0].split('-').join('/');
    const newDate = new Date(text);
    let day = newDate.getDate() >= 10 ? newDate.getDate() : `0${newDate.getDate()}`;
    let month = newDate.getMonth() >= 10 ? 1 + newDate.getMonth() : `0${newDate.getMonth() + 1}`;
    return `${day}/${month}/${newDate.getFullYear()}`;
}
function template(props, certificate, planning) {
    let edad = calcularEdad(new Date(props.birthdate), new Date(props.fechaAplicacion));
    let template = `
    <html lang="en">
    <head>
      <title>PDF</title>
			<meta http-equiv="content-type" content="text/html; charset=UTF-8">
      <meta charset="UTF-8">
      <style type="text/css" media="all">
				@font-face {
					font-family: 'Roboto';
					font-style: normal;
					font-weight: 100;
					font-display: swap;
					src: url('${config_1.default.API}/font/Roboto-Regular.ttf') format('truetype');
				}
        html {
          margin:0;
          zoom: 0.80; 
				}
        * {
          font-size: 13px;
				}
        body {
          font-size: 13px;
          box-sizing: border-box;
          margin: 0;
					padding: 0;
					font-family: 'Roboto', sans-serif;
				}
				td {
					font-size: 13px;
				}
				table {
					table-layout: fixed;
			  	border-collapse: collapse;
				}
				.Header td {
					border: 1px solid black;
				}
				.color {
					background:#b4c7e7;
				}
				.title {
					background:#b4c7e7;
					font-weight: bold;
					padding: 4px;
				}
				.table-card td:nth-child(1) {
					width: 30%;
					margin-bottom: 20px;
				}
				.table-card td:nth-child(2) {
					width: 80%;
					border: 1px solid black;
				}
				.space {
					height: 8px;
				}
      </style>
    </head>
		<body>
			${(0, headerc001_1.default)(1)}
			<br/>
			<table>
				<tr>
					<td style="background:#b4c7e7;border:1px solid black;width:150px">Formulario Nº</td>
					<td style="border: 1px solid black; width: 200px">001</td>
					<td style="width:70px"></td>
					<td style="background:#b4c7e7;border:1px solid black;width:100px">CÓDIGO</td>
					<td style="border: 1px solid black; width: 200px;font-size:11px">${siglas(certificate.name, props.numberAplicacion)}</td>
				</tr>
				<tr>
					<td style="background:#b4c7e7;border:1px solid black;">Fecha ingreso:</td>
					<td style="border: 1px solid black; width: 200px">${formatDate(props.fechaAceptacion)}</td>
				</tr>
			</table>
			<br/>

			<table>
				<tr>
					<td colspan="2" class="title">DATOS PERSONALES DEL CANDIDATO</td>
				</tr>
				<tr><td class="space"></td></tr>

				<tr class="table-card">
					<td>Nombres y Apellidos:</td>
					<td>${props.name} ${props.lastName}</td>
				</tr>
				<tr><td class="space"></td></tr>
				<tr class="table-card">
					<td>Cédula o pasaporte:</td>
					<td>${props.document}</td>
				</tr>
				<tr><td class="space"></td></tr>
				<tr class="table-card">
					<td>Correo electrónico:</td>
					<td>${props.email}</td>
				</tr>
				<tr>
					<td class="space"></td>
				</tr>
				<tr class="table-card">
					<td>Edad:</td>
					<td>${edad}</td>
				</tr>
				<tr>
					<td class="space"></td>
				</tr>
				<tr>
					<td colspan="2" class="title">DATOS DE DOMICILIO DEL CANDIDATO</td>
				</tr>
				<tr>
					<td class="space"></td>
				</tr>
				<tr class="table-card">
					<td>Provincia:</td>
					<td>${props.province}</td>
				</tr>
				<tr>
					<td class="space"></td>
				</tr>
				<tr class="table-card">
					<td>Ciudad (Parroquia):</td>
					<td>${props.city}</td>
				</tr>
				<tr><td class="space"></td></tr>
				<tr class="table-card">
					<td>Dirección:</td>
					<td>${props.direction}</td>
				</tr>
				<tr><td class="space"></td></tr>
				<tr class="table-card">
					<td>Teléfono:</td>
					<td>${props.phone}</td>
				</tr>
				<tr>
					<td><br/></td>
				</tr>

				<tr>
					<td colspan="2" class="title">1. Seleccione el/los Perfiles de Competencia y Unidades de Competencia para los que desea aplicar:</td>
				</tr>
				<tr style="font-size:13px">
					<td colspan="2" >
						* Puede elegir una, varias o todas las unidades de competencia por perfil y/o esquema.
					</td>
				</tr>
				<tr style="font-size:13px">
					<td colspan="2">
						* La información sobre cada uno de los perfiles de competencia, se encuentra en la página web de la Secretaria Técnica del Sistema Nacional de Cualificaciones Profesionales SETEC (www.cualificaciones.gob.ec).
					</td>
				</tr>
				<tr style="font-size:13px">
					<td colspan="2" >
						* Los pre-requisitos para la certificación serán proporcionados por parte de MORA LEDESMA WALTER FILIBERTO CON NOMBRE COMERCIAL OCCERTIMM
					</td>
				</tr>

				<tr><td class="space"></td></tr>
				<tr>
					<td colspan="2" class="title">1.1. Seleccione el sector; perfil y la(s) unidades de competencia (UC) en las que se quiere certificar:</td>
				</tr>
				<tr><td class="space"></td></tr>
			</table>

			<table>
				<thead>
					<tr>
						<th style="border:1px solid black;background:#d9d9d9" rowspan="2" width="30%">Sector</th>
						<th style="border:1px solid black;background:#d9d9d9" rowspan="2" width="30%">Esquema de Certificación</th>
						<th style="border:1px solid black;background:#d9d9d9" colspan="5"  width="40%">
							<p style="margin:0;padding:0">Unidades de Competencia</p>
							<p style="font-weight:normal;font-size:12px;margin:0;padding:0">*marque con una X las UC correspondientes al Esquema de certificación</p>
						</th>
					</tr>
					<tr>
						<th style="border:1px solid black; font-size: 13px; background:#d9d9d9">UC1</th>
						<th style="border:1px solid black; font-size: 13px; background:#d9d9d9">UC2</th>
						<th style="border:1px solid black; font-size: 13px; background:#d9d9d9">UC3</th>
						<th style="border:1px solid black; font-size: 13px; background:#d9d9d9">UC4</th>
						<th style="border:1px solid black; font-size: 13px; background:#d9d9d9">UC5</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td style="border:1px solid black; font-size: 13px;height:25px">${certificate.sector}</td>
						<td style="border:1px solid black; font-size: 10px;height:25px">${(0, esquemas_1.default)(certificate.squemaCode)}</td>
						<td style="border:1px solid black; text-align:center; font-size: 13px;height:25px">${certificate.uc >= 1 ? 'x' : ''}</td>
						<td style="border:1px solid black; text-align:center; font-size: 13px;height:25px">${certificate.uc >= 2 ? 'x' : ''}</td>
						<td style="border:1px solid black; text-align:center; font-size: 13px;height:25px">${certificate.uc >= 3 ? 'x' : ''}</td>
						<td style="border:1px solid black; text-align:center; font-size: 13px;height:25px">${certificate.uc >= 4 ? 'x' : ''}</td>
						<td style="border:1px solid black; text-align:center; font-size: 13px;height:25px">${certificate.uc >= 5 ? 'x' : ''}</td>
					</tr>
				</tbody>
				<tr><td class="space"></td></tr>
			</table>

			<table>
				<tr>
					<td colspan="2" class="title">1.2. Indique el lugar dónde desea ser examinado</td>
				</tr>
				<tr>
					<td width="20%" style="border:1px solid black;">Empresa o lugar:</td>
					<td width="70%" style="border:1px solid black; font-size: 13px;">Occertimm</td>
				</tr>
				<tr>
					<td width="20%" style="border:1px solid black;">Dirección:</td>
					<td width="80%" style="border:1px solid black; font-size: 13px;">${certificate.place}</td>
				</tr>
				<tr>
					<td width="20%" style="border:1px solid black;">Sector:</td>
					<td width="80%" style="border:1px solid black; font-size: 13px;"></td>
				</tr>
				<tr>
					<td width="20%" style="border:1px solid black;">Teléfono:</td>
					<td width="80%" style="border:1px solid black; font-size: 13px;"></td>
				</tr>

				<tr><td class="space"></td></tr>

				<tr>
					<td colspan="2" class="title">2. Proporcione datos sobre su educación, formación y experiencia laboral:</td>
				</tr>
				<tr><td class="space"></td></tr>
			</table>

			<table style="width:100%">
				<tr colspan="6">2.1 Nivel de Educación</tr>
				<thead>
					<tr>
						<th rowspan="2" style="border:1px solid black;" width="25%">NIVEL DE EDUCACIÓN</th>
						<th colspan="4" style="border:1px solid black;">INSTITUCIÓN EDUCATIVA</th>
					</tr>
					<tr>
						<th style="border:1px solid black;" width="25%">Nombre Institución</th>
						<th style="border:1px solid black;" width="15%">País</th>
						<th style="border:1px solid black;" width="15%">Ciudad</th>
						<th style="border:1px solid black;" width="35%">Título Obtenido</th>
					</tr>
				</thead>
				<tbody>
					<tr style="font-size:14px">
						<td style="border:1px solid black;">Primaria</td>
						<td style="border:1px solid black;">${!!props.primaria.name ? props.primaria.name : ''}</td>
						<td style="border:1px solid black;">${!!props.primaria.pais ? props.primaria.pais : ''}</td>
						<td style="border:1px solid black;">${!!props.primaria.ciudad ? props.primaria.ciudad : ''}</td>
						<td style="border:1px solid black;">${!!props.primaria.titulo ? props.primaria.titulo : ''}</td>
					</tr>
					<tr style="font-size:14px">
						<td style="border:1px solid black;">Secundaria</td>
						<td style="border:1px solid black;">${!!props.secundaria.name ? props.secundaria.name : ''}</td>
						<td style="border:1px solid black;">${!!props.secundaria.pais ? props.secundaria.pais : ''}</td>
						<td style="border:1px solid black;">${!!props.secundaria.ciudad ? props.secundaria.ciudad : ''}</td>
						<td style="border:1px solid black;">${!!props.secundaria.titulo ? props.secundaria.titulo : ''}</td>
					</tr>
					<tr style="font-size:14px">
						<td style="border:1px solid black;">Técnico, Tecnólogo o Artesano</td>
						<td style="border:1px solid black;">${!!props.tecnico.name ? props.tecnico.name : ''}</td>
						<td style="border:1px solid black;">${!!props.tecnico.pais ? props.tecnico.pais : ''}</td>
						<td style="border:1px solid black;">${!!props.tecnico.ciudad ? props.tecnico.ciudad : ''}</td>
						<td style="border:1px solid black;">${!!props.tecnico.titulo ? props.tecnico.titulo : ''}</td>
					</tr>
					<tr style="font-size:14px">
						<td style="border:1px solid black;">Tercer nivel</td>
						<td style="border:1px solid black;">${!!props.tercerNivel.name ? props.tercerNivel.name : ''}</td>
						<td style="border:1px solid black;">${!!props.tercerNivel.pais ? props.tercerNivel.pais : ''}</td>
						<td style="border:1px solid black;">${!!props.tercerNivel.ciudad ? props.tercerNivel.ciudad : ''}</td>
						<td style="border:1px solid black;">${!!props.tercerNivel.titulo ? props.tercerNivel.titulo : ''}</td>
					</tr>
					<tr style="font-size:14px">
						<td style="border:1px solid black;">Cuarto nivel</td>
						<td style="border:1px solid black;">
							${!!props.cuartoNivel.name ? props.cuartoNivel.name : ''}
						</td>
						<td style="border:1px solid black;">${!!props.cuartoNivel.pais ? props.cuartoNivel.pais : ''}</td>
						<td style="border:1px solid black;">${!!props.cuartoNivel.ciudad ? props.cuartoNivel.ciudad : ''}</td>
						<td style="border:1px solid black;">${!!props.cuartoNivel.titulo ? props.cuartoNivel.titulo : ''}</td>
					</tr>
				</tbody>
			</table>

			<div style='page-break-before: always;'></div>

			${(0, headerc001_1.default)(2)}
			<br/>
			<table  style="width:100%">
				<tr>
					<td style="font-weight:bold" colspan="5">2.2 Capacitación o formación recibida</td>
				</tr>
			</table>
			<br/>
			<table>
				<thead>
					<tr>
						<th width="35%" style="padding: 5px;background:#d9d9d9;border: 1px solid black">Nombre del curso</th>
						<th width="30%" style="padding: 5px;background:#d9d9d9;border: 1px solid black">Nombre de la institución que impartió el curso</th>
						<th width="20%" style="padding: 5px;background:#d9d9d9;border: 1px solid black">Fechas del curso</th>
						<th width="20%" style="padding: 5px;background:#d9d9d9;border: 1px solid black">Horas del Curso</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td style="border:1px solid black; font-size: 13px;height:25px">${props.capacitacion1.nameCourse ? props.capacitacion1.nameCourse : ''}</td>
						<td style="border:1px solid black; font-size: 13px;height:25px">${props.capacitacion1.nameInstitucion ? props.capacitacion1.nameInstitucion : ''}</td>
						<td style="border:1px solid black; font-size: 13px;height:25px">${props.capacitacion1.dateCourse ? formatDate(props.capacitacion1.dateCourse) : ''}</td>
						<td style="border:1px solid black; font-size: 13px;height:25px">${props.capacitacion1.hourCourse ? props.capacitacion1.hourCourse : ''}</td>
					</tr>
					<tr>
						<td style="border:1px solid black; font-size: 13px;height:25px">${props.capacitacion2.nameCourse ? props.capacitacion2.nameCourse : ''}</td>
						<td style="border:1px solid black; font-size: 13px;height:25px">${props.capacitacion2.nameInstitucion ? props.capacitacion2.nameInstitucion : ''}</td>
						<td style="border:1px solid black; font-size: 13px;height:25px">${props.capacitacion2.nameCourse ? formatDate(props.capacitacion2.dateCourse) : ''}</td>
						<td style="border:1px solid black; font-size: 13px;height:25px">${props.capacitacion2.hourCourse ? props.capacitacion2.hourCourse : ''}</td>
					</tr>
					<tr>
						<td style="border:1px solid black; font-size: 13px;height:25px">${props.capacitacion3.nameCourse ? props.capacitacion3.nameCourse : ''}</td>
						<td style="border:1px solid black; font-size: 13px;height:25px">${props.capacitacion3.nameInstitucion ? props.capacitacion3.nameInstitucion : ''}</td>
						<td style="border:1px solid black; font-size: 13px;height:25px">${props.capacitacion3.nameCourse ? formatDate(props.capacitacion3.dateCourse) : ''}</td>
						<td style="border:1px solid black; font-size: 13px;height:25px">${props.capacitacion3.hourCourse ? props.capacitacion3.hourCourse : ''}</td>
					</tr>
				</tbody>
			</table>

			<p>2.3 Experiencia laboral</p>
			<table>
				<thead>
					<tr>
						<th width="30%" style="background:#d9d9d9;border:1px solid black;" colspan="2">Fecha ingreso al trabajo</th>
						<th width="45%" style="background:#d9d9d9;border:1px solid black;" colspan="3">Datos de la Empresa</th>
						<th width="40%" style="background:#d9d9d9;border:1px solid black;" rowspan="2">Funciones que desempeñó</th>
					</tr>
					<tr>
						<th style="background:#d9d9d9;border:1px solid black;">Desde</th>
						<th style="background:#d9d9d9;border:1px solid black;">Hasta</th>
						<th style="background:#d9d9d9;border:1px solid black;">Nombre</th>
						<th style="background:#d9d9d9;border:1px solid black;">Dirección</th>
						<th style="background:#d9d9d9;border:1px solid black;">Teléfono</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td style="border:1px solid black;height:25px;">${props.experiencia1.name ? formatDate(props.experiencia1.desde) : ''}</td>
						<td style="border:1px solid black;height:25px;">${props.experiencia1.name ? formatDate(props.experiencia1.hasta) : ''}</td>
						<td style="border:1px solid black;height:25px;">${props.experiencia1.name ? props.experiencia1.name : ''}</td>
						<td style="border:1px solid black;height:25px;">${props.experiencia1.direction ? props.experiencia1.direction : ''}</td>
						<td style="border:1px solid black;height:25px;">${props.experiencia1.phone ? props.experiencia1.phone : ''}</td>
						<td style="border:1px solid black;height:25px;">${props.experiencia1.funcion ? props.experiencia1.funcion : ''}</td>
					</tr>
					<tr>
						<td style="border:1px solid black;height:25px;">${props.experiencia2.name ? formatDate(props.experiencia2.desde) : ''}</td>
						<td style="border:1px solid black;height:25px;">${props.experiencia2.name ? formatDate(props.experiencia2.hasta) : ''}</td>
						<td style="border:1px solid black;height:25px;">${props.experiencia2.name ? props.experiencia2.name : ''}</td>
						<td style="border:1px solid black;height:25px;">${props.experiencia2.direction ? props.experiencia2.direction : ''}</td>
						<td style="border:1px solid black;height:25px;">${props.experiencia2.phone ? props.experiencia2.phone : ''}</td>
						<td style="border:1px solid black;height:25px;">${props.experiencia2.funcion ? props.experiencia2.funcion : ''}</td>
					</tr>
					<tr>
						<td style="border:1px solid black;height:25px;">${props.experiencia3.name ? formatDate(props.experiencia3.desde) : ''}</td>
						<td style="border:1px solid black;height:25px;">${props.experiencia3.name ? formatDate(props.experiencia3.hasta) : ''}</td>
						<td style="border:1px solid black;height:25px;">${props.experiencia3.name ? props.experiencia3.name : ''}</td>
						<td style="border:1px solid black;height:25px;">${props.experiencia3.direction ? props.experiencia3.direction : ''}</td>
						<td style="border:1px solid black;height:25px;">${props.experiencia3.phone ? props.experiencia3.phone : ''}</td>
						<td style="border:1px solid black;height:25px;">${props.experiencia3.funcion ? props.experiencia3.funcion : ''}</td>
					</tr>
				</tbody>
			</table>

			<table>
				<tr><td><br/></td></tr>
				<tr>
					<td colspan="2" class="title">3. Presentar como anexo a la aplicación los siguientes documentación (copias):</td>
				</tr>
				<tr>
					<td className="space"></td>
				</tr>
				<tr>
					<td style="font-size:11.5px">Copia de cédula y papeleta de votación</td>
				</tr>
				<tr>
					<td style="font-size:11.5px">Autorización suscrita por el representante legal, en caso de ser menor de edad.</td>
				</tr>
				<tr>
					<td style="font-size:11.5px">Copia  del certificado de estudios</td>
				</tr>
				<tr>
					<td style="font-size:11.5px">Copia del certificado de trabajo</td>
				</tr>
				<tr>
					<td style="font-size:11.5px">Copia del Pago de las Tasas de acuerdo a la certificación solicitada</td>
				</tr>
				<tr>
					<td style="font-size:11.5px">Declaración de acuerdo para el cumplimiento de requisitos de certificación y toda información necesaria para la evaluación.</td>
				</tr>
				<tr>
					<td style="font-size:11.5px">Solicitud para necesidades especiales para grupos de atención prioritaria (de ser requerido).</td>
				</tr>
				<tr>
					<td style="font-size:11.5px">En el caso de solicitar ampliar las unidades de competencia de los esquemas se debere alimentar este formulario especificando los requerimientos del perfil (de ser el caso)</td>
				</tr>

				<tr><td><br/></td></tr>
				<tr>
					<td colspan="2" class="title">4. Al firmar esta solicitud, me someto a las reglas y reglamentos de MORA LEDESMA WALTER FILIBERTO CON NOMBRE COMERCIAL OCCERTIMM  como organismo de certificación de personas. </td>
				</tr>
				<tr><td><br/></td></tr>
				<tr>
					<td style="font-size:11px">Declaro bajo prevenciones de Ley que la información aquí consignada es verídica y de mi entera responsabilidad; por lo cual, de MORA LEDESMA WALTER FILIBERTO CON NOMBRE COMERCIAL OCCERTIMM  podrá verificar esta información en cualquier momento, y en caso de comprobarse falsedad en la misma, podrán iniciarse las acciones administrativas, civiles y penales que ampara la legislación ecuatoriana vigente, así como también el retiro de la certificación otorgada.</td>
				</tr>

				<tr><td><br/><br/><br/></td></tr>
			</table>

			<table>
				<tr>
					<td width="50%"></td>
					<td width="280px" style="text-align:center;border-top: 1px solid black">Firma del candidato</td>
				</tr>
			</table>
			<table>
				<tr><td><br/></td></tr>
				<tr>
					<td colspan="2" style="text-align:center;">Este formulario debe ser entregado en la oficina matriz de MORA LEDESMA WALTER FILIBERTO CON NOMBRE COMERCIAL OCCERTIMM, Cooperativa Unión Cívica</td>
				</tr>
			</table>
  `;
    if ('PREVENCIÓN EN RIESGOS LABORALES' === certificate.name.toUpperCase()) {
        template += `
		<div style='page-break-before: always;'></div>
		${(0, page2_1.default)(props, certificate)}
	`;
    }
    /**
     * 	<div style='page-break-before: always;'></div>
            ${ page7(props, certificate) }
     */
    template += `
			<div style='page-break-before: always;'></div>
			${(0, page3_1.default)(props, certificate)}
			<div style='page-break-before: always;'></div>
			${(0, page4_1.default)(props)}
			<div style='page-break-before: always;'></div>
			${(0, paget006_1.default)(props, certificate)}
			<div style='page-break-before: always;'></div>
			${(0, page5_1.default)(props, certificate, planning)}
			<div style='page-break-before: always;'></div>
			${(0, page6_1.default)(props, certificate, planning)}

			<div style='page-break-before: always;'></div>
			${(0, page8_1.default)(props, certificate)}
			<div style='page-break-before: always;'></div>
			${(0, page9_1.default)(props, certificate, planning)}
			<div style='page-break-before: always;'></div>
			${(0, page10_1.default)(props, planning)}
			<div style='page-break-before: always;'></div>
			${(0, page11_1.default)(props)}
			<div style='page-break-before: always;'></div>
			${(0, page12_1.default)(props, certificate, planning)}
			<div style='page-break-before: always;'></div>
			${(0, page13_1.default)(props, certificate)}

			<div style='page-break-before: always;'></div>
			${(0, paget011_1.default)(props, certificate)}
		</body>
  </html>
  `;
    /**
     *
     * 	<div style='page-break-before: always;'></div>
                ${ paget011(props, certificate) }
            <div style='page-break-before: always;'></div>
                ${ page14(props) }
     */
    return template;
}
exports.default = template;
