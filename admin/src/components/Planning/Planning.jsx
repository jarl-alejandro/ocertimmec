import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import Calendar from './Calendar';
import Hour from './Hour';
import planningActions from '../../actions/planning.action';

const Planning = () => {
	const dispatch = useDispatch();
	const { isOpen, payload, selectedId } = useSelector(state => ({
		isOpen: state.planning.isOpen,
		payload: state.planning.payload,
		selectedId: state.planning.selected._id
	}));

	const handleSaved = () => {
		dispatch(planningActions.savedPlanning({
			payload,
			rel: selectedId
		}));
		handleCancel();
	};

	const handleCancel = () => {
		dispatch(planningActions.resetPlanning());
	};

	return (
		<Dialog
			open={isOpen}
			onClose={handleCancel}
			aria-labelledby="form-dialog-title"
		>
			<DialogTitle id="form-dialog-title">Planificación</DialogTitle>
			<DialogContent>
				<Calendar />
				<Hour />
			</DialogContent>
			<DialogActions>
				<Button color="primary" onClick={handleCancel}>Cerrar</Button>
				<Button color="primary" onClick={handleSaved}>Guardar</Button>
			</DialogActions>
		</Dialog>
	);
};

export default Planning;
