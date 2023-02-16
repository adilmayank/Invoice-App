import React from 'react'
import { useContext, useState } from 'react'

const Context = React.createContext()

export const AppProvider = ({ children }) => {
  const [customerName, setCustomerName] = useState('')
  const [customerABN, setCustomerABN] = useState('')
  const [customerEmail, setCustomerEmail] = useState('')
  const [stockCode, setStockCode] = useState('')
  const [description, setDescription] = useState('')
  const [quantity, setQuantity] = useState('')
  const [unitPrice, setUnitPrice] = useState('')
  const [submittedCustomerName, setSubmittedCustomerName] =
    useState('Customer Name')
  const [submittedCustomerABN, setSubmittedCustomerABN] =
    useState('Customer ABN')
  const [submittedCustomerEmail, setSubmittedCustomerEmail] =
    useState('Customer Email')

  function submitResponse() {
    console.log({
      submittedCustomerName,
      submittedCustomerABN,
      submittedCustomerEmail,
    })
  }

  const initialValues = {
    customerName,
    customerABN,
    customerEmail,
    stockCode,
    description,
    quantity,
    unitPrice,
    setCustomerName,
    setCustomerABN,
    setCustomerEmail,
    setStockCode,
    setDescription,
    setQuantity,
    setUnitPrice,
    submitResponse,
    submittedCustomerName,
    submittedCustomerABN,
    submittedCustomerEmail,
    setSubmittedCustomerName,
    setSubmittedCustomerABN,
    setSubmittedCustomerEmail,
  }

  return (
    <Context.Provider value={{ ...initialValues }}>{children}</Context.Provider>
  )
}

export const useAppContext = () => {
  return useContext(Context)
}
