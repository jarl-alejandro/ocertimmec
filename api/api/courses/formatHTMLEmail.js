import config from '../../config'

// .certificateId.name.toUpperCase()

function formatHTMLEmail(data, query) {
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
					<p>Hola ${query.name}</p>
					<p></p>
					<p class="no-margin">Para completar tu registro en el perfil
						${query.certificateId.name.toUpperCase()}, pulsa el siguiente enlace:
						<a href='${config.URL}/finalizar-inscripcion?id=${data}'>COMPLETAR TU REGISTRO AQUI</a>
					</p>
					<p></p>
					<p class="no-margin">Saludos,</p>
					<p class="no-margin">Ing. Diana Cedeño</p>
					<p class="no-margin">Responsable Administrativo y financiero</p>
					<p class="no-margin">OCCERTIMM</p>
				</article>
			</section>
    </body>
  </html>`
	return html
}


export default formatHTMLEmail
