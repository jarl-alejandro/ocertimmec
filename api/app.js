import express             from 'express'
import bodyParser          from 'body-parser'
import cors                from 'cors'
import path                from 'path'
import fs                  from 'fs'


import users               from './api/users/api'
import courses             from './api/courses/api'
import training            from './api/training/api'
import certificate         from './api/certificate/api'
import planning            from './api/planning/api'
import pdf                 from './api/pdf/router'
import messages            from './api/messages/api'
import trainingCertificate from './api/trainingCertificate'

import excel               from './excel'

const app = express()

app.use(cors('*'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => res.send('API of occertimm'))

app.get('/media/:imagen', (req, res) => {
	let imagen = req.params.imagen
	let photo = path.join(__dirname, '..', 'media', `${imagen}`)
	let rs = fs.createReadStream(photo)
	rs.pipe(res)

	rs.on('error', function (err) {
		res.send(err.message)
	})
})


app.get('/font/:fontName', (req, res) => {
	let photo = path.join(__dirname, 'font', req.params.fontName)
	let rs = fs.createReadStream(photo)
	rs.pipe(res)

	rs.on('error', function (err) {
		res.send(err.message)
	})
})
app.get('/fuentes', (req, res) => {
	let photo = path.join(__dirname, 'fonts.ttf')
	let rs = fs.createReadStream(photo)
	rs.pipe(res)

	rs.on('error', function (err) {
		res.send(err.message)
	})
})
app.get('/logo/occertimm', (req, res) => {
	let photo = path.join(__dirname, 'logo.png')
	let rs = fs.createReadStream(photo)
	rs.pipe(res)

	rs.on('error', function (err) {
		res.send(err.message)
	})
})

app.get('/fotos-pdf/:foto', (req, res) => {
	let photo = path.join(__dirname, 'fotospdf', req.params.foto)
	let rs = fs.createReadStream(photo)
	rs.pipe(res)

	rs.on('error', function (err) {
		res.send(err.message)
	})
})



app.get('/excel', excel)

app.use(users)
app.use(courses)
app.use(training)
app.use(certificate)
app.use(planning)
app.use(pdf)
app.use(messages)
app.use(trainingCertificate)

export default app
