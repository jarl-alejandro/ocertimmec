import { BASE_URL } from '../config'

export default {

	fetch: () => async dispatch => {
		const response = await fetch(`${BASE_URL}/messages`)
		const payload = await response.json()
		dispatch({ type: 'MESSAGE_FETCH', payload })
	},


	deleted: payload => async (dispatch, _, { emitSocket }) => {
		emitSocket('deleted::Message', { id: payload })
	},

	selected (payload) {
		return { type: 'SELECTED_MESSAGE', payload }
	}
}
