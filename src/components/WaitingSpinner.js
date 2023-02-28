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
          <div className="spinner-text">
            <span>
              <strong>Generating Invoice</strong>
            </span>
            <span>
              <em>Poor Dev! Free Tier! Takes Time!</em>
            </span>
          </div>
        </div>
      </div>
    )
  )
}

export default WaitingSpinner
