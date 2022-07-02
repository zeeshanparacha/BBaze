import { useNavigate } from 'react-router-dom'

import UserDetail from '../UserDetail'
import ProjectDetail from '../ProjectDetail'

import Icon1 from '../../../../assets/images/project-icon1.svg'
import Icon2 from '../../../../assets/images/plus1.svg'
import Icon3 from '../../../../assets/images/search1.svg'
import people1 from '../../../../assets/images/people1.png'

const ProjectBody = () => {

    const navigate = useNavigate()

    return(
        <div className="project_body">
            <div className="project_head">
                <div className="project_headTop">
                    <div className="project_logo">
                        <img src={Icon1} alt="" />
                    </div>
                    <div className='project_detail'>
                        <p className="project_num">989</p>
                        <p className="project_name">Espace vert</p>
                    </div>
                    <div className="project_check">
                        <input type="checkbox" />
                        <label>Mes projets</label>
                    </div>
                </div>
                <div className="project_actions">
                    <button className="project_add" onClick={() => navigate('/addproject')}><img src={Icon2} alt="" /></button>
                    <div className="project_search">
                        <img src={Icon3} alt="" />
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
                        <tr>
                            <td><img src={people1} alt="" /></td>
                            <td>
                                <p className="project_tableText1">Jane Doe</p>
                                <p className="project_tableText2">Linda Bi</p>
                            </td>
                            <td>
                                <p className="project_tableText1">Street K</p>
                                <p className="project_tableText2">Dakar</p>
                            </td>
                            <td>
                                <p className="project_tableText1">1-Jan-2022</p>
                                <p className="project_tableText2">2:36 PM</p>
                            </td>
                            <td>
                                <p className="project_tableText1">1-Jan-2022</p>
                                <p className="project_tableText2">2:36 PM</p>
                            </td>
                        </tr>
                        <tr>
                            <td><img src={people1} alt="" /></td>
                            <td>
                                <p className="project_tableText1">Jane Doe</p>
                                <p className="project_tableText2">Linda Bi</p>
                            </td>
                            <td>
                                <p className="project_tableText1">Street K</p>
                                <p className="project_tableText2">Dakar</p>
                            </td>
                            <td>
                                <p className="project_tableText1">1-Jan-2022</p>
                                <p className="project_tableText2">2:36 PM</p>
                            </td>
                            <td>
                                <p className="project_tableText1">1-Jan-2022</p>
                                <p className="project_tableText2">2:36 PM</p>
                            </td>
                        </tr>
                        <tr>
                            <td><img src={people1} alt="" /></td>
                            <td>
                                <p className="project_tableText1">Jane Doe</p>
                                <p className="project_tableText2">Linda Bi</p>
                            </td>
                            <td>
                                <p className="project_tableText1">Street K</p>
                                <p className="project_tableText2">Dakar</p>
                            </td>
                            <td>
                                <p className="project_tableText1">1-Jan-2022</p>
                                <p className="project_tableText2">2:36 PM</p>
                            </td>
                            <td>
                                <p className="project_tableText1">1-Jan-2022</p>
                                <p className="project_tableText2">2:36 PM</p>
                            </td>
                        </tr>
                        <tr>
                            <td><img src={people1} alt="" /></td>
                            <td>
                                <p className="project_tableText1">Jane Doe</p>
                                <p className="project_tableText2">Linda Bi</p>
                            </td>
                            <td>
                                <p className="project_tableText1">Street K</p>
                                <p className="project_tableText2">Dakar</p>
                            </td>
                            <td>
                                <p className="project_tableText1">1-Jan-2022</p>
                                <p className="project_tableText2">2:36 PM</p>
                            </td>
                            <td>
                                <p className="project_tableText1">1-Jan-2022</p>
                                <p className="project_tableText2">2:36 PM</p>
                            </td>
                        </tr>
                        <tr>
                            <td><img src={people1} alt="" /></td>
                            <td>
                                <p className="project_tableText1">Jane Doe</p>
                                <p className="project_tableText2">Linda Bi</p>
                            </td>
                            <td>
                                <p className="project_tableText1">Street K</p>
                                <p className="project_tableText2">Dakar</p>
                            </td>
                            <td>
                                <p className="project_tableText1">1-Jan-2022</p>
                                <p className="project_tableText2">2:36 PM</p>
                            </td>
                            <td>
                                <p className="project_tableText1">1-Jan-2022</p>
                                <p className="project_tableText2">2:36 PM</p>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            {/* <UserDetail/> */}
            <ProjectDetail/>
        </div>
    )
}

export default ProjectBody