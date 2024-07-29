import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { BASE_URL } from '../../../config';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import socketIo from 'socket.io-client';
import { validCedula } from './valid';
import Ciudadanos from './Ciudadanos';
import CondicionLaboral from './CondicionLaboral';
import CondicionVida from './CondicionVida';
import DatosEncuesta from './DatosEncuesta';
import Experience from './Experience';
import Laboral from './Laboral';
import Studiant from './Studiant';
import Training from './Training';
import initialState from './state';

const Form = () => {
	const [state, setState] = useState(initialState);
	const [open, setOpen] = useState(false);
	const [message, setMessage] = useState('');
	const navigate = useNavigate();
	const { inscripcionId } = useParams();
	const socket = socketIo(BASE_URL);

	useEffect(() => {
		socket.on('terminar::register', onFinish);
		fetchInscripcion(inscripcionId);

		return () => {
			socket.close();
		};
	}, [inscripcionId, socket]);

	const formatDate = (date) => {
		if (!date) return '';
		const [year, month, day] = new Date(date).toISOString().split('T')[0].split('-');
		return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
	};

	const fetchInscripcion = async (id) => {
		try {
			const response = await fetch(`${BASE_URL}/inscription/${id}`);
			const json = await response.json();
			setState({
				...json,
				birthdate: formatDate(json.birthdate),
				capacitacion1: { ...json.capacitacion1, dateCourse: formatDate(json.capacitacion1.dateCourse) },
				capacitacion2: { ...json.capacitacion2, dateCourse: formatDate(json.capacitacion2.dateCourse) },
				capacitacion3: { ...json.capacitacion3, dateCourse: formatDate(json.capacitacion3.dateCourse) },
				experiencia1: { ...json.experiencia1, desde: formatDate(json.experiencia1.desde), hasta: formatDate(json.experiencia1.hasta) },
				experiencia2: { ...json.experiencia2, desde: formatDate(json.experiencia2.desde), hasta: formatDate(json.experiencia2.hasta) },
				experiencia3: { ...json.experiencia3, desde: formatDate(json.experiencia3.desde), hasta: formatDate(json.experiencia3.hasta) },
			});
		} catch (error) {
			console.error('Error fetching inscription:', error);
		}
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
			socket.emit('updated::student::inscripcion', { ...state, inscripcionId });
			openSnack('Se ha enviado....');
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
			{/* Aquí puedes insertar los componentes Ciudadanos, CondicionLaboral, CondicionVida, DatosEncuesta, Experience, Laboral, Studiant, y Training según sea necesario */}

			<article className="TableForm-footer">
				<Button variant="contained" color="secondary" disabled={state.isButton} onClick={handleSave}>
					Guardar
				</Button>

				<input type="file" id="requisitos-pdf" accept="application/pdf" className="requisitos-input" onChange={changeFile} />

				<Button variant="contained" color="secondary">
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
				message={<span>{message}</span>}
			/>
		</section>
	);
};

export default Form;
