import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import dateFormat from "dateformat";

import instance from '../../../../instance';

import Img from '../../../../assets/images/img1.jpg'
import Avatar from '../../../../assets/images/avatar.jpg'

const ProjectDetail = ({ setModal, category, data }) => {

    const navigate = useNavigate()
    const [users, setUsers] = useState([])

    useEffect(() => {
        instance.post('permissions/get-all-users-permissions', { projectId: data._id })
            .then(res => {
                setUsers(res.data.data)
            })
    }, [])

    return (
        <div className="projectDetail">
            <div className="projectDetail_inner">
                <span className='projectDetail_close' onClick={() => setModal('')} >&#9587;</span>
                <div className="projectDetail_projects">
                    {data.images.length > 0 && data.images.map((item, index) => (
                        <div className="projectDetail_box">
                            <div className="projectDetail_img">
                                <img src={item.url} alt="" />
                            </div>
                        </div>
                    ))}
                </div>
                <div className="projectDetail_details">
                    <p><span>Nom du projet:</span>{data.projectName}</p>
                    <div>
                        <p><span>Début:</span>{dateFormat(data.createdAt, "dd-mmm-yyyy")}</p>
                        <p><span>Clôture:</span>10-12-2022</p>
                    </div>
                    <p><span>Ville:</span>{data.town}</p>
                    <p><span>Quartier:</span>{data.headQuartier}</p>
                    <p><span>Animateur:</span>{data.animator}</p>
                    <p><span>Hôte / Hôtesse:</span>{data.host}</p>
                </div>
                <p className="projectDetail_descTitle">A PROPOS</p>
                <p className="projectDetail_desc">{data.about}</p>
                <p className='projectDetail_text'>Organisateurs</p>
                <div className="projectDetail_users">
                    <div>
                        <div className="projectDetail_userImg">
                            <img src={data.user.profile ? data.user.profile : Avatar} alt="" />
                        </div>
                    </div>
                    <div>
                        {users.map((item, index) => (
                            <div className="projectDetail_userImg" key={index}>
                                <img src={item.user.profile ? item.user.profile : Avatar} alt="" />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="projectDetail_btn">
                    <button onClick={() => navigate('/addproject', { state: { category, data, edit: 'true' } })}>{data.status === 'closed' ? 'VIEW DETAILS' : 'MODIFIER'}</button>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetail