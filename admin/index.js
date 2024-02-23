const express = require('express')
const path = require('path')

const app = express()
app.use(express.static('build'));

app.get('*', (req, res) => {
	const pathFile = path.join(__dirname, 'build', 'index.html')
	res.sendFile(pathFile)
})

app.listen(5000, () => {
	console.log('Server running in 5000')
})
