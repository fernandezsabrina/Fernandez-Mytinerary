const express = require('express')
const cors = require('cors')
require('dotenv').config()
require('./config/database')
const router = require('./routes/index')


const app = express()

app.use(cors())
app.use(express.json())


app.use('/', router)

app.listen(4000, () => console.log('App listening on port 4000'))