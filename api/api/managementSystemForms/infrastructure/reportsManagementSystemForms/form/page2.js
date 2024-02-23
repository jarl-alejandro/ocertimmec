import headerc002 from './headerc002'
import control from './control'
import config from '../../../config'

function page(props, certificate) { 
let template = `
	<section class="page2">
		${ headerc002(1) }
		<br/><br/>
		<table style="margin-left: 20px">
			<tr>
				<td width="200px">Nombres y Apellidos:</td>
				<td width="280px" style="border-bottom: 1px solid black">${props.name} ${props.lastName}</td>
				</tr>
				<tr>
				<td width="200px">Nº de Cédula:</td>
				<td width="280px" style="border-bottom: 1px solid black">${ props.document }</td>
			</tr>
			<tr><br/><br/></tr>
		</table>

		<div style="margin-left:40px;margin-top:25px">
			<p style="font-weight:bold;margin:0;">1. LECTO-ESCRITURA</p>
			<p style="font-weight:bold;margin:0;">1.1. PROCESOS MOTORES (Motricidad fina)</p>
		</div>
		<p>Consignas para el área I: ESQUEMA CORPORAL Consta de 3 ítems que van a diagnosticar el conocimiento que el estudiante tiene de su esquema corporal.</p>
		<table>
			<tr>
				<td style="border: 1px solid black;">a. En su propio cuerpo Se pide señalar las siguientes 4 partes “finas”: boca, ojos, nariz, dedo.</td>
			</tr>
			<tr>
				<td style="border: 1px solid black;">b. En su imagen (Frente a un espejo) Se pide señalar partes “finas o gruesas”: cabeza, manos, piernas, ojos, etc.</td>
			</tr>
			<tr>
				<td style="border: 1px solid black;">c. En otra persona Se pide que señale las siguientes 4 partes gruesas: brazos, piernas espalda, pecho.</td>
			</tr>
			<tr><td><br/></td></tr>
			<tr>
				<td>Consignas para el área II: ORIENTACION 3.1. Temporal: Esta área mide orientación temporal, consta de 4 ítems. Se pregunta al estudiante:</td>
			</tr>
			<tr>
				<td style="border:1px solid black;">a. ¿En este momento es de día o de noche?</td>
			</tr>
			<tr>
				<td style="border:1px solid black;">b. ¿Que haces por las noches?</td>
			</tr>
			<tr>
				<td style="border:1px solid black;">c. ¿Qué realizaste ayer en la escuela?</td>
			</tr>
			<tr>
				<td style="border:1px solid black;">d. ¿Qué actividad hiciste hoy?</td>
			</tr>
			<tr><td><br/></td></tr>
			<tr>
				<td>Consignas para el área III: COORDINACION DINÁMICA</td>
			</tr>
			<tr>
				<td style="border:1px solid black;">a. Salta en un solo pie.</td>
			</tr>
			<tr>
				<td style="border:1px solid black;">b. Botea la pelota con una mano, con dos manos</td>
			</tr>
		</table>
		<br/>
		<p style="font-weight: bold;margin-left:15px">PROCESOS LÉXICOS</p>
		<p>Selecciona la oración adecuada</p>

		<div style="width:600px; height:400px; border:1px solid black;margin: 0 auto;">
			<img src="${config.API}/fotos-pdf/foto1.png" style="width:100%;height:100%" />
		</div>
<div style='page-break-before: always;'></div>
		${ headerc002(2) }
		<br/>
		<div style="width:600px; height:400px; border:1px solid black;margin: 0 auto;">
			<img src="${config.API}/fotos-pdf/foto2.png" style="width:100%;height:100%" />
		</div>

		<p style="font-weight:bold;margin-left:80px;margin-top:15px;">PROCESOS DE ESTRUCTURACIÓN MORFOSINTÁCTICO</p>
		<p style="margin-top:5px;">Subraye la respuesta correcta</p>
		<br/>
		<p style="margin:0">Solo oración simple</p>
		<ul style="margin-left:20px">
			<li>Vimos a todos en el estadio</li>
			<li>Quiere algo y no sabe qué</li>
			<li>Dime que te quedarás</li>
		</ul>
		<p style="margin:0">Solo oración simple</p>
		<ul style="margin-left:20px">
			<li>Ahora vengo yo</li>
			<li>Vamos a continuar con el trabajo</li>
			<li>Si me amas, obedéceme</li>
		</ul>
		<p style="margin:0">Oración yustapuesta</p>
		<ul style="margin-left:20px">
			<li>Solo sé eso, no entendí más</li>
			<li>Betty y Alex bailan aquí y allá</li>
			<li>Mandiles, sábanas y trajes multicolores</li>
		</ul>

		<p style="font-weight:bold;margin-left:50px;">PROCESO DE COMPRENSIÓN Y PLANIFICACIÓN</p>
		<p style="margin-top:8px">LECTURA</p>
		<p style="margin-top:12px">Hoy llevé mi cometa de colores al campo. Soplaba poco viento y mi cometa no subía. Llamé entonces al viento, y ella subió y subió. Se hizo pequeñita. Jugaba al escondite entre las nubes y movía alegre su cola de trapo. Qué contentos nos sentíamos los dos. Al fin el viento se cansó de soplar, y con mi cometa regresé a casa.</p>

		<p style="margin-top:25px">ENCIERRA EN UN CÍRCULO LA RESPUESTA CORRECTA: </p>

		<p style="margin-top:15px;margin-left:50px;">1. La frase "soplaba poco" se refiere a:</p>
		<ul style="margin-top:5px;margin-left:60px">
			<li>la cometa</li>
			<li>el campo</li>
			<li>al viento</li>
		</ul>
		<div style='page-break-before: always;'></div>
		${headerc002(3)}
		<br/>

		<p style="margin-top:15px;margin-left:50px;">2. ¿Quién jugaba al escondite?</p>
		<ul style="margin-top:5px;margin-left:60px">
			<li>la cometa</li>
			<li>el viento</li>
			<li>las nubes</li>
		</ul>
		<p style="margin-top:15px;margin-left:50px;">3. ¿Quiénes estaban muy contentos?</p>
		<ul style="margin-top:5px;margin-left:60px">
			<li>el niño y la cometa</li>
			<li>las nubes y la cometa</li>
			<li>la cometa y su cola</li>
		</ul>
		<p style="margin-top:15px;margin-left:50px;">4. ¿Qué pasó cuando el viento se cansó de soplar?</p>
		<ul style="margin-top:5px;margin-left:60px">
			<li>el niño regresó a casa solo</li>
			<li>regresaron a casa el niño y la cometa</li>
			<li>la cometa se fue a casa</li>
		</ul>

		<p style="width:85%;margin:0 auto;margin-top:25px;font-weight:bold;font-style:italic;font-size:20px">DE USO EXCLUSIVO PARA MORA LEDESMA WALTER FILIBERTO CON NOMBRE COMERCIAL OCCERTIMM:</p>
		<br/>
		<table style="font-size:13px;">
			<thead>
				<tr>
					<th style="border:1px solid black;padding:3px;" colspan="6">PUNTAJE OBTENIDO PARTE LECTO-ESCRITURA</th>
				</tr>
				<tr>
					<th style="border:1px solid black;padding:3px;">PROCESO LECTO-ESCRITURA</th>
					<th style="border:1px solid black;padding:3px;">SUBPROCESO</th>
					<th style="border:1px solid black;padding:3px;">PUNTAJE OBTENIDO</th>
					<th style="border:1px solid black;padding:3px;">PROCESO LECTO-ESCRITURA</th>
					<th style="border:1px solid black;padding:3px;border-right:0;">SUBPROCESO</th>
					<th style="border:1px solid black;padding:3px;">PUNTAJE OBTENIDO</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td style="border:1px solid black;padding:2px;font-weight:bold">PROCESOS MOTORES (Motricidad fina)</td>
					<td style="border:1px solid black;padding:2px;">3</td>
					<td style="border:1px solid black;padding:2px;"></td>
					<td style="border:1px solid black;padding:2px;font-weight:bold">PROCESOS DE ESTRUCTURACIÓN MORFOSINTÁCTICO</td>
					<td style="border:1px solid black;padding:2px;">3</td>
					<td style="border:1px solid black;padding:2px;"></td>
				</tr>
				<tr>
					<td style="border:1px solid black;padding:2px;font-weight:bold">PROCESOS LÉXICOS</td>
					<td style="border:1px solid black;padding:2px;">2</td>
					<td style="border:1px solid black;padding:2px;"></td>
					<td style="border:1px solid black;padding:2px;font-weight:bold">PROCESO DE COMPRENSIÓN Y PLANIFICACIÓN</td>
					<td style="border:1px solid black;padding:2px;">4</td>
					<td style="border:1px solid black;padding:2px;"></td>
				</tr>
				<tr>
					<td style="border:1px solid black;padding:2px;"></td>
					<td style="border:1px solid black;padding:2px;font-weight:bold">SUBTOTAL 1</td>
					<td style="border:1px solid black;padding:2px;"></td>
					<td style="border:1px solid black;padding:2px;"></td>
					<td style="border:1px solid black;padding:2px;font-weight:bold">SUBTOTAL 1</td>
					<td style="border:1px solid black;padding:2px;"></td>
				</tr>
				<tr>
					<td style="border:1px solid black;padding:2px;" colspan="2">
						<strong>TOTAL</strong>
						<p>(SUBTOTAL 1 + SUBTOTAL 2)</p>
					</td>
					<td style="border:1px solid black;padding:2px;" colspan="4"></td>
				</tr>
			</tbody>
		</table>

		<div style="margin-left:70px;margin-top:30px">
			<p style="font-weight:bold;margin:0">2. CÁLCULO BÁSICO</p>
			<p style="font-weight:bold;margin:0">2.1. Operaciones Matemáticas Básicas</p>
		</div>
		<br/>

		<div style="width:500px; height:300px; border:1px solid black;margin: 0 auto;">
			<img src="${config.API}/fotos-pdf/foto3.png" style="width:100%;height:100%" />
		</div>

		<br/><br/>
		<p style="font-weight:bold;margin:0;margin-left:70px">2.2. Razonamiento Lógico Matemático</p>
			<div style='page-break-before: always;'></div>

		${ headerc002(4) }
	<br/>
		<div style="width:500px; height:300px; border:1px solid black;margin: 0 auto;">
			<img src="${config.API}/fotos-pdf/foto4.png" style="width:100%;height:100%" />
		</div>

		<h3>DE USO EXCLUSIVO PARA MORA LEDESMA WALTER FILIBERTO CON NOMBRE COMERCIAL OCCERTIMM:</h3>

		<table style="width:100%;text-align:left;">
			<thead>
				<tr>
					<th style="border:1px solid black;text-align:center" colspan="3">PUNTAJE OBTENIDO PARTE CÁLCULO BÁSICO</th>
				</tr>
				<tr>
					<th style="border:1px solid black;padding-left:4px;">
						<p style="margin:0">PROCESO</p>
						<p style="margin:0">CÁLCULO BÁSICO</p>
					</th>
					<th style="border:1px solid black;padding-left:4px">SUBPROCESO</th>
					<th style="border:1px solid black;padding-left:4px">PUNTAJE OBTENIDO</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td style="border:1px solid black;padding:3px;font-weight:bold;font-size:14px">Operaciones matemáticas básicas</td>
					<td style="border:1px solid black;padding:3px">15</td>
					<td style="border:1px solid black;padding:3px"></td>
				</tr>
				<tr>
					<td style="border:1px solid black;padding:3px;font-weight:bold;font-size:14px">Razonamiento lógico matemático</td>
					<td style="border:1px solid black;padding:3px">2</td>
					<td style="border:1px solid black;padding:3px"></td>
				</tr>
				<tr>
					<td style="border:1px solid black;padding:3px"></td>
					<td style="border:1px solid black;padding:3px;font-weight:bold;font-size:14px">TOTAL</td>
					<td style="border:1px solid black;padding:3px"></td>
				</tr>
			</tbody>
		</table>
		<br/>
		<table style="margin-left: 20px">
			<tr>
				<td width="200px">Nombres del Aspirante:</td>
				<td width="280px" style="border-bottom: 1px solid black">${ props.name } ${props.lastName}</td>
			</tr>
			<tr>
				<td width="200px">Firma del Aspirante:</td>
				<td width="280px" style="border-bottom: 1px solid black"></td>
			</tr>
			<tr>
				<td width="200px">Cédula de ciudadanía:</td>
				<td width="280px" style="border-bottom: 1px solid black">${ props.document }</td>
			</tr>
			<tr><br/></tr>
		</table>
		<h3 style="font-style:italic">DE USO EXCLUSIVO PARA MORA LEDESMA WALTER FILIBERTO CON NOMBRE COMERCIAL OCCERTIMM:</h3>
		<br/>
		<h3>PONDERACIÓN TOTAL</h3>
		<table style="font-size:13px">
			<tr>
				<td style="border:1px solid black;font-weight:bold">PROCESO</td>
				<td style="border:1px solid black;font-weight:bold">TOTAL, PUNTOS ALCANZADO POR SECCIÓN</td>
				<td style="border:1px solid black;font-weight:bold">TOTAL, MÁXIMA</td>
				<td style="border:1px solid black;font-weight:bold" rowspan="5">PASA CON EL 70 % DEL TOTAL</td>
			</tr>
			<tr>
				<td style="border:1px solid black;font-weight:bold">LECTO-ESCRITURA</td>
				<td style="border:1px solid black;"></td>
				<td style="border:1px solid black;font-style:italic"></td>
			</tr>
			<tr>
				<td style="border:1px solid black;font-weight:bold">CÁLCULO BÁSICO</td>
				<td style="border:1px solid black;"></td>
				<td style="border:1px solid black;font-style:italic"></td>
			</tr>
			<tr>
			<td style="border:1px solid black;font-weight:bold">SUMA DE PUNTOS ALCANZADOS</td>
				<td style="border:1px solid black;"></td>
				<td style="border:1px solid black;font-style:italic"></td>
			</tr>
			<tr>
				<td style="border:1px solid black;font-weight:bold">PORCENTAJE ALCANZADO</td>
				<td style="border:1px solid black;"></td>
				<td style="border:1px solid black;font-style:italic"></td>
			</tr>
		</table>

				<br/>
		<table style="margin-left: 20px">
			<tr>
				<td width="200px">Nombres del Analista:</td>
				<td width="280px" style="border-bottom: 1px solid black">${ certificate.id_user.name }</td>
			</tr>
			<tr>
				<td width="200px">Cédula de ciudadanía:</td>
				<td width="280px" style="border-bottom: 1px solid black">${ certificate.id_user.cedula ? certificate.id_user.cedula : '' }</td>
			</tr>
		</table>
	</section>
`
return template
}
export default page
