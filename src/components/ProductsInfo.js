import {
  Row,
  Col,
  Form,
  Button,
  Table,
  Container,
  ButtonGroup,
  Stack,
} from 'react-bootstrap'
import { useProductContext } from '../Contexts/ProductContext'
import { useAppContext } from '../Contexts/Context'
import React from 'react'

const ProductsInfo = () => {
  const {
    stockCode,
    setStockCode,
    description,
    setDescription,
    quantity,
    setQuantity,
    unitPrice,
    setUnitPrice,
    submitProduct,
    errors,
    setErrors,
  } = useProductContext()

  const { submittedProducts, setSubmittedProducts } = useAppContext()
  React.useEffect(() => {}, [submittedProducts, errors])

  const updateValidationFlags = () => {
    let tempErrors = errors
    if (stockCode.trim() === '') {
      tempErrors.stockCode = true
    } else tempErrors.stockCode = false
    if (description.trim() === '') {
      tempErrors.description = true
    } else tempErrors.description = false
    if (quantity === '' || quantity === 0 || quantity === '0') {
      tempErrors.quantity = true
    } else tempErrors.quantity = false
    if (unitPrice === '' || unitPrice === 0 || unitPrice === '0') {
      tempErrors.unitPrice = true
    } else tempErrors.unitPrice = false

    setErrors({ ...tempErrors })
  }

  const handleSubmit = async () => {
    updateValidationFlags()
    const isInvalid = Object.values(errors).reduce((final, current) => {
      return final || current
    })
    if (!isInvalid) {
      submitProduct(submittedProducts, setSubmittedProducts)
    }
  }

  const handleChange = (e) => {
    let tempErrors = errors
    if (e.target.id === 'stockCode') {
      setStockCode(e.target.value)
      tempErrors.stockCode = false
    }
    if (e.target.id === 'description') {
      setDescription(e.target.value)
      tempErrors.description = false
    }
    if (e.target.id === 'quantity') {
      setQuantity(e.target.value)
      tempErrors.quantity = false
    }
    if (e.target.id === 'unitPrice') {
      setUnitPrice(e.target.value)
      tempErrors.unitPrice = false
    }
    setErrors({ ...tempErrors })
  }

  const handleRemoveItem = (e) => {
    const newSubmittedProducts = submittedProducts.filter((product) => {
      if (product.stockCode !== e.target.id) {
        return product
      }
    })
    setSubmittedProducts(newSubmittedProducts)
  }

  const handleEditItem = (e) => {
    const newSubmittedProducts = submittedProducts.filter((product) => {
      if (product.stockCode !== e.target.id) {
        return product
      } else {
        setStockCode(product.stockCode)
        setDescription(product.description)
        setQuantity(product.quantity)
        setUnitPrice(product.unitPrice)
      }
    })
    setSubmittedProducts(newSubmittedProducts)
  }

  let inputFieldData = [
    {
      text: 'Stock Code',
      id: 'stockCode',
      isError: errors.stockCode,
      value: stockCode,
    },
    {
      text: 'Description',
      id: 'description',
      value: description,
      isError: errors.description,
    },
    {
      text: 'Quantity',
      id: 'quantity',
      value: quantity,
      validations: { type: 'number', min: 0, step: 1 },
      isError: errors.quantity,
    },
    {
      text: 'Unit Price',
      id: 'unitPrice',
      value: unitPrice,
      validations: { type: 'number', min: 0, step: 0.1 },
      isError: errors.unitPrice,
    },
  ]

  return (
    <Stack as={Row}>
      {/* Products input container */}
      <Stack
        as={Col}
        lg={5}
        xl={5}
        className="border bordered-container mx-1 p-3 controlled-text my-1 my-lg-0"
      >
        <Form>
          {inputFieldData.map((item, key) => {
            return (
              <Form.Group
                as={Row}
                key={key}
                className="mb-3 px-3 info-input-row"
              >
                <Col xs={3} lg={4} className="p-0">
                  <Form.Label htmlFor={item.id}>{item.text}</Form.Label>
                </Col>
                <Col xs={9} lg={8} className="p-0">
                  <Form.Control
                    id={item.id}
                    className={`${item.isError ? 'border-danger' : ''}`}
                    value={item.value}
                    min={item.validations?.min}
                    step={item.validations?.step}
                    type={item.validations?.type}
                    onChange={(e) => handleChange(e)}
                  />
                </Col>
              </Form.Group>
            )
          })}
          <Row className=" p-0">
            <Col className="justify-content-end d-flex">
              <Button size="sm" onClick={() => handleSubmit()}>
                Add
              </Button>
            </Col>
          </Row>
        </Form>
      </Stack>

      {/* Submitted products table container */}
      <Stack
        as={Col}
        className="controlled-text p-3 mx-1 border bordered-container my-1 my-lg-0"
      >
        <Col className="y-scroll pl-0 product-list-table ">
          <Container>
            <Table
              striped
              size="sm"
              bordered
              hover
              className="text-center product-table"
            >
              <thead>
                <tr>
                  <th colSpan={1}>Sno</th>
                  <th colSpan={2}>Code</th>
                  <th colSpan={3}>Description</th>
                  <th colSpan={1}>Qty</th>
                  <th colSpan={2}>Unit Price</th>
                  <th colSpan={2}>Total Price</th>
                  <th colSpan={1}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {submittedProducts.length > 0 ? (
                  submittedProducts.map((item, index) => {
                    return (
                      <tr key={index + 1}>
                        <td colSpan={1}>{index + 1}</td>
                        <td colSpan={2}>{item.stockCode}</td>
                        <td colSpan={3}>{item.description}</td>
                        <td colSpan={1}>{item.quantity}</td>
                        <td colSpan={2}>{item.unitPrice}</td>
                        <td colSpan={2}>{item.subTotal}</td>
                        <td
                          colSpan={1}
                          className="d-flex justify-content-around"
                        >
                          <ButtonGroup>
                            <Button
                              size="sm"
                              variant="warning"
                              id={item.stockCode}
                              className="smaller-button"
                              onClick={(e) => handleEditItem(e)}
                            >
                              E
                            </Button>
                            <Button
                              size="sm"
                              variant="danger"
                              id={item.stockCode}
                              className="smaller-button "
                              onClick={(e) => handleRemoveItem(e)}
                            >
                              D
                            </Button>
                          </ButtonGroup>
                        </td>
                      </tr>
                    )
                  })
                ) : (
                  <tr></tr>
                )}
              </tbody>
            </Table>
          </Container>
        </Col>
      </Stack>
    </Stack>
  )
}
export default ProductsInfo
