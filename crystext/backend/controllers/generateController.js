const asyncHandler = require('../middleware/asyncHandler')
const aiService = require('../services/aiService')

const generateCrystal = asyncHandler(async (req, res) => {
  const { prompt } = req.body

  const { cifContent, properties } = await aiService.generateCrystal(prompt)

  res.status(200).json({
    success: true,
    cif_content: cifContent,
    properties,
    data: {
      cif_content: cifContent,
      properties
    },
  })
})

module.exports = {
  generateCrystal
}
