const axios = require('axios')
const config = require('../config')
const ApiError = require('../middleware/ApiError')

const aiClient = axios.create({
  baseURL: config.aiServiceUrl,
  timeout: config.aiServiceTimeoutMs,
  headers: { 'Content-Type': 'application/json' }
})

function inferProperties(prompt) {
  const normalizedPrompt = prompt.toLowerCase()

  if (
    normalizedPrompt.includes('lifepo4') ||
    normalizedPrompt.includes('lithium iron phosphate') ||
    normalizedPrompt.includes('battery')
  ) {
    return {
      formula: 'LiFePO4',
      chemicalFormula: 'LiFePO4',
      crystalSystem: 'Orthorhombic',
      density: '3.6',
      bandGap: '3.8',
      formationEnergy: '-4.2',
      thermalStability: 'High',
      electricalConductivity: 'Moderate',
      thermalConductivity: '4.5',
    }
  }

  return {
    formula: 'Generated material',
    chemicalFormula: 'Generated material',
    crystalSystem: 'Estimated',
    density: '3.2',
    bandGap: '2.1',
    formationEnergy: '-2.8',
    thermalStability: 'Moderate',
    electricalConductivity: 'Moderate',
    thermalConductivity: '3.4',
  }
}

async function generateCrystal(prompt) {
  try {
    const response = await aiClient.post('/predict', {
      prompt
    })

    const cifContent = response.data?.cif_content
    const properties = response.data?.properties || inferProperties(prompt)

    if (!cifContent) {
      throw new ApiError(
        502,
        'AI service responded without CIF content.'
      )
    }

    return { cifContent, properties }

  } catch (error) {

    if (error instanceof ApiError) throw error

    if (error.code === 'ECONNABORTED') {
      throw new ApiError(
        504,
        'AI service timeout.'
      )
    }

    if (error.code === 'ECONNREFUSED') {
      throw new ApiError(
        503,
        'Flask service not running.'
      )
    }

    throw new ApiError(
      500,
      'Failed to generate crystal.'
    )
  }
}

module.exports = {
  generateCrystal
}
