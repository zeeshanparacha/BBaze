import { Link } from 'react-router-dom'
import Logo from '../../../assets/images/logo-white.svg'

const SideBarMobile = ({ setMenu }) => {

    const role = localStorage.getItem('role')

    const handleLogout = () => {
        localStorage.clear()
        window.location.reload()
    }

    return (
        <div className="sideBarm">
            <span className='sideBarm_close' onClick={() => setMenu(false)}>&#9587;</span>
            <div className="sideBarm_logo">
                <img src={Logo} alt="" />
            </div>
            <p className="sideBarm_role">ADMIN</p>
            <ul>
                <li><Link to="/dashboard">Projects <img src="" alt="" /></Link><i className="fa-solid fa-angle-right"></i></li>
                <li><Link to="/organizer">Organisateurs <img src="" alt="" /></Link><i className="fa-solid fa-angle-right"></i></li>
                {role === 'admin' && <li><Link to="/approve">Projets proposés <img src="" alt="" /></Link><i className="fa-solid fa-angle-right"></i></li>}
                <li><Link to="/profile">Profil <img src="" alt="" /></Link><i className="fa-solid fa-angle-right"></i></li>
                <li><a href="#" onClick={handleLogout}>Déconnexion</a><i className="fa-solid fa-angle-right"></i></li>
            </ul>
        </div>
    )
}

export default SideBarMobile