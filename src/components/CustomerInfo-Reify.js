import React from 'react'
import { Row, Col, Form, Button, Container, Stack } from 'react-bootstrap'
import { useAppContext } from '../Contexts/Context'

const CustomerInfoReify = () => {
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

  const someFunction = () => {
    return null
  }

  const inputFieldsData = [
    {
      text: 'Customer Name',
      id: 'customerName',
      handler: someFunction,
    },
    {
      text: 'Customer ABN',
      id: 'customerABN',
      handler: someFunction,
    },
    {
      text: 'Customer Email',
      id: 'customerEmail',
      handler: someFunction,
    },
  ]

  const submittedFieldsData = [
    { id: 'submittedCustomerName', handler: someFunction },
    { id: 'submittedCustomerABN', handler: someFunction },
    { id: 'submittedCustomerEmail', handler: someFunction },
  ]

  return (
    <Stack as={Row} className="my-3">
      <Stack
        as={Col}
        lg={5}
        xl={5}
        className="border bordered-container mx-1 p-3 controlled-text my-1 my-lg-0"
      >
        {inputFieldsData.map((item, key) => {
          return (
            <Form className="mb-3" key={key}>
              <Form.Group as={Row} className="info-input-row">
                <Col xs={4} lg={4}>
                  <Form.Label htmlFor={item.id}>{item.text}</Form.Label>
                </Col>
                <Col>
                  <Form.Control id={item.id} />
                </Col>
                <Col xs={2} lg={3} className="justify-content-end">
                  <Button size="sm">Update</Button>
                </Col>
              </Form.Group>
            </Form>
          )
        })}
      </Stack>

      <Stack as={Col} className="border bordered-container p-3 mx-1 my-1 my-lg-0">
        {submittedFieldsData.map((item, key) => {
          return (
            <Form className="mb-3" key={key}>
              <Form.Group as={Row} className="info-input-row">
                <Col>
                  <Form.Control id={item.id} disabled />
                </Col>
                <Col xs={2} lg={2} className="justify-content-end mt-2 mt-lg-0">
                  <Button variant="warning" size="sm">
                    Edit
                  </Button>
                </Col>
              </Form.Group>
            </Form>
          )
        })}
      </Stack>
    </Stack>
  )
}
export default CustomerInfoReify
