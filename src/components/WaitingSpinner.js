import Spinner from 'react-bootstrap/Spinner'
import { useAppContext } from '../Contexts/Context'

function WaitingSpinner() {
  const { waitingForInvoice } = useAppContext()
  return (
    waitingForInvoice && (
      <div className="waiting-spinner-container show">
        <div className="waiting-spinner">
          <Spinner animation="border" role="status">
            <span className="visually-hidden"></span>
          </Spinner>
          <span>Generating Invoice</span>
        </div>
      </div>
    )
  )
}

export default WaitingSpinner
