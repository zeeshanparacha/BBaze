import instance from "../../../instance"

const ConfirmModal = ({ getProjects, setModal, type, id }) => {

    const handleApprove = () => {
        instance.post('projects/approve-project', { _id: id })
            .then(res => {
                if (res.data.code === 1) {
                    getProjects()
                    setModal('')
                }
            })
    }

    const handleReject = () => {
        instance.post('projects/reject-project', { _id: id })
            .then(res => {
                if (res.data.code === 1) {
                    getProjects()
                    setModal('')
                }
            })
    }

    return (
        <div className="info">
            <div className="info_inner">
                <span className='info_close' onClick={() => setModal('')}>&#9587;</span>
                <h6>ESTÁS SEGURO QUE QUIERES {type === 'approve' ? 'APROBAR' : 'RECHAZAR'} ESTE PROYECTO</h6>
                <div className="info_btns">
                    {type === 'approve' ? <button onClick={handleApprove}>APROBAR</button> : <button onClick={handleReject}>RECHAZAR</button>}
                    <button onClick={() => setModal('')}>CANCELAR</button>
                </div>
            </div>
        </div>
    )
}

export default ConfirmModal