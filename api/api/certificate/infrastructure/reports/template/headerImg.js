import config from '../../../../../config'

function headerImg() {
	return `
		<style>
			.headerImg {
				margin: 0 auto;
				margin-top: 2rem;
				width: 98%;
			}
			.headerImg .occertimm {
				margin-right: 15%;
			}

			.headerImg .logo {
				position: relative;
				bottom: 3rem;
			}

		</style>
		<div class="headerImg">
			<img class="occertimm" src="${config.API}/logo/occertimm" width="300" height="250"  />
			<img src="${config.API}/fotos-pdf/logosetec.png" width="400" height="180"  class="logo" />
		</div>

	`
}

export default headerImg
