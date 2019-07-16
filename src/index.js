const express = require('express')
const cors = require('cors')
const session = require('express-session')
const helmet = require('helmet')

// Make environment variables from the .env file available in our nodejs app
require('dotenv').config()

const routes = require('./routes')
const { availableEndpoints } = require('./constants')

const app = express()

const sess = {
  secret: process.env.SECRET,
  cookie: {},
}

if (process.env.NODE_ENV === 'production') {
  app.set('trust proxy', 1) // trust first proxy
  sess.cookie.secure = true // serve secure cookies
}

app.use(session(sess))
app.use(helmet())
app.use(cors())

app.get('/', (req, res) =>
  res.status(200).json({ message: 'Server OK', availableEndpoints })
)
app.use('/api/v1', routes)
app.use('/api/v1/static', express.static('public'))

app.listen(process.env.PORT || 3000)
