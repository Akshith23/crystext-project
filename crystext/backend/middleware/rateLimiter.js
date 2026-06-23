const rateLimit = require('express-rate-limit')
const config = require('../config')

/**
 * Applies a sliding-window rate limit to all /api routes to protect the
 * generation endpoints from abuse.
 */
const apiRateLimiter = rateLimit({
  windowMs: config.rateLimitWindowMs,
  max: config.rateLimitMax,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message: 'Too many requests. Please try again shortly.'
  }
})

module.exports = apiRateLimiter
