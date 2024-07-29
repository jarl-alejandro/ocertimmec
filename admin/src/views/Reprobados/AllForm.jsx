import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import actions from '../../actions/student.action';

const styles = {
	content: {
		display: 'grid',
		gridTemplateColumns: 'repeat(2, 1fr)',
		gridGap: '10px',
	}
};

const AllForm = ({ isActive, closeAllForm, row }) => {
	const dispatch = useDispatch();

	const [formState, setFormState] = useState({
		code: '',
		placeCertificate: '',
		date: '',
		hour: '',
		nota: '',
	});

	const setField = (e) => {
		const { name, value } = e.target;
		setFormState(prevState => ({
			...prevState,
			[name]: value
		}));
	};

	const handleCancel = () => {
		setFormState({
			code: '',
			placeCertificate: '',
			date: '',
			hour: '',
			nota: '',
		});
		closeAllForm();
	};

	const handleSaved = () => {
		const object = {
			...formState,
			id: row._id
		};
		dispatch(actions.finishRegister(object));
		handleCancel();
	};

	return (
		<Dialog
			open={isActive}
			onClose={handleCancel}
			aria-labelledby="form-dialog-title"
		>
			<DialogTitle id="form-dialog-title">Registro</DialogTitle>
			<DialogContent sx={styles.content}>
				<TextField
					label="Codigo de certificacion"
					name="code"
					value={formState.code}
					onChange={setField}
				/>
				<TextField
					label="Lugar de la certificacion"
					name="placeCertificate"
					value={formState.placeCertificate}
					onChange={setField}
				/>
				<TextField
					label="Fecha de certificacion"
					name="date"
					type="date"
					value={formState.date}
					onChange={setField}
					InputLabelProps={{ shrink: true }}
				/>
				<TextField
					label="Hora de certificacion"
					name="hour"
					type="time"
					value={formState.hour}
					onChange={setField}
					InputLabelProps={{ shrink: true }}
				/>
				<TextField
					label="Nota de la certificacion"
					name="nota"
					type="number"
					value={formState.nota}
					onChange={setField}
					InputLabelProps={{ shrink: true }}
				/>
			</DialogContent>
			<DialogActions>
				<Button color="primary" onClick={handleCancel}>Cancelar</Button>
				<Button color="primary" onClick={handleSaved}>Guardar</Button>
			</DialogActions>
		</Dialog>
	);
};

export default AllForm;
