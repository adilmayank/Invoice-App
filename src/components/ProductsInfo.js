import {
  Row,
  Col,
  Form,
  Button,
  Table,
  Container,
  ButtonGroup,
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

  return (
    <Row className="my-4 productsInfoContainer">
      <Col md={5}>
        <Form>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md={4} htmlFor="stockCode">
              Stock Code
            </Form.Label>
            <Col md={8} className="pr-0">
              <Form.Control
                id="stockCode"
                className={`${errors.stockCode ? 'border-danger' : ''}`}
                value={stockCode}
                onChange={(e) => handleChange(e)}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md={4} htmlFor="description">
              Description
            </Form.Label>
            <Col md={8} className="pr-0">
              <Form.Control
                id="description"
                value={description}
                className={`${errors.description ? 'border-danger' : ''}`}
                type="text"
                onChange={(e) => handleChange(e)}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md={4} htmlFor="quantity">
              Quantity
            </Form.Label>
            <Col md={8} className="pr-0">
              <Form.Control
                id="quantity"
                value={quantity}
                className={`${errors.quantity ? 'border-danger' : ''}`}
                type="number"
                min={0}
                onChange={(e) => handleChange(e)}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md={4} htmlFor="unitPrice">
              Unit Price
            </Form.Label>
            <Col md={8} className="pr-0">
              <Form.Control
                id="unitPrice"
                value={unitPrice}
                type="number"
                className={`${errors.unitPrice ? 'border-danger' : ''}`}
                min={0}
                onChange={(e) => handleChange(e)}
              />
            </Col>
          </Form.Group>
          <Row>
            <Col className="justify-content-end d-flex pr-0">
              <Button size="sm" onClick={() => handleSubmit()}>
                Add
              </Button>
            </Col>
          </Row>
        </Form>
      </Col>
      <Col md={7} className="h-100">
        <Container className="y-scroll h-100 border">
          <Table
            striped
            size="sm"
            bordered
            hover
            className="my-3 text-center product-table "
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
                      <td colSpan={1} className="d-flex justify-content-around">
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
    </Row>
  )
}
export default ProductsInfo
