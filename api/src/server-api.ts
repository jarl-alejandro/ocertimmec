import http from 'http'
import mongoose from 'mongoose'

import socket from './socket.io'
import app from './app'
import config from './config'

const port = process.env.PORT || 8001

const server = http.createServer(app)
new socket({ server })

mongoose.Promise = global.Promise
mongoose.connect(config.DB)
.then(() => {
	console.log(`🎉 Conectado a la mongoDB: ${config.DB} `)
	server.listen(port, () => console.log(`🚀 Server running in port ${port}`))
})
