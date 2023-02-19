import React from 'react'
import { Row, Col, Form, Button, Container } from 'react-bootstrap'
import { useAppContext } from '../Contexts/Context'
import { SubAndGrandTotal } from '../Utilities/utils'

const Summary = () => {
  const [subTotalValue, setSubTotalValue] = React.useState(0)
  const [grandTotalValue, setGrandTotalValue] = React.useState(0)

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
    setSubmittedGstRate(gstRate)
    setGstRate(0)
  }

  React.useEffect(() => {
    const summary = SubAndGrandTotal(submittedGstRate, submittedProducts)
    setSubTotalValue(summary.subTotal.toFixed(2))
    setGrandTotalValue(summary.grandTotal.toFixed(2))
  }, [submittedProducts, submittedGstRate])

  return (
    <Row className="my-4">
      <Col md={5}>
        <Form>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md={4} htmlFor="gstRate">
              Gst (in %)
            </Form.Label>
            <Col md={6}>
              <Form.Control
                id="gstRate"
                placeholder="enter gst rate..."
                value={gstRate}
                type="number"
                onChange={(e) => updateGstRate(e)}
                min={0}
              />
            </Col>
            <Col md={2} className="align-items-center d-flex">
              <Button size="sm" onClick={submitGstRate}>
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
                  htmlFor="submittedGst"
                  size="sm"
                >
                  GST (%):
                </Form.Label>
                <Col md={8}>
                  <Form.Control
                    id="submittedGst"
                    disabled
                    value={submittedGstRate}
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
                  htmlFor="subTotal"
                >
                  Sub Total:
                </Form.Label>
                <Col md={8}>
                  <Form.Control
                    id="subTotal"
                    value={subTotalValue}
                    size="sm"
                    disabled
                  ></Form.Control>
                </Col>
              </Form.Group>
            </Col>
          </Row>
          <Row className="h-50 mb-2 align-items-center">
            <Col md={6}>&nbsp;</Col>
            <Col md={6}>
              <Form.Group as={Row}>
                <Form.Label
                  className="d-flex align-items-center"
                  column
                  md={4}
                  htmlFor="grandTotal"
                >
                  Grand Total:
                </Form.Label>
                <Col md={8}>
                  <Form.Control
                    id="grandTotal"
                    value={grandTotalValue}
                    size="sm"
                    disabled
                  ></Form.Control>
                </Col>
              </Form.Group>
            </Col>
          </Row>
        </Container>
      </Col>
    </Row>
  )
}
export default Summary
