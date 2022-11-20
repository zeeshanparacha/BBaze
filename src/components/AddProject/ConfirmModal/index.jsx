const ConfirmModal = ({ setModal, removeFile, fileToRemove }) => {

    const handleDelete = () => {
        removeFile(fileToRemove)
        setModal('')
    }

    return (
        <div className="info">
            <div className="info_inner">
                <span className='info_close' onClick={() => setModal('')}>&#9587;</span>
                <h6>Estás segura de que quieres eliminar esta imagen?</h6>
                <div className="info_btns">
                    <button onClick={handleDelete}>CONFIRMAR</button>
                    <button onClick={() => setModal('')}>CANCELAR</button>
                </div>
            </div>
        </div>
    )
}

export default ConfirmModal