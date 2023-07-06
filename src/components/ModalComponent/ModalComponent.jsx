import './ModalComponent.css';

export const ModalComponent = () => {
    return(
        <div className='modal-wrapper'>
            <div className="modal">
                <p>Olá Mundo</p>
                <button onClick={handle}></button>
            </div>
        </div>
    );
}