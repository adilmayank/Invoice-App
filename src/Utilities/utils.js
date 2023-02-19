export const SubTotalOrder = (productList) => {
  const subTotalledList = productList.map((product) => {
    product['sub-total'] = product.quantity * product.unitPrice
    return product
  })

  return subTotalledList
}

export const SubAndGrandTotal = (gst, productList) => {
  const initialValues = {
    subTotal: 0,
    grandTotal: 0,
  }

  const result = productList.reduce((final, product) => {
    final.subTotal += parseFloat(product.subTotal)
    final.grandTotal += parseFloat(product.subTotal * (1 + gst / 100))
    return final
  }, initialValues)

  return result
}

export const DownloadPdf = async (arrayBuffer) => {
  const blob = new Blob([arrayBuffer], { type: 'application/pdf' })
  if (window.showSaveFilePicker) {
    const opts = {
      types: [
        {
          suggestedName: 'invoice.pdf',
          accept: { 'application/pdf': ['.pdf'] },
        },
      ],
    }
    const handle = await window.showSaveFilePicker(opts)
    const writable = await handle.createWritable()
    await writable.write(blob)
    writable.close()
  } else {
    const saveImg = document.createElement('a')
    saveImg.href = URL.createObjectURL(blob)
    saveImg.download = 'invoice.pdf'
    saveImg.click()
    setTimeout(() => URL.revokeObjectURL(saveImg.href), 60000)
  }
}
