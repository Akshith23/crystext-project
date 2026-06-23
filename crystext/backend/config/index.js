require('dotenv').config()

const config = {
  env: process.env.NODE_ENV || 'development',
  port: parseInt(process.env.PORT, 10) || 4000,

  // Comma-separated list of allowed origins for CORS. '*' allows any origin.
  corsOrigins: (process.env.CORS_ORIGIN || 'http://localhost:5173')
    .split(',')
    .map((origin) => origin.trim()),

  // Rate limiting.
  rateLimitWindowMs: parseInt(process.env.RATE_LIMIT_WINDOW_MS, 10) || 15 * 60 * 1000,
  rateLimitMax: parseInt(process.env.RATE_LIMIT_MAX, 10) || 100,

  // Python Flask AI inference service.
  aiServiceUrl: process.env.AI_SERVICE_URL || 'http://localhost:5000',
  aiServiceTimeoutMs: parseInt(process.env.AI_SERVICE_TIMEOUT_MS, 10) || 120000
}

module.exports = config
