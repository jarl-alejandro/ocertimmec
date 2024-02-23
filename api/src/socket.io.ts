import * as socketIO from 'socket.io';

import users from './api/users/application/socket.io'
import courses from './api/courses/application/socket.io'
import training from './api/training/application/socket.io'
import certificate from './api/certificate/application/socket.io'
import planning from './api/planning/application/socket.io'
import messages from './api/messages/application/socket.io'

export default class SocketIo {
	private io: any;

	constructor (config) {
		this.io = socketIO.listen(config.server)

		this.io.on('connection', socket => {
			users(socket, this.io)
			courses(socket, this.io)
			training(socket, this.io)
			certificate(socket, this.io)
			planning(socket, this.io)
			messages(socket, this.io)
		})
	}

}
