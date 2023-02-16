import React from 'react'
import { Row, Col, Form, Button, Container } from 'react-bootstrap'
import { useAppContext } from '../Contexts/Context'

const CustomerInfo = () => {
  const {
    customerName,
    setCustomerName,
    customerABN,
    setCustomerABN,
    customerEmail,
    setCustomerEmail,
    setSubmittedCustomerName,
    setSubmittedCustomerABN,
    setSubmittedCustomerEmail,
    submittedCustomerName,
    submittedCustomerABN,
    submittedCustomerEmail,
  } = useAppContext()

  const updateCustomerName = (e) => {
    setCustomerName(e.target.value)
  }
  const updateCustomerABN = (e) => {
    setCustomerABN(e.target.value)
  }
  const updateCustomerEmail = (e) => {
    setCustomerEmail(e.target.value)
  }

  const submitCustomerName = () => {
    if (customerName.trim() !== '') {
      setSubmittedCustomerName(customerName)
    }
  }
  const submitCustomerABN = () => {
    if (customerABN.trim() !== '') {
      setSubmittedCustomerABN(customerABN)
    }
  }
  const submitCustomerEmail = () => {
    if (customerEmail.trim() !== '') {
      setSubmittedCustomerEmail(customerEmail)
    }
  }

  return (
    <Row className="my-4">
      <Col md={5}>
        <Form>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md={4} htmlFor="customerName">
              Customer Name
            </Form.Label>
            <Col md={6}>
              <Form.Control
                id="customerName"
                placeholder="enter customer name..."
                value={customerName}
                onChange={(e) => updateCustomerName(e)}
              />
            </Col>
            <Col md={2} className="align-items-center d-flex">
              <Button size="sm" onClick={submitCustomerName}>
                Update
              </Button>
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md={4} htmlFor="customerAbn">
              Customer ABN
            </Form.Label>
            <Col md={6}>
              <Form.Control
                id="customerAbn"
                placeholder="enter customer abn..."
                value={customerABN}
                onChange={(e) => updateCustomerABN(e)}
              />
            </Col>
            <Col md={2} className="align-items-center d-flex">
              <Button size="sm" onClick={submitCustomerABN}>
                Update
              </Button>
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md={4} htmlFor="customerEmail">
              Customer Email
            </Form.Label>
            <Col md={6}>
              <Form.Control
                id="customerEmail"
                placeholder="enter customer email..."
                value={customerEmail}
                onChange={(e) => updateCustomerEmail(e)}
              />
            </Col>
            <Col md={2} className="align-items-center d-flex">
              <Button size="sm" onClick={submitCustomerEmail}>
                Update
              </Button>
            </Col>
          </Form.Group>
        </Form>
      </Col>
      <Col md={7} className="align-items-center d-flex">
        <Container className="h-100 border">
          <Row className="h-50 align-items-center">
            <Col md={6}>
              <Form.Control
                type="text"
                disabled
                value={submittedCustomerName}
              ></Form.Control>
            </Col>
            <Col md={6}>
              <Form.Control
                type="text"
                disabled
                value={submittedCustomerEmail}
              ></Form.Control>
            </Col>
          </Row>
          <Row className="h-50 align-items-center">
            <Col md={6}>
              <Form.Control
                type="text"
                disabled
                value={submittedCustomerABN}
              ></Form.Control>
            </Col>
          </Row>
        </Container>
      </Col>
    </Row>
  )
}
export default CustomerInfo
