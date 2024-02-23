function firma () {
	return `
		<style>
			.firma {
				width: 45%;
				display: inline-block;
				vertical-align: top;
			}
			.firma-texto {
				color: #767676;
				font-size: 15px;
				margin: 0;
				text-align: center;
			}
			.firma.ident {
				margin-right: 5%;
			}
		</style>
		<br/><br/><br/><br/>
		<br/><br/>
		<div class="firma ident" style="width: 49%">
			<p class="firma-texto">Walter Filiberto Mora Ledesma.</p>
			<p class="firma-texto">Coordinador de procesos de Certificación y Control</p>
			<p class="firma-texto">"OCCERTIMM"</p>
		</div>
		<div class="firma">
			<p class="firma-texto">Lida Inez Murillo Gordillo.</p>
			<p class="firma-texto">Responsable de Certificación y Control</p>
			<p class="firma-texto">"OCCERTIMM"</p>
		</div>
	`
}

export default firma
