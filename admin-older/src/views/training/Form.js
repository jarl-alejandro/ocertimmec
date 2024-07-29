import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

import { withStyles } from '@material-ui/core/styles'
import RichTextEditor from 'react-rte'

import {
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	Select,
	FormControl,
	MenuItem,
	InputLabel,
	Button,
	TextField,
	Avatar,
	IconButton,
} from '@material-ui/core'

import LinkedCamera from '@material-ui/icons/LinkedCamera'

import EditorOccertimm from '../../components/Editor'
import trainingAction from '../../actions/training.action'
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
	marginTop: {
		marginTop: 16
	},
	formControl: {
		margin: theme.spacing.unit,
		minWidth: 120,
	},
	paddingBottom: {
		paddingBottom: 10
	},
	label: {
		cursor: 'pointer'
	},
	bigAvatar: {
		width: 160,
		height: 100,
		margin: 7,
		borderRadius: 0
	},
})

const initialState = {
	name: '',
	imagePreviewUrl: '',
	photo: '',
	userId: '',
	materials: RichTextEditor.createEmptyValue(),
	content: RichTextEditor.createEmptyValue(),
	place: '',
	cost: '',
	isPhoto: false,
	format: 'html'
}

class Form extends PureComponent {

	constructor (props) {
		super(props)

		this.state = initialState

		this.setField = this.setField.bind(this)
		this.onChangePulse = this.onChangePulse.bind(this)
		this.handlSaved = this.handlSaved.bind(this)
		this.handleCancel = this.handleCancel.bind(this)
		this.uploadImage = this.uploadImage.bind(this)
	}

	componentDidMount () {
		this.props.fetchTeacher()

		const { edit } = this.props
		const { format } = this.state

		if (edit._id) {
			this.setState({
				name: edit.name || '',
				userId: edit.id_user._id || '',
				cost: edit.cost || '',
				materials: RichTextEditor.createValueFromString(edit.materials || '', format),
				content: RichTextEditor.createValueFromString(edit.content || '', format),
				place: edit.place || '',
				imagePreviewUrl: `${BASE_URL_MEDIA}${edit.photo}`,
			})
		}
	}

	setField (e) {
		this.setState({ [e.target.name]: e.target.value })
	}

	uploadImage(e) {
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

	onChangePulse (name, value) {
		this.setState({ [name]: value })
	}

	handlSaved () {
		if (!this.props.edit._id) {
			this.props.savedTrainig(this.getForm())
		}
		else {
			this.props.updated(this.getForm())
		}
		this.handleCancel()
	}

	handleCancel () {
		this.props.closeEdit()
		this.setState({ ...initialState })
		this.props.toggleForm()
	}

	getForm () {
		let object = {
			name: this.state.name,
			userId: this.state.userId,
			materials: this.state.materials.toString(this.state.format),
			place: this.state.place,
			content: this.state.content.toString(this.state.format),
			cost: this.state.cost,
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

	render  () {
		const { classes, teachers, edit } = this.props
		const title = edit._id ? 'Editar' : 'Nueva'

		return (
			<Dialog
				open={this.props.isOpen}
				onClose={this.handleCancel}
				aria-labelledby="form-dialog-title"
			>
				<DialogTitle id="form-dialog-title">{title} capacitación</DialogTitle>
				<DialogContent className={this.props.classes.grid}>
					<TextField
						margin="dense"
						name="name"
						label="Nombre de la certificacion"
						fullWidth
						onChange={this.setField}
						value={this.state.name}
						className={classes.gridComplete}
					/>

					<FormControl className={`${classes.formControl} ${classes.gridComplete}`}>
						<InputLabel htmlFor="userId">Capacitador</InputLabel>
						<Select
							value={this.state.userId}
							onChange={this.setField}
							inputProps={{
								name: 'userId',
								id: 'userId',
							}}
						>
							<MenuItem value=''></MenuItem>
						{ !!teachers.isLoading && (
							<MenuItem value=''>Cargando...</MenuItem>
						)}
						{ !teachers.isLoading && !teachers.payload.length && (
							<MenuItem value=''>No hay capacitadores</MenuItem>
						) }
						{ teachers.payload.map(item => (
							<MenuItem key={item._id} value={item._id}>{ item.name }</MenuItem>
						)) }
						</Select>
					</FormControl>

					<TextField
						margin="dense"
						name="cost"
						label="Inversión"
						fullWidth
						onChange={this.setField}
						value={this.state.cost}
						className={classes.gridComplete}
					/>
					<TextField
						margin="dense"
						name="place"
						label="Lugar de capacitación"
						multiline
						rows="2"
						fullWidth
						onChange={this.setField}
						value={this.state.place}
						className={classes.gridComplete}
					/>

					<div className={`${classes.gridComplete} ${classes.marginTop}`}>
						<InputLabel>Materiales</InputLabel>
						<div className={classes.paddingBottom} />
						<EditorOccertimm
							name="materials"
							value={this.state.materials}
							onChangePulse={this.onChangePulse}
						/>
					</div>
					<div className={`${classes.gridComplete} ${classes.marginTop}`}>
						<InputLabel>Contenido</InputLabel>
						<div className={classes.paddingBottom} />
						<EditorOccertimm
							name="content"
							value={this.state.content}
							onChangePulse={this.onChangePulse}
						/>
					</div>

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
							accept="image/*"
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
	teachers: state.users.teachers,
	edit: state.training.edit
})

const mapDispatchToProps = dispatch => ({
	fetchTeacher () {
		dispatch(usersAction.fetchTeacher('Capacitador'))
	},
	savedTrainig (payload) {
		dispatch(trainingAction.savedTrainig(payload))
	},
	updated(payload) {
		dispatch(trainingAction.updated(payload))
	},
	closeEdit() {
		dispatch(trainingAction.edit({}))
	}
})

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(Form))
