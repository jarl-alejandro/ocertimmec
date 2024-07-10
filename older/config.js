const env = process.env.NODE_ENV

const dev = {
	BASE_URL: 'http://localhost:8001',
	BASE_URL_MEDIA: 'http://localhost:8001/media',
}

const prod = {
	BASE_URL: 'https://api.occertimmec.com',
	BASE_URL_MEDIA: 'https://api.occertimmec.com/media',
}

//export default env === 'production' ? prod : dev
export default prod
