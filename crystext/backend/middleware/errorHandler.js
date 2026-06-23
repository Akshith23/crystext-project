const config = require('../config')
const ApiError = require('./ApiError')

/**
 * Catches any error forwarded via next(err) and formats it into the
 * project's standard { success: false, message } response shape.
 */
function errorHandler(err, req, res, next) { // eslint-disable-line no-unused-vars
  const isApiError = err instanceof ApiError
  const statusCode = isApiError ? err.statusCode : err.statusCode || 500

  if (config.env === 'development' && !isApiError) {
    console.error(err)
  }

  res.status(statusCode).json({
    success: false,
    message: err.message || 'Internal server error'
  })
}

/**
 * Handles any request that didn't match a route.
 */
function notFoundHandler(req, res) {
  res.status(404).json({
    success: false,
    message: `Route not found: ${req.method} ${req.originalUrl}`
  })
}

module.exports = { errorHandler, notFoundHandler }
