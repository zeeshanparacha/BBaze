import { useState, useEffect } from "react"

import SideBar from "../../components/ReuseableComponents/Sidebar"
import Header from "../../components/ReuseableComponents/Header"
import OrganizerTable from "../../components/Organizer/OrganizerTable"
import AddOrganizer from "../../components/Organizer/AddOrganizer"
import instance from "../../instance"

const Organizer = () => {

    const [activeTab, setActiveTab] = useState(1)
    const [users, setUsers] = useState([])

    useEffect(() => {
        instance.get('organization/users')
            .then(res => {
                setUsers(res.data.data)
            })
            .catch(err => {
                if (err.response.data.error) {
                    console.log(err.response.data.error)
                }
            })
    }, [])

    return (
        <div className="org">
            <SideBar index={2} />
            <div className="org_body">
                <Header />
                <div className="org_tabs">
                    <p className={activeTab === 1 ? 'org_tabName active' : 'org_tabName'} onClick={() => setActiveTab(1)}>Organisateurs</p>
                    <p className={activeTab === 2 ? 'org_tabName active' : 'org_tabName'} onClick={() => setActiveTab(2)}>Enregistrer un organisateur</p>
                </div>
                {activeTab === 1 && <OrganizerTable users={users} />}
                {activeTab === 2 && <AddOrganizer />}
            </div>
        </div>
    )
}

export default Organizer