import ScrollableAnchor from 'react-scrollable-anchor'
import Company from './Company'
import Video from './Video'

const arrayGrid = [
	{ name: 'MISIÓN', icon: '', text: 'Contribuir al desarrollo integral de las personas y al enriquecimiento del capital intelectual de las empresas e instituciones, públicas y privadas a través de la implementación de capacitaciones y certificaciones, con los más altos estándares de calidad y servicio, acordes a los perfiles profesionales del mercado laboral.' },
	{ name: 'VISIÓN', icon: '', text: 'Ser una empresa líder en Santo Domingo y a nivel nacional en capacitaciones y certificaciones  de manera integral.' }
]

const GridAbout = () => (
	<section className="GridAbout">
		{ arrayGrid.map((item, index) => (
			<article className="GridAbout-item center" key={index}>
				<h3 className="GridAbout-title">{ item.name }</h3>
				<p className="GridAbout-text">{ item.text }</p>
			</article>
		)) }
		<article className="GridAbout-item">
			<h3 className="GridAbout-title">VALORES COORPORATIVOS</h3>
			<ul className="GridAbout-list">
				<li className="GridAbout-list-item">Innovación</li>
				<li className="GridAbout-list-item">Calidad</li>
				<li className="GridAbout-list-item">Disciplina</li>
				<li className="GridAbout-list-item">Excelencia</li>
				<li className="GridAbout-list-item">Honorabilidad</li>
				<li className="GridAbout-list-item">Respeto</li>
				<li className="GridAbout-list-item">Servicio</li>
			</ul>
		</article>
		<style jsx>{`
			.center {
				text-align: center;
			}
			.GridAbout {
				display: grid;
				grid-template-columns: repeat(auto-fit, minmax(30%, 1fr));
				grid-gap: 22px;
				width: 95%;
				margin: 0 auto;
				margin-top: 45px;
			}
			@media (max-width: 640px) {
				.GridAbout {
					display: block;
				}
			}
			.GridAbout-title {
				margin: 10px 0 25px 0;
				font-size: 29px;
				text-align: center;
				color: #1c89d0;
			}
			.GridAbout-item {
				padding: 1.5rem 1.3rem;
				padding-bottom: 0;
				border-radius: 5px;
				box-shadow: 0 2px 7px rgba(0,0,0,0.1),
										0 -0.5px 7px rgba(0,0,0,0.1);
				background-color: white;
				padding-bottom: 0.8rem;
				margin-bottom: 10px;
			}
			.GridAbout-text, .GridAbout-list-item {
				font-size: 19px;
				font-weight: 100;
				line-height: 1.6363636364;
			}
			.GridAbout-list {
				list-style-type: square;
				margin-left: 10%;
			}
			.GridAbout-text {
				text-align: justify;
				margin-bottom: 30px;
			}

			@media (min-width:120em) {
				.Logo img {
  		 		width: 44%;
				}
				.GridAbout-item {
					padding-bottom: 1rem;
				}
			}

		`}</style>
	</section>
)

const About = () => (
	<ScrollableAnchor id={"quienes-somos"}>
		<section className="About">

			<section className="AboutTheme">
				<section className="About-shadow">
					<section className="About-container">
						<div className="Description">
							<h2 className="About-title">Quienes somos</h2>
							<p className="About-text">
							OCCERTIMM es una institución de capacitación y certificación que busca el perfeccionamiento profesional de sus clientes ofreciendo capacitaciones y certificaciones por competencias laborales avaladas por SETEC mediante la resolución SETEC-REC-2018-065, a su vez las mismas se registran en la página de títulos de SENESCYT.
							</p>
						</div>
						<div className="Logo">
							<img src="/static/img/logo.png" alt="Logo" />
						</div>
					</section>
				</section>
			
				<div className="About-cinta"></div>
			</section>

			<GridAbout />
			<Video />

			<Company />
			<style jsx>{`
				.About-shadow {
					filter: drop-shadow(0px 10px 5px rgba(0,0,0,0.4));
					position: relative;
					z-index: 11;
				}
				.AboutTheme {
					display: grid;
					align-items: center;
					align-content: center;
					height: 100%;
					position: relative;
					margin-top: 1.5rem;
				}
				.About-cinta {
					position: absolute;
					width: 100%;
    			left: 0;
					height: 22rem;
					top: 6rem;
					background-color: #0f4377;
					margin: 0 auto;
				}
			
				.About {
					min-height: 100vh;
					width: 100%;
					background-image: radial-gradient(circle, #D7D7D7, #D7D7D7 1px, #FFF 1px, #FFF);
				}
				.About-container {
					position: relative;
					top: 1.5rem;
					display: grid;
					grid-template-columns: repeat(auto-fit, minmax(50%, 1fr));
					width: 90%;
					margin: 0 auto;
					background: #0f4377;
					padding-left: 1rem;
					padding-right: 1rem;
					padding-top: 2rem;
					position: relative;
					z-index: 11;
    			box-shadow: -2px 2px 10px 0px rgba(0,0,0,0.4);

					padding-bottom: 6rem;
					clip-path: polygon(50% 0%, 100% 0, 100% 83%, 67% 100%, 0 85%, 0 0);

				}
				.About-title {
					text-align: center;
					font-size: 60px;
					text-transform: uppercase;
					line-height: 1.17;
					margin-top: 60px;
					margin-bottom: 20px;
					color: white;
				}
				.About-text {
					font-weight: 100;
					font-size: 20px;
					line-height: 1.6363636364;
					margin-bottom: 30px;
					text-align: center;
					color: white;
				}
				.Logo {
					display: flex;
					justify-content: center;
					aling-items: center;
					margin-top: 70px;

					height: 23rem;
    			margin-top: 41px;
				}
				.Logo img {
					width: 75%;
					height: 100vh;
					transition: all .5s;
				}

				@media (min-width:120em) {
					.Logo img {
   			 		width: 44%;
					}
				}

				@media (max-width: 640px) {
					.Logo {
						display: none;
					}

					.About-cinta {
						height: 77%;
					}
				}
			`}</style>
		</section>
	</ScrollableAnchor>
)

export default About
