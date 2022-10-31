const InfoModal = ({ setModal }) => {
    return (
        <div className="info">
            <div className="info_inner">
                <span className='info_close' onClick={() => setModal('')}>&#9587;</span>
                <h6>Vous pouvez télécharger des photos et des documents une fois le projet approuvé.</h6>
            </div>
        </div>
    )
}

export default InfoModal