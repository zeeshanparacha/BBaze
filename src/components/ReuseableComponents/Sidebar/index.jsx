import Logo from '../../../assets/images/logo-white.svg'

const SideBar = () => {
    return(
        <div className="sideBar">
            <div className="sideBar_logo">
                <img src={Logo} alt="" />
            </div>
            <p className="sideBar_role">ADMIN</p>
            <ul>
                <li><a href="#">Projects <img src="" alt="" /></a><i class="fa-solid fa-angle-right"></i></li>
                <li><a href="#">Organisateurs <img src="" alt="" /></a><i class="fa-solid fa-angle-right"></i></li>
                <li><a href="#">Profil <img src="" alt="" /></a><i class="fa-solid fa-angle-right"></i></li>
            </ul>
        </div>
    )
}

export default SideBar