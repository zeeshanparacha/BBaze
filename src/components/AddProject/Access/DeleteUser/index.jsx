import instance from "../../../../instance"

const DeleteUser = ({ setModal, projectId, clickUserId }) => {

    const handleDelete = () => {
        instance.post('permissions/delete-user-from-project', {
            projectId,
            user: clickUserId
        })
    }

    return (
        <div className="info">
            <div className="info_inner">
                <span className='info_close' onClick={() => setModal('')}>&#9587;</span>
                <h6>Estás segura de que quieres eliminar a esta usuaria?</h6>
                <div className="info_btns">
                    <button onClick={handleDelete}>ELIMINAR</button>
                    <button onClick={() => setModal('')}>CANCELAR</button>
                </div>
            </div>
        </div>
    )
}

export default DeleteUser