import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, IconButton, TextField, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import AddCircle from '@mui/icons-material/AddCircle';
import planningAction from '../../actions/planning.action';

const styles = {
	textField: {
		marginLeft: 8,
		marginRight: 8,
		width: 200,
	},
	around: {
		display: 'flex',
		justifyContent: 'space-between',
	}
};

const Hour = ({ toggleHour }) => {
	const dispatch = useDispatch();
	const isHour = useSelector(state => state.planning.isHour);

	const [hours, setHours] = useState({ 'hour-1': '' });

	const setField = (e, name) => {
		const { value } = e.target;
		setHours(prevHours => ({
			...prevHours,
			[name]: value || ''
		}));
	};

	const addHour = () => {
		const len = Object.keys(hours).length + 1;
		const code = `hour-${len}`;
		setHours(prevHours => ({
			...prevHours,
			[code]: ''
		}));
	};

	const handleClose = () => {
		setHours({ 'hour-1': '' });
		toggleHour();
	};

	const handleSaved = () => {
		dispatch(planningAction.addHour(hours));
		handleClose();
	};

	return (
		<Dialog
			open={isHour}
			onClose={toggleHour}
			aria-labelledby="form-dialog-title"
		>
			<DialogTitle id="form-dialog-title" sx={styles.around}>
				Hora
				<IconButton onClick={addHour}><AddCircle /></IconButton>
			</DialogTitle>
			<DialogContent>
				{Object.keys(hours).map(item => (
					<TextField
						key={item}
						value={hours[item]}
						onChange={e => setField(e, item)}
						id="time"
						label="Hora de inicio"
						type="time"
						sx={styles.textField}
						InputLabelProps={{ shrink: true }}
					/>
				))}
			</DialogContent>
			<DialogActions>
				<Button color="primary" onClick={handleClose}>Cerrar</Button>
				<Button color="primary" onClick={handleSaved}>Guardar</Button>
			</DialogActions>
		</Dialog>
	);
};

export default Hour;
