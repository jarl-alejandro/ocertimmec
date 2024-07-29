import React, { useState, Fragment } from 'react';
import { useDispatch } from 'react-redux';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, TextField } from '@mui/material';
import Snackbar from './Snackbar';
import actions from '../actions/users.action';

const useStyles = (theme) => ({
	content: {
		display: 'grid',
		gridGap: '10px',
		minWidth: '20rem',
		maxWidth: '20rem',
		width: '20rem',
	}
});

const Password = ({ isActive, onClose }) => {
	const [password1, setPassword1] = useState('');
	const [password2, setPassword2] = useState('');
	const [open, setOpen] = useState(false);
	const [text, setText] = useState('');
	const dispatch = useDispatch();
	const classes = useStyles();

	const setField = (e) => {
		const { name, value } = e.target;
		if (name === 'password1') setPassword1(value);
		if (name === 'password2') setPassword2(value);
	};

	const handleCancel = () => {
		setPassword1('');
		setPassword2('');
		onClose();
	};

	const handleSaved = () => {
		if (valid()) {
			const object = {
				password1,
				password2
			};
			dispatch(actions.savedPassword(object));
			setOpen(true);
			setText('Se cambio con exito');
			handleCancel();
		}
	};

	const handleClose = () => {
		setOpen(false);
		setText('');
	};

	const valid = () => {
		if (!password1) {
			document.getElementById('password1').focus();
			setOpen(true);
			setText('Ingresa tu nueva contraseña');
			return false;
		}
		if (!password2) {
			document.getElementById('password2').focus();
			setOpen(true);
			setText('Repita la contraseña');
			return false;
		}
		if (password1 !== password2) {
			document.getElementById('password2').focus();
			setOpen(true);
			setText('No coinciden');
			return false;
		}
		return true;
	};

	return (
		<Fragment>
			<Dialog
				open={isActive}
				onClose={handleCancel}
				aria-labelledby="form-dialog-title"
			>
				<DialogTitle id="form-dialog-title">Cambiar contraseña</DialogTitle>
				<DialogContent>
					<div className={classes.content}>
						<TextField
							label="Escriba su nueva contraseña"
							name="password1"
							id="password1"
							type="password"
							value={password1}
							onChange={setField}
						/>
						<TextField
							label="Repita su contraseña"
							name="password2"
							id="password2"
							type="password"
							value={password2}
							onChange={setField}
						/>
					</div>
				</DialogContent>
				<DialogActions>
					<Button color="primary" onClick={handleCancel}>Cancelar</Button>
					<Button color="primary" onClick={handleSaved}>Guardar</Button>
				</DialogActions>
			</Dialog>
			<Snackbar
				open={open}
				text={text}
				handleClose={handleClose}
			/>
		</Fragment>
	);
};

export default Password;
