import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Send from '@mui/icons-material/Send';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Https from '@mui/icons-material/Https';
import Snackbar from '../../components/Snackbar';
import { OCCERTIMM_USER_ID, OCCERTIMM_AUTH_TOKEN } from '../../constants';
import { BASE_URL } from '../../config';
import './login.css';

const useStyles = makeStyles((theme) => ({
	margin: {
		margin: theme.spacing(1),
	},
	extendedIcon: {
		marginRight: theme.spacing(1),
	},
	marginIcon: {
		marginRight: theme.spacing(1),
		marginBottom: 15,
	},
}));

const Login = () => {
	const classes = useStyles();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [open, setOpen] = useState(false);
	const [text, setText] = useState('');
	const emailRef = useRef();
	const passwordRef = useRef();
	const navigate = useNavigate();

	useEffect(() => {
		if (localStorage.getItem(OCCERTIMM_AUTH_TOKEN)) {
			navigate('/estudiantes');
		}
	}, [navigate]);

	const setField = (e) => {
		const { name, value } = e.target;
		if (name === 'email') setEmail(value);
		else if (name === 'password') setPassword(value);
	};

	const handleClose = () => {
		setOpen(false);
		setText('');
	};

	const handleLogin = async (e) => {
		e.preventDefault();
		if (valid()) {
			const response = await fetch(`${BASE_URL}/login`, {
				method: 'POST',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(dataForm()),
			});
			const json = await response.json();

			if (json.success) {
				setOpen(true);
				setText('Ha iniciado sesión');
				saveUserData(json.token, json.user._id);
				navigate('/estudiantes');
			} else {
				setOpen(true);
				setText(json.message);
			}
		}
	};

	const dataForm = () => {
		return {
			email: email.toLowerCase(),
			password: password,
		};
	};

	const saveUserData = (token, id) => {
		window.localStorage.setItem(OCCERTIMM_USER_ID, id);
		window.localStorage.setItem(OCCERTIMM_AUTH_TOKEN, token);
	};

	const valid = () => {
		if (!email) {
			emailRef.current.focus();
			setOpen(true);
			setText('Ingresa tu email');
			return false;
		} else if (!password) {
			passwordRef.current.focus();
			setOpen(true);
			setText('Ingresa tu contraseña');
			return false;
		} else {
			return true;
		}
	};

	return (
		<section className="Login">
			<form className="LoginCard" onSubmit={handleLogin}>
				<div className="Login-input">
					<AccountCircle className={classes.marginIcon} />
					<TextField
						label="Email"
						type="email"
						margin="normal"
						name="email"
						onChange={setField}
						value={email}
						fullWidth
						id="email"
						inputRef={emailRef}
					/>
				</div>

				<div className="Login-input">
					<Https className={classes.marginIcon} />
					<TextField
						label="Contraseña"
						type="password"
						margin="normal"
						name="password"
						onChange={setField}
						value={password}
						fullWidth
						id="password"
						inputRef={passwordRef}
					/>
				</div>

				<Button
					variant="contained" // Cambiado de "extendedFab" a "contained"
					color="primary"
					className={classes.margin}
					type="submit"
				>
					<Send className={classes.extendedIcon} />
					Entrar
				</Button>
			</form>
			<Snackbar open={open} text={text} handleClose={handleClose} />
		</section>
	);
};

export default Login;
