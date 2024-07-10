"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const headerc008_1 = __importDefault(require("./headerc008"));
const esquemas_1 = __importDefault(require("./esquemas"));
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
function page(props, certificate) {
    let dateCerficate = new Date(props.dateCertificate);
    const template = `
<section>
	${(0, headerc008_1.default)(1)}
	<br/>
	<div>
		<label>Santo Domingo de los Colorados,</label>
		<span style="display:inline-block;width:20px;border-bottom: 1px solid black;">  ${dateCerficate.getDate()}</span>
		<label>de</label>
		<span style="display:inline-block;width:100px;border-bottom: 1px solid black;">  ${month[dateCerficate.getMonth()]}</span>
		<label>del ${dateCerficate.getFullYear()}</label>
	</div>
	<br/>
	<div>
		<label>Sr/Sra/Srta.</label>
		<span style="display:inline-block;width:350px;border-bottom: 1px solid black;">  ${props.name} ${props.lastName}</span>
	</div>
	<p style="margin:0;">Candidato/a certificar</p>
	<p style="margin:0;">Presente</p>

	<h3>ASUNTO: NOTIFICACIÓN DE CERTIFICACIÓN</h3>
	<p style="font-size:14px;">De nuestra consideración:</p>
	<br/>
	<label>
		Por este medio tenemos el agrado de comunicarle que exitosamente ha demostrado su competencia y, por lo tanto, de acuerdo con los procedimientos establecidos por 
		<strong>MORA LEDESMA WALTER FILIBERTO con nombre comercial OCCERTIMM, SE OTORGA</strong> la Certificación de Competencias Laborales en el siguiente ESQUEMA:
	</label>
	<span style="display:inline-block;width:30%;border-bottom:1px solid black">${certificate.squemaCode}</span>
	<label>DEL PERFIL</label>
	<span style="display:inline-block;border-bottom:1px solid black;width:70%;font-size:11px">${certificate.name}</span>
	<label>con las siguientes Unidades de Competencia</label>
	<span style="display:inline-block;width:20%;border-bottom: 1px solid black">${generateUC(certificate.uc)}</span>
	<br/>

	<div>
		<label>
			<strong>Examinación Teórica (mínimo ­­­70% de acuerdo al esquema): </strong>Puntaje obtenido 
		</label>
		<span style="display:inline-block;width:8%;height:1px;background:black;"></span>
		<label>% <strong>Examinación Práctica (100%)</strong> Puntaje obtenido </label>
		<span style="display:inline-block;width:8%;height:1px;background:black;"></span>
		<label>%</label>
	</div>

	<br/>

	<p>
		Posteriormente se le hará la entrega de su Certificado, el mismo que es propiedad de
		<strong>MORA LEDESMA WALTER FILIBERTO con nombre comercial OCCERTIMM</strong> hasta la fecha de su prescripción. El OEC se reserva el derecho de suspenderlo/retirarlo de acuerdo con los procedimientos establecidos.
	</p>
	<br/>
	<p>
		Se le recuerda que la obtención del certificado conlleva la responsabilidad de representar a su profesión con una conducta que demuestre ética y profesionalismo, por lo cual usted firmará el Acuerdo de cumplimiento con los lineamientos para personas certificadas (C009).
	</p>
	<br/>
	<p>
		Se le recuerda también, que el usuario del Certificado descarga y libera 
		<strong>MORA LEDESMA WALTER FILIBERTO con nombre comercial OCCERTIMM</strong> de toda responsabilidad administrativa, civil o penal, que se pudieren derivar del uso del mismo. El usuario declara además que es de su exclusiva responsabilidad el uso del Certificado, siendo Usted el único responsable 
		en la ejecución de las actividades que realice como resultado de la obtención del referido instrumento. De igual forma, el usuario, así como sus familiares, herederos o administradores, renunciarán a instaurar cualquier tipo de demanda o acción legal similar contra
		</strong>MORA LEDESMA WALTER FILIBERTO con nombre comercial OCCERTIMM</strong>, originada en las actividades que trata la Certificación.
	</p>
	<br/>
	<p>Atentamente</p>

	<section>
		<style>
			.firma-page8jarl {
				display:inline-block;
				width: 40%;
				vertical-align:top;
			}
			.firma-page8jarl p {
				margin: 0;
			}
		</style>

		<article class="firma-page8jarl">
			<span style="display:inline-block;width:95%;height:1px;background:black"></span>
			<p>Elaborado por</p>
			<p>Lcda. Lida Murillo Gordillo</p>
			<p style="font-weight:bold">Resp. de certificación y control</p>
		</article>

		<article style="float:right" class="firma-page8jarl">
			<span style="display:inline-block;width:95%;height:1px;background:black"></span>
			<p>Aprobado por:</p>
			<p>Tec. Walter Mora Ledesma</p>
			<p style="font-weight:bold">Coor. de procesos de certificación y control</p>
		</article>
	</section>

<div style='page-break-before: always;'></div>
	${(0, headerc008_1.default)(2)}

	<br/>
	<div>
		<label>Santo Domingo de los Colorados,</label>
		<span style="display:inline-block;width:60px;border-bottom: 1px solid black;">  ${dateCerficate.getDate()}</span>
		<label>de</label>
		<span style="display:inline-block;width:130px;border-bottom: 1px solid black;">  ${month[dateCerficate.getMonth()]}</span>
		<label>del ${dateCerficate.getFullYear()}</label>
	</div>
	<br/>
	<div>
		<label>Sr/Sra/Srta.</label>
		<span style="display:inline-block;width:350px;border-bottom: 1px solid black;">  ${props.name} ${props.lastName}</span>
	</div>

	<p style="margin:0;">Candidato/a certificar</p>
	<p style="margin:0;">Presente</p>

	<h3>ASUNTO: NOTIFICACIÓN DE NO CERTIFICACIÓN</h3>
	<p style="font-size:14px;">De nuestra consideración:</p>

	<br/>
	<label>
		Por la presente, se comunica a usted que, de acuerdo a los procedimientos establecidos, la normativa legal y reglamentaria vigente de
		<strong>MORA LEDESMA WALTER FILIBERTO con nombre comercial OCCERTIMM, NO SE OTORGA</strong>
		la Certificación de Competencias Laborales en el siguiente esquema de certificación 
	</label>
	<span style="display:inline-block;border-bottom: 1px solid black;width:70%;font-size:11px">${(0, esquemas_1.default)(certificate.squemaCode)}</span>
	<label>del perfil</label>
	<span style="display:inline-block;width:70%;font-size:11px;border-bottom:1px solid black">${certificate.name}</span>
	<br/>

	<div>
		<label>
			<strong>Examinación Teórica (mínimo ­­­____% de acuerdo al esquema): </strong>Puntaje obtenido 
		</label>
		<span style="display:inline-block;width:8%;height:1px;background:black;"></span>
		<label>% <strong>Examinación Práctica (100%)</strong> Puntaje obtenido </label>
		<span style="display:inline-block;width:8%;height:1px;background:black;"></span>
		<label>%</label>
	</div>
	<br/>

	<p>De acuerdo con la revisión de su expediente y el no cumplimiento de requisitos del proceso de certificación de personas por competencias laborales, se procede al cierre de la aplicación presentada. </p>
	<br/>
	<p>Se le recuerda, que podrá volver a postular al proceso de certificación de personas por competencias laborales, desde cero, en 6 semanas, contadas a partir de la presente fecha. </p>
	<br/>
	<p>Atentamente</p>
	<br/>

	<section>
		<style>
			.firmaoccer1544 {
				display:inline-block;
				width: 40%;
				vertical-align:top;
			}
			.firmaoccer1544 p {
				margin: 0;
			}
		</style>

		<article class="firmaoccer1544">
			<span style="display:inline-block;width:95%;height:1px;background:black"></span>
			<p>Elaborado por</p>
			<p>Lcda. Lida Murillo Gordillo</p>
			<p style="font-weight:bold">Resp. de certificación y control</p>
		</article>

		<article style="float:right" class="firmaoccer1544">
			<span style="display:inline-block;width:95%;height:1px;background:black"></span>
			<p>Aprobado por:</p>
			<p>Tec. Walter Mora Ledesma</p>
			<p style="font-weight:bold">Coor. de procesos de certificación y control</p>
		</article>

		</section>

	<br/><br/>
	<div>
		<label>Se le recuerda que, si no obtuvo el</label>
		<span style="display:inline-block;width:8%;height:1px;background:black;"></span>
		<label>% suficiente, puede solicitar la respectiva reexaminación de las unidades de competencia.</label>
	</div>

	<br/>
	<h3 style="text-align:center;">SOLICITUD DE RE-EXAMINACIÓN</h3>
	<p>En el caso de haber realizado la examinación y no haber logrado la competencia en una o varias unidades de competencia mostradas en el presente documento, se le convoca a la realización de una segunda y última examinación si usted lo solicita.</p>
	<h3 style="text-align:center;">¿USTED LO REQUIERE?:</h3>

	<div style="margin:0 auto;width:50%;">
		<table style="width:100%;">
			<tr>
				<td width="30%" style="border:1px solid black">SI</td>
				<td width="20%" style="border:1px solid black"></td>
				<td width="30%" style="border:1px solid black">NO</td>
				<td width="20%" style="border:1px solid black"></td>
			</tr>
		</table>
	</div>

	<p>En el caso de marcar afirmativo la planificación de las fechas de la re-examinación será de acuerdo al cronograma y disponibilidad de
		<strong>MORA LEDESMA WALTER FILIBERTO con nombre comercial OCCERTIMM</strong>, el cual será oportunamente comunicado.
	</p>
	<p>En el caso de marcar negativo, favor especificar las razones:</p>

	<p style="margin-top:22px;display:inline-block;width:100%;height:1px;background:black;"></p>
	<br/>
	<p style="margin-top:22px;display:inline-block;width:100%;height:1px;background:black;"></p>
	<br/>
	<p style="margin-top:22px;display:inline-block;width:100%;height:1px;background:black;"></p>
	<br/>
	<h4>**(En el caso de que el candidato sea declarado competente utilizar la Hoja 1, en el caso de que el candidato sea declarado no competente utilizar la Hoja 2 y en el caso que el candidato solicite la re-examinación utilizar la Hoja 3) </h4>

</section>
`;
    return template;
}
exports.default = page;
