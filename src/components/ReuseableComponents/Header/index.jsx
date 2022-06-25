import SearchIcon from '../../../assets/images/search6.svg'
import People from '../../../assets/images/people1.png'

const Header = () => {
    return(
        <div className="header">
            <div className="header_search">
                <input type="search" placeholder="Chercher" />
                <img src={SearchIcon} alt="" />
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
    )
}

export default Header