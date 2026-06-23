const express = require('express')
const generateRoutes = require('./generateRoutes')
const healthRoutes = require('./healthRoutes')

const router = express.Router()

router.use('/generate', generateRoutes)
router.use('/health', healthRoutes)

module.exports = router
