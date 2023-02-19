import {
  Row,
  Col,
  Form,
  Button,
  Table,
  Container,
  ButtonGroup,
} from 'react-bootstrap'
import { useAppContext } from '../Contexts/Context'
import React from 'react'
import { SubTotalOrder } from '../Utilities/utils'
import { MdDeleteForever, MdEdit } from 'react-icons/md'

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
    submittedProducts,
    setSubmittedProducts,
    resetProductState,
  } = useAppContext()

  React.useEffect(() => {}, [submittedProducts])

  const handleSubmit = () => {
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
                value={stockCode}
                onChange={(e) => setStockCode(e.target.value)}
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
                type="text"
                onChange={(e) => setDescription(e.target.value)}
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
                type="number"
                min={0}
                onChange={(e) => setQuantity(e.target.value)}
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
                min={0}
                onChange={(e) => setUnitPrice(e.target.value)}
              />
            </Col>
          </Form.Group>
          <Row>
            <Col className="justify-content-end d-flex pr-0">
              <Button size="sm" onClick={handleSubmit}>
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
