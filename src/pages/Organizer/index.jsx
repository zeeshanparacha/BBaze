import { useState, useEffect } from "react"
import instance from "../../instance"

import SideBar from "../../components/ReuseableComponents/Sidebar"
import Header from "../../components/ReuseableComponents/Header"
import OrganizerTable from "../../components/Organizer/OrganizerTable"
import AddOrganizer from "../../components/Organizer/AddOrganizer"

const Organizer = () => {

    const [activeTab, setActiveTab] = useState(1)
    const [users, setUsers] = useState([])
    const [clickIndex, setClickIndex] = useState(-1)

    useEffect(() => {
        getUsers()
    }, [])

    useEffect(() => {
        if (activeTab === 1) {
            setClickIndex(-1)
        }
    }, [activeTab])

    const getUsers = () => {
        instance.get('organization/users')
            .then(res => {
                const array = []
                res.data.data.forEach(item => {
                    let obj = {}
                    obj = item
                    obj.ongoingProjects = item.projects.filter(item => item.status === 'approved')
                    obj.completedProjects = item.projects.filter(item => item.status === 'closed')
                    array.push(obj)
                })
                setUsers(array)
            })
            .catch(err => {
                if (err.response.data.error) {
                    console.log(err.response.data.error)
                }
            })
    }

    console.log('users', users);

    return (
        <div className="org">
            <SideBar index={2} />
            <div className="org_body">
                <Header />
                <div className="org_tabs">
                    <p className={activeTab === 1 ? 'org_tabName active' : 'org_tabName'} onClick={() => setActiveTab(1)}>Organisateurs</p>
                    <p className={activeTab === 2 ? 'org_tabName active' : 'org_tabName'} onClick={() => setActiveTab(2)}>Enregistrer un organisateur</p>
                </div>
                {activeTab === 1 && <OrganizerTable setActiveTab={setActiveTab} users={users} clickIndex={clickIndex} setClickIndex={setClickIndex} />}
                {activeTab === 2 && <AddOrganizer getUsers={getUsers} setActiveTab={setActiveTab} editData={users[clickIndex]} />}
            </div>
        </div>
    )
}

export default Organizer