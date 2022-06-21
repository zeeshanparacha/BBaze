import Logo from '../../assets/images/logo.svg'
import Icon1 from '../../assets/images/icon1.PNG'
import Icon2 from '../../assets/images/icon2.PNG'

const Login = () => {
    return(
        <div className="login">
            <div className="login_inner">
                <div className="login_logo">
                    <img src={Logo} alt="" />
                </div>
                <p className="login_text">ADMIN</p>
                <div className="login_email">
                    <input type="email" placeholder="Nom d'utilisateur" />
                    <img src={Icon1} alt="" />
                </div>
                <div className="login_pass">
                    <input type="password" placeholder="Mot de passe" />
                    <img src={Icon2} alt="" />
                </div>
                <div className="login_checkFields">
                    <div>
                        <input type="checkbox" id="memo" />
                        <label htmlFor="memo">Memoriser</label>
                    </div>
                    <div>
                        <input type="checkbox" id="mot" />
                        <label htmlFor="mot">Mot de passe oublie ?</label>
                    </div>
                    <div>
                        <input type="checkbox" id="nom" />
                        <label htmlFor="nom">Nom d'utilisateur oublie ?</label>
                    </div>
                </div>
                <button className="login_btn">CONNEXION</button>
            </div>
        </div>
    )
}

export default Login