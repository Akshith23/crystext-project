/**
 * Wraps an async route handler so rejected promises are forwarded to
 * Express's error-handling middleware instead of crashing the process.
 * @param {(req: import('express').Request, res: import('express').Response, next: import('express').NextFunction) => Promise<any>} fn
 */
function asyncHandler(fn) {
  return function wrapped(req, res, next) {
    Promise.resolve(fn(req, res, next)).catch(next)
  }
}

module.exports = asyncHandler
