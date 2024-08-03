import React, { useState, useEffect } from 'react'
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
import EditorOccertimm from '../../components/EditorOccertimm.jsx'
import certificateAction from '../../actions/certificate.action'
import usersAction from '../../actions/users.action'
import { BASE_URL_MEDIA } from '../../config'
import ListManager from "./ListManager.jsx";

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
	gridThree: {
		display: 'grid',
		gap: '1rem',
		gridTemplateColumns: 'repeat(3, 1fr)',
	},
	gridComplete: {
		gridColumn: '2 span'
	},
	formControl: {
		minWidth: 120,
		marginBlock: '1rem !important'
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
	video: '',
	nameCertificate: '',
	userId: '',
	cost: '',
	competition: '',
	competitionUnits: '',
	requirements: '',
	description: '',
	place: '',
	note: '',
	uc: '',
	sector: '',
	squemaCode: '',
	imagePreviewUrl: '',
	photo: '',
	isPhoto: false,
	format: 'html',

	materials: [],
	equipments: [],
	tools: [],
}

function Form({ isOpen, toggleForm }) {
	const classes = useStyles()
	const dispatch = useDispatch()
	const { teachers, edit } = useSelector((state) => ({
		teachers: state.users.teachers,
		edit: state.certificate.edit,
	}));
	const [state, setState] = useState(initialState)

	useEffect(() => {
		dispatch(usersAction.fetchTeacher('Examinador'))

		if (edit?._id) {
			setState(prevState => ({
				...prevState,
				nameCertificate: edit.name || '',
				userId: edit.id_user._id || '',
				cost: edit.cost || '',
				competition: edit.competition || '',
				competitionUnits: edit.competitionUnits || '',
				requirements: edit.requirements || '',
				description: edit.description || '',
				place: edit.place || '',
				note: edit.note || '',
				uc: edit.uc || '',
				sector: edit.sector || '',
				video: edit.video || '',
				squemaCode: edit.squemaCode || '',
				imagePreviewUrl: `${BASE_URL_MEDIA}${edit.photo}`,
				materials: edit?.materials || [],
				equipments: edit?.equipments || [],
				tools: edit?.tools || [],
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
		dispatch(certificateAction.edit({}));
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
			video: state.video,
			materials: state.materials,
			equipments: state.equipments,
			tools: state.tools,
		}

		if (state.photo) {
			formObject.photo = state.photo.name.split(' ').join('')
			formObject.photoFile = state.photo
		}

		if (edit?._id) {
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

	const setMaterials = (materials) => {
		setState(prevState => ({ ...prevState, materials }));
	};

	const setEquipments = (equipments) => {
		setState(prevState => ({ ...prevState, equipments }));
	};

	const setTools = (tools) => {
		setState(prevState => ({ ...prevState, tools }));
	};

	const title = edit?._id ? 'Editar' : 'Nueva'

	return (
		<Dialog
			fullWidth={true}
			maxWidth="md"
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
					<InputLabel id="userId">Examinador</InputLabel>
					<Select
						labelId="userId"
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
					<InputLabel id="squemaCode">Codigo de esquema</InputLabel>
					<Select
						labelId="squemaCode"
						value={state.squemaCode}
						onChange={setField}
						inputProps={{
							name: 'squemaCode',
							id: 'squemaCode',
						}}
					>
						<MenuItem value='ATS-PRL-201703'>ATS-PRL-201703 PREVENCIÓN EN RIESGOS LABORALES</MenuItem>
						<MenuItem value='ATS-ASI-201704'>ATS-ASI-201704 ASISTENCIA EN SEGURIDAD INDUSTRIAL</MenuItem>
						<MenuItem value='E-ADMABP-201709'>E-ADMABP-201709 ACTIVIDADES DE DOCENCIA EN METODOLOGIA DE
							APRENDIZAJE BASADO EN PROYECTOS ABP</MenuItem>
						<MenuItem value='AC-AAPRYD'>AC-AAPRYD ACTIVIDADES DE APOYO PARA LA PROMOSION EN RECREACION Y
							DEPORTES</MenuItem>
						<MenuItem value='ATS-GEV-201707'>ATS-GEV-201707 GESTION ESPECIALIZADA EN VENTAS</MenuItem>
						<MenuItem value='ATS-CYMRN-201709'>ATS-CYMRN-201709 CONSERVACION Y MANEJO DE RECURSOS
							NATURALES</MenuItem>
						<MenuItem value='VACP-MEV-201703'>VACP-MEV-201703 MANTENIMIENTO ELECTROMECANICO DE
							VEHICULOS</MenuItem>
						<MenuItem value='VACP-MA-201703'>VACP-MA-201703 MECATRONICA AUTOMOTRIZ</MenuItem>
						<MenuItem value='CYVP-ACE-201709'>CYVP-ASE-201709 ASISTENCIA EN COMERCIO EXTERIOR</MenuItem>
						<MenuItem value='VASP-RMMC-201703'>VASP-RMMC-201703 REPERACION, MONTAJE Y MODIFICACION DE
							CARROCERIAS</MenuItem>
						<MenuItem value='TYA-V-201607'>TYA-V-201607 VENTAS</MenuItem>
						<MenuItem value='SF-AC-201707'>SF-AC-201707 ASISTENCIA DE CONTABILIDAD</MenuItem>
						<MenuItem value='ATS-GA-201707'>ATS-GA-201707 GESTION ADMINISTRATIVA</MenuItem>

						<MenuItem value='AC-ADE-18-10-2017'>AC-ADE-18-10-2017 ACTIVIDADES PARA DEPORTES DE
							EQUIPOS</MenuItem>
						<MenuItem value='ATS-AD-201906'>ATS-AD-201906 ARBITRAJE DEPORTIVO EN FÚTBOL</MenuItem>
						<MenuItem value='ATS-ADI-201807-001'>ATS-ADI-201807-001 ASESORÍA DE IMAGEN</MenuItem>
						<MenuItem value='AC-C-201810-001'>AC-C-201810-001 COSMETOLOGÍA</MenuItem>
						<MenuItem value='AC-CS-201810-001'>AC-CS-201810-001 COSMIATRÍA</MenuItem>
						<MenuItem value='ATS-CDPAM-201902'>ATS-CDPAM-201902 CUIDADO DE PERSONAS ADULTAS
							MAYORES</MenuItem>
						<MenuItem value='ATS-M-201805-001'>ATS-M-201805-001 MAQUILLAJE</MenuItem>
						<MenuItem value='ATS-PRL-201901-001'>ATS-PRL-201901-001 PREVENCIÓN DE RIESGOS LABORALES:
							CONSTRUCCIÓN Y OBRAS PÚBLICAS</MenuItem>
						<MenuItem value='ATS-PRL-201901-002'>ATS-PRL-201901-002 PREVENCIÓN DE RIESGOS LABORALES: ENERGÍA
							ELÉCTRICA</MenuItem>

						<MenuItem value='E–AEEHYLCDPCD–201805–001'>E–AEEHYLCDPCD–201805–001 ATENCIÓN EN EL HOGAR Y LA
							COMUNIDAD DE PERSONAS CON DISCAPACIDAD</MenuItem>
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
					<div className={classes.paddingBottom}/>
					<EditorOccertimm
						value={state.requirements}
						name="requirements"
						onChangePulse={onChangePulse}
					/>
				</div>

				<div className={`${classes.gridComplete} ${classes.marginTop}`}>
					<InputLabel>Descripcion</InputLabel>
					<div className={classes.paddingBottom}/>
					<EditorOccertimm
						value={state.description}
						name="description"
						onChangePulse={onChangePulse}
					/>
				</div>

				<div className={`${classes.gridComplete} ${classes.marginTop}`}>
					<InputLabel>Competición General</InputLabel>
					<div className={classes.paddingBottom}/>
					<EditorOccertimm
						value={state.competition}
						name="competition"
						onChangePulse={onChangePulse}
					/>
				</div>

				<div className={`${classes.gridComplete} ${classes.marginTop}`}>
					<InputLabel>Unidades de competenica</InputLabel>
					<div className={classes.paddingBottom}/>
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
				<TextField
					margin="dense"
					name="video"
					label="Video promocional"
					fullWidth
					onChange={setField}
					value={state.video}
					className={classes.gridComplete}
				/>

				<div className={`${classes.gridComplete} ${classes.marginTop}`}>
					<InputLabel>Nota</InputLabel>
					<div className={classes.paddingBottom}/>
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
								<LinkedCamera/>
							</label>
						</IconButton>
					</div>
				</div>

				<div className={`${classes.gridComplete} ${classes.gridThree}`}>
					<ListManager
						items={state.materials}
						setItems={setMaterials}
						label="Material"
					/>
					<ListManager
						items={state.equipments}
						setItems={setEquipments}
						label="Equipo"
					/>
					<ListManager
						items={state.tools}
						setItems={setTools}
						label="Herramienta"
					/>
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
