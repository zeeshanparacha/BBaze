import { Link } from 'react-router-dom'
import Logo from '../../../assets/images/logo-white.svg'

const SideBar = ({ index }) => {

    const role = localStorage.getItem('role')

    const handleLogout = () => {
        localStorage.clear()
        window.location.reload()
    }

    return (
        <div className="sideBar">
            <div className="sideBar_logo">
                <img src={Logo} alt="" />
            </div>
            <p className="sideBar_role">ADMIN</p>
            <ul>
                <li><Link to="/dashboard" className={index === 1 ? 'active' : ''}>Projects <img src="" alt="" /></Link><i className="fa-solid fa-angle-right"></i></li>
                <li><Link to="/organizer" className={index === 2 ? 'active' : ''}>Organisateurs <img src="" alt="" /></Link><i className="fa-solid fa-angle-right"></i></li>
                {role === 'admin' && <li><Link to="/approve" className={index === 3 ? 'active' : ''}>Projets proposés <img src="" alt="" /></Link><i className="fa-solid fa-angle-right"></i></li>}
                <li><Link to="/profile" className={index === 4 ? 'active' : ''}>Profil <img src="" alt="" /></Link><i className="fa-solid fa-angle-right"></i></li>
                <li><a href="#" onClick={handleLogout}>Déconnexion</a><i className="fa-solid fa-angle-right"></i></li>
            </ul>
        </div>
    )
}

export default SideBar