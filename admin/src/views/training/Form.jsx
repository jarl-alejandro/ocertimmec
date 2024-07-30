import React, { useState, useEffect } from 'react';
import {
	Avatar,
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	FormControl,
	IconButton,
	InputLabel,
	MenuItem,
	Select,
	TextField,
} from '@mui/material';
import { makeStyles } from '@mui/styles';

import { useDispatch, useSelector } from 'react-redux';
import { BASE_URL_MEDIA } from '../../config';
import EditorOccertimm from '../../components/EditorOccertimm';
import LinkedCamera from '@mui/icons-material/LinkedCamera';

import trainingAction from '../../actions/training.action';
import usersAction from '../../actions/users.action';

const useStyles = makeStyles((theme) => ({
	grid: {
		display: 'grid',
		gridTemplateColumns: 'repeat(2, 1fr)',
		gridGap: '0 15px',
		'@media (max-width: 640px)': {
			display: 'block',
			'& > div': {
				width: '100%',
			},
		},
	},
	gridComplete: {
		gridColumn: '2 span',
	},
	marginTop: {
		marginTop: 16,
	},
	formControl: {
		minWidth: 120,
		marginBlock: '1rem !important'
	},
	paddingBottom: {
		paddingBottom: 10,
	},
	label: {
		cursor: 'pointer',
	},
	bigAvatar: {
		width: 160,
		height: 100,
		margin: 7,
		borderRadius: 0,
	},
}));

const initialState = {
	name: '',
	imagePreviewUrl: '',
	photo: '',
	userId: '',
	materials: '',
	content: '',
	place: '',
	cost: '',
	isPhoto: false,
	format: 'html',
};

const Form = ({ isOpen, toggleForm }) => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const { teachers, edit } = useSelector((state) => ({
		teachers: state.users.teachers,
		edit: state.training.edit,
	}));

	const [state, setState] = useState(initialState);

	useEffect(() => {
		dispatch(usersAction.fetchTeacher('Capacitador'));

		if (edit._id) {
			setState({
				name: edit.name || '',
				userId: edit.id_user._id || '',
				cost: edit.cost || '',
				materials: edit.materials || '',
				content: edit.content || '',
				place: edit.place || '',
				imagePreviewUrl: `${BASE_URL_MEDIA}${edit.photo}`,
			});
		}
	}, [dispatch, edit]);

	const setField = (e) => {
		setState({ ...state, [e.target.name]: e.target.value });
	};

	const uploadImage = (e) => {
		let reader = new FileReader();
		let file = e.target.files[0];

		reader.onloadend = () => {
			setState({
				...state,
				photo: file,
				imagePreviewUrl: reader.result,
			});
		};

		reader.readAsDataURL(file);
	};

	const onChangePulse = (name, value) => {
		setState({ ...state, [name]: value });
	};

	const handleSaved = () => {
		if (!edit._id) {
			dispatch(trainingAction.savedTrainig(getForm()));
		} else {
			dispatch(trainingAction.updated(getForm()));
		}
		handleCancel();
	};

	const handleCancel = () => {
		dispatch(trainingAction.edit({}));
		setState({ ...initialState });
		toggleForm();
	};

	const getForm = () => {
		let object = {
			name: state.name,
			userId: state.userId,
			materials: state.materials.toString(state.format),
			place: state.place,
			content: state.content.toString(state.format),
			cost: state.cost,
		};

		if (state.photo) {
			object.photo = state.photo.name.split(' ').join('');
			object.photoFile = state.photo;
		}

		if (edit._id) {
			if (state.photo) {
				object.isPhoto = true;
				object.photo = edit.photo;
				object.photoFile = state.photo;
			}

			object.id = edit._id;
		}

		return object;
	};

	const title = edit._id ? 'Editar' : 'Nueva';

	return (
		<Dialog open={isOpen} onClose={handleCancel} aria-labelledby="form-dialog-title">
			<DialogTitle id="form-dialog-title">{title} capacitación</DialogTitle>
			<DialogContent className={classes.grid}>
				<TextField
					margin="dense"
					name="name"
					label="Nombre de la certificacion"
					fullWidth
					onChange={setField}
					value={state.name}
					className={classes.gridComplete}
				/>

				<FormControl fullWidth className={`${classes.formControl} ${classes.gridComplete}`}>
					<InputLabel id="userId">Capacitador</InputLabel>
					<Select
						labelId="userId"
						label="Capacitador"
						value={state.userId}
						onChange={setField}
						inputProps={{
							name: 'userId',
							id: 'userId',
						}}
					>
						<MenuItem value=""></MenuItem>
						{!!teachers.isLoading && <MenuItem value="">Cargando...</MenuItem>}
						{!teachers.isLoading && !teachers.payload.length && (
							<MenuItem value="">No hay capacitadores</MenuItem>
						)}
						{teachers.payload.map((item) => (
							<MenuItem key={item._id} value={item._id}>
								{item.name}
							</MenuItem>
						))}
					</Select>
				</FormControl>

				<TextField
					margin="dense"
					name="cost"
					label="Inversión"
					fullWidth
					onChange={setField}
					value={state.cost}
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
					value={state.place}
					className={classes.gridComplete}
				/>

				<div className={`${classes.gridComplete} ${classes.marginTop}`}>
					<InputLabel>Materiales</InputLabel>
					<div className={classes.paddingBottom} />
					<EditorOccertimm
						name="materials"
						value={state.materials}
						onChangePulse={onChangePulse}
					/>
				</div>
				<div className={`${classes.gridComplete} ${classes.marginTop}`}>
					<InputLabel>Contenido</InputLabel>
					<div className={classes.paddingBottom} />
					<EditorOccertimm
						name="content"
						value={state.content}
						onChangePulse={onChangePulse}
					/>
				</div>

				<div className={`flex flex-center flex-center-y flex-wrap ${classes.gridComplete}`}>
					<Avatar alt={state.name} src={state.imagePreviewUrl} className={classes.bigAvatar} />
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
				<Button color="primary" onClick={handleCancel}>
					Cancelar
				</Button>
				<Button color="primary" onClick={handleSaved}>
					Guardar
				</Button>
			</DialogActions>
		</Dialog>
	);
};

export default Form;
