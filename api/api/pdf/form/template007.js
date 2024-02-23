
import page7  from './page7'
import config from '../../../config'


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

function formatDate(date) {
	let day = date.getDate() >= 10 ? date.getDate() : `0${date.getDate()}`
	let month = date.getMonth() >= 10 ? 1 + date.getMonth() : `0${date.getMonth() + 1}`
	return `${day}/${month}/${date.getFullYear()}`
}

function template(props, certificate, planning) {
	let edad = calcularEdad(new Date(props.birthdate), new Date(props.fechaAplicacion))

	let template = `
    <html lang="en">
    <head>
      <title>PDF</title>
      <meta http-equiv="content-type" content="text/html; charset=UTF-8">
			<meta charset="UTF-8">
      <style type="text/css" media="all">
			/* cyrillic-ext */
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
					font-family: 'Roboto', sans-serif;
          margin: 0;
          padding: 0;
				}
				td {
					font-size: 14px;
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
			${ page7(props, certificate)}
		</body>
  </html>
  `

	return template
}

export default template
