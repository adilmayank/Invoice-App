import { Row, Button } from 'react-bootstrap'
import { useAppContext } from '../Contexts/Context'

const MainButtons = () => {
  const { submitResponse, setWaitingForInvoice } = useAppContext()
  const handleSubmit = () => {
    setWaitingForInvoice(() => {
      return true
    })
    submitResponse()
  }
  return (
    <Row className="justify-content-end">
      <Button size="sm" className="mx-2" onClick={handleSubmit}>
        Generate Invoice
      </Button>
      <Button size="sm" variant="success" className="ml-2">
        Export Data as Excel
      </Button>
    </Row>
  )
}
export default MainButtons
