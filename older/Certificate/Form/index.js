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
	celphone: '',
	email: '',
	work: '',
	nameCompany: '',
	activity: '',
	experience: '',
	numberTrainig: '',
	traning: '',
	level: '',

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
				certificateId: this.props.certificateId,
				nameCurso: this.props.name,
				fechaAplicacion: new Date(),
			}
			this.socket.emit('registerInscripcion', object)

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
		if (name === 'experience' || name === 'numberTrainig') {
			let patt = new RegExp(/^[0-9\s]+$/g)
			if (patt.test(value) ) {
				this.setState({ [name]: value })
			}
		}

		else {
			this.setState({ [name]: value })
		}
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
					{ (this.props.type === 'certificate' || this.props.type === 'training-certificate') && (
						<div>
							<FormControl component="fieldset" className={`${classes.formControlRadio}`}>
								<FormLabel component="legend">Actualmente usted trabaja</FormLabel>
								<RadioGroup
									aria-label="Trabaja"
									name="work"
									className={classes.group}
									value={this.state.work}
									onChange={this.setField}
								>
									<FormControlLabel value="si" control={<Radio />} label="Si" />
									<FormControlLabel value="no" control={<Radio />} label="No" />
								</RadioGroup>
							</FormControl>
						</div>
					)}
				
					<TextField
						label="Nombre de la empresa en la que obtuvo la experiencia afín al perfil"
						name="nameCompany"
						fullWidth
						value={this.state.nameCompany}
						onChange={this.setField}
						className={classes.gridComplete}
					/>
					<TextField
						className={classes.gridComplete}
						label="Actividad que desarrollo(a) en la empresa que obtuvo la experiencia"
						name="activity"
						fullWidth
						value={this.state.activity}
						onChange={this.setField}
					/>
					<p className={classes.gridComplete} style={{ marginTop: '5px', fontWeight: 'bold', color: '#242424'}}>Experiencia a fin al perfil a certificarse</p>
					<TextField
						className={classes.gridComplete}
						label="Experiencia a fin al perfil a certificarse (meses)"
						name="experience"
						fullWidth
						value={this.state.experience}
						onChange={this.setField}
					/>
					<FormControl component="fieldset" className={`${classes.formControlRadio} ${classes.gridComplete}` }>
						<FormLabel component="legend">A recibido capacitación a fin al perfil a certificarse</FormLabel>
						<RadioGroup
							aria-label="A recibido capacitación a fin al perfil a certificarse"
							name="traning"
							className={classes.group}
							value={this.state.traning}
							onChange={this.setField}
						>
							<FormControlLabel value="si" control={<Radio />} label="Si" />
							<FormControlLabel value="no" control={<Radio />} label="No" />
						</RadioGroup>
					</FormControl>
						{ this.state.traning === "si" && (
							<TextField
								label="Horas de capacitación"
								name="numberTrainig"
								fullWidth
								value={this.state.numberTrainig}
								onChange={this.setField}
							/>
						) }
						<FormControl className={this.props.classes.formControl}>
							<InputLabel htmlFor="level">Nivel de instrucción</InputLabel>
							<Select
								value={this.state.level}
								onChange={this.setField}
								inputProps={{
									name: 'level',
									id: 'level',
								}}
							>
								<MenuItem value='primaria'>Primaria</MenuItem>
								<MenuItem value='secundaria'>Secundaria</MenuItem>
								<MenuItem value='tecnólogo'>Tecnólogo</MenuItem>
								<MenuItem value='superior'>Superior</MenuItem>
							</Select>
						</FormControl>
				</article>
				<style jsx global>{`
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
