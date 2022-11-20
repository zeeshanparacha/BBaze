import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import instance from '../../instance'

import Logo from '../../assets/images/logo.svg'
import Icon1 from '../../assets/images/icon1.PNG'
import Icon2 from '../../assets/images/icon2.PNG'

const Forget = () => {

    const { token } = useParams();
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [err, setErr] = useState('')
    const [success, setSuccess] = useState('')
    const [pass, setPass] = useState('')
    const [confirmPass, setConfirmPass] = useState('')

    const _handleSendEmail = () => {
        setErr('')
        instance.post('/security/generate-password-token', { email })
            .then(res => {
                if (res.data.code === 1) {
                    setSuccess(res.data.message)
                }
            })
            .catch(err => {
                setErr(err.response.data.error)
            })
    }

    const _handleChangePassword = () => {
        setErr('')
        if (pass !== confirmPass) {
            setErr('Le mot de passe et le mot de passe de confirmation doivent être identiques')
        }
        else if (pass.length < 6) {
            setErr('Le mot de passe doit comporter au moins 6 caractères')
        }
        else {
            instance.post('security/reset-password', {
                newPassword: pass,
                resetPasswordLink: token
            })
                .then(res => {
                    if (res.data.code === 1) {
                        navigate("/login")
                    }
                })
                .catch(err => {
                    setErr(err.response.data.error)
                })
        }
    }

    return (
        <div className="reset">
            <div className="reset_inner">
                <div className="reset_logo">
                    <img src={Logo} alt="" />
                </div>

                {!token && <p className="reset_text">ENTREZ VOTRE E-MAIL POUR RÉINITIALISER VOTRE MOT DE PASSE</p>}
                {token && <p className="reset_text">ENTREZ VOTRE NOUVEAU MOT DE PASSE</p>}

                {!token && <div>
                    <div className="reset_email">
                        <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                        <img src={Icon1} alt="" />
                    </div>
                    {err && <p className='reset_err' >{err}</p>}
                    {success && <p className='reset_err' >{success}</p>}
                    <button className="reset_btn" onClick={() => _handleSendEmail()}>ENVOYER UN COURRIEL</button>
                </div>}
                {token && <div>
                    <div className="reset_pass">
                        <input type="password" placeholder="Password" onChange={(e) => setPass(e.target.value)} />
                        <img src={Icon2} alt="" />
                    </div>
                    <div className="reset_pass">
                        <input type="password" placeholder="Confirm Password" onChange={(e) => setConfirmPass(e.target.value)} />
                        <img src={Icon2} alt="" />
                    </div>
                    {err && <p className='reset_err' >{err}</p>}
                    <button className="reset_btn" onClick={() => _handleChangePassword()}>RÉINITIALISER LE MOT DE PASSE</button>
                </div>}
            </div>
        </div>
    )
}

export default Forget