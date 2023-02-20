import React from 'react'
import { useContext, useState } from 'react'
import { SubmitAndReturnExcel } from '../Utilities/Api-Calls'
import { DownloadPdf } from '../Utilities/utils'

const Context = React.createContext()

export const AppProvider = ({ children }) => {
  const [customerName, setCustomerName] = useState('')
  const [customerABN, setCustomerABN] = useState('')
  const [customerEmail, setCustomerEmail] = useState('')
  const [submittedCustomerName, setSubmittedCustomerName] = useState('')
  const [submittedCustomerABN, setSubmittedCustomerABN] = useState('')
  const [submittedCustomerEmail, setSubmittedCustomerEmail] = useState('')
  const [gstRate, setGstRate] = useState('')
  const [submittedGstRate, setSubmittedGstRate] = useState(18)
  const [submittedProducts, setSubmittedProducts] = useState([])

  function submitResponse() {
    const postBody = {
      submittedCustomerName,
      submittedCustomerABN,
      submittedCustomerEmail,
      submittedGstRate,
      submittedProducts,
    }

    SubmitAndReturnExcel(postBody, {
      responseType: 'arraybuffer',
    })
      .then((data) => {
        console.log(data.data)
        DownloadPdf(data.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const initialValues = {
    customerName,
    customerABN,
    customerEmail,
    setCustomerName,
    setCustomerABN,
    setCustomerEmail,
    submitResponse,
    submittedCustomerName,
    submittedCustomerABN,
    submittedCustomerEmail,
    setSubmittedCustomerName,
    setSubmittedCustomerABN,
    setSubmittedCustomerEmail,
    submittedProducts,
    setSubmittedProducts,
    gstRate,
    setGstRate,
    submittedGstRate,
    setSubmittedGstRate,
  }

  return (
    <Context.Provider value={{ ...initialValues }}>{children}</Context.Provider>
  )
}

export const useAppContext = () => {
  return useContext(Context)
}
