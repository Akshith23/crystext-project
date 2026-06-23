const express = require('express')
const { validateGenerateRequest } = require('../middleware/validateRequest')
const { generateCrystal } = require('../controllers/generateController')

const router = express.Router()

router.post('/', validateGenerateRequest, generateCrystal)

module.exports = router
