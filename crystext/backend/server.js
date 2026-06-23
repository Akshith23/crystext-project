const express = require('express')
const cors = require('cors')
const helmet = require('helmet')

const config = require('./config')
const apiRoutes = require('./routes')
const apiRateLimiter = require('./middleware/rateLimiter')
const { errorHandler, notFoundHandler } = require('./middleware/errorHandler')

const app = express()

// --- Security & parsing middleware ---------------------------------------
app.use(helmet())
app.use(
  cors({
    origin: config.corsOrigins.includes('*') ? true : config.corsOrigins,
    methods: ['GET', 'POST'],
    credentials: true
  })
)
app.use(express.json({ limit: '2mb' }))
app.use(express.urlencoded({ extended: true }))
app.use('/api', apiRateLimiter)

// --- Routes ----------------------------------------------------------------
app.get('/', (req, res) => {
  res.json({ success: true, data: { message: 'CrysText API is running.' } })
})

app.use('/api', apiRoutes)

// --- Error handling (must be registered last) ------------------------------
app.use(notFoundHandler)
app.use(errorHandler)

app.listen(config.port, () => {
  console.log(`CrysText backend listening on port ${config.port} [${config.env}]`)
  console.log(`AI service expected at ${config.aiServiceUrl}`)
})

module.exports = app
