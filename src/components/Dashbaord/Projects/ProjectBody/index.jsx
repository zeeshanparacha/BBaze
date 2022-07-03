import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import UserDetail from '../UserDetail'
import ProjectDetail from '../ProjectDetail'

// import Icon2 from '../../../../assets/images/plus1.svg'
// import Icon3 from '../../../../assets/images/search1.svg'
import people1 from '../../../../assets/images/people1.png'

const ProjectBody = ({category, icon, plusIcon, searchIcon, data}) => {

    const navigate = useNavigate()

    const [modal, setModal] = useState('')

    return(
        <div className="project_body">
            <div className="project_head">
                <div className="project_headTop">
                    <div className="project_logo">
                        <img src={icon} alt="" />
                    </div>
                    <div className='project_detail'>
                        <p className="project_num">{data.length}</p>
                        <p className="project_name">{category}</p>
                    </div>
                    <div className="project_check">
                        <input type="checkbox" />
                        <label>Mes projets</label>
                    </div>
                </div>
                <div className="project_actions">
                    <button className="project_add" onClick={() => navigate('/addproject', {state: {category}})}><img src={plusIcon} alt="" /></button>
                    <div className="project_search">
                        <img src={searchIcon} alt="" />
                        <input type="search" placeholder='Chercher un projet' />
                    </div>
                </div>
            </div>
            <div className="project_table">
                <table>
                    <thead>
                        <tr>
                            <td></td>
                            <td>Organisateur</td>
                            <td>Quartier</td>
                            <td>Date cree</td>
                            <td>Cloture</td>
                        </tr>
                    </thead>
                    <tbody>
                        {data.length > 0 && data.map((item, index) => (
                            <tr onClick={() => setModal('project')} key={index} >
                                <td><img src={people1} alt="" onClick={(e) => {setModal('user'); e.stopPropagation();}} /></td>
                                <td>
                                    <p className="project_tableText1">{item.user.name}</p>
                                    <p className="project_tableText2">{item.user.role}</p>
                                </td>
                                <td>
                                    <p className="project_tableText1">{item.town}</p>
                                    <p className="project_tableText2">{item.headQuartier}</p>
                                </td>
                                <td>
                                    <p className="project_tableText1">{item.createdAt.substr(0, 10)}</p>
                                    {/* <p className="project_tableText2">2:36 PM</p> */}
                                </td>
                                <td>
                                    {/* <p className="project_tableText1">1-Jan-2022</p>
                                    <p className="project_tableText2">2:36 PM</p> */}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {modal === 'user' && <UserDetail setModal={setModal} />}
            {modal === 'project' && <ProjectDetail setModal={setModal} />}
        </div>
    )
}

export default ProjectBody