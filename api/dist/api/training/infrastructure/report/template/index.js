"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __importDefault(require("../../../../../config"));
const month = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre',
    'Octubre', 'Noviembre', 'Diciembre'
];
function formatDate(prop) {
    if (prop) {
        const date = new Date(prop);
        let day = date.getDate() >= 10 ? date.getDate() : `0${date.getDate()}`;
        return `Santo Domingo ${day} de ${month[date.getMonth()]} ${date.getFullYear()}`;
    }
}
function capitalize(name) {
    let newName = name
        .split(' ')
        .map(name => {
        const word = name.toLowerCase();
        return word[0].toUpperCase() + word.slice(1);
    })
        .join(' ');
    return newName;
}
function template(props, url) {
    let template = `
    <html lang="en">
    <head>
      <title>PDF</title>
      <meta http-equiv="content-type" content="text/html; charset=UTF-8">
			<meta charset="UTF-8">
			<style type="text/css">
				@font-face {
				font-family: 'Roboto';
					font-style: normal;
					font-weight: 100;
					font-display: swap;
					src: url('${config_1.default.API}/font/Roboto-Regular.ttf') format('truetype');
				}


			html {
  line-height: 1.15; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */
}

body {
  margin: 0;
}
main { display: block; }

h1 {
  font-size: 2em;
  margin: 0.67em 0;
}
hr {
  box-sizing: content-box; /* 1 */
  height: 0; /* 1 */
  overflow: visible; /* 2 */
}
pre {
  font-family: monospace, monospace; /* 1 */
  font-size: 1em; /* 2 */
}
a {
  background-color: transparent;
}
abbr[title] {
  border-bottom: none; /* 1 */
  text-decoration: underline; /* 2 */
  text-decoration: underline dotted; /* 2 */
}
b,
strong { font-weight: bolder; }
code,
kbd,
samp {
  font-family: monospace, monospace; /* 1 */
  font-size: 1em; /* 2 */
}
small {
  font-size: 80%;
}
sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

img {
  border-style: none;
}
button,
input,
optgroup,
select,
textarea {
  font-family: inherit; /* 1 */
  font-size: 100%; /* 1 */
  line-height: 1.15; /* 1 */
  margin: 0; /* 2 */
}
button,
input {
  overflow: visible;
}
button,
select {
  text-transform: none;
}

button,
[type="button"],
[type="reset"],
[type="submit"] {
  -webkit-appearance: button;
}
button::-moz-focus-inner,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
  border-style: none;
  padding: 0;
}
button:-moz-focusring,
[type="button"]:-moz-focusring,
[type="reset"]:-moz-focusring,
[type="submit"]:-moz-focusring {
  outline: 1px dotted ButtonText;
}
fieldset { padding: 0.35em 0.75em 0.625em; }
legend {
  box-sizing: border-box; /* 1 */
  color: inherit; /* 2 */
  display: table; /* 1 */
  max-width: 100%; /* 1 */
  padding: 0; /* 3 */
  white-space: normal; /* 1 */
}
progress { vertical-align: baseline; }
textarea { overflow: auto; }
[type="checkbox"],
[type="radio"] {
  box-sizing: border-box; /* 1 */
  padding: 0; /* 2 */
}
[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
  height: auto;
}
[type="search"] {
  -webkit-appearance: textfield; /* 1 */
  outline-offset: -2px; /* 2 */
}
[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}
::-webkit-file-upload-button {
  -webkit-appearance: button;
  font: inherit;
}
details { display: block; }
summary { display: list-item; }
template { display: none; }
[hidden] { display: none; }

        html {
          margin: 0;
					zoom: 1;
					zoom: 0.9	;
        }
        body {
          font-size: 14px;
          box-sizing: border-box;
					font-family: 'Roboto', sans-serif;
          margin: 0;
					padding: 0;
					margin: 0 auto;
					background-image: url(${config_1.default.API}/fotos-pdf/wallpaper.jpg);
					background-position: top;
					height: 100%;
					min-height: 100%;
					width: 100%;
					min-width: 100%;
					background-size: cover;
					position: relative;
					overflow: hidden;

					color: #6c7178;
				}
				header {
					display: inline-block;
					vertical-align: middle;
					width: 100%;
					margin-top: 6rem;
				}
				.registerCertificado, .slogan {
					margin: 0;
					display: inline-block;
					text-align: right;
				}
				.registerCertificado {
					width: 40%;
					font-size: 14px;
				}
				.registerCertificad-title {
					margin: 0;
					margin-bottom: 2px;
				}
				.registerCertificad-code {
					font-weight: 700;
					margin: 0
				}
				.slogan {
					width: 55%;
					font-size: 24px;
					font-weight: 900;
				}
				.container {
					width: 70%;
					margin: 0 auto;
				}
				.logo {
					margin: 0;
					text-align: center;
					margin-top: -2rem;
				}
				.logo-image {
					width: 12rem;
					max-width: 100%
				}
				.title-certificate {
					text-align: center;
					font-size: 24px;
					font-weight: 400;
					width: 80%;
					margin: 1rem auto;
				}
				.title-ancla {
					text-align: center;
					font-size: 25px;
					margin: 8px 0;
				}
				.name-estudent {
					text-align: center;
					border-bottom: 1px solid;
					width: 100%;
					font-size: 30px;
					margin: 7px 0;
				}
				.message-certificate {
					font-size: 24px;
					text-align: justify;
				}
				.message-certificate strong {
					font-weight: 500;
				}
				.containerFirm {
					width: 90%;
					margin: 0 auto;
					margin-top: 2.5rem;
				}
				.codeQR, .firmBox {
					display: inline-block;
					vertical-align: middle;
				}
				.firmBox {
					width: 35%;
					text-align: center;
				}
				.firmBoxFigure {
					margin: 0;
				}
				.firmBox-user {
					padding-top: 6px;
					font-size: 17px;
					border-top: 1px solid;
				}
				.firmBox-user--name {
					margin: 0;
					font-size: 18px;
					font-weight: 700;
					text-transform: capitalize;
				}
				.firmBox-user--title {
					margin: 0;
				}
				.codeQR {
					width: 28%;
					text-align: center;
					margin: 0 auto;
				}
				.codeQR-image {
					width: 10rem;
					height: 10rem;
					margin: 0 auto;
				}

				footer {
					margin-bottom: 1rem;
				}
				.date {
					font-weight: 500;
					font-size: 18px;
				}

				</style>
			</head>
		<body>
			<header>
				<div class="registerCertificado">
					<p class="registerCertificad-title">Registro por participante OCCERTIMM No.</p>
					<p class="registerCertificad-code">${props.certificacion.code}</p>
				</div>

				<h1 class="slogan">¡EL ÉXITO DEPENDE DE TI!</h1>
			</header>

			
			<section class="container">
				<figure class="logo">
					<img class="logo-image" src="${config_1.default.API}/fotos-pdf/logo-occertimm.png" />
				</figure>
				<h1 class="title-certificate">Operadora de Capacitación y Certificación OCCERTIMM CERTIFICA</h1>
				<div class="title-ancla">A</div>
				<h2 class="name-estudent">${props.name} ${props.lastName}</h2>
				<div class="message-certificate">
					Por su participación al curso de capacitación virtual en
					<strong>“INNOVACIONES DE LAS REGLAS DE JUEGO 2020”</strong>, realizado en
					la ciudad de ${formatDate(props.certificacion.date)}, válido por 3 horas
					académicas.
				</div>
			</section>

			<section class="containerFirm">
				<div class="firmBox">
					<figure class="firmBoxFigure">
						<img class="logo-image" src="${config_1.default.API}/fotos-pdf/firm-walter.png" />
					</figure>
					<div class="firmBox-user">
						<p class="firmBox-user--name">Walter Filiberto Mora Ledesma</p>
						<p class="firmBox-user--title">Coordinador General OCCERTIMM</p>
					</div>
				</div>
				<div class="codeQR">
					<img src="${url}" class="codeQR-image" />
				</div>
				<div class="firmBox">
					<figure class="firmBoxFigure">
						<img class="logo-image" src="${config_1.default.API}/fotos-pdf/firm.png" />
					</figure>
					<div class="firmBox-user">
						<p class="firmBox-user--name">
						${capitalize(props.trainingId.id_user.name)}
						</p>
						<p class="firmBox-user--title">Instructor</p>
					</div>
				</div>
			<section>

			<footer>
				<div class="date">${formatDate(props.certificacion.date)} <div>
			<footer>
		<body>
	<html>
`;
    return template;
}
exports.default = template;
