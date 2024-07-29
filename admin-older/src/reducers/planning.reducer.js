const initialState = {
	isOpen: false,
	selected: {},
	payload: {},
	isHour: false,
	memoized: '',
}

function planning (state = initialState, action) {
	switch (action.type) {
		case 'TOGGLE_MODAL_PLANNING': {
			return Object.assign({}, state, {
				isOpen: !state.isOpen,
				selected: action.payload
			})
		}
		case 'SELECTED_DAY_PLANNING': {
			let date = parserDate(action.payload)
			return Object.assign({}, state, {
				payload: Object.assign({}, state.payload, {
					[date]: { date, hour: [] }
				}),
				isHour: true,
				memoized: date
			})
		}
		case 'ADD_HOUR_PLANNING': {
			let hours = []

			Object.keys(action.payload).map(function (item) {
				hours.push( action.payload[item] )
				return action.payload[item]
			})

			return Object.assign({}, state, {
				payload: Object.assign({}, state.payload, {
					[state.memoized]: Object.assign({}, state.payload[state.memoized], {
						hour: hours
					})
				})
			})
		}
		case 'TOGGLE_HOUR_PLANNING': {
			return Object.assign({}, state, {
				isHour: !state.isHour
			})
		}
		case 'RESET_PLANNING': {
			return initialState
		}
		default:
			return state
	}
}

export default planning

function parserDate (date) {
	date = new Date(date)
	return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`
}
