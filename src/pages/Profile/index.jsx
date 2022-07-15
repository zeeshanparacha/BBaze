import SideBar from "../../components/ReuseableComponents/Sidebar"
import Header from "../../components/ReuseableComponents/Header"

const Organizer = () => {

    return(
        <div className="org">
            <SideBar index={4} />
            <div className="org_body">
                <Header/>
                <div className="addOrg">
                    <div className="addOrg_form">
                        <div className="addOrg_field">
                            <label>Noms:</label>
                            <input type="text" />
                        </div>
                        <div className="addOrg_field">
                            <label>Profession:</label>
                            <input type="text" />
                        </div>
                        <div className="addOrg_field">
                            <label>Domaine d’expertise:</label>
                            <input type="text" />
                        </div>
                        <div className="addOrg_field">
                            <label>Ville:</label>
                            <input type="text" />
                        </div>
                        <div className="addOrg_field">
                            <label>Email:</label>
                            <input type="text" />
                        </div>
                        <div className="addOrg_field">
                            <label>Tél. portable:</label>
                            <input type="text" />
                        </div>
                        <div className="addOrg_field">
                            <label>Tél. bureau:</label>
                            <input type="text" />
                        </div>
                        <div className="addOrg_field">
                            <label>Fax:</label>
                            <input type="text" />
                        </div>
                        <div className="addOrg_field">
                            <label>Photo:</label>
                            <input type="text" />
                        </div>
                        <div className="addOrg_field">
                            <label>Nom d'utilisateur:</label>
                            <input type="text" />
                        </div>
                        <div className="addOrg_field">
                            <label>Mot de passe:</label>
                            <input type="text" />
                        </div>
                    </div>
                    <p className='addOrg_descTitle'>A PROPOS</p>
                    <div className="addOrg_desc">
                        <p>RESUME / CV<br />Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.</p>
                        <p>Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation</p>
                    </div>
                    <div className="addOrg_btns">
                        <button>UPDATE PROFILE</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Organizer