const InfoModal = ({ setModal }) => {
    return (
        <div className="info">
            <div className="info_inner">
                <span className='info_close' onClick={() => setModal('')}>&#9587;</span>
                <h6>NO SE PUEDE CARGAR IMAGEN/DOCUMENTO A UN NUEVO PROYECTO</h6>
            </div>
        </div>
    )
}

export default InfoModal