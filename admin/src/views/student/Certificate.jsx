import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { makeStyles } from '@mui/styles';
import actions from '../../actions/student.action';

const useStyles = makeStyles((theme) => ({
	content: {
		display: 'grid',
		gridTemplateColumns: 'repeat(2, 1fr)',
		gridGap: '10px',
	},
}));

const Certificate = ({ isActive, row, closeCertificate }) => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const [state, setState] = useState({
		codeSetec: '',
		dateExpedicion: '',
	});

	const handleChecked = (e) => {
		setState((prevState) => ({ ...prevState, isChecked: e.target.checked }));
	};

	const setField = (e) => {
		const { name, value } = e.target;
		setState((prevState) => ({ ...prevState, [name]: value }));
	};

	const handleCancel = () => {
		setState({
			codeSetec: '',
			dateExpedicion: '',
		});
		closeCertificate();
	};

	const handleSave = () => {
		let dateExpiracion = new Date(state.dateExpedicion);
		dateExpiracion.setDate(dateExpiracion.getDate() + 5);

		const object = {
			...state,
			id: row._id,
			dateExpiracion,
		};
		dispatch(actions.onCertificado(object));
		handleCancel();
	};

	return (
		<Dialog open={isActive} onClose={handleCancel} aria-labelledby="form-dialog-title">
			<DialogTitle id="form-dialog-title">Registro</DialogTitle>
			<DialogContent className={classes.content}>
				<TextField
					label="Codigo de certificacion"
					name="codeSetec"
					value={state.codeSetec}
					onChange={setField}
				/>
				<TextField
					label="Fecha de certificacion"
					name="dateExpedicion"
					type="date"
					value={state.dateExpedicion}
					onChange={setField}
					InputLabelProps={{ shrink: true }}
				/>
			</DialogContent>
			<DialogActions>
				<Button color="primary" onClick={handleCancel}>Cancelar</Button>
				<Button color="primary" onClick={handleSave}>Guardar</Button>
			</DialogActions>
		</Dialog>
	);
};

export default Certificate;
