import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'

import { initSocket, emitSocket } from './websocket'

import users from './reducers/users.reducer'
import training from './reducers/training.reducer'
import certificate from './reducers/certificate.reducer'
import planning from './reducers/planning.reducer'
import student from './reducers/student.reducer'
import search from './reducers/search.reducer'
import messages from './reducers/message.reducer'

function startUp () {
	const middleware = [ thunk.withExtraArgument({ emitSocket }) ]

	const store = createStore(
		combineReducers({
			users,
			training,
			certificate,
			planning,
			student,
			search,
			messages
		}),
		applyMiddleware(...middleware)
	)

	initSocket(store)

	return store
}

export default startUp
