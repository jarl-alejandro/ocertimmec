const initialState = {
	certificate: {
		payload: [],
		isLoading: true
	},
	edit: {}
}

function certificate (state = initialState, action) {
	switch (action.type) {
		case 'CERTIFICATE_FETCH': {
			return Object.assign({}, state, {
				certificate: {
					payload: action.payload,
					isLoading: false
				}
			})
		}
		case 'CERTIFICATE_CREATED': {
			return Object.assign({}, state, {
				certificate: Object.assign({}, state.certificate, {
					payload: [...state.certificate.payload, action.payload]
				})
			})
		}
		case 'CERTIFICATE_EDIT': {
			return Object.assign({}, state, {
				edit: action.payload
			})
		}
		default:
			return state
	}
}

export default certificate
