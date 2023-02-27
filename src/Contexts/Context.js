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
  const [waitingForInvoice, setWaitingForInvoice] = useState(false)

  function submitResponse() {
    const postBody = {
      submittedCustomerName,
      submittedCustomerABN,
      submittedCustomerEmail,
      submittedGstRate,
      submittedProducts,
    }

    const validationResult =
      postBody.submittedCustomerName.length > 0 &&
      postBody.submittedCustomerABN.length > 0 &&
      postBody.submittedCustomerEmail.length > 0 &&
      postBody.submittedGstRate > 0 &&
      postBody.submittedProducts.length > 0

    if (validationResult) {
      setWaitingForInvoice(() => {
        return true
      })
      console.log('Now submitting response')
      SubmitAndReturnExcel(postBody, {
        responseType: 'arraybuffer',
      })
        .then((data) => {
          console.log(data.data)
          setWaitingForInvoice(false)
          DownloadPdf(data.data)
        })
        .catch((err) => {
          setWaitingForInvoice(false)
          console.log(err)
        })
    } else {
      alert(
        'Please fill the form completely. \nMake sure no input field is left blank and products list has atleast one item.'
      )
    }
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
    waitingForInvoice,
    setWaitingForInvoice,
  }

  return (
    <Context.Provider value={{ ...initialValues }}>{children}</Context.Provider>
  )
}

export const useAppContext = () => {
  return useContext(Context)
}
