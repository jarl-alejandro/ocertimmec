const initialState = {
	payload: [],
	isLoading: true,
	isMessage: false,
	selected: {}
}

function messages (state = initialState, action) {
	switch (action.type) {
		case 'MESSAGE_FETCH':
			return Object.assign({}, state, {
				payload: action.payload,
				isLoading: false
			})
		case 'SELECTED_MESSAGE': {
			return Object.assign({}, state, {
				selected: action.payload,
				isMessage: !state.isMessage
			})
		}
		default:
			return state
	}
}

export default messages
