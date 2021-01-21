const express = require('express')
const cors = require('cors')
const router = require('./routes/index')

const app = express()

app.use(cors())

app.use('/', router)

app.listen(4000, () => console.log('App listening on port 4000'))