function headerBanner (props) {
	return `
		<style>
			.banner {
				background: #c7c8ca;
				height: 50px;
				width: 100%;
				display: flex;
				display: -webkit-flex;
				display: inline-block;
			}
			.bandera {
				display: flex;
				display: inline-block;
				height: 100%;
				font-size: 0;
			}
			.bandera.amarillo{
				background: #fdcc30;
				width: 80px;
				min-width: 80px;
			}
			.bandera.zul{
				background: #0058a2;
				width: 60px;
				min-width: 60px;
			}
			.bandera.rojo{
				background: #e1402d;
				width: 30px;
				min-width: 30px;
			}
			.bandera-flex {
				padding: 0 10px;
				display: flex;
				display: -webkit-flex;
				justify-content: space-between;
				justify-content: space-between;
				-webkit-align-items: center;
				-webkit-align-items: center;
				display: inline-block;

				width: 60%;
				font-size: 20px;
				font-weight: normal;
			}
			.bandera-flex > p {
				display: inline-block;
				vertical-align: center;
				margin: 0;
				height: 100%;
    		line-height: 2.5;
			}
			.bandera-title {
			}
			.bandera, .bandera-flex {
				display: inline-block;
    		vertical-align: top;
			}
		</style>
		<div class="banner">
			<div class="bandera">
				<div class="bandera amarillo"></div>
				<div class="bandera zul"></div>
				<div class="bandera rojo"></div>
			</div>
			<div class="bandera-flex">
				<p class="bandera-title">Certificación No.</p>
				<p class="bandera-codigo">${props.codeSetec}</p>
			</div>
		</div>
	`
}

export default headerBanner
