import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Logo from '../../assets/images/logo.svg'
import Icon1 from '../../assets/images/icon1.PNG'
import Icon2 from '../../assets/images/icon2.PNG'

const Forget = () => {

    const [step, setStep] = useState(1)
    const navigate = useNavigate()

    return(
        <div className="reset">
            <div className="reset_inner">
                <div className="reset_logo">
                    <img src={Logo} alt="" />
                </div>
                <p className="reset_text">ENTER YOUR EMAIL TO RESET YOUR PASSWORD</p>
                {step === 1 && <div>
                    <div className="reset_email">
                        <input type="email" placeholder="Email" />
                        <img src={Icon1} alt="" />
                    </div>
                    <button className="reset_btn" onClick={() => setStep(2)}>SEND EMAIL</button>
                </div>}
                {step === 2 && <div>
                    <div className="reset_pass">
                        <input type="password" placeholder="Password" />
                        <img src={Icon2} alt="" />
                    </div>
                    <div className="reset_pass">
                        <input type="password" placeholder="Confirm Password" />
                        <img src={Icon2} alt="" />
                    </div>
                    <button className="reset_btn" onClick={() => navigate('/login')}>RESET PASSWORD</button>
                </div>}
            </div>
        </div>
    )
}

export default Forget