/* eslint-disable @typescript-eslint/no-var-requires */

const express = require('express')
require('express-async-errors')

const app = express()
const cors = require('./app/middlewares/cors')
app.use(cors)

const routes = require('./routes')
const erroHandler = require('./app/middlewares/errorHandler')

// ordem importa, nesse caso é importante o middleware vir primeiro para o body ser aplicado
app.use(express.json())
app.use(routes)
app.use(erroHandler)

app.listen(3001, () => console.log('Server started at http://localhost:3001'))
