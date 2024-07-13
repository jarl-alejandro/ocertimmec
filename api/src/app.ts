import bodyParser          from 'body-parser'
import certificate         from './api/certificate/application/api'
import cors                from 'cors'
import courses             from './api/courses/application/api'
import excel               from './excel'
import express             from 'express'
import fs                  from 'fs'
import inscriptions        from './api/inscriptions/application/api'
import messages            from './api/messages/application/api'
import path                from 'path'
import pdf                 from './api/managementSystemForms/infrastructure/routerReports'
import planning            from './api/planning/application/api'
import training            from './api/training/application/api'
import trainingCertificate from './api/training/infrastructure/report/reportCerficateOnAssisence'
import users               from './api/users/application/api'

const app = express()
const corsOptions: cors.CorsOptions = {
	origin: '*',
};

app.use(cors(corsOptions));
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
app.use(inscriptions)
app.use(training)
app.use(certificate)
app.use(planning)
app.use(pdf)
app.use(messages)
app.use(trainingCertificate)
app.use(courses)

export default app
