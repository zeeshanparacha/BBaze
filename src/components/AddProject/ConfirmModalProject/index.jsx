import { useNavigate } from 'react-router-dom'
import instance from '../../../instance'

const ConfirmModalProject = ({ setModal, type, data }) => {

    const navigate = useNavigate()

    const createProject = () => {
        instance.post('projects/create-project', data)
            .then(res => {
                if (res.data.code === 1) {
                    navigate('/dashboard')
                }
            })
            .catch(err => console.log(err.response))
    }

    const updateProject = () => {
        instance.post('projects/update-project', data)
            .then(res => {
                if (res.data.code === 1) {
                    navigate('/dashboard')
                }
            })
            .catch(err => console.log(err.response))
    }

    const approveProject = () => {
        instance.post('projects/approve-project', { _id: data._id })
            .then(res => {
                if (res.data.code === 1) {
                    navigate('/dashboard')
                }
            })
            .catch(err => console.log(err.response))
    }

    const closeProject = () => {
        instance.post('projects/close-project', { _id: data._id })
            .then(res => {
                if (res.data.code === 1) {
                    navigate('/dashboard')
                }
            })
            .catch(err => console.log(err.response))
    }

    const handleClick = () => {
        if (type === 'ACTUALIZAR') {
            updateProject()
        }
        else if (type === 'CREAR') {
            createProject()
        }
        else if (type === 'CERCA') {
            closeProject()
        }
        else if (type === 'APROBAR') {
            approveProject()
        }
    }

    return (
        <div className="info">
            <div className="info_inner">
                <span className='info_close' onClick={() => setModal('')}>&#9587;</span>
                <h6>ESTÁS SEGURO QUE QUIERES {type} ESTE PROYECTO ?</h6>
                <div className="info_btns">
                    <button onClick={handleClick}>{type}</button>
                    <button onClick={() => setModal('')}>CANCELAR</button>
                </div>
            </div>
        </div>
    )
}

export default ConfirmModalProject