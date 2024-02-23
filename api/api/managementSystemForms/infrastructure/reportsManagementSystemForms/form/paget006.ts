import headert006 from './headert006'

function page(props, certificate) {
	let template = `
	<section>
		<style>
			.flexbox {
				display: -webkit-box
				display: -webkit-flex
				-webkit-flex-wrap: wrap
				display: flex
				flex-wrap: wrap
			}
		</style>
		${headert006(1)}
		<br/>
		<p>
			Comparece a la suscripción del presente Acuerdo de Confidencialidad y Responsabilidad de la Información, el Sr(a). ${certificate.id_user.name.toUpperCase()}
			en calidad de Examinador(a) del perfil ${certificate.name.toUpperCase()}
		</p>
		<br/>
		<h3>CLÁUSULA PRIMERA: ANTECEDENTES. - </h3>
		<p>
			En el capítulo cuarto, articulo 11 literal e de la Norma Técnica de Reconocimiento de Organismos Evaluadores de Conformidad para la Certificación de Personas-Requisitos para registro e información señala: “(…)El OEC debe identificar, gestionar y disponer los documentos relacionados con el proceso de solicitud (formularios), esquemas de certificación, instrumentos de evaluación (registros de examen) y otros relativos a otorgar, renovar, suspender o retirar la certificación, de forma que se asegure la integridad y confidencialidad del proceso. Estos registros incluyen medios para corroborar el estatus de cualquier persona certificada. El acceso a estos registros debe ser compatible con los acuerdos de confidencialidad.” (...)”. 
		</p>
		<p>
		El día 25 del mes de mayo del 2018., el Sr(a). ${certificate.id_user.name.toUpperCase()} comienza a formar parte del proceso de certificación de personas en calidad de ${certificate.name.toUpperCase()}
		de MORA LEDESMA WALTER FILIBERTO con nombre comercial OCCERTIMM y con motivo de la prestación de sus servicios y actividades propias de su función va a tener acceso a información institucional privilegiada, considerada como confidencial y por tanto reservada.
		</p>
		
		<div class="flexbox">
		<p style="display:inline-block;margin:0;">
			<h3 style="display:inline;margin:0;">CLÁUSULA SEGUNDA: OBJETO.-</h3>
				El objeto del presente acuerdo es determinar los términos y condiciones con los cuales el Examinador(a) del perfil
				${certificate.name.toUpperCase()} que forma parte del proceso de certificación de personas por competencias laborales y/o es contratado por 
				<span style="font-weight: bold;">MORA LEDESMA WALTER FILIBERTO CON NOMBRE COMERCIAL OCCERTIMM</span> mantendrá la confidencialidad de todos los datos que maneje y la información institucional que por motivo de su actividad, funciones y servicios llegare a conocer, tener acceso, hacer uso o manejo de ella.  
			</p>
		</div>

		<br/>

		<div class="flexbox">
			<p style="display:inline-block;margin:0;">
				<h3 style="display:inline-block;margin:0;">CLÁUSULA TERCERA: ACUERDO. -</h3>
				Las partes acuerdan que cualquier información de <span style="font-weight: bold;">MORA LEDESMA WALTER FILIBERTO CON NOMBRE COMERCIAL OCCERTIMM</span> 
				que fuera facilitada de sus archivos o creada en relación a la propiedad intelectual bajo los parámetros de la Ley de Propiedad Intelectual, y que, por motivo de la actividad, funciones y servicio, o que por cualquier otra circunstancia o medio llegue a conocimiento del Examinador(a) del perfil 
				${certificate.name.toUpperCase()} se regirá por este Acuerdo.
				<span style="font-weight: bold;">CLÁUSULA CUARTA: USO Y SU PROTECCIÓN. - </span> En lo relativo al uso y protección de la información institucional, el Examinador(a) del perfil 
				${certificate.name.toUpperCase()} deberá considerar los siguientes aspectos: 
			</p>
		</div>

		<p>
			La información institucional que reciba, conozca, acceda, maneje o haga uso el Examinador(a) del perfil ${certificate.name.toUpperCase()}
			será mantenida y protegida como confidencial, incluyendo información relativa a derechos de autor, investigaciones técnicas, programas, modelos, estrategias, know-how, procesos internos/procesos de certificación de personas, conocimientos técnicos; administración y manejo de recursos; operación y manejo de materias primas; datos de proveedores de bienes y servicios; información financiera; lista de participantes/personas certificadas; empleados; relaciones contractuales; datos de los participantes; estadísticas; y, en general toda clase de datos e información institucional que 
			<span style="font-weight: bold;">MORA LEDESMA WALTER FILIBERTO CON NOMBRE COMERCIAL OCCERTIMM </span> utiliza para cumplir con su objeto y funciones. 
		</p>


		<p>Toda la información institucional incluida la digital y física (archivos) es de propiedad de
			<span style="font-weight: bold;"> MORA LEDESMA WALTER FILIBERTO CON NOMBRE COMERCIAL OCCERTIMM </span>
			por lo que el Examinador(a) del perfil ${certificate.name.toUpperCase()} es consciente en que la información que reciba, conozca, acceda, maneje o haga uso es confidencial y su utilización será exclusiva de sus funciones.
		</p>

		<p>
			El Examinador(a) del perfil ${certificate.name.toUpperCase()} se compromete a cuidar la información entregada por el 
			<span style="font-weight: bold;"> MORA LEDESMA WALTER FILIBERTO CON NOMBRE COMERCIAL OCCERTIMM </span>
			y no revelársela a terceras personas sin previa autorización de la institución. 
		</p>

		<p>MORA LEDESMA WALTER FILIBERTO CON NOMBRE COMERCIAL OCCERTIMM gestionará el consentimiento escrito del individuo (solicitante, candidato o persona certificada) para la divulgación de la información, exceptuando los casos en que sea requerida legalmente por la autoridad competente. </p>

		<p>
			En aquellos casos en que la información sea requerida legalmente por autoridad competente, él  Examinador(a) del perfil ${certificate.name.toUpperCase()}
			previo a la entrega de la información, notificará inmediatamente a 
			<span style="font-weight: bold;"> MORA LEDESMA WALTER FILIBERTO CON NOMBRE COMERCIAL OCCERTIMM </span> al respecto. 
		</p>

		<p>
			El Examinador(a) del perfil ${certificate.name.toUpperCase()} se obliga a guardar y mantener la reserva para la no reproducción de la información institucional confiada en virtud de la ejecución y cumplimiento del presente Acuerdo. 
		</p>
			
			<div style='page-break-before: always;'></div>
			${headert006(2)}
			<br/>

		<p>
			La inobservancia de lo manifestado generará responsabilidad y dará lugar a que MORA LEDESMA WALTER FILIBERTO con nombre comercial OCCERTIMM ejerza las acciones legales civiles, penales y/o administrativas correspondientes.
			EL Examinador(a) del perfil ${certificate.name.toUpperCase()}  se obliga a devolver al personal responsable de MORA LEDESMA WALTER FILIBERTO con nombre comercial OCCERTIMM la información, grabación, y/o productos resultantes del proceso de certificación a los que se tuvieren acceso sin autorización expresa y evidenciada por parte del Coordinador del Comité de Certificación de 
			<span style="font-weight: bold;"> MORA LEDESMA WALTER FILIBERTO CON NOMBRE COMERCIAL OCCERTIMM </span> o la/el encargada/o de la certificación de personas y que representaren guía de examinaciones subsiguientes poniendo en riesgo la imparcialidad del proceso.
		</p>

		<div class="flexbox">
			<p style="display:inline-block;margin:0;">
				<h3 style="display:inline-block;margin:0;">CLÁUSULA QUINTA: DE LA RESERVA DE LA INFORMACIÓN. -</h3>
				La obligación y responsabilidad de mantener la confidencialidad de la información institucional de 
				<span style="font-weight: bold;">MORA LEDESMA WALTER FILIBERTO CON NOMBRE COMERCIAL OCCERTIMM</span>
			 por parte Examinador(a) del perfil
				${certificate.name.toUpperCase()} se mantendrá por el tiempo en que el OEC se encuentre reconocido por la SETEC.
			</p>
		</div>
<br/>
		<div class="flexbox">
			<p style="display:inline-block;margin:0;">
				<h3 style="display:inline-block;margin:0;">CLÁUSULA SEXTA: EXCEPCIONES.- </h3>
				No obstante de lo dispuesto en este Acuerdo, no habrá deber u obligación de confidencialidad respecto de información que sea pública o llegue a ser pública por causa no imputable al 
				Examinador(a) del perfil
				${certificate.name.toUpperCase()};sea recibida de un tercero que no esté obligado a mantener confidencialidad de la información; sea legalmente recibida por el Examinador(a) del perfil 
				${certificate.name.toUpperCase()}
				por parte de otra fuente con facultad para divulgarla. Para el efecto, se deberá considerar lo señalado en el numeral 19 del artículo 66 de la Constitución de la República del Ecuador que dice “El derecho a la protección de datos de carácter personal, que incluye el acceso y la decisión sobre información y datos de este carácter, así como su correspondiente protección. La recolección, archivo, procesamiento, distribución o difusión de estos datos o información requerirán la autorización del titular o el mandato de la ley” y artículo 6 de la Ley Orgánica de Transparencia y Acceso a la Información Pública que indica “Información Confidencial.- Se considera información confidencial aquella información pública personal, que no está sujeta al principio de publicidad y comprende aquella derivada de sus derechos personalísimos y fundamentales, especialmente aquellos señalados en los artículos 23 y 24 de la Constitución Política de la República.
			</p>
			<p style="margin:0;">El uso ilegal que se haga de la información personal o su divulgación, dará lugar a las acciones legales pertinentes.</p>
			<p style="margin:0;">No podrá invocarse reserva, cuando se trate de investigaciones que realicen las autoridades, públicas competentes, sobre violaciones a derechos de las personas que se encuentren establecidos en la Constitución Política de la República, en las declaraciones, pactos, convenios, instrumentos internacionales y el ordenamiento jurídico interno. Se excepciona el procedimiento establecido en las indagaciones previas”.</p>
		</div>
		<br/>
		<div class="flexbox">
			<p style="display:inline-block;margin:0;">
				<h3 style="display:inline-block;margin:0;">CLÁUSULA SÉPTIMA: DOMICILIO. -</h3>
				Este Acuerdo de Confidencialidad se regirá por las leyes vigentes en la República del Ecuador y sólo podrá ser modificado por escrito y firmado por mutuo acuerdo de las Partes. 
			</p>
		</div>
		<br/>

		<div class="flexbox">
			<p style="display:inline-block;margin:0;">
				<h3 style="display:inline-block;margin:0;">CLÁUSULA OCTAVA: ACLARATORIA. - </h3>
				Este acuerdo, únicamente regula la confidencialidad y la información institucional de 
				<span style="font-weight: bold;"> MORA LEDESMA WALTER FILIBERTO CON NOMBRE COMERCIAL OCCERTIMM </span>
				por lo que no constituye o implica la promesa de entrar en una relación contractual o de negocios entre las Partes.
			</p>
		</div>
		<br/>

		<div class="flexbox">
			<p style="display:inline-block;margin:0;">
				<h3 style="display:inline-block;margin:0;">CLÁUSULA NOVENA: SOLUCIÓN DE CONTROVERSIAS. - </h3>
				De producirse controversias, discrepancias o reclamos, derivados o relacionados con la interpretación, aplicación, cumplimiento o ejecución del presente Acuerdo, en casos pertinentes y luego de la decisión de la Máxima Autoridad de

				<span style="font-weight: bold;"> MORA LEDESMA WALTER FILIBERTO CON NOMBRE COMERCIAL OCCERTIMM </span> se procederá a un arreglo directo, con justicia y equidad. 
			</p>
		</div>

		<p>
			Si no fuere posible solucionar las controversias en el término de cinco (5) días desde que se originaron, serán sometidas a decisión de un mediador del Centro de Mediación de la Procuraduría General del Estado, con sede en la ciudad de Quito. Si las partes no llegaren a un acuerdo, se someterán al procedimiento determinado en la Ley Contencioso Administrativa; para lo cual, renuncian fuero y domicilio y se someterán al Tribunal Contencioso Administrativo de la ciudad de Quito.
		</p>
		
		<div class="flexbox">
			<p style="display:inline-block;margin:0;">
				<h3 style="display:inline-block;margin:0;">CLÁUSULA DÉCIMA:.- </h3>
				El Examinador del perfil ${certificate.name.toUpperCase()} 
				 acepta el contenido de acuerdo de confidencialidad y de responsabilidad, para lo cual suscribe el documento en tres originales de igual contenido y valor.
			</p>
		</div>

		<p>
		Dado en la ciudad de Santo Domingo de los Colorados., a los 11 días del mes de junio de 2018.
		</p>

		<style>
			.firma12jarl-12 {
				display:inline-block;
				width: 40%;
				vertical-align:top;
			}
			.firma12jarl-12 p {
				margin: 0;
			}
		</style>
		
		<article class="firma12jarl-12">
			<p>
				<span>Firma:</span>
				<span style="display:inline-block;width:80%;height:1px;background:black"></span>
			</p>
			<p>Nombre: ${certificate.id_user.name.toUpperCase()} </p>
			<p>C.I.: ${certificate.id_user.cedula} </p>
		</article>

	</section>

`

return template
}

export default page
