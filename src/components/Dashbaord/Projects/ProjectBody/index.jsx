import { useState, useEffect } from 'react'
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
    const [projects, setProjects] = useState([])
    const [showMyProjects, setShowMyProjects] = useState(false)
    // const updatedData = search ? projects.filter(item => item?.user?.name.toLowerCase().includes(search.toLowerCase()) || item?.user?.role.toLowerCase().includes(search.toLowerCase())) : projects
    const userId = localStorage.getItem('userId')

    useEffect(() => {
        if (!showMyProjects) {
            setProjects(data.filter(item => item.status === 'closed' || item.status === 'approved'))
        }
        else {
            setProjects(data.filter(item => item.user._id === userId))
        }
    }, [data, showMyProjects])

    const updatedData = search ? projects.filter(item => {
        return Object.keys(item).some(() => (
            item?.user?.[["name"]]?.toString()?.toLowerCase().includes(search?.toLowerCase()) ||
            item?.user?.[["role"]]?.toString()?.toLowerCase().includes(search?.toLowerCase()) ||
            item[["town"]]?.toString()?.toLowerCase().includes(search?.toLowerCase()) ||
            item[["headQuartier"]]?.toString()?.toLowerCase().includes(search?.toLowerCase()))
        );
    }) : projects;

    console.log('updatedData', updatedData);

    return (
        <div className="project_body">
            <div className="project_head">
                <div className="project_headTop">
                    <div className="project_logo">
                        <img src={icon} alt="" />
                    </div>
                    <div className='project_detail'>
                        <p className="project_num">{updatedData?.length}</p>
                        <p className="project_name">{category}</p>
                    </div>
                    <div className="project_check">
                        <input type="checkbox" checked={showMyProjects} value={showMyProjects} onChange={() => setShowMyProjects(!showMyProjects)} />
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
                        {updatedData && updatedData.length > 0 && updatedData.map((item, index) => (
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
                                    <p className="project_tableText1">{dateFormat(item.createdAt, "dd-mmm-yyyy")}</p>
                                    <p className="project_tableText2">{dateFormat(item.createdAt, "shortTime")}</p>
                                </td>
                                {item.status !== 'closed' && <td style={{ display: 'flex' }}>
                                    <p className="project_tableText1">{item?.status === 'closed' ? 'Fermé' : 'Pas fermé'}</p>
                                </td>}
                                <td>
                                    {item.status === 'closed' && <p className="project_tableText1">{dateFormat(item.modifieddAt, "dd-mmm-yyyy")}</p>}
                                    {item.status === 'closed' && <p className="project_tableText2">{dateFormat(item.modifiedAt, "shortTime")}</p>}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {modal === 'user' && <UserDetail setModal={setModal} data={updatedData[clickIndex]} projectList={data} />}
            {modal === 'project' && <ProjectDetail category={category} data={updatedData[clickIndex]} setModal={setModal} />}
        </div>
    )
}

export default ProjectBody