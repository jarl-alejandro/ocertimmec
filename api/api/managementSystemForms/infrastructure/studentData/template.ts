import config from '../../../../config'

function formatDate(date) {
	if (date) {
		let day = date.getDate() >= 10 ? date.getDate() : `0${date.getDate()}`
		let month = date.getMonth() >= 10 ? 1 + date.getMonth() : `0${date.getMonth() + 1}`
		return `${day}/${month}/${date.getFullYear()}`
	}
	else return ''
}

function template(props) {
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
					src: url('${config.API}/font/Roboto-Regular.ttf') format('truetype');
				}
        html {
          margin:0;
          zoom: 0.75; 
        }
        body {
          font-size: 14px;
          box-sizing: border-box;
          margin: 0;
					padding: 0;
					font-family: 'Roboto', sans-serif;
				}
				table {
					table-layout: fixed;
			  	border-collapse: collapse;
				}
				.table th {
					background-color: #1c89d0;
					color: white;
				}
				.table td, .table th {
					border: 0.2px solid #0f4377;
					font-size: 14px;
					height: 25px;
					padding: 5px;
				}
				.color {
					background:#b4c7e7;
				}
				.title {
					background:#b4c7e7;
					font-weight: bold;
					padding: 4px;
					color: #0f4377;
				}
      </style>
    </head>
		<body>
			<h2 className="title">2. EXPERIENCIA LABORAL EN EL PERFIL</h2>
			<br/>
			<table class="table">
				<thead>
					<tr>
						<th width="15%">Nivel de educació</th>
						<th width="35%">Nombre Institución</th>
						<th width="15%">País</th>
						<th width="15%">Ciudad</th>
						<th width="15%">Título Obtenido</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Primaria</td>
						<td>${ props.primaria.name }</td>
						<td>${ props.primaria.pais }</td>
						<td>${ props.primaria.ciudad }</td>
						<td>${ props.primaria.titulo }</td>
					</tr>
						<tr>
						<td>Secundaria</td>
						<td>${ props.secundaria.name}</td>
						<td>${ props.secundaria.pais}</td>
						<td>${ props.secundaria.ciudad}</td>
						<td>${ props.secundaria.titulo }</td>
					</tr>
						<tr>
						<td>Técnico, Tecnólogo o artesano</td>
						<td>${ props.tecnico.name}</td>
						<td>${ props.tecnico.pais}</td>
						<td>${ props.tecnico.ciudad}</td>
						<td>${ props.tecnico.titulo }</td>
					</tr>
					<tr>
						<td>Tercer nivel</td>
						<td>${ props.tercerNivel.name}</td>
						<td>${ props.tercerNivel.pais}</td>
						<td>${ props.tercerNivel.ciudad}</td>
						<td>${ props.tercerNivel.titulo }</td>
					</tr>
					<tr>
						<td>Cuarto Nivel</td>
						<td>${ props.cuartoNivel.name}</td>
						<td>${ props.cuartoNivel.pais}</td>
						<td>${ props.cuartoNivel.ciudad}</td>
						<td>${ props.cuartoNivel.titulo }</td>
					</tr>
				</tbody>
			</table>

			<h2 className="title">2.2 CAPACITACIÓN O FORMACIÓN RECIBIDA</h2>
			<br/>
			<table class="table">
				<thead>
					<tr>
						<th width="40%">Nombre del curso</th>
						<th width="40%">Nombre de la institución que impartió el curso</th>
						<th width="10%">Fechas del curso</th>
						<th width="10%">Horas del Curso</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>${ props.capacitacion1.nameCourse}</td>
						<td>${ props.capacitacion1.nameInstitucion}</td>
						<td>${ formatDate(props.capacitacion1.dateCourse)}</td>
						<td>${ props.capacitacion1.hourCourse}</td>
					</tr>
					<tr>
						<td>${ props.capacitacion2.nameCourse}</td>
						<td>${ props.capacitacion2.nameInstitucion}</td>
						<td>${ formatDate(props.capacitacion2.dateCourse)}</td>
						<td>${ props.capacitacion2.hourCourse}</td>
					</tr>
					<tr>
						<td>${ props.capacitacion3.nameCourse}</td>
						<td>${ props.capacitacion3.nameInstitucion}</td>
						<td>${ formatDate(props.capacitacion3.dateCourse)}</td>
						<td>${ props.capacitacion3.hourCourse}</td>
					</tr>
				</tbody>
			</table>

			<h2 className="title">3.3 EXPERIENCIA LABORAL</h2>
			<br/>
			<table class="table">
				<thead>
					<tr>
						<th width="10%">Desde</th>
						<th width="10%">Hasta</th>
						<th width="25%">Nombre</th>
						<th width="25%">Dirección</th>
						<th width="10%">Teléfono</th>
						<th width="25%">Función que desempeñó</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>${ formatDate(props.experiencia1.desde)}</td>
						<td>${ formatDate(props.experiencia1.hasta)}</td>
						<td>${ props.experiencia1.name}</td>
						<td>${ props.experiencia1.direction}</td>
						<td>${ props.experiencia1.phone}</td>
						<td>${ props.experiencia1.funcion}</td>
					</tr>
					<tr>
						<td>${ formatDate(props.experiencia2.desde)}</td>
						<td>${ formatDate(props.experiencia2.hasta)}</td>
						<td>${ props.experiencia2.name}</td>
						<td>${ props.experiencia2.direction}</td>
						<td>${ props.experiencia2.phone}</td>
						<td>${ props.experiencia2.funcion}</td>
					</tr>
					<tr>
						<td>${ formatDate(props.experiencia3.desde)}</td>
						<td>${ formatDate(props.experiencia3.hasta)}</td>
						<td>${ props.experiencia3.name}</td>
						<td>${ props.experiencia3.direction}</td>
						<td>${ props.experiencia3.phone}</td>
						<td>${ props.experiencia3.funcion}</td>
					</tr>
				</tbody>
			</table>

						<h2 className="title">2.2 CAPACITACIÓN O FORMACIÓN RECIBIDA</h2>
			<br/>
			<table class="table">
				<thead>
					<tr>
						<th width="40%">Nombre del curso</th>
						<th width="40%">Nombre de la institución que impartió el curso</th>
						<th width="10%">Fechas del curso</th>
						<th width="10%">Horas del Curso</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>${ props.capacitacion1.nameCourse}</td>
						<td>${ props.capacitacion1.nameInstitucion}</td>
						<td>${ formatDate(props.capacitacion1.dateCourse)}</td>
						<td>${ props.capacitacion1.hourCourse}</td>
					</tr>
					<tr>
						<td>${ props.capacitacion2.nameCourse}</td>
						<td>${ props.capacitacion2.nameInstitucion}</td>
						<td>${ formatDate(props.capacitacion2.dateCourse)}</td>
						<td>${ props.capacitacion2.hourCourse}</td>
					</tr>
					<tr>
						<td>${ props.capacitacion3.nameCourse}</td>
						<td>${ props.capacitacion3.nameInstitucion}</td>
						<td>${ formatDate(props.capacitacion3.dateCourse)}</td>
						<td>${ props.capacitacion3.hourCourse}</td>
					</tr>
				</tbody>
			</table>

			<h2 className="title">1. DATOS GENERALES DEL ENCUESTADO</h2>
			<br/>
			<table class="table">
				<tr>
					<th width="60%">AUTOIDENTIFICACION (Blanco, Mestizo, Indigena, Afrodecendiente)	</th>
					<td width="30%">${ props.autoidentificacion}</td>
				</tr>
			</table>

			<h2 className="title">2.1 CIUDADANOS/AS OCUPADOS/AS</h2>
			<br/>
			<table class="table">
				<tr>
					<th width="60%">TIPO DE OCUPACION (Empleado/obrero del Gobierno/estado - Empleado empresa publica:</th>
					<td width="30%">${ props.tipoOcupacion}</td>
				</tr>
				<tr>
					<th width="60%">EN LA OCUPACION SELECCIONADA SE ENCUENTRA( CONTRATO O NOMBRAMIENTO ):</th>
					<td width="30%">${ props.contrato}</td>
				</tr>
			</table>



			<h2 className="title">
				2.1.2 CONDICIONES LABORALES
				<span style="font-size:14px;">RECIBE POR PARTE DE SU PATRONO O EMPLEADOR:</span>
			</h2>
			<br/>
			<table class="table">
				<tr>
					<th width="60%">RECIBE SEGURO MEDICO</th>
					<td width="30%">${ props.seguroMedio}</td>
				</tr>
				<tr>
					<th width="60%">RECIBE 13 SUELDO</th>
					<td width="30%">${ props.sueldoTrece}</td>
				</tr>
				<tr>
					<th width="60%">RECIBE 14 SUELDO	</th>
					<td width="30%">${ props.sueldoCatorce}</td>
				</tr>
				<tr>
					<th width="60%">RANGO DE SUELDO	</th>
					<td width="30%">${ props.sueldo}</td>
				</tr>
				<tr>
					<th width="60%">HA TENIDO USTED ALGUN CAMBIO DE PUESTO O ACENSO EN SU EMPRESA	</th>
					<td width="30%">${ props.cambioPuesto}</td>
				</tr>
				<tr>
					<th width="60%">ESTA SATISFECHO CON EL EMPLO ACTUAL	</th>
					<td width="30%">${ props.satisfechoEmpleo}</td>
				</tr>
				<tr>
					<th width="60%">SE SIENTE AGOTADO, DEBIDO A LA CARGA DE TRABAJO	</th>
					<td width="30%">${ props.agotadoEmpleo}</td>
				</tr>
				<tr>
					<th width="60%">SUS COMPAÑEROS RESPETAN SU TRABAJO Y SUS CAPACIDADES	</th>
					<td width="30%">${ props.respetanTrabajo}</td>
				</tr>
				<tr>
					<th width="60%">SUS JEFES RECONOCEN LA CALIDAD DE SU TRABAJO	</th>
					<td width="30%">${ props.jefesRecoTrab}</td>
				</tr>
				<tr>
					<th width="60%">EN SU TRABAJO EXISTEN RIESGOS LABORALES	</th>
					<td width="30%">${ props.riesgoLaboral}</td>
				</tr>
				<tr>
					<th width="60%">DESEARIA CAMBIAR DE TRABAJO	</th>
					<td width="30%">${ props.deseariaCambiarTrabajo}</td>
				</tr>
			</table>






			<h2 className="title">
				3. DATOS DE CONDICIONES DE VIDA
			</h2>
			<br/>
			<table class="table">
				<tr>
					<th width="60%">USTED O SU FAMILIA POSEE DE UN SEGURO MEDICO</th>
					<td width="30%">${ props.seguroMedico}</td>
				</tr>
				<tr>
					<th width="60%">TIENE HIJOS	</th>
					<td width="30%">${ props.hijos}</td>
				</tr>
				<tr>
					<th width="60%">CUANTOS HIJOS TIENE</th>
					<td width="30%">${ props.cuantoHijos}</td>
				</tr>
				<tr>
					<th width="60%">HIJOS MAYORES DE 3 AÑOS Y MENORES DE 18 AÑOS	</th>
					<td width="30%">${ props.hijosMayorTres}</td>
				</tr>
				<tr>
					<th width="60%">ASISTEN ACTUALMENTE A ALGUNA INSTITUCION EDUCATIVA	</th>
					<td width="30%">${ props.estudian}</td>
				</tr>
				<tr>
					<th width="60%">CUANTAS PERSONAS SON MIEMBRO DE SU HOGAR	</th>
					<td width="30%">${ props.miembrosHogar}</td>
				</tr>
				<tr>
					<th width="60%">SU VIVIENDA ES PROPIA O ARRIENDA	</th>
					<td width="30%">${ props.propiedad}</td>
				</tr>
				<tr>
					<th width="60%">SERVICIOS BASICO A LOS QUE TIENE ACCESO USTED Y SU FAMILIA	</th>
					<td width="30%">${ props.servicioBasico}</td>
				</tr>
				<tr>
					<th width="60%">TIENE DISCACIDAD	</th>
					<td width="30%">${ props.discapacidad}</td>
				</tr>
				<tr>
					<th width="60%">TIPO DE DISCAPACIDAD	</th>
					<td width="30%">${ props.tipoDiscapacidad}</td>
				</tr>
				<tr>
					<th width="60%">DESEA SER PARTE DE SOCIO EMPLEO</th>
					<td width="30%">${ props.socioEmpleo}</td>
				</tr>
			</table>

		</body>
	</html>
	`

	return template
}

export default template
