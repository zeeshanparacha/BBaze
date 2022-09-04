import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import Logo from '../../assets/images/logo.svg'
import Icon1 from '../../assets/images/icon1.PNG'
import Icon2 from '../../assets/images/icon2.PNG'
const Forget = () => {
    const { token } = useParams();
    const navigate = useNavigate()

    const _handleSendEmail = () => { }
    const _handleChangePassword = () => { navigate("/login") }

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
                        <input type="email" placeholder="Email" />
                        <img src={Icon1} alt="" />
                    </div>
                    <button className="reset_btn" onClick={() => _handleSendEmail()}>ENVOYER UN COURRIEL</button>
                </div>}
                {token && <div>
                    <div className="reset_pass">
                        <input type="password" placeholder="Password" />
                        <img src={Icon2} alt="" />
                    </div>
                    <div className="reset_pass">
                        <input type="password" placeholder="Confirm Password" />
                        <img src={Icon2} alt="" />
                    </div>
                    <button className="reset_btn" onClick={() => _handleChangePassword()}>RÉINITIALISER LE MOT DE PASSE</button>
                </div>}
            </div>
        </div>
    )
}

export default Forget