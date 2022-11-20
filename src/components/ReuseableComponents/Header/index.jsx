import React from 'react'
import { useState } from 'react'
import SideBarMobile from '../SidebarMobile'

import Avatar from '../../../assets/images/avatar.jpg'

const Header = () => {

    const [menu, setMenu] = useState(false)
    const [isTrue, setIsTrue] = useState(false)
    const userName = localStorage.getItem('name')
    const userImg = localStorage.getItem('userImg')

    return (
        <React.Fragment>
            <div className="header">
                <div className="header_search">
                </div>
                <div className="header_right">
                    <div className="header_user">
                        <p className="header_username">{userName}</p>
                        <div className='position-relative'>
                            <div className="header_userimg" onClick={() => setIsTrue(!isTrue)}>
                                <img src={userImg ? userImg : Avatar} alt="..." />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="headerm">
                <div className="headerm_search">
                </div>
                <div className="headerm_user">
                    <div className='position-relative'>
                        <div className="header_userimg" onClick={() => setIsTrue(!isTrue)}>
                            <img src={userImg ? userImg : Avatar} alt="..." />
                        </div>
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