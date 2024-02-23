import { BASE_URL } from '../config'

export default {

	fetchNotificaciones: () => async dispatch => {
		const response = await fetch(`${BASE_URL}/notificaciones`)
		const payload = await response.json()
		dispatch({ type: 'NOTIFY_FETCH', payload })
	},

	fetchStudent: () => async dispatch => {
		const response = await fetch(`${BASE_URL}/inscripciones`)
		const payload = await response.json()
		dispatch({ type: 'STUDENT_FETCH', payload })
	},

	fetchStudentCertificado: () => async dispatch => {
		const response = await fetch(`${BASE_URL}/student-certificados`)
		const payload = await response.json()
		dispatch({ type: 'STUDENT_FETCH_CERTIFICADO', payload })
	},

	fetchStudentNoCertificado: () => async dispatch => {
		const response = await fetch(`${BASE_URL}/student-no-certificados`)
		const payload = await response.json()
		dispatch({ type: 'STUDENT_FETCH_CERTIFICADO_NO', payload })
	},


	onVerificar: (payload) => async (dispatch, _, { emitSocket }) => {
		emitSocket('verificar::email', payload)
	},

	toggleModal (payload) {
		return { type:'TOGGLE_MODAL_STUDENT', payload }
	},

	onCertificateAssitent: payload => (dispatch, getState, { emitSocket }) => {
		emitSocket('certificate::assistance', payload._id)
	},

	finishRegister: (payload) => (dispatch, _, { emitSocket }) => {
		emitSocket('finish::register', payload)
	},

	onCertificado: payload => (dispatch, _, { emitSocket }) => {
		emitSocket('certificado::estudiante', payload)
	},

	deleted: payload => (dispatch, _, { emitSocket }) => {
		emitSocket('deleted::student', { id: payload })
	},
}
