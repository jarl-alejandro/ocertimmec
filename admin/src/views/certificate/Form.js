import React, { PureComponent, createRef } from 'react'
import { connect } from 'react-redux'

import { withStyles } from '@material-ui/core/styles'

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
} from '@material-ui/core'
import RichTextEditor from 'react-rte'

import LinkedCamera from '@material-ui/icons/LinkedCamera'
import EditorOccertimm from '../../components/Editor'
import certificateAction from '../../actions/certificate.action'
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
})

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

class Form extends PureComponent {

	constructor (props) {
		super(props)

		this.state = initialState

		this.refRequeriment = createRef()

		this.setField = this.setField.bind(this)
		this.handlSaved = this.handlSaved.bind(this)
		this.handleCancel = this.handleCancel.bind(this)
		this.onChangePulse = this.onChangePulse.bind(this)
		this.uploadImage = this.uploadImage.bind(this)
	}

	componentDidMount () {
		this.props.fetchTeacher()
		const { edit } = this.props
		const { format } = this.state

		if (edit._id) {
			this.setState({
				nameCertificate: edit.name || '',
				userId: edit.id_user._id || '',
				cost: edit.cost || '',
				competition: RichTextEditor.createValueFromString(edit.competition || '', format),
				competitionUnits: RichTextEditor.createValueFromString(edit.competitionUnits || '', format),
				requirements: RichTextEditor.createValueFromString(edit.requirements || '', format),
				description: RichTextEditor.createValueFromString(edit.description || '', format),
				place: edit.place || '',
				note: RichTextEditor.createValueFromString(edit.note || '', format),
				uc: edit.uc || '',
				sector: edit.sector || '',
				squemaCode: edit.squemaCode || '',
				imagePreviewUrl: `${BASE_URL_MEDIA}${edit.photo}`,
			})
		}
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

	setField (e) {
		this.setState({ [e.target.name]: e.target.value })
	}

	handlSaved () {
		if (!this.props.edit._id) {
			this.props.savedCertificate(this.getForm())
		}
		else {
			this.props.updatedCertificate(this.getForm())
		}
		this.handleCancel()
	}

	handleCancel () {
		this.setState({ ...initialState })
		this.props.toggleForm()
		this.props.closeEdit()
	}

	getForm () {
		let object = {
			userId: this.state.userId,
			nameCertificate: this.state.nameCertificate,
			requirements: this.state.requirements.toString(this.state.format),
			competition: this.state.competition.toString(this.state.format),
			competitionUnits: this.state.competitionUnits.toString(this.state.format),
			description: this.state.description.toString(this.state.format),
			cost: this.state.cost,
			place: this.state.place,
			note: this.state.note.toString(this.state.format),
			uc: this.state.uc,
			sector: this.state.sector,
			squemaCode: this.state.squemaCode,
		}

		if (this.state.photo) {
			object.photo = this.state.photo.name.split(' ').join('')
			object.photoFile = this.state.photo
		}

		if (this.props.edit._id) {
			if (this.state.photo) {
				object.isPhoto = true
				// object.photo = this.props.edit.photo
				object.photo = this.state.photo.name.split(' ').join('')
				object.photoFile = this.state.photo
			}

			object.name = this.state.nameCertificate
			object.id = this.props.edit._id
		}

		return object
	}

	render () {
		const { classes, teachers, edit } = this.props
		const title = edit._id ? 'Editar' : 'Nueva'

		return (
			<Dialog
				open={this.props.isOpen}
				onClose={this.handleCancel}
				aria-labelledby="form-dialog-title"
			>
				<DialogTitle id="form-dialog-title">{title} Certificación</DialogTitle>
				<DialogContent className={this.props.classes.grid}>
					<TextField
						margin="dense"
						name="nameCertificate"
						label="Nombre de la certificacion"
						fullWidth
						onChange={this.setField}
						value={this.state.nameCertificate}
					/>

					<FormControl className={`${classes.formControl}`}>
						<InputLabel htmlFor="userId">Examinador</InputLabel>
						<Select
							value={this.state.userId}
							onChange={this.setField}
							inputProps={{
								name: 'userId',
								id: 'userId',
							}}
						>
						{ !!teachers.isLoading && (
							<MenuItem value=''>Cargando...</MenuItem>
						)}
						{ !teachers.isLoading && !teachers.payload.length && (
							<MenuItem value=''>No hay examinadores</MenuItem>
						) }
						{ teachers.payload.map(item => (
							<MenuItem key={item._id} value={item._id}>{ item.name }</MenuItem>
						)) }
						</Select>
					</FormControl>

					<FormControl className={`${classes.formControl}`}>
						<InputLabel htmlFor="squemaCode">Codigo de esquema</InputLabel>
						<Select
							value={this.state.squemaCode}
							onChange={this.setField}
							inputProps={{
								name: 'squemaCode',
								id: 'squemaCode',
							}}
						>
							<MenuItem value='ATS-PRL-201703'>ATS-PRL-201703 PREVENCIÓN EN RIESGOS LABORALES</MenuItem>
							<MenuItem value='ATS-ASI-201704'>ATS-ASI-201704 ASISTENCIA EN SEGURIDAD INDUSTRIAL</MenuItem>
							<MenuItem value='E-ADMABP-201709'>E-ADMABP-201709 ACTIVIDADES DE DOCENCIA EN METODOLOGIA DE APRENDIZAJE BASADO EN PROYECTOS ABP</MenuItem>
							<MenuItem value='AC-AAPRYD'>AC-AAPRYD ACTIVIDADES DE APOYO PARA LA PROMOSION EN RECREACION Y DEPORTES</MenuItem>
							<MenuItem value='ATS-GEV-201707'>ATS-GEV-201707 GESTION ESPECIALIZADA EN VENTAS</MenuItem>
							<MenuItem value='ATS-CYMRN-201709'>ATS-CYMRN-201709 CONSERVACION Y MANEJO DE RECURSOS NATURALES</MenuItem>
							<MenuItem value='VACP-MEV-201703'>VACP-MEV-201703 MANTENIMIENTO ELECTROMECANICO DE VEHICULOS</MenuItem>
							<MenuItem value='VACP-MA-201703'>VACP-MA-201703 MECATRONICA AUTOMOTRIZ</MenuItem>
							<MenuItem value='CYVP-ACE-201709'>CYVP-ASE-201709 ASISTENCIA EN COMERCIO EXTERIOR</MenuItem>
							<MenuItem value='VASP-RMMC-201703'>VASP-RMMC-201703 REPERACION, MONTAJE Y MODIFICACION DE CARROCERIAS</MenuItem>
							<MenuItem value='TYA-V-201607'>TYA-V-201607 VENTAS</MenuItem>
							<MenuItem value='SF-AC-201707'>SF-AC-201707 ASISTENCIA DE CONTABILIDAD</MenuItem>
							<MenuItem value='ATS-GA-201707'>ATS-GA-201707 GESTION ADMINISTRATIVA</MenuItem>

							<MenuItem value='AC-ADE-18-10-2017'>AC-ADE-18-10-2017 ACTIVIDADES PARA DEPORTES DE EQUIPOS</MenuItem>
							<MenuItem value='ATS-AD-201906'>ATS-AD-201906 ARBITRAJE DEPORTIVO EN FÚTBOL</MenuItem>
							<MenuItem value='ATS-ADI-201807-001'>ATS-ADI-201807-001 ASESORÍA DE IMAGEN</MenuItem>
							<MenuItem value='AC-C-201810-001'>AC-C-201810-001 COSMETOLOGÍA</MenuItem>
							<MenuItem value='AC-CS-201810-001'>AC-CS-201810-001 COSMIATRÍA</MenuItem>
							<MenuItem value='ATS-CDPAM-201902'>ATS-CDPAM-201902 CUIDADO DE PERSONAS ADULTAS MAYORES</MenuItem>
							<MenuItem value='ATS-M-201805-001'>ATS-M-201805-001 MAQUILLAJE</MenuItem>
							<MenuItem value='ATS-PRL-201901-001'>ATS-PRL-201901-001 PREVENCIÓN DE RIESGOS LABORALES: CONSTRUCCIÓN Y OBRAS PÚBLICAS</MenuItem>
							<MenuItem value='ATS-PRL-201901-002'>ATS-PRL-201901-002 PREVENCIÓN DE RIESGOS LABORALES: ENERGÍA ELÉCTRICA</MenuItem>

							<MenuItem value='E–AEEHYLCDPCD–201805–001'>E–AEEHYLCDPCD–201805–001 ATENCIÓN EN EL HOGAR Y LA COMUNIDAD DE PERSONAS CON DISCAPACIDAD</MenuItem>
						</Select>
					</FormControl>

					<TextField
						margin="dense"
						name="cost"
						label="inversión"
						fullWidth
						onChange={this.setField}
						value={this.state.cost}
					/>

					<div className={`${classes.gridComplete} ${classes.marginTop}`}>
						<InputLabel>Requisitos</InputLabel>
						<div className={classes.paddingBottom} />
						<EditorOccertimm
							value={this.state.requirements}
							name="requirements"
							onChangePulse={this.onChangePulse}
						/>
					</div>

					<div className={`${classes.gridComplete} ${classes.marginTop}`}>
						<InputLabel>Descripcion</InputLabel>
						<div className={classes.paddingBottom} />
						<EditorOccertimm
							value={this.state.description}
							name="description"
							onChangePulse={this.onChangePulse}
						/>
					</div>

					<div className={`${classes.gridComplete} ${classes.marginTop}`}>
						<InputLabel>Competición General</InputLabel>
						<div className={classes.paddingBottom} />
						<EditorOccertimm
							value={this.state.competition}
							name="competition"
							onChangePulse={this.onChangePulse}
						/>
					</div>

					<div className={`${classes.gridComplete} ${classes.marginTop}`}>
						<InputLabel>Unidades de competenica</InputLabel>
						<div className={classes.paddingBottom} />
						<EditorOccertimm
							value={this.state.competitionUnits}
							name="competitionUnits"
							onChangePulse={this.onChangePulse}
						/>
					</div>

					<TextField
						margin="dense"
						name="uc"
						label="Unidades de competenica"
						fullWidth
						onChange={this.setField}
						value={this.state.uc}
						className={classes.gridComplete}
					/>

					<TextField
						margin="dense"
						name="sector"
						label="Sector de la certificacion"
						fullWidth
						onChange={this.setField}
						value={this.state.sector}
						className={classes.gridComplete}
					/>
					<TextField
						margin="dense"
						name="place"
						label="Lugar de certificacion"
						multiline
						rows="2"
						fullWidth
						onChange={this.setField}
						value={this.state.place}
						className={classes.gridComplete}
					/>

					<div className={`${classes.gridComplete} ${classes.marginTop}`}>
						<InputLabel>Nota</InputLabel>
						<div className={classes.paddingBottom} />
						<EditorOccertimm
							name="note"
							value={this.state.note}
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
	edit: state.certificate.edit
})

const mapDispatchToProps = dispatch => ({
	fetchTeacher () {
		dispatch(usersAction.fetchTeacher('Examinador'))
	},
	savedCertificate (payload) {
		dispatch(certificateAction.savedCertificate(payload))
	},
	updatedCertificate (payload) {
		dispatch(certificateAction.updatedCertificate(payload))
	},
	closeEdit () {
		dispatch(certificateAction.edit({}))
	}
})

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(Form))
