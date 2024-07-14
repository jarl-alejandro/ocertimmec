import Ciudadanos from './Ciudadanos'
import CondicionLaboral from './CondicionLaboral'
import CondicionVida from './CondicionVida'
import DatosEncuesta from './DatosEncuesta'
import Experience from './Experience'
import Laboral from './Laboral'
import { PureComponent } from 'react'
import Snackbar from '@material-ui/core/Snackbar'
import Training from './Training'
import config from '../../config'
import initialState from './state'
import socketIo from 'socket.io-client'

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
		this.handleUpload = this.handleUpload.bind(this)
	}

	componentDidMount () {
		this.socket = socketIo(config.BASE_URL)

		this.socket.on('terminar::register', this.onFinish)
	}

	componentWillUnmount () {
		this.socket.close()
	}

	handleUpload () {
		let el = document.getElementById("requisitos-pdf")
		el.click()
	}

	onFinish () {
		this.openSnack('Se ha finalizado el registro con exito')
		location.href = '/'
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
		this.socket.emit('finalizar::inscripcion', {
			...this.state,
			inscripcionId: this.props.inscripcionId
		})
		this.openSnack('Se enviado....')
		this.setState({ isButton: true })
	}

	render () {
		return (
			<section className="TableForm">
				<article className="TableForm-card">
					<h2 className="TableForm-title">1.- FORMACIÓN ACTUAL</h2>
					<Experience
						state={this.state}
						setDepthField={this.setDepthField}
					/>
				</article>

				<article className="TableForm-card">
					<h2 className="TableForm-title">2.- Capacitación o formación recibida</h2>
					<Training
						state={this.state}
						setDepthField={this.setDepthField}
					/>
				</article>

				<article className="TableForm-card">
					<h2 className="TableForm-title">3.- Experiencia laboral</h2>
					<Laboral
						state={this.state}
						setDepthField={this.setDepthField}
					/>
				</article>

				<article className="TableForm-card">
					<h2 className="TableForm-title">4.- DATOS GENERALES DEL ENCUESTADO</h2>
					<DatosEncuesta
						state={this.state.autoidentificacion}
						setField={this.setField}
					/>
				</article>

				<article className="TableForm-card">
					<h2 className="TableForm-title">5.- CIUDADANOS/AS OCUPADOS/AS</h2>
					<Ciudadanos
						state={this.state}
						setField={this.setField}
					/>
				</article>

				<article className="TableForm-card">
					<h2 className="TableForm-title">
						6.- CONDICIONES LABORALES
						<span>RECIBE POR PARTE DE SU PATRONO O EMPLEADOR:</span>
					</h2>
					<CondicionLaboral
						state={this.state}
						setField={this.setField}
					/>
				</article>

				<article className="TableForm-card">
					<h2 className="TableForm-title">
						7. DATOS DE CONDICIONES DE VIDA
					</h2>
					<CondicionVida
						state={this.state}
						setField={this.setField}
					/>
				</article>

				<article className="TableForm-footer">
					<button
						className="requisitos-label"
						disabled={this.state.isButton}
						onClick={this.handleSave}
					>
						Guardar
					</button>
					<input
						type="file"
						id="requisitos-pdf"
						accept="application/pdf"
						className="requisitos-input"
						onChange={this.changeFile}
					/>
					<div className="requisitos-label" onClick={this.handleUpload}>Subir requisitos</div>
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
				<style jsx>{`
					.requisitos-input {
						display: none;
					}
					.requisitos-label {
						  display: flex;
			    		align-items: center;
    					justify-content: center;
							position: relative;
							color: #0f4377;
							border: 2px solid;
							-webkit-text-decoration: none;
							text-decoration: none;
							text-align: center;
							transition: all linear .3s;
							border-radius: 3px;
							height: 45px;
   						padding: 0 7px;
							 background: white;
							 cursor: pointer;
					}
					.requisitos-label:hover {
							background-color: #0f4377;
							border: 2px solid #0f4377;
							color: white;
					}
					.requisitos-label:active {
						transform: scale(0.9);
					}

					.TableForm-title span {
						display: block;
						font-size: 15px;
					}
					.TableForm-footer {
						display: flex;
						justify-content: space-around;
						align-items: center;
						margin-bottom: 2rem;
					}
				`}</style>
			</section>
		)
	}
}

export default Form
