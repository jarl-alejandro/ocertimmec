const initialState = {
	users: {
		payload: [],
		isLoading: true
	},
	teachers: {
		payload: [],
		isLoading: true,
		rol: ''
	},
	edit: {},
	me: {}
}

function users (state = initialState, action) {
	switch (action.type) {
		case 'USER_ME': {
			return Object.assign({}, state, {
				me: action.payload
			})
		}
		case 'USER_FETCH':
			return Object.assign({}, state, {
				users: {
					payload: action.payload,
					isLoading: false
				}
			})
		case 'TEACHER_FETCH': {
			return Object.assign({}, state, {
				teachers: {
					payload: action.payload,
					isLoading: false,
					rol: action.rol
				}
			})
		}
		case 'USER_CREATED': {
			return Object.assign({}, state, {
				users: Object.assign({}, state.users, {
					payload: [...state.users.payload, action.payload]
				})
			})
		}
		case 'USER_EDIT': {
			return Object.assign({}, state, {
				edit: action.payload
			})
		}
		default:
			return state
	}
}

export default users
