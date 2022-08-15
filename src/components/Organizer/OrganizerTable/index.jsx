import { useState } from 'react'
import UserDetail from './UserDetails'
import dateFormat from "dateformat";

import Avatar from '../../../assets/images/avatar.jpg'
import Search from '../../../assets/images/search7.svg'

const OrganizerTable = ({ setActiveTab, users, clickIndex, setClickIndex }) => {

    const [modal, setModal] = useState('')

    return (
        <div className="org_table">
            <div className="org_head"><p><span>{users.length}</span> Organisateur</p></div>
            <div className="org_search">
                <img src={Search} alt="" />
                <input type="search" placeholder="Chercher" />
            </div>
            <table>
                <thead>
                    <tr>
                        <td></td>
                        <td>Noms</td>
                        <td>Ville</td>
                        <td>Date entrée</td>
                    </tr>
                </thead>
                <tbody>
                    {users.map(((user, index) => {
                        return <tr key={user.username} onClick={() => { setModal('user'); setClickIndex(index) }}>
                            <td>
                                <div className='org_img'>
                                    <img src={user?.profile ? user.profile : Avatar} alt="" />
                                </div>
                            </td>
                            <td>
                                <p className="org_tableText1">{user.name}</p>
                                <p className="org_tableText2">{user.profession}</p>
                            </td>
                            <td>
                                <p className="org_tableText1">Luanda</p>
                            </td>
                            <td>
                                <p className="org_tableText1">{dateFormat(user.createdAt, "paddedShortDate")}</p>
                                <p className="org_tableText2">{dateFormat(user.createdAt, "shortTime")}</p>
                            </td>
                        </tr>
                    }))}
                </tbody>
            </table>
            {modal === 'user' && <UserDetail
                setModal={setModal}
                setActiveTab={setActiveTab}
                data={users[clickIndex]}
            />}
        </div>
    )
}

export default OrganizerTable