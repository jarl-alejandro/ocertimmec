import Message from '../domain/model'

async function created(data, io) {
	await Message.create({ ...data })
	io.emit('updated::Message')
}

async function deleted(data, io) {
	await Message.findOneAndDelete({ _id: data.id })
	io.emit('updated::Message')
}

function ioMessage(socket, io) {
	socket.on('created::Message', data => created(data, io))
	socket.on('deleted::Message', data => deleted(data, io))
}

export default ioMessage
