import React, { Component } from 'react'
import { withRouter } from 'next/routerReports'
import fetch from 'isomorphic-unfetch'
import Page from '../components/Page'
import Cover from '../components/Curso/Cover'

import Detail from '../Certificate/Detail'
import Form from '../Certificate/Form'

import config from '../config'

const array = [
	{ name: 'GESTIÓN ADMINISTRATIVA', image: 'gestion-administrativa.jpg' },
	{ name: 'ASISTENCIA CONTABLE', image: 'asistencia-contable.jpg' },
	{ name: 'GESTIÓN DE COMERCIO EXTERIOR', image: 'gestion-comercio-exterior.jpg' },
	{ name: 'VENTAS', image: 'ventas.jpg' },
	{ name: 'GESTIÓN ESPECIALIZADA EN VENTAS', image: 'gestion-especializada-ventas.jpg' },
	{ name: 'ASISTENCIA EN SEGURIDAD INDUSTRIAL', image: 'asistencte-seguro-indus.jpeg' },
	{ name: 'PREVENCIÓN EN RIESGOS LABORALES', image: 'prevencion.jpg' },
	{ name: 'MANTENIMIENTO ELECTROMECÁNICO DE VEHÍCULOS', image: 'manteniento-electromecanico.jpg' },
	{ name: 'MECATRÓNICA AUTOMOTRIZ', image: 'mecanic-automotriz.jpg' },
	{ name: 'MECATRÓNICA AUTOMOTRIZ', image: 'mecanic-automotriz.jpg' },
	{ name: 'REPARACIÓN, MONTAJE Y MODIFICACIÓN DE CARROCERÍAS', image: 'carroceria.jpg' },
	{ name: 'ACTIVIDADES DE APOYO PARA LA PROMOCIÓN EN RECREACIÓN Y DEPORTES', image: 'deportes.jpg' },
	{ name: 'ACTIVIDADES DE DOCENCIA EN METODOLOGÍA DE APRENDIZAJE BASADO EN PROYECTOS', image: 'docencia.jpg' },
]

class Certificate extends Component {

	constructor(props) {
		super(props)
		this.state = {
			isActive: false,
			type: '',
			isSsr: false
		}

		this.toggle = this.toggle.bind(this)
		this.handleClose = this.handleClose.bind(this)
	}

	componentDidMount() {
		if (typeof window !== 'undefined') {
			this.setState({ isSsr: true })
		}
	}

	handleClose () {
		this.setState(state => ({
			isActive: false,
			type: ''
		}))
	}

	toggle(name) {
		this.setState(state => ({
			isActive: true,
			type: name
		}))
	}

	selectedImage () {
		let name = this.props.payload.certificate.name.trim().toUpperCase()
		return array.filter(item => item.name.search(name) > -1 )
	}

	render () {
		let selectedImage = this.selectedImage()
		let image = selectedImage.length === 0
			? `${config.BASE_URL_MEDIA }/${this.props.payload.certificate.photo}`
			: `/static/img/perfiles/${selectedImage[0].image}`

		return (
			<Page isLandingPage={false}>
				<Form
					certificateId={this.props.payload.certificate._id}
					name={this.props.payload.certificate.name}
					onClick={this.handleClose}
					isActive={this.state.isActive}
					type={this.state.type}
				/>
				<section className="Layout">
					<article className="Layout-fixed">
						<button onClick={e => this.toggle('certificate')}>
							<i className="material-icons">school</i>
							Certificarme
						</button>
					</article>
					<Cover
						image={image}
						name={this.props.payload.certificate.name}
					/>

					{!!this.state.isSsr && (
						<Detail payload={this.props.payload} />
					)}
				</section>
				<style jsx>{`

					.Layout {
						position: relative;
						background-image: radial-gradient(circle, #D7D7D7, #D7D7D7 1px, #FFF 1px, #FFF);
						background-size: 28px 28px;
						padding-bottom: 2rem;
					}
					.Layout-fixed {
						position: fixed;
						right: 20px;
						z-index: 11;
						top: 400px;
						display: grid;
					}
					.Layout-fixed-item {
						width: 100%;
					}
          button i {
            margin-right: 10px;
          }
					button {
            display: flex;
            justify-content: center;
            align-content: center;
            align-items: center;
						padding: 13px 30px;
						margin: 0.5rem 0;
						font-weight: 600;
						border-radius: 3px;
            border: 2px solid;
						color: #0f4377;
            background: transparent;
            font-size: 17px;
						cursor: pointer;
						outline: none;
            transition: all ease .3s;
            text-transform: uppercase;
					}
					button:hover {
            transform: scale(0.9)
					}
					@media (max-width: 640px) {
						.Layout-fixed {
							position: absolute;
					    right: 5px;
    					top: 275px;
							display: block;
						}

					
          }
				`}</style>
			</Page>
		)
	}
}

Certificate.getInitialProps = async function (context) {
	const { id } = context.query
	const response = await fetch(`${config.BASE_URL}/certificate/${id}`)
	const payload = await response.json()

	return {
		payload: payload
	}
}

export default withRouter(Certificate)
