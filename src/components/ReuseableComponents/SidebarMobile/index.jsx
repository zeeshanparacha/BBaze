import Logo from '../../../assets/images/logo-white.svg'

const SideBarMobile = ({setMenu}) => {
    return(
        <div className="sideBarm">
            <span className='sideBarm_close' onClick={() => setMenu(false)}>&#9587;</span>
            <div className="sideBarm_logo">
                <img src={Logo} alt="" />
            </div>
            <p className="sideBarm_role">ADMIN</p>
            <ul>
                <li><a href="#">Projects <img src="" alt="" /></a></li>
                <li><a href="#">Organisateurs <img src="" alt="" /></a></li>
                <li><a href="#">Profil <img src="" alt="" /></a></li>
            </ul>
        </div>
    )
}

export default SideBarMobile