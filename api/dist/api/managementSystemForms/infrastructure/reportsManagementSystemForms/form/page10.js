"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const headerc010_1 = __importDefault(require("./headerc010"));
function formatDate(date) {
    let day = date.getDate() >= 10 ? date.getDate() : `0${date.getDate()}`;
    let month = date.getMonth() + 1 >= 10 ? 1 + date.getMonth() : `0${date.getMonth() + 1}`;
    return `${day}/${month}/${date.getFullYear()}`;
}
function page(props, planning) {
    const template = `
<section>
	${(0, headerc010_1.default)(1)}
	<br/>
	<p>Nos interesa su opinión sobre el servicio que ha recibido por parte de MORA LEDESMA WALTER FILIBERTO con nombre comercial OCCERTIMM   en relación a su proceso de certificación. Agradeceremos que llene esta encuesta con la verdad. Sus respuestas serán analizadas cuidadosamente con el fin de determinar oportunidades para mejorar los procesos al servicio de la comunidad.</p>
	<p>Por favor, califique los servicios en relación a la certificación en una escala del 1 al 5, donde: </p>
	<br/>
	<div class="calific">
		<style>
			.calific {
				width: 80%;
				margin:0 auto;
			}
			.calific table {
				width:100%;
			}
			.calific td, .calific th {
				border: 0.3px solid #b4c7e7;
			}
		</style>
		<table>
			<tr>
				<td width="10%">1 =</td>
				<td style="padding-left:10px;" width="90%">NO SATISFACTORIO</td>
			</tr>
			<tr>
				<td width="10%">2 =</td>
				<td style="padding-left:10px;" width="90%">POCO SATISFACTORIO</td>
			</tr>
			<tr>
				<td width="10%">3 =</td>
				<td style="padding-left:10px;" width="90%">MEDIANAMENTE SATISFACTORIO</td>
			</tr>
			<tr>
				<td width="10%">4 =</td>
				<td style="padding-left:10px;" width="90%">SATISFACTORIO</td>
			</tr>
			<tr>
				<td width="10%">5 =</td>
				<td style="padding-left:10px;" width="90%">MUY SATISFACTORIO</td>
			</tr>
		</table>
	</div>
	<br/>
	<p> Para comentarios utilice el espacio designado al final de la encuesta.</p>
	<br/>

	<style>
		.pool {
			width: 100%;
		}
		.pool td, .pool th {
			font-size: 14px;
			padding: 4px;
		}
		.pool th {
			border: 1px solid black;
		}
		.pool tr {
			border: 1px solid black;
		}
		.pool .sapce {
			height: 0 !important;
		}
		.pool-title {
			color: white;
			background:#315496;
		}
	</style>
	<table class="pool">
		<tr>
			<th class="pool-title">APLICACIÓN</th>
		</tr>
	</table>
	<table class="pool">
		<tr>
			<td style="border:1px solid black" width="10%">1.</td>
			<td style="border:1px solid black" width="90%">¿Le fue fácil encontrar o recibir la información que necesitaba para iniciar su aplicación?</td>
		</tr>
	</table>
	<table class="pool">
		<tbody>
			<tr>
				<td width="5%"></td>
				<td width="20%">1</td>
				<td width="10%" style="border:1px solid black; height:15px;"></td>

				<td width="5%"></td>
				<td width="20%">2</td>
				<td width="10%" style="border:1px solid black; height:15px;"></td>

				<td width="5%"></td>
				<td width="20%">3</td>
				<td width="10%" style="border:1px solid black; height:15px;"></td>

				<td width="5%"></td>
				<td width="20%">4</td>
				<td width="10%" style="border:1px solid black; height:15px;"></td>

				<td width="5%"></td>
				<td width="20%">5</td>
				<td width="10%" style="border:1px solid black; height:15px;"></td>
			</tr>
		</tbody>
	</table>
	<br/>

	<table class="pool">
		<tr>
			<td style="border:1px solid black" width="10%">2.</td>
			<td style="border:1px solid black" width="90%">
				¿Le fue fácil entender la información proporcionada sobre el proceso de aplicación?
			</td>
		</tr>
	</table>
	<table class="pool">
		<tbody>
			<tr>
				<td width="5%"></td>
				<td width="20%">1</td>
				<td width="10%" style="border:1px solid black; height:15px;"></td>

				<td width="5%"></td>
				<td width="20%">2</td>
				<td width="10%" style="border:1px solid black; height:15px;"></td>

				<td width="5%"></td>
				<td width="20%">3</td>
				<td width="10%" style="border:1px solid black; height:15px;"></td>

				<td width="5%"></td>
				<td width="20%">4</td>
				<td width="10%" style="border:1px solid black; height:15px;"></td>

				<td width="5%"></td>
				<td width="20%">5</td>
				<td width="10%" style="border:1px solid black; height:15px;"></td>
			</tr>
		</tbody>
	</table>

	<br/>
		<table class="pool">
		<tr>
			<td style="border:1px solid black" width="10%">3.</td>
			<td style="border:1px solid black" width="90%">
				¿Cómo evaluaría al personal que le prestó el servicio?
			</td>
		</tr>
	</table>
	<table class="pool">
		<tbody>
			<tr>
				<td width="5%"></td>
				<td width="20%">1</td>
				<td width="10%" style="border:1px solid black; height:15px;"></td>

				<td width="5%"></td>
				<td width="20%">2</td>
				<td width="10%" style="border:1px solid black; height:15px;"></td>

				<td width="5%"></td>
				<td width="20%">3</td>
				<td width="10%" style="border:1px solid black; height:15px;"></td>

				<td width="5%"></td>
				<td width="20%">4</td>
				<td width="10%" style="border:1px solid black; height:15px;"></td>

				<td width="5%"></td>
				<td width="20%">5</td>
				<td width="10%" style="border:1px solid black; height:15px;"></td>
			</tr>
		</tbody>
	</table>
	<br/>
	<table class="pool">
		<tr>
			<td style="border:1px solid black" width="10%">4.</td>
			<td style="border:1px solid black" width="90%">
				¿Las instrucciones para llenar la aplicación fueron claras?
			</td>
		</tr>
	</table>
	<table class="pool">
		<tbody>
			<tr>
				<td width="5%"></td>
				<td width="20%">1</td>
				<td width="10%" style="border:1px solid black; height:15px;"></td>

				<td width="5%"></td>
				<td width="20%">2</td>
				<td width="10%" style="border:1px solid black; height:15px;"></td>

				<td width="5%"></td>
				<td width="20%">3</td>
				<td width="10%" style="border:1px solid black; height:15px;"></td>

				<td width="5%"></td>
				<td width="20%">4</td>
				<td width="10%" style="border:1px solid black; height:15px;"></td>

				<td width="5%"></td>
				<td width="20%">5</td>
				<td width="10%" style="border:1px solid black; height:15px;"></td>
			</tr>
		</tbody>
	</table>

		<br/>
	<table class="pool">
		<tr>
			<th class="pool-title">EXAMINACIÓN</th>
		</tr>
	</table>
	<table class="pool">
		<tr>
			<td style="border:1px solid black" width="10%">5.</td>
			<td style="border:1px solid black" width="90%">
				¿Se le proporcionó/existía todo el material, maquinaria, equipo y  herramientas necesarias para llevar a cabo la examinación del perfil al cuál aplicó?
			</td>
		</tr>
	</table>
	<table class="pool">
		<tbody>
			<tr>
				<td width="5%"></td>
				<td width="20%">1</td>
				<td width="10%" style="border:1px solid black; height:15px;"></td>

				<td width="5%"></td>
				<td width="20%">2</td>
				<td width="10%" style="border:1px solid black; height:15px;"></td>

				<td width="5%"></td>
				<td width="20%">3</td>
				<td width="10%" style="border:1px solid black; height:15px;"></td>

				<td width="5%"></td>
				<td width="20%">4</td>
				<td width="10%" style="border:1px solid black; height:15px;"></td>

				<td width="5%"></td>
				<td width="20%">5</td>
				<td width="10%" style="border:1px solid black; height:15px;"></td>
			</tr>
		</tbody>
	</table>
	<br/>

	<table class="pool">
		<tr>
			<td style="border:1px solid black" width="10%">6.</td>
			<td style="border:1px solid black" width="90%">
				¿El lugar (sitio de trabajo/ instalaciones Nombre del OEC) donde usted fue examinado/a fue apropiado?
			</td>
		</tr>
	</table>
	<table class="pool">
		<tbody>
			<tr>
				<td width="5%"></td>
				<td width="20%">1</td>
				<td width="10%" style="border:1px solid black; height:15px;"></td>

				<td width="5%"></td>
				<td width="20%">2</td>
				<td width="10%" style="border:1px solid black; height:15px;"></td>

				<td width="5%"></td>
				<td width="20%">3</td>
				<td width="10%" style="border:1px solid black; height:15px;"></td>

				<td width="5%"></td>
				<td width="20%">4</td>
				<td width="10%" style="border:1px solid black; height:15px;"></td>

				<td width="5%"></td>
				<td width="20%">5</td>
				<td width="10%" style="border:1px solid black; height:15px;"></td>
			</tr>
		</tbody>
	</table>
	<br/>

	<table class="pool">
		<tr>
			<td style="border:1px solid black" width="10%">7.</td>
			<td style="border:1px solid black" width="90%">
				¿Las preguntas e instrucciones durante el proceso fueron claras y de fácil comprensión?
			</td>
		</tr>
	</table>
	<table class="pool">
		<tbody>
			<tr>
				<td width="5%"></td>
				<td width="20%">1</td>
				<td width="10%" style="border:1px solid black; height:15px;"></td>

				<td width="5%"></td>
				<td width="20%">2</td>
				<td width="10%" style="border:1px solid black; height:15px;"></td>

				<td width="5%"></td>
				<td width="20%">3</td>
				<td width="10%" style="border:1px solid black; height:15px;"></td>

				<td width="5%"></td>
				<td width="20%">4</td>
				<td width="10%" style="border:1px solid black; height:15px;"></td>

				<td width="5%"></td>
				<td width="20%">5</td>
				<td width="10%" style="border:1px solid black; height:15px;"></td>
			</tr>
		</tbody>
	</table>
	<br/>

	<table class="pool">
		<tr>
			<td style="border:1px solid black" width="10%">8.</td>
			<td style="border:1px solid black" width="90%">
				¿Se respetó el tiempo estipulado para la examinación?
			</td>
		</tr>
	</table>
	<table class="pool">
		<tbody>
			<tr>
				<td width="5%"></td>
				<td width="20%">1</td>
				<td width="10%" style="border:1px solid black; height:15px;"></td>

				<td width="5%"></td>
				<td width="20%">2</td>
				<td width="10%" style="border:1px solid black; height:15px;"></td>

				<td width="5%"></td>
				<td width="20%">3</td>
				<td width="10%" style="border:1px solid black; height:15px;"></td>

				<td width="5%"></td>
				<td width="20%">4</td>
				<td width="10%" style="border:1px solid black; height:15px;"></td>

				<td width="5%"></td>
				<td width="20%">5</td>
				<td width="10%" style="border:1px solid black; height:15px;"></td>
			</tr>
		</tbody>
	</table>
<div style='page-break-before: always;'></div>
			${(0, headerc010_1.default)(2)}
		<br/>

	<table class="pool">
		<tr>
			<th class="pool-title">EXAMINADOR/A</th>
		</tr>
	</table>
	<table class="pool">
		<tr>
			<td style="border:1px solid black" width="10%">9.</td>
			<td style="border:1px solid black" width="90%">
				¿El examinador/a asistió puntualmente a la examinación?
			</td>
		</tr>
	</table>
	<table class="pool">
		<tbody>
			<tr style="border: 1px solid black;">
				<td width="5%"></td>
				<td width="20%">1</td>
				<td width="10%" style="border:1px solid black; height:15px;"></td>

				<td width="5%"></td>
				<td width="20%">2</td>
				<td width="10%" style="border:1px solid black; height:15px;"></td>

				<td width="5%"></td>
				<td width="20%">3</td>
				<td width="10%" style="border:1px solid black; height:15px;"></td>

				<td width="5%"></td>
				<td width="20%">4</td>
				<td width="10%" style="border:1px solid black; height:15px;"></td>

				<td width="5%"></td>
				<td width="20%">5</td>
				<td width="10%" style="border:1px solid black; height:15px;"></td>
			</tr>
		</tbody>
	</table>
	<br/>

	<table class="pool">
		<tr>
			<td style="border:1px solid black" width="10%">10.</td>
			<td style="border:1px solid black" width="90%">
				¿El examinador/a se dirigió a Ud. de manera profesional con cordialidad y respeto?
			</td>
		</tr>
	</table>
	<table class="pool">
		<tbody>
			<tr>
				<td width="5%"></td>
				<td width="20%">1</td>
				<td width="10%" style="border:1px solid black; height:15px;"></td>

				<td width="5%"></td>
				<td width="20%">2</td>
				<td width="10%" style="border:1px solid black; height:15px;"></td>

				<td width="5%"></td>
				<td width="20%">3</td>
				<td width="10%" style="border:1px solid black; height:15px;"></td>

				<td width="5%"></td>
				<td width="20%">4</td>
				<td width="10%" style="border:1px solid black; height:15px;"></td>

				<td width="5%"></td>
				<td width="20%">5</td>
				<td width="10%" style="border:1px solid black; height:15px;"></td>
			</tr>
		</tbody>
	</table>
	<br/>

		<table class="pool">
		<tr>
			<td style="border:1px solid black" width="10%">11.</td>
			<td style="border:1px solid black" width="90%">
				¿El examinador/a demostró conocer a profundidad (dominio) las áreas en las que se desarrolló su examinación?
			</td>
		</tr>
	</table>
	<table class="pool">
		<tbody>
			<tr>
				<td width="5%"></td>
				<td width="20%">1</td>
				<td width="10%" style="border:1px solid black; height:15px;"></td>

				<td width="5%"></td>
				<td width="20%">2</td>
				<td width="10%" style="border:1px solid black; height:15px;"></td>

				<td width="5%"></td>
				<td width="20%">3</td>
				<td width="10%" style="border:1px solid black; height:15px;"></td>

				<td width="5%"></td>
				<td width="20%">4</td>
				<td width="10%" style="border:1px solid black; height:15px;"></td>

				<td width="5%"></td>
				<td width="20%">5</td>
				<td width="10%" style="border:1px solid black; height:15px;"></td>
			</tr>
		</tbody>
	</table>
	<br/>

	<table class="pool">
		<tr>
			<td style="border:1px solid black" width="10%">12.</td>
			<td style="border:1px solid black" width="90%">
				¿Siente que el examinador/a fue justo/a e imparcial?
			</td>
		</tr>
	</table>
	<table class="pool">
		<tbody>
			<tr>
				<td width="5%"></td>
				<td width="20%">1</td>
				<td width="10%" style="border:1px solid black; height:15px;"></td>

				<td width="5%"></td>
				<td width="20%">2</td>
				<td width="10%" style="border:1px solid black; height:15px;"></td>

				<td width="5%"></td>
				<td width="20%">3</td>
				<td width="10%" style="border:1px solid black; height:15px;"></td>

				<td width="5%"></td>
				<td width="20%">4</td>
				<td width="10%" style="border:1px solid black; height:15px;"></td>

				<td width="5%"></td>
				<td width="20%">5</td>
				<td width="10%" style="border:1px solid black; height:15px;"></td>
			</tr>
		</tbody>
	</table>
	<br/>

		<table class="pool">
		<tr>
			<td style="border:1px solid black" width="10%">13.</td>
			<td style="border:1px solid black" width="90%">
				¿El examinador satisfizo sus expectativas y necesidades durante el proceso de examinación?
			</td>
		</tr>
	</table>
	<table class="pool">
		<tbody>
			<tr>
				<td width="5%"></td>
				<td width="20%">1</td>
				<td width="10%" style="border:1px solid black; height:15px;"></td>

				<td width="5%"></td>
				<td width="20%">2</td>
				<td width="10%" style="border:1px solid black; height:15px;"></td>

				<td width="5%"></td>
				<td width="20%">3</td>
				<td width="10%" style="border:1px solid black; height:15px;"></td>

				<td width="5%"></td>
				<td width="20%">4</td>
				<td width="10%" style="border:1px solid black; height:15px;"></td>

				<td width="5%"></td>
				<td width="20%">5</td>
				<td width="10%" style="border:1px solid black; height:15px;"></td>
			</tr>
		</tbody>
	</table>
	<br/><br/>

	<table style="width:100%">
		<tr>
			<td style="text-align:center;border:1px solid black">USO EXCLUSIVO PARA MORA LEDESMA WALTER FILIBERTO con nombre comercial OCCERTIMM</td>
		</tr>
	</table>
		<br/><br/>
	<div class="points">
		<style>
			.points {
				width: 90%;
				float: right;
				margin-bottom: 15px;
			}
			.points table {
				width:100%;
			}
		</style>
		<table>
			<tr>
				<td width="75%" style="border:1px solid black;"><strong>Puntaje para satisfacción del servicio total (PS): 40</strong> (Se tomará en cuenta para esta puntuación desde la pregunta 1 hasta la pregunta 8)</td>
				<td width="25%" style="border:1px solid black;"></td>
			</tr>
			<tr>
				<td style="border:1px solid black;"><strong>Puntaje para examinador total (PE): 25</strong>
					(Se tomará en cuenta para esta puntuación desde la pregunta 9 hasta la pregunta 13)
				</td>
				<td style="border:1px solid black;"></td>
			</tr>
			<tr>
				<td style="border:1px solid black;"><strong>Puntaje General (PG): 65</strong></td>
				<td style="border:1px solid black;"></td>
			</tr>
			<tr>
				<td style="background:#b4c7e7;border:1px solid black;">Calificación mínima 70/100 % del total de preguntas evaluadas</td>
				<td style="background:#b4c7e7;border:1px solid black;"><div style="width:90px;display:inline-block;height:5px;"></div>%</td>
			</tr>

			<tr>
				<td style="background:#b4c7e7;border:1px solid black;">Puntaje que se debe trasladar al Formulario T011 numeral 10</td>
				<td style="background:#b4c7e7;border:1px solid black;"><div style="width:90px;display:inline-block;height:5px;"></div>%</td>
			</tr>
		</table>
	</div>
	<br/><br/>

	<table class="pool">
		<tr>
			<th colspan="4" class="pool-title">COMENTARIOS</th>
		</tr>
		<tr>
			<td colspan="4" style="height:70px;border:1px solid black;"></td>
		</tr>
		<tr>
			<td width="25%" style="border:1px solid black;">LUGAR DE LA EXAMINACIÓN</td>
			<td width="25%" style="border:1px solid black;">${props.placeCertificate}</td>
			<td width="25%" style="border:1px solid black;">FECHA</td>
			<td width="25%" style="border:1px solid black;">${!!props.dateCertificate && formatDate(props.dateCertificate)}</td>
		</tr>
		<tr>
			<td width="25%" style="border:1px solid black;">NOMBRE DEL EXAMINADO</td>
			<td width="25%" style="border:1px solid black;">${props.name} ${props.lastName}</td>
			<td width="25%" style="border:1px solid black;">FIRMA</td>
			<td width="25%" style="border:1px solid black;"></td>
		</tr>
		<tr>
			<th colspan="4" style="border:1px solid black;">GRACIAS POR SU COLABORACIÓN</th>
		</tr>
	</table>
</section>
`;
    return template;
}
exports.default = page;
