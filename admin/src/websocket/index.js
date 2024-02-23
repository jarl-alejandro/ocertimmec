import io from 'socket.io-client'
import { BASE_URL } from '../config'
import messageTypes from './messageTypes'

import studentActions from '../actions/student.action'
import certificateActions from '../actions/certificate.action'
import trainingActions from '../actions/training.action'
import userActions from '../actions/users.action'
import messageActions from '../actions/message.action'

import notify from '../notify'

const socket = io.connect(BASE_URL)

function initSocket (store) {

	socket.on('notificacion', data => {
		notify(data)
	})

	socket.on('registerInscripcion', data => {
		store.dispatch(studentActions.fetchNotificaciones())
		store.dispatch(studentActions.fetchStudent())
		store.dispatch(studentActions.fetchStudentCertificado())
	})

	socket.on('updated::certificate', data => {
		store.dispatch(studentActions.fetchNotificaciones())
		store.dispatch(certificateActions.fetchCertificate())
	})

	socket.on('updated::training', data => {
		store.dispatch(studentActions.fetchNotificaciones())
		store.dispatch(trainingActions.fetchTraining())
	})

	socket.on('updated::user', data => {
		store.dispatch(userActions.fetchUser())
	})

	socket.on('updated::student', data => {
		store.dispatch(studentActions.fetchStudent())
		store.dispatch(studentActions.fetchNotificaciones())
	})


	socket.on('updated::Message', data => {
		store.dispatch(messageActions.fetch())
	})

	messageTypes
		.forEach(obj => socket.on(obj.channel, payload => {
			store.dispatch({ type: obj.type, payload })
		}))
}

const emitSocket = (type, payload) => socket.emit(type, payload)

export {
	initSocket,
	emitSocket
}
