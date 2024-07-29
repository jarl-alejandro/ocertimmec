import { BASE_URL } from '../config'

export default {

	fetchTraining: () => async dispatch => {
		const response = await fetch(`${BASE_URL}/trainings`)
		const payload = await response.json()
		dispatch({ type: 'TRAINING_FETCH', payload })
	},

	savedTrainig: payload => (dispatch, _, { emitSocket }) => {
		emitSocket('created::training', payload)
	},

	edit(payload) {
		return { type: 'TRAINING_EDIT', payload }
	},

	deleted: payload => (dispatch, _, { emitSocket }) => {
		emitSocket('deleted::training', { id: payload })
	},

	updated: payload => (dispatch, _, { emitSocket }) => {
		emitSocket('updated::training', payload)
	}
}
