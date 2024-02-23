import React from 'react'
import {
	BrowserRouter as Router,
	Route,
	Switch
} from 'react-router-dom'

import Login from './views/login/Login'
import Users from './views/users/Users'
import Traning from './views/training/Traning'
import Certificate from './views/certificate/Certificate'
import Student from './views/student/Student'
import StudentCertificados from './views/StudentCertificados/Student'
import Reprobados from './views/Reprobados/Student'

import Messages from './views/messages/Messages'
import Edit from './views/edit'

export default () => (
	<Router>
		<Switch>
			<Route path='/' exact component={Login} />
			<Route path='/app' exact component={Student} />

			<Route path='/certificacion' exact component={Certificate} />
			<Route path='/capacitacion' exact component={Traning} />
			<Route path='/estudiantes' exact component={Student} />
			<Route path='/estudiantes/certificados' exact component={StudentCertificados} />
			<Route path='/estudiantes/reprobados' exact component={Reprobados} />
			<Route path='/usuarios' exact component={Users} />
			<Route path='/messages' exact component={Messages} />
			<Route path='/edit/:id' exact component={Edit} />
		</Switch>
	</Router>
)
