import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import socketIo from 'socket.io-client';
import Experience from './Experience';
import Training from './Training';
import Laboral from './Laboral';
import DatosEncuesta from './DatosEncuesta';
import Ciudadanos from './Ciudadanos';
import CondicionLaboral from './CondicionLaboral';
import CondicionVida from './CondicionVida';
import Student from './Student.jsx';
import Snackbar from '@mui/material/Snackbar';
import Button from '@mui/material/Button';
import { BASE_URL } from '../../../config';
import { validCedula } from './valid';
import initialState from './state';

const Form = ({ inscripcionId }) => {
	const [state, setState] = useState(initialState);
	const [file, setFile] = useState(null);
	const [open, setOpen] = useState(false);
	const [message, setMessage] = useState('');
	const navigate = useNavigate();

	useEffect(() => {
		const socket = socketIo(BASE_URL);
		socket.on('terminar::register', onFinish);

		fetchInscripcion(inscripcionId);

		return () => {
			socket.close();
		};
	}, [inscripcionId]);

	const formatDate = useCallback((date) => {
		if (date) {
			date = date.toString().split('T')[0].split('-').join('/');
			date = new Date(date);

			let day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
			let month = date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
			return `${date.getFullYear()}-${month}-${day}`;
		}
	}, []);

	const fetchInscripcion = useCallback(async (inscripcionId) => {
		const response = await fetch(`${BASE_URL}/inscription/${inscripcionId}`);
		const json = await response.json();

		setState(prevState => ({
			...prevState,
			name: json.name || '',
			lastName: json.lastName || '',
			document: json.document || '',
			birthdate: formatDate(json.birthdate) || '',
			direction: json.direction || '',
			province: json.province || '',
			city: json.city || '',
			phone: json.phone || '',
			celphone: json.celphone || '',
			email: json.email || '',
			file: '',
			primaria: {
				name: json.primaria.name || '',
				pais: json.primaria.pais || '',
				ciudad: json.primaria.ciudad || '',
				titulo: json.primaria.titulo || '',
			},
			secundaria: {
				name: json.secundaria.name || '',
				pais: json.secundaria.pais || '',
				ciudad: json.secundaria.ciudad || '',
				titulo: json.secundaria.titulo || '',
			},
			tecnico: {
				name: json.tecnico.name || '',
				pais: json.tecnico.pais || '',
				ciudad: json.tecnico.ciudad || '',
				titulo: json.tecnico.titulo || '',
			},
			tercerNivel: {
				name: json.tercerNivel.name || '',
				pais: json.tercerNivel.pais || '',
				ciudad: json.tercerNivel.ciudad || '',
				titulo: json.tercerNivel.titulo || '',
			},
			cuartoNivel: {
				name: json.cuartoNivel.name || '',
				pais: json.cuartoNivel.pais || '',
				ciudad: json.cuartoNivel.ciudad || '',
				titulo: json.cuartoNivel.titulo || '',
			},
			capacitacion1: {
				nameCourse: json.capacitacion1.nameCourse || '',
				nameInstitucion: json.capacitacion1.nameInstitucion || '',
				dateCourse: formatDate(json.capacitacion1.dateCourse) || '',
				hourCourse: json.capacitacion1.hourCourse || '',
			},
			capacitacion2: {
				nameCourse: json.capacitacion2.nameCourse || '',
				nameInstitucion: json.capacitacion2.nameInstitucion || '',
				dateCourse: formatDate(json.capacitacion2.dateCourse) || '',
				hourCourse: json.capacitacion2.hourCourse || '',
			},
			capacitacion3: {
				nameCourse: json.capacitacion3.nameCourse || '',
				nameInstitucion: json.capacitacion3.nameInstitucion || '',
				dateCourse: formatDate(json.capacitacion3.dateCourse) || '',
				hourCourse: json.capacitacion3.hourCourse || '',
			},
			experiencia1: {
				desde: formatDate(json.experiencia1.desde) || '',
				hasta: formatDate(json.experiencia1.hasta) || '',
				name: json.experiencia1.name || '',
				direction: json.experiencia1.direction || '',
				phone: json.experiencia1.phone || '',
				funcion: json.experiencia1.funcion || '',
			},
			experiencia2: {
				desde: formatDate(json.experiencia2.desde) || '',
				hasta: formatDate(json.experiencia2.hasta) || '',
				name: json.experiencia2.name || '',
				direction: json.experiencia2.direction || '',
				phone: json.experiencia2.phone || '',
				funcion: json.experiencia2.funcion || '',
			},
			experiencia3: {
				desde: formatDate(json.experiencia3.desde) || '',
				hasta: formatDate(json.experiencia3.hasta) || '',
				name: json.experiencia3.name || '',
				direction: json.experiencia3.direction || '',
				phone: json.experiencia3.phone || '',
				funcion: json.experiencia3.funcion || '',
			},
			autoidentificacion: json.autoidentificacion || '',
			tipoOcupacion: json.tipoOcupacion || '',
			contrato: json.contrato || '',
			seguroMedio: json.seguroMedio.toUpperCase() || '',
			sueldoTrece: json.sueldoTrece.toUpperCase() || '',
			sueldoCatorce: json.sueldoCatorce.toUpperCase() || '',
			sueldo: json.sueldo.toUpperCase() || '',
			cambioPuesto: json.cambioPuesto.toUpperCase() || '',
			satisfechoEmpleo: json.satisfechoEmpleo.toUpperCase() || '',
			agotadoEmpleo: json.agotadoEmpleo.toUpperCase() || '',
			respetanTrabajo: json.respetanTrabajo.toUpperCase() || '',
			jefesRecoTrab: json.jefesRecoTrab.toUpperCase() || '',
			riesgoLaboral: json.riesgoLaboral.toUpperCase() || '',
			deseariaCambiarTrabajo: json.deseariaCambiarTrabajo.toUpperCase() || '',
			seguroMedico: json.seguroMedico.toUpperCase() || '',
			hijos: json.hijos.toUpperCase() || '',
			cuantoHijos: json.cuantoHijos.toUpperCase() || '',
			hijosMayorTres: json.hijosMayorTres.toUpperCase() || '',
			estudian: json.estudian.toUpperCase() || '',
			miembrosHogar: json.miembrosHogar.toUpperCase() || '',
			propiedad: json.propiedad.toUpperCase() || '',
			servicioBasico: json.servicioBasico.toUpperCase() || '',
			discapacidad: json.discapacidad.toUpperCase() || '',
			tipoDiscapacidad: json.tipoDiscapacidad.toUpperCase() || '',
			socioEmpleo: json.socioEmpleo.toUpperCase() || '',
		}));
	}, [formatDate, inscripcionId]);

	const onFinish = useCallback(() => {
		navigate('/estudiantes');
		openSnack('Se ha finalizado el registro con exito');
	}, [navigate]);

	const changeFile = (e) => {
		setFile(e.target.files[0]);
	};

	const openSnack = (name) => {
		setMessage(name);
		setOpen(true);
	};

	const handleCloseSnack = () => {
		setOpen(false);
		setMessage('');
	};

	const setField = (e) => {
		const { name, value } = e.target;
		setState(prevState => ({ ...prevState, [name]: value }));
	};

	const setDepthField = (e) => {
		const { name, value } = e.target;
		let [name1, name2] = name.split('-');

		setState(prevState => ({
			...prevState,
			[name1]: {
				...prevState[name1],
				[name2]: value
			}
		}));
	};

	const handleSave = () => {
		if (valid()) {
			socket.emit('updated::student::inscripcion', {
				...state,
				inscripcionId
			});
		}
	};

	const valid = () => {
		if (!state.document) {
			document.getElementById('document').focus();
			return false;
		}
		if (!validCedula(state.document, openSnack)) {
			document.getElementById('document').focus();
			return false;
		}
		return true;
	};

	return (
		<section className="TableForm">
			<article className="TableForm-card">
				<h2 className="TableForm-title">
					1.- PROCESO DE CERTIFICACION
				</h2>
				<Student
					state={state}
					setField={setField}
				/>
			</article>

			<article className="TableForm-card">
				<h2 className="TableForm-title">2.- FORMACIÓN ACTUAL</h2>
				<Experience
					state={{
						primaria: state.primaria,
						secundaria: state.secundaria,
						tecnico: state.tecnico,
						tercerNivel: state.tercerNivel,
						cuartoNivel: state.cuartoNivel,
					}}
					setDepthField={setDepthField}
				/>
			</article>

			<article className="TableForm-card">
				<h2 className="TableForm-title">3.- Capacitación o formación recibida</h2>
				<Training
					state={{
						capacitacion1: state.capacitacion1,
						capacitacion2: state.capacitacion2,
						capacitacion3: state.capacitacion3,
					}}
					setDepthField={setDepthField}
				/>
			</article>

			<article className="TableForm-card">
				<h2 className="TableForm-title">4.- Experiencia laboral</h2>
				<Laboral
					state={{
						experiencia1: state.experiencia1,
						experiencia2: state.experiencia2,
						experiencia3: state.experiencia3,
					}}
					setDepthField={setDepthField}
				/>
			</article>

			<article className="TableForm-card">
				<h2 className="TableForm-title">5.- DATOS GENERALES DEL ENCUESTADO</h2>
				<DatosEncuesta
					state={state.autoidentificacion}
					setField={setField}
				/>
			</article>

			<article className="TableForm-card">
				<h2 className="TableForm-title">6.- CIUDADANOS/AS OCUPADOS/AS</h2>
				<Ciudadanos
					state={{
						tipoOcupacion: state.tipoOcupacion,
						contrato: state.contrato,
					}}
					setField={setField}
				/>
			</article>

			<article className="TableForm-card">
				<h2 className="TableForm-title">
					7.- CONDICIONES LABORALES
					<span>RECIBE POR PARTE DE SU PATRONO O EMPLEADOR:</span>
				</h2>
				<CondicionLaboral
					state={{
						seguroMedio: state.seguroMedio,
						sueldoTrece: state.sueldoTrece,
						sueldoCatorce: state.sueldoCatorce,
						sueldo: state.sueldo,
						cambioPuesto: state.cambioPuesto,
						satisfechoEmpleo: state.satisfechoEmpleo,
						agotadoEmpleo: state.agotadoEmpleo,
						respetanTrabajo: state.respetanTrabajo,
						jefesRecoTrab: state.jefesRecoTrab,
						riesgoLaboral: state.riesgoLaboral,
						deseariaCambiarTrabajo: state.deseariaCambiarTrabajo,
					}}
					setField={setField}
				/>
			</article>

			<article className="TableForm-card">
				<h2 className="TableForm-title">
					8. DATOS DE CONDICIONES DE VIDA
				</h2>
				<CondicionVida
					state={{
						seguroMedico: state.seguroMedico,
						hijos: state.hijos,
						cuantoHijos: state.cuantoHijos,
						hijosMayorTres: state.hijosMayorTres,
						estudian: state.estudian,
						miembrosHogar: state.miembrosHogar,
						propiedad: state.propiedad,
						servicioBasico: state.servicioBasico,
						discapacidad: state.discapacidad,
						tipoDiscapacidad: state.tipoDiscapacidad,
						socioEmpleo: state.socioEmpleo,
					}}
					setField={setField}
				/>
			</article>

			<article className="TableForm-footer">
				<Button
					variant="contained"
					color="secondary"
					disabled={state.isButton}
					onClick={handleSave}
				>
					Guardar
				</Button>

				<input
					type="file"
					id="requisitos-pdf"
					accept="application/pdf"
					className="requisitos-input"
					onChange={changeFile}
				/>

				<Button
					variant="contained"
					color="secondary"
					style={{ cursor: 'pointer' }}
				>
					<label htmlFor="requisitos-pdf" style={{ cursor: 'pointer' }}>Subir requisitos</label>
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
