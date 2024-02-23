const initialState = {
	training: {
		payload: [],
		isLoading: true
	},
	edit: {}
}

function training (state = initialState, action) {
	switch (action.type) {
		case 'TRAINING_FETCH': {
			return Object.assign({}, state, {
				training: {
					payload: action.payload,
					isLoading: false
				}
			})
		}
		case 'TRAINING_CREATED': {
			return Object.assign({}, state, {
				training: Object.assign({}, state.training, {
					payload: [...state.training.payload, action.payload]
				})
			})
		}
		case 'TRAINING_EDIT': {
			return Object.assign({}, state, {
				edit: action.payload
			})
		}
		default:
			return state
	}
}

export default training
