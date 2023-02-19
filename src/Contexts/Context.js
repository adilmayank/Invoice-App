import React from 'react'
import { useContext, useState } from 'react'
import { SubmitAndReturnExcel } from '../Utilities/Api-Calls'
import { DownloadPdf } from '../Utilities/utils'

const Context = React.createContext()

export const AppProvider = ({ children }) => {
  const [customerName, setCustomerName] = useState('')
  const [customerABN, setCustomerABN] = useState('')
  const [customerEmail, setCustomerEmail] = useState('')
  const [stockCode, setStockCode] = useState('')
  const [description, setDescription] = useState('')
  const [quantity, setQuantity] = useState(0)
  const [unitPrice, setUnitPrice] = useState(0)
  const [subTotal, setSubTotal] = useState(0)
  const [submittedCustomerName, setSubmittedCustomerName] = useState('')
  const [submittedCustomerABN, setSubmittedCustomerABN] = useState('')
  const [submittedCustomerEmail, setSubmittedCustomerEmail] = useState('')
  const [gstRate, setGstRate] = useState(0)
  const [submittedGstRate, setSubmittedGstRate] = useState(0)
  const [submittedProducts, setSubmittedProducts] = useState([])

  function submitResponse() {
    const postBody = {
      submittedCustomerName,
      submittedCustomerABN,
      submittedCustomerEmail,
      submittedGstRate,
      submittedProducts,
    }

    const result = SubmitAndReturnExcel(postBody, {
      responseType: 'arraybuffer',
    })

    result
      .then((data) => {
        console.log(data.data)
        DownloadPdf(data.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  function resetProductState() {
    setStockCode('')
    setDescription('')
    setQuantity('')
    setUnitPrice('')
    setSubTotal('')
  }

  const initialValues = {
    customerName,
    customerABN,
    customerEmail,
    stockCode,
    description,
    quantity,
    unitPrice,
    subTotal,
    setCustomerName,
    setCustomerABN,
    setCustomerEmail,
    setStockCode,
    setDescription,
    setQuantity,
    setUnitPrice,
    setSubTotal,
    submitResponse,
    submittedCustomerName,
    submittedCustomerABN,
    submittedCustomerEmail,
    setSubmittedCustomerName,
    setSubmittedCustomerABN,
    setSubmittedCustomerEmail,
    submittedProducts,
    setSubmittedProducts,
    resetProductState,
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
