import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import instance from '../../instance'

import Logo from '../../assets/images/logo.svg'
import Icon1 from '../../assets/images/icon1.PNG'
import Icon2 from '../../assets/images/icon2.PNG'

const Login = () => {

    const [data, setData] = useState({})
    const navigate = useNavigate()

    const handleLogin = () => {

        console.log('data', data);
        instance.post('/security/login', data)
        .then(res => {
            console.log('res', res)
        })
        .catch(err => console.log('err', err))
        // navigate('/dashboard')
    }

    return(
        <div className="login">
            <div className="login_inner">
                <div className="login_logo">
                    <img src={Logo} alt="" />
                </div>
                <p className="login_text">ADMIN</p>
                <div className="login_email">
                    <input type="email" value={data.email} placeholder="Nom d'utilisateur" onChange={(e) => setData({...data, email: e.target.value })} />
                    <img src={Icon1} alt="" />
                </div>
                <div className="login_pass">
                    <input type="password" value={data.password} placeholder="Mot de passe" onChange={(e) => setData({...data, password: e.target.value })} />
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
                <button className="login_btn" onClick={handleLogin}>CONNEXION</button>
            </div>
        </div>
    )
}

export default Login