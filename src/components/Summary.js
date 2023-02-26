import React from 'react'
import { Row, Col, Form, Button, Container, Stack } from 'react-bootstrap'
import { useAppContext } from '../Contexts/Context'
import { SubAndGrandTotal } from '../Utilities/utils'

const Summary = () => {
  const [subTotalValue, setSubTotalValue] = React.useState('')
  const [grandTotalValue, setGrandTotalValue] = React.useState('')

  const {
    gstRate,
    setGstRate,
    submittedGstRate,
    setSubmittedGstRate,
    submittedProducts,
  } = useAppContext()

  const updateGstRate = (e) => {
    setGstRate(e.target.value)
  }
  const submitGstRate = () => {
    if (gstRate != 0 || gstRate != '') {
      setSubmittedGstRate(gstRate)
      setGstRate("")
    }
  }

  React.useEffect(() => {
    const summary = SubAndGrandTotal(submittedGstRate, submittedProducts)
    if (submittedProducts.length > 0) {
      setSubTotalValue(summary.subTotal.toFixed(2))
      setGrandTotalValue(summary.grandTotal.toFixed(2))
    } else {
      setSubTotalValue('')
      setGrandTotalValue('')
    }
  }, [submittedProducts, submittedGstRate])

  const outputFieldData = [
    {
      text: 'GST (%): ',
      value: submittedGstRate,
      id: 'gstRate',
      display: 'unset',
      disabled: true,
      onChangeHandler: updateGstRate,
    },
    {
      text: 'Sub-Total: ',
      value: subTotalValue,
      id: 'subTotal',
      display: 'unset',
      disabled: true,
    },
    {
      text: '\u00A0',
      value: '',
      id: 'empty-div',
      display: 'none',
      disabled: true,
    },
    {
      text: 'Grand Total: ',
      value: grandTotalValue,
      id: 'grandTotal',
      display: 'unset',
      disabled: true,
    },
  ]

  return (
    <Stack as={Row} className="my-3">
      {/* Gst Rate Input container */}
      <Stack
        as={Col}
        lg={5}
        xl={5}
        className="border bordered-container mx-1 p-3 controlled-text my-1 my-lg-0"
      >
        <Form>
          <Form.Group as={Row} className=" px-3 info-input-row">
            <Col xs={3} lg={4} className="p-0">
              <Form.Label htmlFor="gstRate">GST (%)</Form.Label>
            </Col>
            <Col className="p-0">
              <Form.Control
                id="gstRate"
                type="number"
                min={0}
                step={0.1}
                value={gstRate}
                onChange={(e) => updateGstRate(e)}
              />
            </Col>
            <Col
              lg={3}
              xs={2}
              className="p-0 align-items-center justify-content-end d-flex"
            >
              <Button size="sm" onClick={submitGstRate}>
                Update
              </Button>
            </Col>
          </Form.Group>
        </Form>
      </Stack>
      <Stack
        as={Col}
        className="border bordered-container mx-1 p-3 small-controlled-text my-1 my-lg-0"
      >
        <Row className="align-items-center">
          {outputFieldData.map((item, key) => {
            return (
              <Col
                lg={6}
                key={key}
                className={`${item.display !== 'none' ? 'mb-1 mt-1' : ''}`}
              >
                <Form.Group
                  as={Row}
                  className="info-input-row"
                  style={{
                    height: `${item.display === 'none' ? '0px' : 'auto'}`,
                  }}
                >
                  <Col lg={4} xs={3}>
                    <Form.Label
                      className="d-flex align-items-center"
                      htmlFor={item.id}
                    >
                      {item.text}
                    </Form.Label>
                  </Col>
                  <Col>
                    <Form.Control
                      id={item.id}
                      value={item.value}
                      disabled={item.disabled}
                      style={{ display: item.display }}
                    />
                  </Col>
                </Form.Group>
              </Col>
            )
          })}
        </Row>
      </Stack>
    </Stack>
  )
}
export default Summary
