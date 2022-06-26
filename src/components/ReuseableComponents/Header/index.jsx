import React from 'react'
import { useState } from 'react'
import SideBarMobile from '../SidebarMobile'

import SearchIcon from '../../../assets/images/search6.svg'
import People from '../../../assets/images/people1.png'

const Header = () => {

    const [search, setSearch] = useState(false)
    const [menu, setMenu] = useState(false)

    return(
        <React.Fragment>
            <div className="header">
                <div className="header_search">
                    <input type="search" placeholder="Chercher" />
                    <img src={SearchIcon} alt=""/>
                </div>
                <div className="header_right">
                    <p>Se deconnector</p>
                    <div className="header_user">
                        <p className="header_username">Joe Chanson</p>
                        <div className="header_userimg">
                            <img src={People} alt="..." />
                        </div>
                    </div>
                </div>
            </div>
            <div className="headerm">
                <div className="headerm_search">
                    <img src={SearchIcon} alt="" onClick={() => setSearch(!search)} />
                    {search && <input type="search" placeholder="Chercher" />}
                </div>
                <div className="headerm_user">
                    <div className="headerm_userimg">
                        <img src={People} alt="..." />
                    </div>
                    <p className="headerm_username">Joe Chanson</p>
                </div>
                <div className="headerm_right">
                    <i className="fa-solid fa-bars" onClick={() => setMenu(!menu)}></i>
                </div>
            </div>
            {menu && <SideBarMobile setMenu={setMenu} />}
        </React.Fragment>
    )
}

export default Header