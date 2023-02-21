import axios from 'axios'

export const SubmitInvoiceData = (data) => {}

export const SubmitAndReturnExcel = async (data) => {
  const result = await axios.post(
    'https://invoice-app-backend-gkni.onrender.com/api/v1/generateExcel',
    data,
    {
      responseType: 'arraybuffer',
    }
  )
  console.log(result)
  return result
}
