import { useNavigate } from 'react-router-dom'
import Img from '../../../../assets/images/img1.jpg'
import people1 from '../../../../assets/images/people1.png'

const ProjectDetail = ({setModal, category, data}) => {

    const navigate = useNavigate()

    return(
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
                    <p><span>Nom du projet:</span>Paullet dsa</p>
                    <div>
                        <p><span>Début:</span>10-12-2022</p>
                        <p><span>Clôture:</span>10-12-2022</p>
                    </div>
                    <p><span>Ville:</span>Paullet dsa</p>
                    <p><span>Quartier:</span>Paullet dsa</p>
                    <p><span>Animateur:</span>Paullet dsa</p>
                    <p><span>Hôte / Hôtesse:</span>Paullet dsa</p>
                </div>
                <p className="projectDetail_descTitle">A PROPOS</p>
                <p className="projectDetail_desc"> 
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh 
                    euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad 
                    minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip 
                    ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate 
                    velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros
                    et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit
                    augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh 
                    euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad 
                    minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip 
                    ex ea commodo consequat. 
                </p>
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
                    <button onClick={() => navigate('/addproject', {state: {category, data, edit: 'true'}})}>MODIFIER</button>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetail