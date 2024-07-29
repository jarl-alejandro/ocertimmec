import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Login from './views/login/Login';
import Users from './views/users/Users';
import Training from './views/training/Traning';  // Asegúrate de que el nombre sea correcto (Training en lugar de Traning)
import Certificate from './views/certificate/Certificate';
import Student from './views/student/Student';
import StudentCertificados from './views/StudentCertificados/Student';
import Reprobados from './views/Reprobados/Student';

import Messages from './views/messages/Messages';
import Edit from './views/edit';

export default function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Login />} />
				<Route path="/app" element={<Student />} />
				<Route path="/certificacion" element={<Certificate />} />
				<Route path="/capacitacion" element={<Training />} />
				<Route path="/estudiantes" element={<Student />} />
				<Route path="/estudiantes/certificados" element={<StudentCertificados />} />
				<Route path="/estudiantes/reprobados" element={<Reprobados />} />
				<Route path="/usuarios" element={<Users />} />
				<Route path="/messages" element={<Messages />} />
				<Route path="/edit/:id" element={<Edit />} />
			</Routes>
		</Router>
	);
}
