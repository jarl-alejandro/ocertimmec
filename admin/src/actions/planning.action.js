export default {

	toggleModal (payload) {
		return { type: 'TOGGLE_MODAL_PLANNING', payload }
	},

	selectedDay (payload) {
		return { type: 'SELECTED_DAY_PLANNING', payload }
	},

	toggleHour () {
		return { type: 'TOGGLE_HOUR_PLANNING' }
	},

	addHour (payload) {
		return { type: 'ADD_HOUR_PLANNING', payload }
	},

	savedPlanning: payload => (dispatch, _, { emitSocket }) => {
		console.log(payload)
		emitSocket('created::planning', payload)
	},

	resetPlanning () {
		return { type: 'RESET_PLANNING' }
	}

}
