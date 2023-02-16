import { Row, Button } from 'react-bootstrap'
import { useAppContext } from '../Contexts/Context'

const MainButtons = () => {
  const { submitResponse } = useAppContext()
  return (
    <Row className="justify-content-end">
      <Button size="sm" className="mx-2" onClick={submitResponse}>
        Generate Invoice
      </Button>
      <Button size="sm" variant="success" className="mx-2">
        Export Data as Excel
      </Button>
    </Row>
  )
}
export default MainButtons
