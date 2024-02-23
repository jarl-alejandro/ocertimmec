import { BASE_URL } from '../config'

export default {

	fetchCertificate: () => async dispatch => {
		const response = await fetch(`${BASE_URL}/certificate`)
		const payload = await response.json()
		dispatch({ type: 'CERTIFICATE_FETCH', payload })
	},

	savedCertificate: payload => (dispatch, _, { emitSocket }) => {
		emitSocket('created::certificate', payload)
	},

	edit (payload) {
		return { type: 'CERTIFICATE_EDIT', payload }
	},

	deleted: payload => (dispatch, _, { emitSocket }) => {
		emitSocket('deleted::certificate', { id: payload })
	},

	updatedCertificate: payload => (dispatch, _, { emitSocket }) => {
		emitSocket('updated::certificate', payload)
	}
}
