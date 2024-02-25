import { PureComponent, Fragment } from 'react'
import fetch from 'isomorphic-fetch'
import config from '../../config'
import socketIo from 'socket.io-client'

import TextField from '@material-ui/core/TextField'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
import FormControl from '@material-ui/core/FormControl'
import Snackbar from '@material-ui/core/Snackbar'
import { withStyles } from '@material-ui/core/styles'

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';

import Overlay from './Overlay'
import { getName } from './utils'
import { validCedula } from './valid'
import province from './province'

const styles = theme => ({
	formControl: {
		minWidth: '100%',
	},
	formControlRadio: {
		minWidth: '100%',
		marginTop: 10
	},
	gridComplete: {
		gridColumn: '2 span'
	},
	group: {
		margin: `0`,
		flexDirection: 'row'
	}
})

const initialState = {
	document: '',
	name: '',
	lastName: '',
	birthdate: '',
	direction: '',
	province: '',
	city: '',
	phone: '',
	email: '',
	work: '',
	nameCompany: '',
	activity: '',
	experience: '',
	numberTrainig: '',
	traning: '',
	level: '',
	celphone: '',

	open: false,
	message: '',
}

class Form extends PureComponent {

	constructor (props) {
		super(props)

		this.state = initialState

		this.openSnack = this.openSnack.bind(this)
		this.handleCloseSnack = this.handleCloseSnack.bind(this)
		this.handleClose = this.handleClose.bind(this)
		this.handleSave = this.handleSave.bind(this)
		this.setField = this.setField.bind(this)
	}

	componentDidMount() {
		this.socket = socketIo(config.BASE_URL)
	}

	componentWillUnmount() {
		this.socket.close()
	}

	openSnack (name) {
		this.setState({ open: true, message: name })
	}

	handleCloseSnack () {
		this.setState({ open: false, message: '' })
	}

	handleClose () {
		this.props.onClick()
		this.setState({ ...initialState })
	}

	async handleSave () {
		if (this.valid()) {
			let object = {
				...this.state,
				type: this.props.type,
				trainingId: this.props.trainingId,
				nameCurso: this.props.name,
				fechaAplicacion: new Date(),
			}

			const response = await fetch(`${config.BASE_URL}/registrame`, {
				method: 'POST',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(object)
			})
			const json = await response.json()

			if (json.status == 201) {
				this.socket.emit('registerInscripcion', object)
			}
			this.handleClose()
			this.setState({ open: true, message: json.message })
		}
	}

	valid () {
		if (!validCedula(this.state.document, this.openSnack)) {
			return false
		}
		else return true
	}

	setField (e) {
		const { name, value } = e.target
		this.setState({ [name]: value })
	}

	render () {
		const { classes } = this.props
		return (
			<Fragment>
			<Overlay
				onClick={this.handleClose}
				isActive={this.props.isActive}
				onSave={this.handleSave}
			>
				<h2 className="title">Inscripción de { getName(this.props.type) }</h2>
				<article className="Form">
					<TextField
						label="Nº de cedula"
						name="document"
						fullWidth
						value={this.state.document}
						onChange={this.setField}
					/>
					<TextField
						label="Nombres"
						name="name"
						fullWidth
						value={this.state.name}
						onChange={this.setField}
					/>
					<TextField
						label="Apellidos"
						name="lastName"
						fullWidth
						value={this.state.lastName}
						onChange={this.setField}
					/>
					<TextField
						label="Fecha de nacimiento"
						name="birthdate"
						type="date"
						fullWidth
						InputLabelProps={{ shrink: true }}
						value={this.state.birthdate}
						onChange={this.setField}
					/>
					<FormControl className={this.props.classes.formControl}>
						<InputLabel htmlFor="province">Provincia</InputLabel>
						<Select
							value={this.state.province}
							onChange={this.setField}
							inputProps={{
								name: 'province',
								id: 'province',
							}}
						>
							{ province.map((item, index) => (
								<MenuItem value={item} key={index}>{ item }</MenuItem>
							)) }
						</Select>
					</FormControl>
					<TextField
						label="Dirección de domicilio"
						name="direction"
						fullWidth
						value={this.state.direction}
						onChange={this.setField}
					/>
					<TextField
						label="Ciudad (Parroquia)"
						name="city"
						fullWidth
						value={this.state.city}
						onChange={this.setField}
					/>
					<TextField
						label="Teléfono"
						name="phone"
						fullWidth
						value={this.state.phone}
						onChange={this.setField}
					/>
					<TextField
						label="Celular"
						name="celphone"
						fullWidth
						value={this.state.celphone}
						onChange={this.setField}
					/>
					<TextField
						label="Correo electrónico"
						name="email"
						type="email"
						fullWidth
						value={this.state.email}
						onChange={this.setField}
					/>
				</article>
				<style jsx>{`
					.title {
						color: #1f1f1f;
					}
					.Form {
						display: grid;
						grid-template-columns: repeat(2, 1fr);
						grid-gap: 0 30px;
						padding: 0 2rem;
					}
					@media (max-width: 640px) {
						.Form {
							grid-template-columns: repeat(1, 1fr);
						}
					}
				`}</style>
			</Overlay>
			<Snackbar
				anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
				open={this.state.open}
				autoHideDuration={1000}
				onClose={this.handleCloseSnack}
				ContentProps={{
					'aria-describedby': 'message-id',
				}}
				message={<span id="message-id">{ this.state.message }</span>}
			/>
			</Fragment>
		)
	}
}

export default withStyles(styles)(Form)
