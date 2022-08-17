const InfoModal = ({ setModal }) => {
    return (
        <div className="info">
            <div className="info_inner">
                <span className='info_close' onClick={() => setModal('')}>&#9587;</span>
                <h6>YOU CAN NOT UPLOAD IMAGE/DOCUMENT TO A NEW PROJECT</h6>
            </div>
        </div>
    )
}

export default InfoModal