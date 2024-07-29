import React, { useState, useEffect, createRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
	IconButton,
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
} from '@mui/material'
import LinkedCamera from '@mui/icons-material/LinkedCamera'
import { makeStyles } from '@mui/styles'
import RichTextEditor from 'react-rte'
import EditorOccertimm from '../../components/Editor'
import certificateAction from '../../actions/certificate.action'
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
	formControl: {
		margin: theme.spacing(1),
		minWidth: 120,
	},
	marginTop: {
		marginTop: 16
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
	nameCertificate: '',
	userId: '',
	cost: '',
	competition: RichTextEditor.createEmptyValue(),
	competitionUnits: RichTextEditor.createEmptyValue(),
	requirements: RichTextEditor.createEmptyValue(),
	description: RichTextEditor.createEmptyValue(),
	place: '',
	note: RichTextEditor.createEmptyValue(),
	uc: '',
	sector: '',
	squemaCode: '',
	imagePreviewUrl: '',
	photo: '',
	isPhoto: false,
	format: 'html',
}

function Form({ isOpen, toggleForm, closeEdit, edit }) {
	const classes = useStyles()
	const dispatch = useDispatch()
	const teachers = useSelector(state => state.users.teachers)

	const [state, setState] = useState(initialState)
	const refRequeriment = createRef()

	useEffect(() => {
		dispatch(usersAction.fetchTeacher('Examinador'))

		if (edit._id) {
			setState(prevState => ({
				...prevState,
				nameCertificate: edit.name || '',
				userId: edit.id_user._id || '',
				cost: edit.cost || '',
				competition: RichTextEditor.createValueFromString(edit.competition || '', state.format),
				competitionUnits: RichTextEditor.createValueFromString(edit.competitionUnits || '', state.format),
				requirements: RichTextEditor.createValueFromString(edit.requirements || '', state.format),
				description: RichTextEditor.createValueFromString(edit.description || '', state.format),
				place: edit.place || '',
				note: RichTextEditor.createValueFromString(edit.note || '', state.format),
				uc: edit.uc || '',
				sector: edit.sector || '',
				squemaCode: edit.squemaCode || '',
				imagePreviewUrl: `${BASE_URL_MEDIA}${edit.photo}`,
			}))
		}
	}, [dispatch, edit, state.format])

	const uploadImage = e => {
		const reader = new FileReader()
		const file = e.target.files[0]

		reader.onloadend = () => {
			setState(prevState => ({
				...prevState,
				photo: file,
				imagePreviewUrl: reader.result
			}))
		}

		reader.readAsDataURL(file)
	}

	const onChangePulse = (name, value) => {
		setState(prevState => ({ ...prevState, [name]: value }))
	}

	const setField = e => {
		setState(prevState => ({ ...prevState, [e.target.name]: e.target.value }))
	}

	const handleSaved = () => {
		if (!edit._id) {
			dispatch(certificateAction.savedCertificate(getForm()))
		} else {
			dispatch(certificateAction.updatedCertificate(getForm()))
		}
		handleCancel()
	}

	const handleCancel = () => {
		setState(initialState)
		toggleForm()
		closeEdit()
	}

	const getForm = () => {
		const formObject = {
			userId: state.userId,
			nameCertificate: state.nameCertificate,
			requirements: state.requirements.toString(state.format),
			competition: state.competition.toString(state.format),
			competitionUnits: state.competitionUnits.toString(state.format),
			description: state.description.toString(state.format),
			cost: state.cost,
			place: state.place,
			note: state.note.toString(state.format),
			uc: state.uc,
			sector: state.sector,
			squemaCode: state.squemaCode,
		}

		if (state.photo) {
			formObject.photo = state.photo.name.split(' ').join('')
			formObject.photoFile = state.photo
		}

		if (edit._id) {
			if (state.photo) {
				formObject.isPhoto = true
				formObject.photo = state.photo.name.split(' ').join('')
				formObject.photoFile = state.photo
			}

			formObject.name = state.nameCertificate
			formObject.id = edit._id
		}

		return formObject
	}

	const title = edit?._id ? 'Editar' : 'Nueva'

	return (
		<Dialog
			open={isOpen}
			onClose={handleCancel}
			aria-labelledby="form-dialog-title"
		>
			<DialogTitle id="form-dialog-title">{title} Certificación</DialogTitle>
			<DialogContent className={classes.grid}>
				<TextField
					margin="dense"
					name="nameCertificate"
					label="Nombre de la certificacion"
					fullWidth
					onChange={setField}
					value={state.nameCertificate}
				/>

				<FormControl className={classes.formControl}>
					<InputLabel htmlFor="userId">Examinador</InputLabel>
					<Select
						value={state.userId}
						onChange={setField}
						inputProps={{
							name: 'userId',
							id: 'userId',
						}}
					>
						{teachers.isLoading ? (
							<MenuItem value=''>Cargando...</MenuItem>
						) : !teachers.payload.length ? (
							<MenuItem value=''>No hay examinadores</MenuItem>
						) : (
							teachers.payload.map(item => (
								<MenuItem key={item._id} value={item._id}>{item.name}</MenuItem>
							))
						)}
					</Select>
				</FormControl>

				<FormControl className={classes.formControl}>
					<InputLabel htmlFor="squemaCode">Codigo de esquema</InputLabel>
					<Select
						value={state.squemaCode}
						onChange={setField}
						inputProps={{
							name: 'squemaCode',
							id: 'squemaCode',
						}}
					>
						<MenuItem value='ATS-PRL-201703'>ATS-PRL-201703 PREVENCIÓN EN RIESGOS LABORALES</MenuItem>
						<MenuItem value='ATS-ASI-201704'>ATS-ASI-201704 ASISTENCIA EN SEGURIDAD INDUSTRIAL</MenuItem>
						{/* Other MenuItems */}
					</Select>
				</FormControl>

				<TextField
					margin="dense"
					name="cost"
					label="inversión"
					fullWidth
					onChange={setField}
					value={state.cost}
				/>

				<div className={`${classes.gridComplete} ${classes.marginTop}`}>
					<InputLabel>Requisitos</InputLabel>
					<div className={classes.paddingBottom} />
					<EditorOccertimm
						value={state.requirements}
						name="requirements"
						onChangePulse={onChangePulse}
					/>
				</div>

				<div className={`${classes.gridComplete} ${classes.marginTop}`}>
					<InputLabel>Descripcion</InputLabel>
					<div className={classes.paddingBottom} />
					<EditorOccertimm
						value={state.description}
						name="description"
						onChangePulse={onChangePulse}
					/>
				</div>

				<div className={`${classes.gridComplete} ${classes.marginTop}`}>
					<InputLabel>Competición General</InputLabel>
					<div className={classes.paddingBottom} />
					<EditorOccertimm
						value={state.competition}
						name="competition"
						onChangePulse={onChangePulse}
					/>
				</div>

				<div className={`${classes.gridComplete} ${classes.marginTop}`}>
					<InputLabel>Unidades de competenica</InputLabel>
					<div className={classes.paddingBottom} />
					<EditorOccertimm
						value={state.competitionUnits}
						name="competitionUnits"
						onChangePulse={onChangePulse}
					/>
				</div>

				<TextField
					margin="dense"
					name="uc"
					label="Unidades de competenica"
					fullWidth
					onChange={setField}
					value={state.uc}
					className={classes.gridComplete}
				/>

				<TextField
					margin="dense"
					name="sector"
					label="Sector de la certificacion"
					fullWidth
					onChange={setField}
					value={state.sector}
					className={classes.gridComplete}
				/>
				<TextField
					margin="dense"
					name="place"
					label="Lugar de certificacion"
					multiline
					rows="2"
					fullWidth
					onChange={setField}
					value={state.place}
					className={classes.gridComplete}
				/>

				<div className={`${classes.gridComplete} ${classes.marginTop}`}>
					<InputLabel>Nota</InputLabel>
					<div className={classes.paddingBottom} />
					<EditorOccertimm
						name="note"
						value={state.note}
						onChangePulse={onChangePulse}
					/>
				</div>

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
				<Button color="primary" onClick={handleSaved}>Guardar</Button>
			</DialogActions>
		</Dialog>
	)
}

export default Form
