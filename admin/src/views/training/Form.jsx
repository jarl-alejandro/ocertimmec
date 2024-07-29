import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
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
} from '@mui/material'
import LinkedCamera from '@mui/icons-material/LinkedCamera'
import { makeStyles } from '@mui/styles'
import RichTextEditor from 'react-rte'
import EditorOccertimm from '../../components/Editor'
import trainingAction from '../../actions/training.action'
import usersAction from '../../actions/users.action'
import { BASE_URL_MEDIA } from '../../config'

// Define styles with makeStyles
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
	marginTop: {
		marginTop: 16
	},
	formControl: {
		margin: theme.spacing(1),
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
}))

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

const Form = ({ isOpen, toggleForm, edit }) => {
	const classes = useStyles()
	const dispatch = useDispatch()
	const teachers = useSelector(state => state.users.teachers)
	const [formState, setFormState] = useState(initialState)

	useEffect(() => {
		dispatch(usersAction.fetchTeacher('Capacitador'))

		if (edit?._id) {
			setFormState({
				name: edit.name || '',
				userId: edit.id_user._id || '',
				cost: edit.cost || '',
				materials: RichTextEditor.createValueFromString(edit.materials || '', formState.format),
				content: RichTextEditor.createValueFromString(edit.content || '', formState.format),
				place: edit.place || '',
				imagePreviewUrl: `${BASE_URL_MEDIA}${edit.photo}`,
				photo: '',
				isPhoto: false
			})
		}
	}, [dispatch, edit, formState.format])

	const setField = e => {
		setFormState({ ...formState, [e.target.name]: e.target.value })
	}

	const uploadImage = e => {
		const file = e.target.files[0]
		const reader = new FileReader()

		reader.onloadend = () => {
			setFormState({
				...formState,
				photo: file,
				imagePreviewUrl: reader.result
			})
		}

		reader.readAsDataURL(file)
	}

	const onChangePulse = (name, value) => {
		setFormState({ ...formState, [name]: value })
	}

	const handleSave = () => {
		const form = getForm()
		if (!edit._id) {
			dispatch(trainingAction.savedTrainig(form));
		} else {
			dispatch(trainingAction.updated(form));
		}
		handleCancel()
	}

	const handleCancel = () => {
		dispatch(usersAction.fetchTeacher('Capacitador'))
		setFormState({ ...initialState })
		toggleForm()
	}

	const getForm = () => {
		const form = {
			name: formState.name,
			userId: formState.userId,
			materials: formState.materials.toString(formState.format),
			place: formState.place,
			content: formState.content.toString(formState.format),
			cost: formState.cost,
		}

		if (formState.photo) {
			form.photo = formState.photo.name.split(' ').join('')
			form.photoFile = formState.photo
		}

		if (edit?._id) {
			if (formState.photo) {
				form.isPhoto = true
				form.photo = edit.photo
				form.photoFile = formState.photo
			}

			form.id = edit._id
		}

		return form
	}

	const title = edit?._id ? 'Editar' : 'Nueva'

	return (
		<Dialog
			open={isOpen}
			onClose={handleCancel}
			aria-labelledby="form-dialog-title"
		>
			<DialogTitle id="form-dialog-title">{title} capacitación</DialogTitle>
			<DialogContent className={classes.grid}>
				<TextField
					margin="dense"
					name="name"
					label="Nombre de la certificacion"
					fullWidth
					onChange={setField}
					value={formState.name}
					className={classes.gridComplete}
				/>

				<FormControl className={`${classes.formControl} ${classes.gridComplete}`}>
					<InputLabel htmlFor="userId">Capacitador</InputLabel>
					<Select
						value={formState.userId}
						onChange={setField}
						inputProps={{
							name: 'userId',
							id: 'userId',
						}}
					>
						<MenuItem value=''></MenuItem>
						{teachers.isLoading && (
							<MenuItem value=''>Cargando...</MenuItem>
						)}
						{!teachers.isLoading && !teachers.payload.length && (
							<MenuItem value=''>No hay capacitadores</MenuItem>
						)}
						{teachers.payload.map(item => (
							<MenuItem key={item._id} value={item._id}>{item.name}</MenuItem>
						))}
					</Select>
				</FormControl>

				<TextField
					margin="dense"
					name="cost"
					label="Inversión"
					fullWidth
					onChange={setField}
					value={formState.cost}
					className={classes.gridComplete}
				/>
				<TextField
					margin="dense"
					name="place"
					label="Lugar de capacitación"
					multiline
					rows="2"
					fullWidth
					onChange={setField}
					value={formState.place}
					className={classes.gridComplete}
				/>

				<div className={`${classes.gridComplete} ${classes.marginTop}`}>
					<InputLabel>Materiales</InputLabel>
					<div className={classes.paddingBottom} />
					<EditorOccertimm
						name="materials"
						value={formState.materials}
						onChangePulse={onChangePulse}
					/>
				</div>
				<div className={`${classes.gridComplete} ${classes.marginTop}`}>
					<InputLabel>Contenido</InputLabel>
					<div className={classes.paddingBottom} />
					<EditorOccertimm
						name="content"
						value={formState.content}
						onChangePulse={onChangePulse}
					/>
				</div>

				<div className={`flex flex-center flex-center-y flex-wrap ${classes.gridComplete}`}>
					<Avatar
						alt={formState.name}
						src={formState.imagePreviewUrl}
						className={classes.bigAvatar}
					/>
					<input
						id="photo-user"
						type="file"
						className="none"
						accept="image/*"
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


export default Form
