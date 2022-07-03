import { useState } from 'react'
import instance from '../../instance'

import Logo from '../../assets/images/logo.svg'
import Icon1 from '../../assets/images/icon1.PNG'
import Icon2 from '../../assets/images/icon2.PNG'

const Login = () => {

    const [data, setData] = useState({})
    const [err, setErr] = useState('')

    const handleLogin = () => {
        instance.post('/security/login', data)
        .then(res => {
            localStorage.setItem('isLoggedIn', true)
            localStorage.setItem('userId', res.data.user._id)
            localStorage.setItem('token', res.data.token)
            window.location.reload()
        })
        .catch(err => {
            setErr(err.response.data.error)
        })
    }

    const handleEnter = (e) => {
        if (e.key === 'Enter')
        {
            handleLogin()
        }
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
                    <input type="password" value={data.password} placeholder="Mot de passe" onKeyDown={handleEnter} onChange={(e) => setData({...data, password: e.target.value })} />
                    <img src={Icon2} alt="" />
                </div>
                {err && <p className='login_err'>{err}</p>}
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