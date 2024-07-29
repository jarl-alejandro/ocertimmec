const env = process.env.NODE_ENV
const isDev = env === 'development'

export const BASE_URL = isDev
	? 'http://localhost:8001'
	: 'https://api.occertimmec.com'

export const BASE_URL_MEDIA = isDev
	? 'http://localhost:8001/media/'
	: 'https://api.occertimmec.com/media/'


