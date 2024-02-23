import { BASE_URL } from '../config'

export default {

	fetchUser: () => async dispatch => {
		const response = await fetch(`${BASE_URL}/users`)
		const payload = await response.json()
		dispatch({ type: 'USER_FETCH', payload })
	},

	fetchTeacher: rol => async dispatch => {
		const response = await fetch(`${BASE_URL}/users/rol/${rol}`)
		const payload = await response.json()
		dispatch({ type: 'TEACHER_FETCH', payload, rol })
	},

	fetchMe: id => async dispatch => {
		const response = await fetch(`${BASE_URL}/users/${id}`)
		const payload = await response.json()
		dispatch({ type: 'USER_ME', payload })
	},

	createdUser (payload) {
		return { type: 'USER_CREATED', payload }
	},

	savedUser: payload => (dispatch, _, { emitSocket }) => {
		emitSocket('created::user', payload)
	},

	savedPassword: payload => async (dispatch, getState, { emitSocket }) => {
		emitSocket('updated::password', {
			...payload,
			id: getState().users.me._id
		})
	},

	edit(payload) {
		return { type: 'USER_EDIT', payload }
	},

	deleted: payload => (dispatch, _, { emitSocket }) => {
		emitSocket('deleted::user', { id: payload })
	},

	updated: payload => (dispatch, _, { emitSocket }) => {
		emitSocket('updated::user', payload)
	}
}
