function listUC (props) {
	let template = `
	<style>
		.list {
			list-style: none;
			padding-left: 0;
		}
		.list-item {
			border: 0;
			border-bottom: 1px solid rgba(0,0,0,0.3);
			box-shadow: 0;
		}
		.list-item p {
			display: inline-block;
			color: #767676;
			font-size: 17px;
		}
		.list-title {
			width: 35%;
		}
		.list-text {
			width: 60%;
		}
	</style>
	<ul class="list">
		<li class="list-item">
			<p class="list-title">PERFIL</p>
			<p class="list-text">${props.name}</p>
		</li>
		${renderUC(props.uc, props.competitionUnits)}
	</ul>
	`

	return template
}

export default listUC


function renderUC (uc, unidades) {
	let list = unidades.split('<ul>')
	let template = ''	

	if (list.length) {
		list = list[1].split('</ul>')[0].trim()
		list = list.split('<li>')
	
		for (let i = 1; i <= uc; i++) {
			
			if (list[i]) {
				let item = list[i].split('</li>')
				item = item[0]
				item = item.split(':')[1]
		
				template += `
					<style>
					
					</style>
					<li class="list-item">
					<p class="list-title">UNIDAD DE COMPETENCIA ${i}</p>
					<p class="list-text">${item}</p>
				</li>
				`
			}

		}
	}

	return template
}
