const config = require('../config')

/**
 * GET /api/health
 * Simple liveness check for uptime monitors and load balancers.
 */
function healthCheck(req, res) {
  res.status(200).json({
    success: true,
    data: {
      status: 'ok',
      environment: config.env,
      timestamp: new Date().toISOString()
    }
  })
}

module.exports = { healthCheck }
