const express = require('express')
const cors = require('cors')
require('dotenv').config()
require('./config/database')
const router = require('./routes/index')


const app = express()

app.use(cors())
app.use(express.json())


app.use('/', router)

const port = process.env.PORT
const host = process.env.HOST || '0.0.0.0'
app.listen(port, host, () => console.log('App listening on port 4000'))