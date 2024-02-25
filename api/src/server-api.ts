import http from 'http'
import mongoose from 'mongoose'

import app from './app'
import config from './enviroments/config'
import {SocketIO} from './SocketIO';

const portAPI = process.env.PORT || 8001
const portWS = process.env.PORT || 8002

const server = http.createServer(app)
new SocketIO({ server: server })

mongoose.Promise = global.Promise
mongoose.connect(config.DB)
.then(() => {
	console.log(`🎉 Conectado a la mongoDB: ${config.DB} `)
	app.listen(portAPI, () => {
		console.log(`🚀 Server running in port ${portAPI}`);
	});

	server.listen(portWS, () => {
		console.log(`🚀 Server ws running in port ${portWS}`);
	});
})
