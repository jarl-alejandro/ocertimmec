function footer1 () {
	let template = `
		<style>
			.footer1 {
				width: 100%;
				height: 50px;
				font-size: 16px;
				position: absolute;
				bottom: 0;
			}
			.footer1-content, .bandera {
				display: inline-block;
			}
			.footer1-content {
				width: 68%;
				margin-left: 10%;
			}
			.footer1-content p {
				margin: 0;
			}
			.footer-ident {
				margin-left: 16%;
			}
		</style>
		<div class="footer1">
			<div class="footer1-content">
				<p>
					<span>Código de Reconocimiento:</span>
					<span class="footer-ident">SETEC-REC-2018-065</span>
				</p>
				<p>Fecha de Vigencia de Reconocimiento: 05/09/2020</p>
			</div>
			<div class="bandera">
				<div class="bandera amarillo"></div>
				<div class="bandera zul"></div>
				<div class="bandera rojo"></div>
			</div>
		</div>
	`

	return template
}

export default footer1
