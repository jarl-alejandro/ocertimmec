import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { BASE_URL } from '../../../config';
import Button from '@mui/material/Button';
import Ciudadanos from './Ciudadanos';
import CondicionLaboral from './CondicionLaboral';
import CondicionVida from './CondicionVida';
import DatosEncuesta from './DatosEncuesta';
import Experience from './Experience';
import Laboral from './Laboral';
import Snackbar from '@mui/material/Snackbar';
import Studiant from './Studiant';
import Training from './Training';
import initialState from './state';
import socketIo from 'socket.io-client';
import { validCedula } from './valid';

const Form = () => {
	const [state, setState] = useState(initialState);
	const [open, setOpen] = useState(false);
	const [message, setMessage] = useState('');
	const navigate = useNavigate();
	const { inscripcionId } = useParams();

	useEffect(() => {
		const socket = socketIo(BASE_URL);
		socket.on('terminar::register', onFinish);

		fetchInscripcion(inscripcionId);

		return () => {
			socket.close();
		};
	}, [inscripcionId]);

	const formatDate = (date) => {
		if (date) {
			date = date.toString().split('T')[0].split('-').join('/');
			date = new Date(date);
			let day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
			let month = date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
			return `${date.getFullYear()}-${month}-${day}`;
		}
	};

	const fetchInscripcion = async (inscripcionId) => {
		const response = await fetch(`${BASE_URL}/inscription/${inscripcionId}`);
		const json = await response.json();
		setState({
			...json,
			birthdate: formatDate(json.birthdate),
			capacitacion1: {
				...json.capacitacion1,
				dateCourse: formatDate(json.capacitacion1.dateCourse),
			},
			capacitacion2: {
				...json.capacitacion2,
				dateCourse: formatDate(json.capacitacion2.dateCourse),
			},
			capacitacion3: {
				...json.capacitacion3,
				dateCourse: formatDate(json.capacitacion3.dateCourse),
			},
			experiencia1: {
				...json.experiencia1,
				desde: formatDate(json.experiencia1.desde),
				hasta: formatDate(json.experiencia1.hasta),
			},
			experiencia2: {
				...json.experiencia2,
				desde: formatDate(json.experiencia2.desde),
				hasta: formatDate(json.experiencia2.hasta),
			},
			experiencia3: {
				...json.experiencia3,
				desde: formatDate(json.experiencia3.desde),
				hasta: formatDate(json.experiencia3.hasta),
			},
		});
	};

	const onFinish = () => {
		navigate('/estudiantes');
		openSnack('Se ha finalizado el registro con éxito');
	};

	const changeFile = (e) => {
		setState((prevState) => ({ ...prevState, file: e.target.files[0] }));
	};

	const openSnack = (name) => {
		setOpen(true);
		setMessage(name);
	};

	const handleCloseSnack = () => {
		setOpen(false);
		setMessage('');
	};

	const setField = (e) => {
		const { name, value } = e.target;
		setState((prevState) => ({ ...prevState, [name]: value }));
	};

	const setDepthField = (e) => {
		const { name, value } = e.target;
		const [name1, name2] = name.split('-');
		setState((prevState) => ({
			...prevState,
			[name1]: { ...prevState[name1], [name2]: value },
		}));
	};

	const handleSave = () => {
		if (valid()) {
			socket.emit('updated::student::inscripcion', {
				...state,
				inscripcionId: inscripcionId,
			});
			openSnack('Se enviado....');
		}
	};

	const valid = () => {
		if (!validCedula(state.document, openSnack)) {
			document.getElementById('document').focus();
			return false;
		}
		return true;
	};

	return (
		<section className="TableForm">
			{/* ...resto del JSX */}
			<article className="TableForm-footer">
				<Button variant="contained" color="secondary" disabled={state.isButton} onClick={handleSave}>
					Guardar
				</Button>

				<input type="file" id="requisitos-pdf" accept="application/pdf" className="requisitos-input" onChange={changeFile} />

				<Button variant="contained" color="secondary" style={{ cursor: 'pointer' }}>
					<label htmlFor="requisitos-pdf" style={{ cursor: 'pointer' }}>
						Subir requisitos
					</label>
				</Button>
			</article>
			<Snackbar
				anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
				open={open}
				autoHideDuration={1000}
				onClose={handleCloseSnack}
				ContentProps={{
					'aria-describedby': 'message-id',
				}}
				message={<span id="message-id">{message}</span>}
			/>
		</section>
	);
};

export default Form;
