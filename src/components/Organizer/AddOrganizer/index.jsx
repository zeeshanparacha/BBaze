import { useState } from 'react'
import instance from '../../../instance'
import Check from '../../../assets/images/check.svg'
import Cross from '../../../assets/images/cross.svg'
import { useEffect } from 'react'

const AddOrganizer = ({ setActiveTab, editData, getUsers }) => {

    const [data, setData] = useState({})
    const [isModify, setIsModify] = useState(false)
    const [err, setErr] = useState('')

    useEffect(() => {
        if (editData) {
            setIsModify(true)
            setData({
                _id: editData._id,
                name: editData.name,
                profession: editData.profession,
                expertiseFeild: editData.expertiseFeild,
                town: editData.town,
                mobileNumber: editData.mobileNumber,
                telephone: editData.telephone,
                fax: editData.fax,
            })
        }
    }, [])

    const handleChange = (e) => {
        setErr('')
        setData({ ...data, [e.target.name]: e.target.value })
    }

    const handleSubmit = () => {
        instance.post('organization/register', data)
            .then(res => {
                if (res.data.code === 1) {
                    setActiveTab(1)
                }
            })
            .catch(err => {
                console.log('err', err.response.data.error)
                setErr(err.response.data.error)
            })
    }

    const handleUpdate = () => {
        instance.post('organization/update-user', data)
            .then(res => {
                if (res.data.code === 1) {
                    getUsers()
                    setActiveTab(1)
                }
            })
            .catch(err => {
                console.log('err', err.response.data.error)
                setErr(err.response.data.error)
            })
    }

    return (
        <div className="addOrg">
            {/* <div className="addOrg_top">
                <button><img src={Check} alt="..." /></button>
                <button><img src={Cross} alt="..." /></button>
            </div> */}
            <div className="addOrg_form">
                <div className="addOrg_field">
                    <label>Noms:</label>
                    <input type="text" value={data.name} name='name' onChange={handleChange} />
                </div>
                <div className="addOrg_field">
                    <label>Profession:</label>
                    <input type="text" value={data.profession} name='profession' onChange={handleChange} />
                </div>
                <div className="addOrg_field">
                    <label>Domaine d’expertise:</label>
                    <input type="text" value={data.expertiseFeild} name='expertiseFeild' onChange={handleChange} />
                </div>
                <div className="addOrg_field">
                    <label>Ville:</label>
                    <input type="text" value={data.town} name='town' onChange={handleChange} />
                </div>
                {isModify === false && <div className="addOrg_field">
                    <label>Email:</label>
                    <input type="email" value={data.email} name='email' onChange={handleChange} />
                </div>}
                <div className="addOrg_field">
                    <label>Tél. portable:</label>
                    <input type="text" value={data.mobileNumber} name='mobileNumber' onChange={handleChange} />
                </div>
                <div className="addOrg_field">
                    <label>Tél. bureau:</label>
                    <input type="text" value={data.telephone} name='telephone' onChange={handleChange} />
                </div>
                <div className="addOrg_field">
                    <label>Fax:</label>
                    <input type="text" value={data.fax} name='fax' onChange={handleChange} />
                </div>
                {isModify === false && <div className="addOrg_field">
                    <label>Nom d'utilisateur:</label>
                    <input type="text" value={data.loginName} name='loginName' onChange={handleChange} />
                </div>}
                {isModify === false && <div className="addOrg_field">
                    <label>Mot de passe:</label>
                    <input type="password" value={data.password} name='password' onChange={handleChange} />
                </div>}
                <div>{err && <p className='addOrg_err'>{err}</p>}</div>
            </div>
            <p className='addOrg_descTitle'>A PROPOS</p>
            <div className="addOrg_desc">
                <textarea value={data.about} name="about" placeholder="A PROPOS" onChange={handleChange}></textarea>
            </div>
            {/* <div className="addOrg_desc">
                <p>RESUME / CV<br />Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.</p>
                <p>Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation</p>
            </div> */}
            <div className="addOrg_btns">
                {editData && <button onClick={handleUpdate}>MODIFIER</button>}
                {!editData && <button onClick={handleSubmit}>SAUVEGARDER</button>}
                {/* <button>ANNULER</button> */}
            </div>
        </div>
    )
}

export default AddOrganizer