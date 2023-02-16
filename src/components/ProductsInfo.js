import { Row, Col, Form, Button } from 'react-bootstrap'

const ProductsInfo = () => {
  return (
    <Row className="my-4">
      <Col md={5}>
        <Form>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md={4} htmlFor="stockCode">
              Stock Code
            </Form.Label>
            <Col md={8} className="pr-0">
              <Form.Control id="stockCode" placeholder="enter stock code..." />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md={4} htmlFor="description">
              Description
            </Form.Label>
            <Col md={8} className="pr-0">
              <Form.Control
                id="description"
                placeholder="enter description..."
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md={4} htmlFor="quantity">
              Quantity
            </Form.Label>
            <Col md={8} className="pr-0">
              <Form.Control id="quantity" placeholder="enter quantity..." />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md={4} htmlFor="unitPrice">
              Unit Price
            </Form.Label>
            <Col md={8} className="pr-0">
              <Form.Control id="unitPrice" placeholder="enter stock code..." />
            </Col>
          </Form.Group>
          <Row>
            <Col className="justify-content-end d-flex pr-0">
              <Button size="sm">Add</Button>
            </Col>
          </Row>
        </Form>
      </Col>
      <Col md={7}>Customer Info</Col>
    </Row>
  )
}
export default ProductsInfo
