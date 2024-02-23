import headerBanner from './headerBanner'
import headerImg    from './headerImg'
import firma        from './firma'
import footer1      from './footer1'
import listUC       from './listUC'
import config       from '../../../config'

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
	const cero = 3
	name = name.toUpperCase()
	let siglas = ''

	let newArray = name.split(' ')

	if (newArray.length === 1) {
		siglas = name
	}
	else {
		newArray.forEach(item => {
			let array1 = item.split('')
			siglas += array1[0]
		})
	}

	let counter = numberAplicacion.toString().length
	let total = cero - counter
	let code = ''

	for (let i = 1; total >= i; i++) {
		code += '0'
	}

	return `OCCERTIMM-${siglas.toLocaleUpperCase()}-${code}${numberAplicacion}`
}

function generateUC(uc) {
	uc = parseInt(uc)
	let formatUc = ''

	for (let i = 1; i <= uc; i++) {
		formatUc += `UC${i}`

		if (uc !== i) {
			if ((uc - 1) === i ) {
				formatUc += ' y '
			}
			else {
				formatUc += ', '
			}
		}
		
	}

	return formatUc
}

function formatDate(date) {
	date = JSON.stringify(date)
	date = date.split('T')[0].split('-').join('/')
	date = new Date(date)
	let day = date.getDate() >= 10 ? date.getDate() : `0${date.getDate()}`
	let month = date.getMonth() >= 10 ? 1 + date.getMonth() : `0${date.getMonth() + 1}`
	return `${day}/${month}/${date.getFullYear()}`
}


function formatDatePlus(date) {
	if (date) {
		date = JSON.stringify(date)
		date = date.split('T')[0].split('-').join('/')
		date = new Date(date)
		date.setFullYear(date.getFullYear() + 5)

		let day = date.getDate() >= 10 ? date.getDate() : `0${date.getDate()}`
		let month = date.getMonth() + 1 >= 10 ? 1 + date.getMonth() : `0${date.getMonth() + 1}`

		return `${day}/${month}/${date.getFullYear()}`
	}
}

function formatName (name, lastName) {
	let newName = ''
	name = `${name} ${lastName}`
	name = name.trim().toLocaleLowerCase()
	name = name.split(' ')

	name.map(item => {
		item = item.split("")
		
		let f = !!item[0] ? item[0].toUpperCase() : ''
		item.splice(0, 1)
		item = item.join("")
		
		item = `${f}${item}`
		
		newName += `${item} `
	})

	return newName
}


function template(props) {
	let edad = calcularEdad(new Date(props.birthdate), new Date(props.fechaAplicacion))

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
				@font-face {
    			font-family: 'FontBI';
					src: url('${config.API}/fuentes') format('truetype'); 
				}
        html {
          margin:0;
          zoom: 0.75; 
        }
        body {
          font-size: 14px;
          box-sizing: border-box;
         font-family: 'Roboto', sans-serif;
          margin: 0;
					padding: 0;
					width: 95%;
					margin: 0 auto;
				}
				.headerImg-titulo {
					    font-weight: 400;
					color: #767676;
					text-align: center;
					font-size: 40px;
				}
				.name {
					text-align: center;
					font-size: 35px;
				}
				.texto {
					color: #767676;
					font-size: 22px;
				}
				.texto-ident {
					margin-right: 1%;
					margin-left: 2%;
				}
				
				.hoja {
					background-image: url(${config.API}/fotos-pdf/escudo.png);
							background-repeat: no-repeat;
							background-position: bottom right;
					height: 100%;
					min-height: 100%;
					position: relative;
				}
				.footer2 {
					position: absolute;
					bottom: 0;
					width: 100%;
					text-align: center;
				}

				.name-estudiante {
					font-family: FontBI;
					font-size: 50px;
				}
					.list-title {
					margin: 0;
					margin-top: 15px;
    			vertical-align: top;
				}
      </style>
    </head>
		<body>

			<section class="hoja hoja1">
				${headerBanner(props)}
				${headerImg()}

				<br/>
				<h1 class="headerImg-titulo">CERTIFICACIÓN POR COMPETENCIA LABORAL</h1>
				<h2 class="name name-estudiante">${formatName(props.name, props.lastName)} - ${props.document}</h2>
				<p class="texto">Ha cumplido con los requisitos establecidos en la normativa vigente para obtener la certificación en el perfil:</p>
					    
				<h2 class="name" style="font-weight: 600;">${props.certificateId.name}</h2>

				<p class="texto">Unidad de competencia ${generateUC(props.certificateId.uc)} de acuerdo al Esquema de Certificación ${props.certificateId.squemaCode}</p>
				<br/>
				<p class="texto">
					Vigencia de la certificación:
					<span class="texto-ident">del: ${formatDate(props.dateExpedicion)}</span>
					<span>al: ${formatDatePlus(props.dateExpedicion)}</span>
				</p>
				${firma()}
				${footer1()}
			</section>

			<div style='page-break-before: always;'></div>
			<section class="hoja hoja2">
				${headerBanner(props)}
				<br/><br/><br/><br/>
				<br/><br/><br/><br/>

				${listUC(props.certificateId)}

				<footer class="footer2">
					<img src="${config.API}/fotos-pdf/setec-footer.png" width="300" height="150"  />
				</footer>
			</section>
		<body>
	<html>
`
	return template
}

export default template
