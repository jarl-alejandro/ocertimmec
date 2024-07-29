import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import Select from '@mui/material/Select'
import FormControl from '@mui/material/FormControl'
import MenuItem from '@mui/material/MenuItem'
import InputLabel from '@mui/material/InputLabel'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import TextField from '@mui/material/TextField'
import LinkedCamera from '@mui/icons-material/LinkedCamera'
import { makeStyles } from '@mui/styles'
import usersAction from '../../actions/users.action'
import { BASE_URL_MEDIA } from '../../config'

const useStyles = makeStyles(theme => ({
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
		margin: theme.spacing(1),
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
}))

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

function Form(props) {
	const classes = useStyles()
	const [state, setState] = useState(initialState)

	useEffect(() => {
		const { edit } = props
		if (edit._id) {
			setState({
				...initialState,
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
	}, [props.edit])

	const setField = (e) => {
		setState(prevState => ({
			...prevState,
			[e.target.name]: e.target.value
		}))
	}

	const uploadImage = (e) => {
		const file = e.target.files[0]
		const reader = new FileReader()

		reader.onloadend = () => {
			setState(prevState => ({
				...prevState,
				photo: file,
				imagePreviewUrl: reader.result
			}))
		}

		if (file) {
			reader.readAsDataURL(file)
		}
	}

	const handleSave = () => {
		handleCancel()
		const formData = getForm()
		if (!props.edit._id) {
			props.savedUser(formData)
		} else {
			props.updated(formData)
		}
	}

	const handleCancel = () => {
		setState(initialState)
		props.toggleForm()
		props.closeEdit()
	}

	const getForm = () => {
		const object = {
			name: state.name,
			email: state.email,
			roles: state.roles,
			workExperience: state.workExperience,
			levelInstruction: state.levelInstruction,
			teachingExperience: state.teachingExperience,
			trainingProfile: state.trainingProfile,
			trainingPedagogy: state.trainingPedagogy,
			cedula: state.cedula
		}

		if (state.photo) {
			object.photo = state.photo.name.split(' ').join('')
			object.photoFile = state.photo
		}

		if (props.edit._id) {
			if (state.photo) {
				object.isPhoto = true
				object.photo = props.edit.photo
				object.photoFile = state.photo
			}
			object.id = props.edit._id
		}

		return object
	}

	const { edit, isOpen } = props
	const title = edit?._id ? 'Editar' : 'Nueva'

	return (
		<Dialog
			open={isOpen}
			onClose={handleCancel}
			aria-labelledby="form-dialog-title"
		>
			<DialogTitle id="form-dialog-title">{title} usuario</DialogTitle>
			<DialogContent className={classes.grid}>
				<TextField
					autoFocus
					margin="dense"
					name="name"
					label="Nombre"
					fullWidth
					onChange={setField}
					value={state.name}
					className={classes.gridComplete}
				/>
				<TextField
					margin="dense"
					name="email"
					label="E-mail"
					fullWidth
					onChange={setField}
					value={state.email}
				/>

				<FormControl className={classes.formControl}>
					<InputLabel htmlFor="roles">Roles</InputLabel>
					<Select
						value={state.roles}
						onChange={setField}
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

				{state.roles === 'Examinador' && (
					<TextField
						margin="dense"
						name="cedula"
						label="Cedula"
						fullWidth
						onChange={setField}
						value={state.cedula}
						className={classes.gridComplete}
					/>
				)}

				{state.roles === 'Capacitador' && (
					<>
						<TextField
							margin="dense"
							name="workExperience"
							label="Experiencia laboral al fin del perfil"
							fullWidth
							onChange={setField}
							value={state.workExperience}
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
							onChange={setField}
							value={state.levelInstruction}
							className={classes.gridComplete}
						/>
						<TextField
							margin="dense"
							name="teachingExperience"
							label="Experiencia en docencia"
							multiline
							rows="3"
							fullWidth
							onChange={setField}
							value={state.teachingExperience}
							className={classes.gridComplete}
						/>
						<TextField
							margin="dense"
							name="trainingProfile"
							label="Capacitación al fin del perfil"
							multiline
							rows="3"
							fullWidth
							onChange={setField}
							value={state.trainingProfile}
							className={classes.gridComplete}
						/>
						<TextField
							margin="dense"
							name="trainingPedagogy"
							label="Capacitación en pedagogia"
							multiline
							rows="3"
							fullWidth
							onChange={setField}
							value={state.trainingPedagogy}
							className={classes.gridComplete}
						/>
					</>
				)}
				<div className={`flex flex-center flex-center-y flex-wrap ${classes.gridComplete}`}>
					<Avatar
						alt={state.name}
						src={state.imagePreviewUrl}
						className={classes.bigAvatar}
					/>
					<input
						id="photo-user"
						type="file"
						className="none"
						onChange={uploadImage}
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
				<Button color="primary" onClick={handleCancel}>Cancelar</Button>
				<Button color="primary" onClick={handleSave}>Guardar</Button>
			</DialogActions>
		</Dialog>
	)
}

const mapStateToProps = state => ({
	edit: state.users.edit
})

const mapDispatchToProps = dispatch => ({
	savedUser(payload) {
		dispatch(usersAction.savedUser(payload))
	},
	updated(payload) {
		dispatch(usersAction.updated(payload))
	},
	closeEdit() {
		dispatch(usersAction.edit({}))
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(Form)
