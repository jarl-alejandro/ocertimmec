import headerc004 from './headerc004'
import control from './control'

function formatDate (date) {
	let day = date.getDate() >= 10 ? date.getDate() : `0${date.getDate()}`
	let month = date.getMonth() >= 10 ? 1 + date.getMonth() : `0${date.getMonth() + 1}`
	return `${day}/${month}/${date.getFullYear()}`
}

function page(props) {
const template = `
	<section>
		${ headerc004(1) }
		<br/><br/>

		<div>
			<label>
				Para cumplir con las políticas de MORA LEDESMA WALTER FILIBERTO con nombre comercial OCCERTIMM como Organismo Evaluador de la Conformidad y garantizar altos estándares de conducta ética propuestos por el mismo, Yo
			</label>
			<span style="width:200px;height:1px;background:black"></span>
			<label>reconozco que:</label>
		</div>
		<br/><br/>

		<p>1. Seré honesto, imparcial, justo y transparente, en todas las actividades relacionadas con las examinaciones y certificaciones de competencia de personas de MORA LEDESMA WALTER FILIBERTO con nombre comercial OCCERTIMM. No cometeré actos fraudulentos durante el proceso de examinación, para lo cual me comprometo a no llevar ayudas no autorizadas. En el caso de incumplir este apartado, se procederá con el retiro y calificación inmediata del examen.</p>
		<p>2. Me comportaré con profesionalismo en todo momento.</p>
		<p>3. No divulgaré información relacionada con los asuntos confidenciales de MORA LEDESMA WALTER FILIBERTO con nombre comercial OCCERTIMM, ni sus procesos técnicos, así como de los resultados de las evaluaciones y certificaciones de los usuarios.</p>
		<p>4. Informaré a MORA LEDESMA WALTER FILIBERTO con nombre comercial OCCERTIMM. de todas las conexiones, intereses o afiliaciones que puedan influir en el proceso de certificación del cual me encuentro participando como candidato.</p>
		<p>5. Promoveré la confiabilidad de los servicios de certificación de MORA LEDESMA WALTER FILIBERTO con nombre comercial OCCERTIMM para el uso de entidades públicas y privadas.</p>
		<p>6. Cumpliré con las políticas de MORA LEDESMA WALTER FILIBERTO con nombre comercial OCCERTIMM y los procedimientos de operación del modelo de evaluación de una forma no discriminatoria.</p>
		<p>7. Informaré en el momento de la evaluación cualquier tipo de conflicto de interés, relacionado con el examinador.</p>
		<p>8. Declaro no conocer al examinador y además de ello, no haber recibido capacitación alguna por parte de él durante los dos últimos años.</p>
		<p>9. Declaro estar de acuerdo y me comprometo a cumplir el código de ética y conducta para el examinado de MORA LEDESMA WALTER FILIBERTO con nombre comercial OCCERTIMM</p>

		<br/><br/><br/><br/>

		<table style="width:100%">
			<tr>
				<td width="33%" style="border-bottom:1px solid black;white-space:nowrap;">${props.name } ${ props.lastName }</td>
				<td width="10%"></td>
				<td width="26%" style="border-bottom:1px solid black"></td>
				<td width="10%"></td>
				<td width="26%" style="border-bottom:1px solid black">${ props.dateCertificate && formatDate(props.dateCertificate) }</td>
			</tr>
			<tr>
			<td style="text-align:center">NOMBRE DEL EXAMINADO</td>
			<td></td>
			<td style="text-align:center">FIRMA DEL EXAMINADO</td>
			<td></td>
			<td style="text-align:center">FECHA</td>
			</tr>
		</table>
	</section>
`
	return template
}
export default page

