import React from 'react'
import { Row, Col, Form, Button, Container, Stack } from 'react-bootstrap'
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
      console.log('Hi')
      setSubmittedCustomerName((state) => {
        return customerName
      })
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

  React.useEffect(() => {
    inputFieldsData = [
      {
        text: 'Customer Name',
        id: 'customerName',
        value: customerName,
        onChangeHandler: updateCustomerName,
        onSubmitHandler: submitCustomerName,
      },
      {
        text: 'Customer ABN',
        id: 'customerABN',
        value: customerABN,
        onChangeHandler: updateCustomerABN,
        onSubmitHandler: submitCustomerABN,
      },
      {
        text: 'Customer Email',
        id: 'customerEmail',
        value: customerEmail,
        onChangeHandler: updateCustomerEmail,
        onSubmitHandler: submitCustomerEmail,
      },
    ]

    submittedFieldsData = [
      { id: 'submittedCustomerName', value: submittedCustomerName },
      { id: 'submittedCustomerABN', value: submittedCustomerABN },
      { id: 'submittedCustomerEmail', value: submittedCustomerEmail },
    ]
  }, [submittedCustomerName, submittedCustomerABN, submittedCustomerEmail])

  let inputFieldsData = [
    {
      text: 'Customer Name',
      id: 'customerName',
      value: customerName,
      onChangeHandler: updateCustomerName,
      onSubmitHandler: submitCustomerName,
    },
    {
      text: 'Customer ABN',
      id: 'customerABN',
      value: customerABN,
      onChangeHandler: updateCustomerABN,
      onSubmitHandler: submitCustomerABN,
    },
    {
      text: 'Customer Email',
      id: 'customerEmail',
      value: customerEmail,
      onChangeHandler: updateCustomerEmail,
      onSubmitHandler: submitCustomerEmail,
    },
  ]

  let submittedFieldsData = [
    { id: 'submittedCustomerName', value: submittedCustomerName },
    { id: 'submittedCustomerABN', value: submittedCustomerABN },
    { id: 'submittedCustomerEmail', value: submittedCustomerEmail },
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
                  <Form.Control
                    id={item.id}
                    value={item.value}
                    onChange={(e) => item.onChangeHandler(e)}
                  />
                </Col>
                <Col xs={2} lg={3} className="justify-content-end">
                  <Button size="sm" onClick={item.onSubmitHandler}>
                    Update
                  </Button>
                </Col>
              </Form.Group>
            </Form>
          )
        })}
      </Stack>

      <Stack
        as={Col}
        className="border bordered-container p-3 mx-1 my-1 my-lg-0"
      >
        {submittedFieldsData.map((item, key) => {
          return (
            <Form className="mb-3" key={key}>
              <Form.Group as={Row} className="info-input-row">
                <Col>
                  <Form.Control id={item.id} disabled value={item.value} />
                </Col>
                <Col xs={2} lg={2} className="justify-content-end mt-2 mt-lg-0">
                  <Button variant="warning" size="sm" disabled>
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
export default CustomerInfo
