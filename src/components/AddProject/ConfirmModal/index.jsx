const ConfirmModal = ({ setModal, removeFile, fileToRemove }) => {

    const handleDelete = () => {
        removeFile(fileToRemove)
        setModal('')
    }

    return (
        <div className="info">
            <div className="info_inner">
                <span className='info_close' onClick={() => setModal('')}>&#9587;</span>
                <h6>ARE YOU SURE YOU WANT TO DELETE THIS IMAGE</h6>
                <div className="info_btns">
                    <button onClick={handleDelete}>CONFIRM</button>
                    <button onClick={() => setModal('')}>CANCEL</button>
                </div>
            </div>
        </div>
    )
}

export default ConfirmModal