import React, { useState, useEffect } from 'react';
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

const AllForm = ({ isActive, closeAllForm, row, isEditRow }) => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const [formState, setFormState] = useState({
		code: '',
		placeCertificate: '',
		date: '',
		hour: '',
		nota: '',
	});

	useEffect(() => {
		if (isEditRow && row) {
			setFormState({
				code: row.codigoCertificado,
				placeCertificate: row.placeCertificate,
				date: formatDate(row.dateCertificate),
				hour: row.hourCertificate,
				nota: row.notaCertificate,
			});
		}
	}, [isEditRow, row]);

	const formatDate = (date) => {
		if (date) {
			date = new Date(date);
			const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
			const month = date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
			return `${date.getFullYear()}-${month}-${day}`;
		}
		return '';
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormState(prevState => ({ ...prevState, [name]: value }));
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

	const handleSave = () => {
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
			<DialogContent className={classes.content}>
				<TextField
					label="Codigo de certificacion"
					name="code"
					value={formState.code}
					onChange={handleChange}
				/>
				<TextField
					label="Lugar de la certificacion"
					name="placeCertificate"
					value={formState.placeCertificate}
					onChange={handleChange}
				/>
				<TextField
					label="Fecha de certificacion"
					name="date"
					type="date"
					value={formState.date}
					onChange={handleChange}
					InputLabelProps={{ shrink: true }}
				/>
				<TextField
					label="Hora de certificacion"
					name="hour"
					type="time"
					value={formState.hour}
					onChange={handleChange}
					InputLabelProps={{ shrink: true }}
				/>
				<TextField
					label="Nota de la certificacion"
					name="nota"
					type="number"
					value={formState.nota}
					onChange={handleChange}
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

export default AllForm;
