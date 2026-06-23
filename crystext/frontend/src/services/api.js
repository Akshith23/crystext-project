import axios from 'axios'

const API_BASE_URL = 'http://127.0.0.1:5000'

const client = axios.create({
  baseURL: API_BASE_URL,
  timeout: 120000
})

export async function generateCrystal(prompt) {
  try {
    const response = await client.post('/generate', {
      prompt
    })

    return {
      success: true,
      data: response.data
    }
  } catch (error) {
    console.error(error)

    return {
      success: false,
      message:
        error?.response?.data?.message ||
        error?.message ||
        'Crystal generation failed.'
    }
  }
}

export default client