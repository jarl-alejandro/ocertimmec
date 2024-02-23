"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __importDefault(require("../../../../config"));
const month = [
    'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre',
    'octubre', 'noviembre', 'diciembre'
];
const DAY = [
    'domingo', 'lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado'
];
function formatDate(prop) {
    if (prop) {
        const date = new Date(prop);
        let day = date.getDate() >= 10 ? date.getDate() : `0${date.getDate()}`;
        return `${DAY[date.getDay()]} ${day} de ${month[date.getMonth()]} del ${date.getFullYear()}`;
    }
}
function formatHTMLEmail(query) {
    let html = `<!DOCTYPE html>
	<html>
		<head>
			<meta charset='utf-8'>
			<title></title>
			<style>
				.conatiner {
					font-size: 16px;
					background: #f9f9f9;
					width: 100%;
					padding: 1rem;
					color: rgba(0,0,0,0.7) !important;
				}
				.card {
					border-bottom: 3px solid #0f4377;
					box-shadow: 0 3px 4.5px rgba(0,0,0,0.3);
					-webkit-box-shadow: 0 3px 4.5px rgba(0,0,0,0.3);
					background: #ffffff;
					width: 50%;
					margin: 1rem auto;
					padding: 1rem;
					padding-bottom: 8rem;
				}
				a {
					color: #0f4377;
				}
				.no-margin {
					margin: 0;
				}
			</style>
    </head>
		<body>
			<section class="conatiner">
				<article class="card">
					<p>
						Hola ${query.name}, reciba un cordial y afectuoso saludo de todos quienes conformamos
						la Operadora de Capacitación y Certificación por competencias laborales OCCERTIMM.
					</p>

					<p>
						Por medio del presente hacemos llegar el certificado de participación a la
						capacitación de nombre ${query.trainingId.name.toUpperCase()}, desarrollada el ${formatDate(query.certificacion.date)}.
					</p>

					<p></p>

					<p class="no-margin">PULSA el siguiente enlace:
						<a href='${config_1.default.API}/certificado-capacitacion/${query._id}/certificacion-asistencia'>DESCARGAR CERTIFICADO</a>
					</p>
					<p></p>
					<p class="no-margin">Saludos,</p>
					<p class="no-margin">Ing. Diana Cedeño</p>
					<p class="no-margin">Responsable Administrativo y financiero</p>
					<p class="no-margin">OCCERTIMM</p>
					<p class="no-margin">0997877988</p>
					<a class="no-margin" href="https://occertimmec.com/">https://occertimmec.com/</a>
					
				</article>
			</section>
    </body>
  </html>`;
    return html;
}
/*
Hola NOMBRE DEL PARTICIPANTE, reciba un cordial y afectuoso saludo de todos quienes conformamos
 la Operadora de Capacitación y Certificación por competencias laborales OCCERTIMM.
    Por medio del presente hacemos llegar el certificado de participación a la
    capacitación de nombre INNOVACIONES DE LA REGLAS DE JUEGO 2020, desarrollada el jueves 13 de agosto del 2020.
*/
exports.default = formatHTMLEmail;
