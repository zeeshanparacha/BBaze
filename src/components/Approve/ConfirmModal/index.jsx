import instance from "../../../instance"

const ConfirmModal = ({ getProjects, setModal, type, id }) => {

    console.log('type', type);

    const handleApprove = () => {
        instance.post('projects/approve-project', { _id: id })
            .then(res => {
                console.log('res approve', res)
                if (res.data.code === 1) {
                    getProjects()
                    setModal('')
                }
            })
    }

    const handleReject = () => {
        instance.post('projects/reject-project', { _id: id })
            .then(res => {
                console.log('res reject', res)
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
                <h6>ARE YOU SURE YOU WANT TO {type === 'approve' ? 'APPROVE' : 'REJECT'} THIS PROJECT</h6>
                <div className="info_btns">
                    {type === 'approve' ? <button onClick={handleApprove}>APPROVE</button> : <button onClick={handleReject}>REJECT</button>}
                    <button onClick={() => setModal('')}>CANCEL</button>
                </div>
            </div>
        </div>
    )
}

export default ConfirmModal