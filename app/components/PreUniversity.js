import Text from '../components/Text'
import ScrollableAnchor from 'react-scrollable-anchor'

const tags = [
	'MATEMÁTICA',
	'FÍSICA',
	'RAZONAMIENTO LÓGICO NUMÉRICO',
	'ESTADÍSTICA'
]

function PreUniversity () {
	return (
		<ScrollableAnchor id={"pre-universitario"}>
			<section className="PreUniversity-layout">
				<section className="PreUniversity">
					<article className="PreUniversity-box">
						<h2 className="PreUniversity-name">Pre Universitario</h2>

						<div className="PreUniversity-text">
							<Text value="Clases particulares 1ro, 2do, 3ro BGU. Cursos de nivelación y preparación para examen “SER BACHILLER” en:" />
						</div>

						<div className="PreUniversity-containerType">
							{ tags.map((item, index) => (
								<div key={index} className="PreUniversity-type">{ item }</div>
							)) }
						</div>

						<div className="PreUniversity-hours">
							<h3 className="PreUniversity-hours--title">Horarios:</h3>
							<div className="PreUniversity-hours--box">
								<div className="PreUniversity-hours--days">Lunes, miércoles, jueves y viernes:</div>
								<div className="PreUniversity-hours--flex">
									<div className="PreUniversity-hours--hour">8H00 - 12H00</div>
								</div>
							</div>

							<div className="PreUniversity-hours--box">
								<div className="PreUniversity-hours--days">Sábados:</div>
								<div className="PreUniversity-hours--flex">
									<div className="PreUniversity-hours--hour">8H00 - 12H00</div>
									<div className="PreUniversity-hours--hour">8H00 - 12H00</div>
								</div>
							</div>
						</div>
					</article>

					<article className="PreUniversity-figure">
						<img className="PreUniversity-img" src={`/static/img/post-pre.png`} />
					</article>
				</section>

				<style global jsx>{`
					.PreUniversity-layout {
						padding-top: 70px;
					}
					.PreUniversity {
						margin-top: 2rem;
						display: grid;
						grid-template-columns: repeat(2, 1fr);
						align-items: center;
						align-content: center;
						width: 85%;
						margin: 0 auto;
						margin-bottom: 1.5rem;
						color: #0f4377;
						background: white;
						padding: 1.5rem 2rem;
						position: relative;
						border-radius: 1px;
						transition: all ease .3s;
						box-shadow: 1px 1px 8px rgba(92, 92, 92, 0.15),
												-0.5px -0.5px 10px rgba(92, 92, 92, 0.1); 
					}

					.PreUniversity-name {
						font-size: 35px;
					}
					.PreUniversity-text {
						overflow: hidden;
						margin: 10px 0;
					}
					.PreUniversity-containerType {
						display: flex;
						flex-wrap: wrap;
					}
					.PreUniversity-type {
						background-color: #0f4377;
						color: white;
						border-radius: 3px;
						display: inline;
						padding: 1px 11px;
						margin-right: 10px;
						margin-top: 10px;
					}
					.PreUniversity-hours--flex {
						display: flex;
					}
					.PreUniversity-hours {
						margin-top: 1.5rem;
					}
					.PreUniversity-hours--title {
						font-weight: 600;
						font-size: 20px;
					}
					.PreUniversity-hours--box {
						margin-top: 15px;
						margin-left: 25px;
					}
					.PreUniversity-hours--hour {
						border: 1px solid #0f4377;
						border-radius: 3px;
						margin-right: 10px;
						padding: 4px 10px;
						font-size: 14px;
					}
					.PreUniversity-figure {
						height: 100%;
						width: 100%;
						display: flex;
						justify-content: flex-end;
					}
					.PreUniversity-img {
						width: 90%;
						height: 100%;
					}

				`}</style>
			</section>

		</ScrollableAnchor>
	)
}

export default PreUniversity
