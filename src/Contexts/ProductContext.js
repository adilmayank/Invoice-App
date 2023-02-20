import React from 'react'
import { useState, useContext, createContext } from 'react'

const ProductContext = createContext()

export const ProductProvider = ({ children }) => {
  const [stockCode, setStockCode] = useState('')
  const [description, setDescription] = useState('')
  const [quantity, setQuantity] = useState('')
  const [unitPrice, setUnitPrice] = useState('')
  const [subTotal, setSubTotal] = useState('')

  // For validation error state
  const [errors, setErrors] = useState({
    stockCode: false,
    description: false,
    quantity: false,
    unitPrice: false,
  })

  function resetProductState() {
    setStockCode('')
    setDescription('')
    setQuantity('')
    setUnitPrice('')
    setSubTotal('')
  }

  const submitProduct = (submittedProducts, setSubmittedProducts) => {
    const tempSubmittedResponse = {
      stockCode,
      description,
      quantity,
      unitPrice,
      subTotal: (unitPrice * quantity).toFixed(2),
    }

    setSubmittedProducts([...submittedProducts, tempSubmittedResponse])
    resetProductState()
  }

  const intialValues = {
    stockCode,
    description,
    quantity,
    unitPrice,
    subTotal,
    setStockCode,
    setDescription,
    setQuantity,
    setUnitPrice,
    setSubTotal,
    resetProductState,
    errors,
    setErrors,
    submitProduct,
  }

  return (
    <ProductContext.Provider value={{ ...intialValues }}>
      {children}
    </ProductContext.Provider>
  )
}

export const useProductContext = () => {
  return useContext(ProductContext)
}
