import React, { PureComponent, Fragment } from 'react'
import { connect } from 'react-redux'

import { withStyles } from '@material-ui/core/styles'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import Select from '@material-ui/core/Select'
import FormControl from '@material-ui/core/FormControl'
import MenuItem from '@material-ui/core/MenuItem'
import InputLabel from '@material-ui/core/InputLabel'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import TextField from '@material-ui/core/TextField'
import LinkedCamera from '@material-ui/icons/LinkedCamera'

import usersAction from '../../actions/users.action'
import { BASE_URL_MEDIA } from '../../config'

const styles = theme => ({
	grid: {
		display: 'grid',
		gridTemplateColumns: 'repeat(2, 1fr)',
		gridGap: '0 15px',
		'@media (max-width: 640px)': {
			display: 'block',
			'& > div': {
				width: '100%'
			}
		}
	},
	gridComplete: {
		gridColumn: '2 span'
	},
	formControl: {
		margin: theme.spacing.unit,
		minWidth: 120,
	},
	bigAvatar: {
		width: 60,
		height: 60,
		margin: 7
	},
	label: {
		cursor: 'pointer'
	}
})

const initialState = {
	name: '',
	email: '',
	photo: '',
	imagePreviewUrl: '',
	roles: '',
	workExperience: '',
	levelInstruction: '',
	teachingExperience: '',
	trainingProfile: '',
	trainingPedagogy: '',
	cedula: '',
}

class Form extends PureComponent {

	constructor (props) {
		super(props)

		this.state = initialState

		this.setField = this.setField.bind(this)
		this.uploadImage = this.uploadImage.bind(this)
		this.handlSaved = this.handlSaved.bind(this)
		this.handleCancel = this.handleCancel.bind(this)
	}

	componentDidMount () {
		const { edit } = this.props

		if (edit._id) {
			this.setState({
				cedula: edit.cedula || '',
				name: edit.name || '',
				email: edit.email || '',
				roles: edit.roles || '',
				workExperience: edit.workExperience || '',
				levelInstruction: edit.levelInstruction || '',
				teachingExperience: edit.teachingExperience || '',
				trainingProfile: edit.trainingProfile || '',
				trainingPedagogy: edit.teachingExperience || '',
				imagePreviewUrl: `${BASE_URL_MEDIA}${edit.photo}`,
			})
		}
	}

	setField (e) {
		this.setState({ [e.target.name]: e.target.value })
	}

	uploadImage (e) {
		let reader = new FileReader()
		let file = e.target.files[0]

		reader.onloadend = () => {
			this.setState({
				photo: file,
				imagePreviewUrl: reader.result
			})
		}

		reader.readAsDataURL(file)
	}

	handlSaved () {
		this.handleCancel()

		if (!this.props.edit._id) {
			this.props.savedUser(this.getForm())
		}
		else {
			this.props.updated(this.getForm())
		}
	}

	handleCancel () {
		this.setState({ ...initialState })
		this.props.toggleForm()
		this.props.closeEdit()
	}

	getForm () {
		let object = {
			name: this.state.name,
			email: this.state.email,
			roles: this.state.roles,
			workExperience: this.state.workExperience,
			levelInstruction: this.state.levelInstruction,
			teachingExperience: this.state.teachingExperience,
			trainingProfile: this.state.trainingProfile,
			trainingPedagogy: this.state.trainingPedagogy,
			cedula: this.state.cedula
		}

		if (this.state.photo) {
			object.photo = this.state.photo.name.split(' ').join('')
			object.photoFile = this.state.photo
		}

		if (this.props.edit._id) {
			if (this.state.photo) {
				object.isPhoto = true
				object.photo = this.props.edit.photo
				object.photoFile = this.state.photo
			}

			object.id = this.props.edit._id
		}

		return object
	}

	render () {
		const { classes, edit } = this.props
		const title = edit._id ? 'Editar' : 'Nueva'

		return (
			<Dialog
				open={this.props.isOpen}
				onClose={this.handleCancel}
				aria-labelledby="form-dialog-title"
			>
				<DialogTitle id="form-dialog-title">{title} usuario</DialogTitle>
				<DialogContent className={this.props.classes.grid}>
					<TextField
						autoFocus
						margin="dense"
						name="name"
						label="Nombre"
						fullWidth
						onChange={this.setField}
						value={this.state.name}
						className={classes.gridComplete}
					/>
					<TextField
						margin="dense"
						name="email"
						label="E-mail"
						fullWidth
						onChange={this.setField}
						value={this.state.email}
					/>

					<FormControl className={classes.formControl}>
						<InputLabel htmlFor="roles">Roles</InputLabel>
						<Select
							value={this.state.roles}
							onChange={this.setField}
							inputProps={{
								name: 'roles',
								id: 'roles',
							}}
						>
							<MenuItem value={'Coordinador'}>Coordinador</MenuItem>
							<MenuItem value={'Responsable  de proceso'}>Responsable de proceso</MenuItem>
							<MenuItem value={'Analista'}>Analista</MenuItem>
							<MenuItem value={'Supervisor'}>Supervisor</MenuItem>
							<MenuItem value={'Examinador'}>Examinador</MenuItem>
							<MenuItem value={'Capacitador'}>Capacitador</MenuItem>
						</Select>
					</FormControl>

					{ this.state.roles === 'Examinador' && (
						<TextField
							margin="dense"
							name="cedula"
							label="Cedula"
							fullWidth
							onChange={this.setField}
							value={this.state.cedula}
							className={classes.gridComplete}
						/>
					)}

					{ this.state.roles === 'Capacitador' && (
						<Fragment>
							<TextField
								margin="dense"
								name="workExperience"
								label="Experiencia laboral al fin del perfil"
								fullWidth
								onChange={this.setField}
								value={this.state.workExperience}
								multiline
								rows="3"
								className={classes.gridComplete}
							/>
							<TextField
								margin="dense"
								name="levelInstruction"
								label="Nivel de instrucción"
								multiline
								rows="3"
								fullWidth
								onChange={this.setField}
								value={this.state.levelInstruction}
								className={classes.gridComplete}
							/>
							<TextField
								margin="dense"
								name="teachingExperience"
								label="Experiencia en docencia"
								multiline
								rows="3"
								fullWidth
								onChange={this.setField}
								value={this.state.teachingExperience}
								className={classes.gridComplete}
							/>
							<TextField
								margin="dense"
								name="trainingProfile"
								label="Capacitación al fin del perfil"
								multiline
								rows="3"
								fullWidth
								onChange={this.setField}
								value={this.state.trainingProfile}
								className={classes.gridComplete}
							/>
							<TextField
								margin="dense"
								name="trainingPedagogy"
								label="Capacitación en pedagogia"
								multiline
								rows="3"
								fullWidth
								onChange={this.setField}
								value={this.state.trainingPedagogy}
								className={classes.gridComplete}
							/>
						</Fragment>
					)}
					<div className={`flex flex-center flex-center-y flex-wrap ${classes.gridComplete}`}>
						<Avatar
							alt={this.state.name}
							src={this.state.imagePreviewUrl}
							className={classes.bigAvatar}
						/>
						<input
							id="photo-user"
							type="file"
							className="none"
							onChange={this.uploadImage}
						/>
						<div className="fullWidth flex flex-center flex-center-y">
							<IconButton>
								<label htmlFor="photo-user" className={classes.label}>
									<LinkedCamera />
								</label>
							</IconButton>
						</div>
					</div>
				</DialogContent>

				<DialogActions>
					<Button color="primary" onClick={this.handleCancel}>Cancelar</Button>
					<Button color="primary" onClick={this.handlSaved}>Guardar</Button>
				</DialogActions>
			</Dialog>
		)
	}

}

const mapStateToProps = state => ({
	edit: state.users.edit
})

const mapDispatchToProps = dispatch => ({
	savedUser (payload) {
		dispatch(usersAction.savedUser(payload))
	},
	updated(payload) {
		dispatch(usersAction.updated(payload))
	},
	closeEdit() {
		dispatch(usersAction.edit({}))
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Form))
