import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import actions from '../../actions/message.action';


const styleContent = {
	width: '35rem',
	minWidth: '35rem',
	maxWidth: '35rem',
}


const MessageModal = () => {
	const dispatch = useDispatch();
	const isMessage = useSelector(state => state.messages.isMessage);
	const selected = useSelector(state => state.messages.selected);

	const handleClose = () => {
		dispatch(actions.selected({}));
	};

	return (
		<Dialog
			open={isMessage}
			onClose={handleClose}
			aria-labelledby="form-dialog-title"
		>
			<DialogTitle id="form-dialog-title">Mensaje</DialogTitle>
			<DialogContent>
				<div style={styleContent}>
					<div className='flex'>
						<Typography variant="subtitle1">Nombre: </Typography>
						<Typography variant="subtitle1" gutterBottom>{selected.name}</Typography>
					</div>
					<div className='flex'>
						<Typography variant="subtitle1">E-mail: </Typography>
						<Typography variant="subtitle1" gutterBottom>{selected.email}</Typography>
					</div>
					<div className='flex'>
						<Typography variant="subtitle1">Asunto: </Typography>
						<Typography variant="subtitle1" gutterBottom>{selected.subject}</Typography>
					</div>
					<div>
						<Typography variant="subtitle1">Mensaje: </Typography>
						<Typography variant="body2">{selected.message}</Typography>
					</div>
				</div>
			</DialogContent>
			<DialogActions>
				<Button color="primary" onClick={handleClose}>Cerrar</Button>
			</DialogActions>
		</Dialog>
	);
};

export default MessageModal;
