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
      setCustomerName('')
    }
  }
  const submitCustomerABN = () => {
    if (customerABN.trim() !== '') {
      setSubmittedCustomerABN(customerABN)
      setCustomerABN('')
    }
  }
  const submitCustomerEmail = () => {
    if (customerEmail.trim() !== '') {
      setSubmittedCustomerEmail(customerEmail)
      setCustomerEmail('')
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

      <Col md={7} className="small-text">
        <Container className="h-100 border p-3">
          <Row className="h-50 mb-2 align-items-center">
            <Col md={6}>
              <Form.Group as={Row}>
                <Form.Label
                  className="d-flex align-items-center"
                  column
                  md={4}
                  htmlFor="submittedCustomerName"
                >
                  Name:
                </Form.Label>
                <Col md={8}>
                  <Form.Control
                    id="submittedCustomerName"
                    disabled
                    value={submittedCustomerName}
                    size="sm"
                  ></Form.Control>
                </Col>
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group as={Row}>
                <Form.Label
                  className="d-flex align-items-center"
                  column
                  md={4}
                  htmlFor="submittedCustomerABN"
                >
                  ABN:
                </Form.Label>
                <Col md={8}>
                  <Form.Control
                    id="submittedCustomerABN"
                    value={submittedCustomerABN}
                    size="sm"
                    disabled
                  ></Form.Control>
                </Col>
              </Form.Group>
            </Col>
          </Row>
          <Row className="h-50 mb-2 align-items-center">
            <Col md={6}>
              <Form.Group as={Row}>
                <Form.Label
                  className="d-flex align-items-center"
                  column
                  md={4}
                  htmlFor="submittedCustomerEmail"
                >
                  Email
                </Form.Label>
                <Col md={8}>
                  <Form.Control
                    id="submittedCustomerEmail"
                    value={submittedCustomerEmail}
                    size="sm"
                    disabled
                  ></Form.Control>
                </Col>
              </Form.Group>
            </Col>
            <Col md={6}>&nbsp;</Col>
          </Row>
        </Container>
      </Col>
    </Row>
  )
}
export default CustomerInfo
