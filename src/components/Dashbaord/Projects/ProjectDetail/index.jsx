import { useNavigate } from 'react-router-dom'
import dateFormat from "dateformat";

import Img from '../../../../assets/images/img1.jpg'
import people1 from '../../../../assets/images/people1.png'

const ProjectDetail = ({ setModal, category, data }) => {

    const navigate = useNavigate()

    return (
        <div className="projectDetail">
            <div className="projectDetail_inner">
                <span className='projectDetail_close' onClick={() => setModal('')} >&#9587;</span>
                <div className="projectDetail_projects">
                    <div className="projectDetail_box">
                        <div className="projectDetail_img">
                            <img src={Img} alt="" />
                        </div>
                    </div>
                    <div className="projectDetail_box">
                        <div className="projectDetail_img">
                            <img src={Img} alt="" />
                        </div>
                    </div>
                    <div className="projectDetail_box">
                        <div className="projectDetail_img">
                            <img src={Img} alt="" />
                        </div>
                    </div>
                    <div className="projectDetail_box">
                        <div className="projectDetail_img">
                            <img src={Img} alt="" />
                        </div>
                    </div>
                </div>
                <div className="projectDetail_details">
                    <p><span>Nom du projet:</span>{data.projectName}</p>
                    <div>
                        <p><span>Début:</span>{dateFormat(data.createdAt, "paddedShortDate")}</p>
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
                            <img src={people1} alt="" />
                        </div>
                    </div>
                    <div>
                        <div className="projectDetail_userImg">
                            <img src={people1} alt="" />
                        </div>
                        <div className="projectDetail_userImg">
                            <img src={people1} alt="" />
                        </div>
                        <div className="projectDetail_userImg">
                            <img src={people1} alt="" />
                        </div>
                        <div className="projectDetail_userImg">
                            <img src={people1} alt="" />
                        </div>
                        <div className="projectDetail_userImg">
                            <img src={people1} alt="" />
                        </div>
                        <div className="projectDetail_userImg">
                            <img src={people1} alt="" />
                        </div>
                        <div className="projectDetail_userImg">
                            <img src={people1} alt="" />
                        </div>
                        <div className="projectDetail_userImg">
                            <img src={people1} alt="" />
                        </div>
                        <div className="projectDetail_userImg">
                            <img src={people1} alt="" />
                        </div>
                        <div className="projectDetail_userImg">
                            <img src={people1} alt="" />
                        </div>
                    </div>
                </div>
                <div className="projectDetail_btn">
                    <button onClick={() => navigate('/addproject', { state: { category, data, edit: 'true' } })}>MODIFIER</button>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetail