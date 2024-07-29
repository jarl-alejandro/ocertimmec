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
	container: {
		minHeight: '100vh',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#f0f2f5', // Fondo gris claro
		padding: theme.spacing(2),
	},
	loginCard: {
		padding: '2rem',
		width: '100%',
		maxWidth: '400px',
		backgroundColor: '#ffffff',
		borderRadius: '12px', // Bordes más redondeados
		boxShadow: '0 8px 16px rgba(0,0,0,0.1)', // Sombra más pronunciada
		display: 'flex',
		flexDirection: 'column',
		gap: '1rem',
		textAlign: 'center',
	},
	inputContainer: {
		display: 'flex',
		alignItems: 'center',
		gap: '0.5rem',
		marginBottom: '1rem', // Espacio inferior para los inputs
	},
	button: {
		marginTop: '1rem',
		padding: '0.75rem 1.5rem',
		borderRadius: '8px',
		fontWeight: 'bold',
	},
	icon: {
		color: theme.palette.primary.main,
	},
	title: {
		marginBottom: '1rem',
		fontSize: '1.5rem',
		fontWeight: 'bold',
		color: theme.palette.primary.main,
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
		<section className={classes.container}>
			<form className={classes.loginCard} onSubmit={handleLogin}>
				<div className={classes.title}>Iniciar Sesión</div>

				<div className={classes.inputContainer}>
					<AccountCircle className={classes.icon} />
					<TextField
						label="Email"
						type="email"
						name="email"
						onChange={setField}
						value={email}
						fullWidth
						inputRef={emailRef}
						variant="outlined"
						size="small" // Tamaño del input más pequeño
					/>
				</div>

				<div className={classes.inputContainer}>
					<Https className={classes.icon} />
					<TextField
						label="Contraseña"
						type="password"
						name="password"
						onChange={setField}
						value={password}
						fullWidth
						inputRef={passwordRef}
						variant="outlined"
						size="small" // Tamaño del input más pequeño
					/>
				</div>

				<Button
					variant="contained"
					color="primary"
					className={classes.button}
					type="submit"
				>
					<Send />
					Entrar
				</Button>
			</form>
			<Snackbar open={open} text={text} handleClose={handleClose} />
		</section>
	);
};

export default Login;
