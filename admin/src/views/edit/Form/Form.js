import React, { PureComponent } from 'react'

import { BASE_URL } from '../../../config'
import Button from '@material-ui/core/Button'
import Ciudadanos from './Ciudadanos'
import CondicionLaboral from './CondicionLaboral'
import CondicionVida from './CondicionVida'
import DatosEncuesta from './DatosEncuesta'
import Experience from './Experience'
import Laboral from './Laboral'
import Snackbar from '@material-ui/core/Snackbar'
import Studiant from './Studiant'
import Training from './Training'
import initialState from './state'
import socketIo from 'socket.io-client'
import { validCedula } from './valid'
import { withRouter } from 'react-routerReports-dom'

class Form extends PureComponent {

	constructor (props) {
		super(props)

		this.state = initialState

		this.setDepthField = this.setDepthField.bind(this)
		this.setField = this.setField.bind(this)
		this.handleSave = this.handleSave.bind(this)

		this.openSnack = this.openSnack.bind(this)
		this.handleCloseSnack = this.handleCloseSnack.bind(this)
		this.changeFile = this.changeFile.bind(this)

		this.onFinish = this.onFinish.bind(this)
	}

	componentDidMount () {
		this.socket = socketIo(BASE_URL)
		this.socket.on('terminar::register', this.onFinish)

		this.fetchInscripcion(this.props.inscripcionId)
	}

	componentWillUnmount () {
		this.socket.close()
	}

	formatDate(date) {
		if (date) {
			date = date.toString().split('T')[0].split('-').join('/')
			date = new Date(date)
	
			let day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()
			let month = date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1
			return `${date.getFullYear()}-${month}-${day}`
		}
	}

	async fetchInscripcion (inscripcionId) {
		const response = await fetch(`${BASE_URL}/inscription/${inscripcionId}`)
		const json = await response.json()

		this.setState({
			name: json.name || '',
			lastName: json.lastName || '',
			document: json.document || '',
			birthdate: this.formatDate(json.birthdate) || '',
			direction: json.direction || '',
			province: json.province || '',
			city: json.city || '',
			phone: json.phone || '',
			celphone: json.celphone || '',
			email: json.email || '',
			file: '',
			primaria: {
				name: json.primaria.name || '',
				pais: json.primaria.pais || '',
				ciudad: json.primaria.ciudad || '',
				titulo: json.primaria.titulo || '',
			},
			secundaria: {
				name: json.secundaria.name || '',
				pais: json.secundaria.pais || '',
				ciudad: json.secundaria.ciudad || '',
				titulo: json.secundaria.titulo || '',
			},
			tecnico: {
				name: json.tecnico.name || '',
				pais: json.tecnico.pais || '',
				ciudad: json.tecnico.ciudad || '',
				titulo: json.tecnico.titulo || '',
			},
			tercerNivel: {
				name: json.tercerNivel.name || '',
				pais: json.tercerNivel.pais || '',
				ciudad: json.tercerNivel.ciudad || '',
				titulo: json.tercerNivel.titulo || '',
			},
			cuartoNivel: {
				name: json.cuartoNivel.name || '',
				pais: json.cuartoNivel.pais || '',
				ciudad: json.cuartoNivel.ciudad || '',
				titulo: json.cuartoNivel.titulo || '',
			},
			capacitacion1: {
				nameCourse: json.capacitacion1.nameCourse || '',
				nameInstitucion: json.capacitacion1.nameInstitucion || '',
				dateCourse: this.formatDate(json.capacitacion1.dateCourse) || '',
				hourCourse: json.capacitacion1.hourCourse || '',
			},
			capacitacion2: {
				nameCourse: json.capacitacion2.nameCourse || '',
				nameInstitucion: json.capacitacion2.nameInstitucion || '',
				dateCourse: this.formatDate(json.capacitacion2.dateCourse) || '',
				hourCourse: json.capacitacion2.hourCourse || '',
			},
			capacitacion3: {
				nameCourse: json.capacitacion3.nameCourse || '',
				nameInstitucion: json.capacitacion3.nameInstitucion || '',
				dateCourse: this.formatDate(json.capacitacion3.dateCourse) || '',
				hourCourse: json.capacitacion3.hourCourse || '',
			},
			experiencia1: {
				desde: this.formatDate(json.experiencia1.desde) || '',
				hasta: this.formatDate(json.experiencia1.hasta) || '',
				name: json.experiencia1.name || '',
				direction: json.experiencia1.direction || '',
				phone: json.experiencia1.phone || '',
				funcion: json.experiencia1.funcion || '',
			},
			experiencia2: {
				desde: this.formatDate(json.experiencia2.desde) || '',
				hasta: this.formatDate(json.experiencia2.hasta) || '',
				name: json.experiencia2.name || '',
				direction: json.experiencia2.direction || '',
				phone: json.experiencia2.phone || '',
				funcion: json.experiencia2.funcion || '',
			},
			experiencia3: {
				desde: this.formatDate(json.experiencia3.desde) || '',
				hasta: this.formatDate(json.experiencia3.hasta) || '',
				name: json.experiencia3.name || '',
				direction: json.experiencia3.direction || '',
				phone: json.experiencia3.phone || '',
				funcion: json.experiencia3.funcion || '',
			},
			autoidentificacion: json.autoidentificacion || '',
			tipoOcupacion: json.tipoOcupacion || '',
			contrato: json.contrato || '',
			seguroMedio: json.seguroMedio.toUpperCase() || '',
			sueldoTrece: json.sueldoTrece.toUpperCase() || '',
			sueldoCatorce: json.sueldoCatorce.toUpperCase() || '',
			sueldo: json.sueldo.toUpperCase() || '',
			cambioPuesto: json.cambioPuesto.toUpperCase() || '',
			satisfechoEmpleo: json.satisfechoEmpleo.toUpperCase() || '',
			agotadoEmpleo: json.agotadoEmpleo.toUpperCase() || '',
			respetanTrabajo: json.respetanTrabajo.toUpperCase() || '',
			jefesRecoTrab: json.jefesRecoTrab.toUpperCase() || '',
			riesgoLaboral: json.riesgoLaboral.toUpperCase() || '',
			deseariaCambiarTrabajo: json.deseariaCambiarTrabajo.toUpperCase() || '',
			seguroMedico: json.seguroMedico.toUpperCase() || '',
			hijos: json.hijos.toUpperCase() || '',
			cuantoHijos: json.cuantoHijos.toUpperCase() || '',
			hijosMayorTres: json.hijosMayorTres.toUpperCase() || '',
			estudian: json.estudian.toUpperCase() || '',
			miembrosHogar: json.miembrosHogar.toUpperCase() || '',
			propiedad: json.propiedad.toUpperCase() || '',
			servicioBasico: json.servicioBasico.toUpperCase() || '',
			discapacidad: json.discapacidad.toUpperCase() || '',
			tipoDiscapacidad: json.tipoDiscapacidad.toUpperCase() || '',
			socioEmpleo: json.socioEmpleo.toUpperCase() || '',
		})

	}

	onFinish () {
		this.props.history.push('/estudiantes')
		this.openSnack('Se ha finalizado el registro con exito')
	}

	changeFile(e) {
		let { file } = this.state
		file = e.target.files[0]
		this.setState({ file })
	}

	openSnack(name) {
		this.setState({
			open: true,
			message: name
		})
	}

	handleCloseSnack() {
		this.setState({
			open: false,
			message: ''
		})
	}

	setField (e) {
		const { name, value } = e.target
		this.setState({ [name]: value })
	}

	setDepthField (e) {
		const { name, value } = e.target
		let newArray = name.split('-')
		let name1 = newArray[0]
		let name2 = newArray[1]

		this.setState(state => ({
			[name1]: Object.assign({}, state[name1], {
				[name2]: value
			})
		}))
	}

	handleSave () {
		if (this.valid()) {
			this.socket.emit('updated::student::inscripcion', {
				...this.state,
				inscripcionId: this.props.inscripcionId
			})

			// this.setState({ isButton: true })
			this.openSnack('Se enviado....')
		}
	}

	valid() {
		if (!validCedula(this.state.document, this.openSnack)) {
			document.getElementById('document').focus()
			return false
		}
		else return true
	}

	render () {
		return (
			<section className="TableForm">
				<article className="TableForm-card">
					<h2 className="TableForm-title">
						1.- PROCESO DE CERTIFICACION
					</h2>
					<Studiant
						state={{
							name: this.state.name,
							lastName: this.state.lastName,
							document: this.state.document,
							birthdate: this.state.birthdate,
							direction: this.state.direction,
							province: this.state.province,
							city: this.state.city,
							phone: this.state.phone,
							celphone: this.state.celphone,
							email: this.state.email,
						}}
						setField={this.setField}
					/>
				</article>

				<article className="TableForm-card">
					<h2 className="TableForm-title">2.- FORMACIÓN ACTUAL</h2>
					<Experience
						state={{
							primaria: this.state.primaria,
							secundaria: this.state.secundaria,
							tecnico: this.state.tecnico,
							tercerNivel: this.state.tercerNivel,
							cuartoNivel: this.state.cuartoNivel,
						}}
						setDepthField={this.setDepthField}
					/>
				</article>

				<article className="TableForm-card">
					<h2 className="TableForm-title">3.- Capacitación o formación recibida</h2>
					<Training
						state={{
							capacitacion1: this.state.capacitacion1,
							capacitacion2: this.state.capacitacion2,
							capacitacion3: this.state.capacitacion3,
						}}
						setDepthField={this.setDepthField}
					/>
				</article>

				<article className="TableForm-card">
					<h2 className="TableForm-title">4.- Experiencia laboral</h2>
					<Laboral
						state={{
							experiencia1: this.state.experiencia1,
							experiencia2: this.state.experiencia2,
							experiencia3: this.state.experiencia3,
						}}
						setDepthField={this.setDepthField}
					/>
				</article>

				<article className="TableForm-card">
					<h2 className="TableForm-title">5.- DATOS GENERALES DEL ENCUESTADO</h2>
					<DatosEncuesta
						state={this.state.autoidentificacion}
						setField={this.setField}
					/>
				</article>

				<article className="TableForm-card">
					<h2 className="TableForm-title">6.- CIUDADANOS/AS OCUPADOS/AS</h2>
					<Ciudadanos
						state={{
							tipoOcupacion: this.state.tipoOcupacion,
							contrato: this.state.contrato,
						}}
						setField={this.setField}
					/>
				</article>

				<article className="TableForm-card">
					<h2 className="TableForm-title">
						7.- CONDICIONES LABORALES
						<span>RECIBE POR PARTE DE SU PATRONO O EMPLEADOR:</span>
					</h2>
					<CondicionLaboral
						state={{
							seguroMedio: this.state.seguroMedio,
							sueldoTrece: this.state.sueldoTrece,
							sueldoCatorce: this.state.sueldoCatorce,
							sueldo: this.state.sueldo,
							cambioPuesto: this.state.cambioPuesto,
							satisfechoEmpleo: this.state.satisfechoEmpleo,
							agotadoEmpleo: this.state.agotadoEmpleo,
							respetanTrabajo: this.state.respetanTrabajo,
							jefesRecoTrab: this.state.jefesRecoTrab,
							riesgoLaboral: this.state.riesgoLaboral,
							deseariaCambiarTrabajo: this.state.deseariaCambiarTrabajo,
						}}
						setField={this.setField}
					/>
				</article>

				<article className="TableForm-card">
					<h2 className="TableForm-title">
						8. DATOS DE CONDICIONES DE VIDA
					</h2>
					<CondicionVida
						state={{
							seguroMedico: this.state.seguroMedico,
							hijos: this.state.hijos,
							cuantoHijos: this.state.cuantoHijos,
							hijosMayorTres: this.state.hijosMayorTres,
							estudian: this.state.estudian,
							miembrosHogar: this.state.miembrosHogar,
							propiedad: this.state.propiedad,
							servicioBaSIco: this.state.servicioBaSIco,
							discapacidad: this.state.discapacidad,
							tipoDiscapacidad: this.state.tipoDiscapacidad,
							socioEmpleo: this.state.socioEmpleo,
						}}
						setField={this.setField}
					/>
				</article>

				<article className="TableForm-footer">
					<Button
						variant="contained"
						color="secondary"
						disabled={this.state.isButton}
						onClick={this.handleSave}
					>
						Guardar
					</Button>

					<input
						type="file"
						id="requisitos-pdf"
						accept="application/pdf"
						className="requisitos-input"
						onChange={this.changeFile}
					/>

					<Button
						variant="contained"
						color="secondary"
						style={{ cursor: 'pointer' }}
					>
						<label htmlFor="requisitos-pdf" style={{ cursor: 'pointer' }}>Subir requisitos</label>
					</Button>
				</article>
				<Snackbar
					anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
					open={this.state.open}
					autoHideDuration={1000}
					onClose={this.handleCloseSnack}
					ContentProps={{
						'aria-describedby': 'message-id',
					}}
					message={<span id="message-id">{this.state.message}</span>}
				/>
			</section>
		)
	}
}

export default withRouter(Form)
