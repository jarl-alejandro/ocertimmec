const env = process.env.NODE_ENV

const dev = {
	DB: 'mongodb://localhost/db-occertimm',
	API: 'http://localhost:8001',
	URL: 'http://localhost:3001',
}

const prod = {
	DB: 'mongodb://localhost/db-occertimm',
	API: 'https://apiv2.occertimmec.com',
	URL: 'http://v2.occertimmec.com',
}

export default {
	JWT_SECRET: 'aslkdjlkaj10830912039jlkoaiuwerasdjflkasd',
	EMAIL: 'occertimmec@gmail.com',
	PASSWORD: 'jarl1997',
	...(env === 'production') ? prod : dev
}
