import Modal from 'react-modal'
import './modal.css'

function SubmitModal(isOpen, onRequestClose) {
    return(
        <>
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
        >
            <div className='modal-content'>
                <p>Olá mundo</p>
            </div>
        </Modal>
        </>
    )
}

export default SubmitModal