const ApiError = require('./ApiError')
console.log("🚀 NEW VALIDATOR FILE LOADED")

const MAX_PROMPT_LENGTH = 4000

/**
 * Validates the body of POST /api/generate before it reaches the controller.
 */
function validateGenerateRequest(req, res, next) {
  const { prompt } = req.body || {}

  if (!prompt || typeof prompt !== 'string') {
    return next(new ApiError(400, 'Field "prompt" is required and must be a string.'))
  }

  if (prompt.trim().length === 0) {
    return next(new ApiError(400, 'Field "prompt" cannot be empty.'))
  }

  if (prompt.length > MAX_PROMPT_LENGTH) {
    return next(new ApiError(413, 'Prompt exceeds the maximum accepted size.'))
  }

  req.body.prompt = prompt.trim()
  next()
}

module.exports = { validateGenerateRequest }
