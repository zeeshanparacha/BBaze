import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import dateFormat from "dateformat";

import UserDetail from '../UserDetail'
import ProjectDetail from '../ProjectDetail'

import Avatar from '../../../../assets/images/avatar.jpg'

const ProjectBody = ({ category, icon, plusIcon, searchIcon, data }) => {

    const navigate = useNavigate()

    const [modal, setModal] = useState('')
    const [clickIndex, setClickIndex] = useState(0)
    const [search, setSearch] = useState('')
    const updatedData = search ? data.filter(item => item?.user?.name.toLowerCase().includes(search.toLowerCase()) || item?.user?.role.toLowerCase().includes(search.toLowerCase())) : data

    return (
        <div className="project_body">
            <div className="project_head">
                <div className="project_headTop">
                    <div className="project_logo">
                        <img src={icon} alt="" />
                    </div>
                    <div className='project_detail'>
                        <p className="project_num">{updatedData.length}</p>
                        <p className="project_name">{category}</p>
                    </div>
                    <div className="project_check">
                        <input type="checkbox" />
                        <label>Mes projets</label>
                    </div>
                </div>
                <div className="project_actions">
                    <button className="project_add" onClick={() => navigate('/addproject', { state: { category } })}><img src={plusIcon} alt="" /></button>
                    <div className="project_search">
                        <img src={searchIcon} alt="" />
                        <input type="search" placeholder='Chercher un projet' onChange={(e) => setSearch(e.target.value)} />
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
                        {updatedData.length > 0 && updatedData.map((item, index) => (
                            <tr onClick={() => { setModal('project'); setClickIndex(index) }} key={index} >
                                <td>
                                    <div className='project_img'>
                                        <img src={item?.user?.profile ? item.user.profile : Avatar} alt="" onClick={(e) => { setModal('user'); setClickIndex(index); e.stopPropagation(); }} />
                                    </div>
                                </td>
                                <td>
                                    <p className="project_tableText1">{item?.user?.name}</p>
                                    <p className="project_tableText2">{item?.user?.profession}</p>
                                </td>
                                <td>
                                    <p className="project_tableText1">{item.town}</p>
                                    <p className="project_tableText2">{item.headQuartier}</p>
                                </td>
                                <td>
                                    <p className="project_tableText1">{dateFormat(item.createdAt, "paddedShortDate")}</p>
                                    <p className="project_tableText2">{dateFormat(item.createdAt, "shortTime")}</p>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {modal === 'user' && <UserDetail setModal={setModal} data={updatedData[clickIndex]} />}
            {modal === 'project' && <ProjectDetail category={category} data={updatedData[clickIndex]} setModal={setModal} />}
        </div>
    )
}

export default ProjectBody