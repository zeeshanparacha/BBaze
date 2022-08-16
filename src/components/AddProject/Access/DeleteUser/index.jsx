import instance from "../../../../instance"

const DeleteUser = ({ setModal, projectId, clickUserId }) => {

    const handleDelete = () => {
        instance.post('permissions/delete-user-from-project', {
            projectId,
            user: clickUserId
        })
            .then(res => console.log('res delete', res))
    }

    console.log('projectId', projectId);
    console.log('clickUserId', clickUserId);
    console.log('setModal', setModal);


    return (
        <div className="info">
            <div className="info_inner">
                <span className='info_close' onClick={() => setModal('')}>&#9587;</span>
                <h6>ARE YOU SURE YOU WANT TO DELETE THIS USER</h6>
                <div className="info_btns">
                    <button onClick={handleDelete}>DELETE</button>
                    <button onClick={() => setModal('')}>CANCEL</button>
                </div>
            </div>
        </div>
    )
}

export default DeleteUser