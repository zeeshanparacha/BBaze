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
        if (type === 'UPDATE') {
            updateProject()
        }
        else if (type === 'CREATE') {
            createProject()
        }
        else if (type === 'CLOSE') {
            closeProject()
        }
        else if (type === 'APPROVE') {
            approveProject()
        }
    }

    return (
        <div className="info">
            <div className="info_inner">
                <span className='info_close' onClick={() => setModal('')}>&#9587;</span>
                <h6>ARE YOU SURE YOU WANT TO {type} THIS PROJECT ?</h6>
                <div className="info_btns">
                    <button onClick={handleClick}>{type}</button>
                    <button onClick={() => setModal('')}>CANCEL</button>
                </div>
            </div>
        </div>
    )
}

export default ConfirmModalProject