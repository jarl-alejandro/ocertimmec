import parserStudent from '../helpers/student'

const initialState = {
	student: {
		payload: [],
		isLoading: true
	},
	certificado: {
		payload: [],
		isLoading: true
	},
	certificadoNo: {
		payload: [],
		isLoading: true
	},

	selected: {},
	isToggleModal: false,
	notify: []
}

function student (state = initialState, action) {
	switch (action.type) {
		case 'STUDENT_FETCH': {
			return Object.assign({}, state, {
				student: {
					payload: parserStudent(action.payload),
					isLoading: false
				}
			})
		}
		case 'STUDENT_FETCH_CERTIFICADO': {
			return Object.assign({}, state, {
				certificado: {
					payload: parserStudent(action.payload),
					isLoading: false
				}
			})
		}
		case 'STUDENT_FETCH_CERTIFICADO_NO': {
			return Object.assign({}, state, {
				certificadoNo: {
					payload: parserStudent(action.payload),
					isLoading: false
				}
			})
		}
		case 'TOGGLE_MODAL_STUDENT': {
			return Object.assign({}, state, {
				selected: action.payload,
				isToggleModal: !state.isToggleModal
			})
		}
		case 'NOTIFY_FETCH': {
			return Object.assign({}, state, {
				notify: action.payload
			})
		}
		default:
			return state
	}
}

export default student
