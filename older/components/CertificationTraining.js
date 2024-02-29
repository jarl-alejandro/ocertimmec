import React from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'
import CardItem from './CardItem'

import fetch from 'isomorphic-unfetch'
import config from '../config'


const CertificationTrainingComonent = ({ payload }) => (
	<ScrollableAnchor id={"capacitacion-certificacion"}>
		<section className="CertificationTraining">
			<section className="content">
				<h2 className="title">Capacitación y Certificación</h2>
				<section className="container">
					{ payload.map(item => (
						<CardItem key={item._id} item={item} />
					)) }
				</section>

			</section>
			<style jsx>{`
				.CertificationTraining {
					min-height: 100vh;
					width: 100%;
					background:white;
					clip-path: polygon(0 1%, 100% 0%, 100% 100%, 0% 100%);
				}
				.title {
					text-align: center;
					font-size: 42px;
					text-transform: uppercase;
					line-height: 1.17;
					margin-bottom: 60px;
					padding-top: 60px;
					color: white;
					color: #0f4377;
				}
				.content {
					display: block;
				}
				.container {
					display: grid;
					grid-template-columns: repeat(1, 1fr);
					grid-gap: 15px;
					width: 89%;
					margin: 0 auto;
				}
				@media (max-width: 640px) {
					.container {
						grid-template-columns: repeat(2, 1fr);
					}
					.CertificationTraining {
						clip-path: polygon(0 0.8%, 100% 0%, 100% 100%, 0% 100%);
					}
				}
				@media (max-width: 480px) {
					.container {
						grid-template-columns: repeat(1, 1fr);
					}

					.title {
						font-size: 35px;
					}
				}
			`}</style>
		</section>
	</ScrollableAnchor>
)

export default class CertificationTraining extends React.Component {

	state = {
		payload: []
	}

	componentDidMount () {
		(async () => {
			const response = await fetch(`${config.BASE_URL}/training-certificate`)
			const payload = await response.json()
			this.setState({ payload })
		})()
	}

	render () {
		return (
			<CertificationTrainingComonent payload={this.state.payload} />
		)
	}
}
