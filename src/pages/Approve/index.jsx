import { useEffect, useState } from "react"
import instance from "../../instance"
import dateFormat from "dateformat";

import SideBar from "../../components/ReuseableComponents/Sidebar"
import Header from "../../components/ReuseableComponents/Header"
import ConfirmModal from "../../components/Approve/ConfirmModal"

import people1 from '../../assets/images/people1.png'
import Search from '../../assets/images/search7.svg'

const Approve = () => {

    const [projectList, setProjectList] = useState([])
    const [modal, setModal] = useState('')
    const [type, setType] = useState('')
    const [id, setId] = useState('')
    const [search, setSearch] = useState('')
    const updatedProjects = search ? projectList.filter(item => item?.projectName.toLowerCase().includes(search.toLowerCase())) : projectList

    useEffect(() => {
        getProjects()
    }, [])

    const getProjects = () => {
        instance.get('projects/get-pending-projects')
            .then(res => {
                setProjectList(res.data.data)
            })
    }

    console.log('projectList', projectList);

    return (
        <div className="org">
            <SideBar index={3} />
            <div className="org_body">
                <Header />
                <div className="org_table">
                    <div className="org_head"><p><span>{projectList.length}</span> Approve/Reject Projects</p></div>
                    <div className="org_search">
                        <img src={Search} alt="" />
                        <input type="search" placeholder="Chercher" onChange={(e) => setSearch(e.target.value)} />
                    </div>
                    <table>
                        <thead>
                            <tr>
                                {/* <td></td> */}
                                <td>Noms</td>
                                <td>Ville</td>
                                <td>Date entrée</td>
                                <td>Actions</td>
                            </tr>
                        </thead>
                        <tbody>
                            {updatedProjects.map((item, index) => (
                                <tr key={index}>
                                    {/* <td><img src={people1} alt="" /></td> */}
                                    <td>
                                        <p className="org_tableText1">{item.projectName}</p>
                                        <p className="org_tableText2">{item.about}</p>
                                    </td>
                                    <td>
                                        <p className="org_tableText1">{item.town}</p>
                                    </td>
                                    <td>
                                        <p className="org_tableText1">{dateFormat(item.createdAt, "paddedShortDate")}</p>
                                        <p className="org_tableText2">{dateFormat(item.createdAt, "shortTime")}</p>
                                    </td>
                                    <td>
                                        <button onClick={() => { setModal('confirm'); setType('approve'); setId(item._id) }}>APPROVE</button>
                                        <button onClick={() => { setModal('confirm'); setType('reject'); setId(item._id) }}>REJECT</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            {modal === 'confirm' && <ConfirmModal getProjects={getProjects} setModal={setModal} type={type} id={id} />}
        </div>
    )
}

export default Approve