import Planning from '../domain/model'

async function created (data, io) {

	Object.keys(data.payload).map(async item => {
		let date = data.payload[item]
		let create = await Planning.create({
			rel: data.rel,
			date: date.date,
			hour: date.hour
		})
	})

	// io.emit('created::training', query)
}

function io (socket, io) {
	socket.on('created::planning', data => created(data, io))
}

export default io
