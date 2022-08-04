import { useState } from 'react'
import UserDetail from './UserDetails'
import dateFormat from "dateformat";

import people1 from '../../../assets/images/people1.png'
import Search from '../../../assets/images/search7.svg'

const OrganizerTable = ({ users }) => {

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
                    {users.map((user => {
                        return <tr key={user.username} onClick={() => setModal('user')}>
                            <td><img src={people1} alt="" /></td>
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
            {modal === 'user' && <UserDetail setModal={setModal} />}
        </div>
    )
}

export default OrganizerTable