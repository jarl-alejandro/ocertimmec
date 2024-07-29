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

const Certificate = ({ isActive, closeCertificate, row }) => {
	const dispatch = useDispatch();
	const [formState, setFormState] = useState({
		codeSetec: '',
		dateExpedicion: '',
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
			codeSetec: '',
			dateExpedicion: '',
		});
		closeCertificate();
	};

	const handleSaved = () => {
		let dateExpiracion = new Date(formState.dateExpedicion);
		dateExpiracion.setDate(dateExpiracion.getDate() + 5);

		const object = {
			...formState,
			id: row._id,
			dateExpiracion,
		};
		dispatch(actions.onCertificado(object));
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
					name="codeSetec"
					value={formState.codeSetec}
					onChange={setField}
				/>
				<TextField
					label="Fecha de certificacion"
					name="dateExpedicion"
					type="date"
					value={formState.dateExpedicion}
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

export default Certificate;
