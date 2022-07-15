import SideBar from "../../components/ReuseableComponents/Sidebar"
import Header from "../../components/ReuseableComponents/Header"

import people1 from '../../assets/images/people1.png'
import Search from '../../assets/images/search7.svg'

const Approve = () => {

    return(
        <div className="org">
            <SideBar index={3} />
            <div className="org_body">
                <Header/>
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
                                <td>Actions</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
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
                                <td>
                                    <button>APPROVE</button>
                                    <button>REJECT</button>
                                </td>
                            </tr>
                            <tr>
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
                                <td>
                                    <button>APPROVE</button>
                                    <button>REJECT</button>
                                </td>
                            </tr>
                            <tr>
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
                                <td>
                                    <button>APPROVE</button>
                                    <button>REJECT</button>
                                </td>
                            </tr>
                            <tr>
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
                                <td>
                                    <button>APPROVE</button>
                                    <button>REJECT</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Approve