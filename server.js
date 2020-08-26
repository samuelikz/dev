const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
app.use(cors())

app.use(bodyParser.urlencoded({ extended: true} ))
app.use(bodyParser.json())

const routes = require('./src/routes/usuarioRoutes.js')

routes(app)

app.route('/')
	.get((req, res) => {
		res.send('API-TODOLIST FUNCIONANDO')
	})

const port = process.env.PORT || 3000

app.listen(port)

console.log("Servidor funcionando na porta: ", port)