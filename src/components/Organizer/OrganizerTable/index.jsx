import { useState } from 'react'
import UserDetail from './UserDetails'

import people1 from '../../../assets/images/people1.png'
import Search from '../../../assets/images/search7.svg'

const OrganizerTable = () => {

    const [modal, setModal] = useState('')

    return(
        <div className="org_table">
            <div className="org_head"><p><span>10</span> Organisateur</p></div>
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
                    <tr onClick={() => setModal('user')}>
                        <td><img src={people1} alt=""/></td>
                        <td>
                            <p className="org_tableText1">Jane Doe</p>
                            <p className="org_tableText2">Web Designer</p>
                        </td>
                        <td>
                            <p className="org_tableText1">Luanda</p>
                        </td>
                        <td>
                            <p className="org_tableText1">01-06-2020</p>
                            <p className="org_tableText2">2:36 PM</p>
                        </td>
                    </tr>
                    <tr onClick={() => setModal('user')}>
                        <td><img src={people1} alt=""/></td>
                        <td>
                            <p className="org_tableText1">Jane Doe</p>
                            <p className="org_tableText2">Web Designer</p>
                        </td>
                        <td>
                            <p className="org_tableText1">Luanda</p>
                        </td>
                        <td>
                            <p className="org_tableText1">01-06-2020</p>
                            <p className="org_tableText2">2:36 PM</p>
                        </td>
                    </tr>
                    <tr onClick={() => setModal('user')}>
                        <td><img src={people1} alt=""/></td>
                        <td>
                            <p className="org_tableText1">Jane Doe</p>
                            <p className="org_tableText2">Web Designer</p>
                        </td>
                        <td>
                            <p className="org_tableText1">Luanda</p>
                        </td>
                        <td>
                            <p className="org_tableText1">01-06-2020</p>
                            <p className="org_tableText2">2:36 PM</p>
                        </td>
                    </tr>
                    <tr onClick={() => setModal('user')}>
                        <td><img src={people1} alt=""/></td>
                        <td>
                            <p className="org_tableText1">Jane Doe</p>
                            <p className="org_tableText2">Web Designer</p>
                        </td>
                        <td>
                            <p className="org_tableText1">Luanda</p>
                        </td>
                        <td>
                            <p className="org_tableText1">01-06-2020</p>
                            <p className="org_tableText2">2:36 PM</p>
                        </td>
                    </tr>
                </tbody>
            </table>
            {modal === 'user' && <UserDetail setModal={setModal} />}
        </div>
    )
}

export default OrganizerTable