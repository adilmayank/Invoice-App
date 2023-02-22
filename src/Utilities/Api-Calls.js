import axios from 'axios'

export const SubmitInvoiceData = (data) => {}

export const SubmitAndReturnExcel = async (data) => {
  let API_URL
  if (process.env.NODE_ENV === 'development') {
    API_URL = 'http://localhost:5000/api/v1/generateExcel'
  } else if (process.env.NODE_ENV === 'production') {
    API_URL =
      'https://invoice-app-backend-gkni.onrender.com/api/v1/generateExcel'
  }
  try {
    const result = await axios.post(API_URL, data, {
      responseType: 'arraybuffer',
    })
    console.log(result)
    return result
  } catch (error) {
    console.log(error)
    return error
  }
}
