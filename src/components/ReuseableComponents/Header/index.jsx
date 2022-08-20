import React from 'react'
import { useState } from 'react'
import SideBarMobile from '../SidebarMobile'

import SearchIcon from '../../../assets/images/search6.svg'
import Avatar from '../../../assets/images/avatar.jpg'

const Header = () => {

    const [search, setSearch] = useState(false)
    const [menu, setMenu] = useState(false)
    const [isTrue, setIsTrue] = useState(false)
    const userName = localStorage.getItem('name')
    const userImg = localStorage.getItem('userImg')

    const handleLogout = () => {
        localStorage.clear()
        window.location.reload()
    }

    return (
        <React.Fragment>
            <div className="header">
                <div className="header_search">
                    {/* <input type="search" placeholder="Chercher" />
                    <img src={SearchIcon} alt="" /> */}
                </div>
                <div className="header_right">
                    <p>Se deconnector</p>
                    <div className="header_user">
                        <p className="header_username">{userName}</p>
                        <div className='position-relative'>
                            <div className="header_userimg" onClick={() => setIsTrue(!isTrue)}>
                                <img src={userImg !== "undefined" ? userImg : Avatar} alt="..." />
                            </div>
                            {isTrue && <div className="header_logout">
                                <a href="#" onClick={handleLogout}>Logout</a>
                            </div>}
                        </div>
                    </div>
                </div>
            </div>
            <div className="headerm">
                <div className="headerm_search">
                    {/* <img src={SearchIcon} alt="" onClick={() => setSearch(!search)} />
                    {search && <input type="search" placeholder="Chercher" />} */}
                </div>
                <div className="headerm_user">
                    <div className='position-relative'>
                        <div className="header_userimg" onClick={() => setIsTrue(!isTrue)}>
                            <img src={userImg !== "undefined" ? userImg : Avatar} alt="..." />
                        </div>
                        {isTrue && <div className="header_logout">
                            <a href="#" onClick={handleLogout}>Logout</a>
                        </div>}
                    </div>
                    <p className="headerm_username">{userName}</p>
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