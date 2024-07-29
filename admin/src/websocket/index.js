import io from 'socket.io-client';
import {BASE_URL} from '../config';
import messageTypes from './messageTypes';

import studentActions from '../actions/student.action';
import certificateActions from '../actions/certificate.action';
import trainingActions from '../actions/training.action';
import userActions from '../actions/users.action';
import messageActions from '../actions/message.action';

import notify from '../notify';

const socket = io.connect(BASE_URL);

const handleNotification = (data) => {
	notify(data);
};

const handleRegisterInscription = (store) => {
	store.dispatch(studentActions.fetchNotificaciones());
	store.dispatch(studentActions.fetchStudent());
	store.dispatch(studentActions.fetchStudentCertificado());
};

const handleUpdatedCertificate = (store) => {
	store.dispatch(studentActions.fetchNotificaciones());
	store.dispatch(certificateActions.fetchCertificate());
};

const handleUpdatedTraining = (store) => {
	store.dispatch(studentActions.fetchNotificaciones());
	store.dispatch(trainingActions.fetchTraining());
};

const handleUpdatedUser = (store) => {
	store.dispatch(userActions.fetchUser());
};

const handleUpdatedStudent = (store) => {
	store.dispatch(studentActions.fetchStudent());
	store.dispatch(studentActions.fetchNotificaciones());
};

const handleUpdatedMessage = (store) => {
	store.dispatch(messageActions.fetch());
};

const initSocket = (store) => {
	socket.on('notificacion', handleNotification);
	socket.on('registerInscripcion', () => handleRegisterInscription(store));
	socket.on('updated::certificate', () => handleUpdatedCertificate(store));
	socket.on('updated::training', () => handleUpdatedTraining(store));
	socket.on('updated::user', () => handleUpdatedUser(store));
	socket.on('updated::student', () => handleUpdatedStudent(store));
	socket.on('updated::Message', () => handleUpdatedMessage(store));

	messageTypes.forEach(({ channel, type }) => {
		socket.on(channel, payload => {
			store.dispatch({ type, payload });
		});
	});
};

const emitSocket = (type, payload) => {
	socket.emit(type, payload);
};

export {
	initSocket,
	emitSocket
};
