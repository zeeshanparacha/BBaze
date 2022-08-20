import { useState, useEffect } from "react"

import instance from '../../instance'
import SideBar from "../../components/ReuseableComponents/Sidebar"
import Header from "../../components/ReuseableComponents/Header"

import avatar from '../../assets/images/avatar.jpg'

const Organizer = () => {

    const [data, setData] = useState({})

    useEffect(() => {
        instance.post('profile/get-profile', { _id: localStorage.getItem('userId') })
            .then(res => {
                console.log('get profile', res)
                setData({
                    _id: res.data.data._id,
                    name: res.data.data.name,
                    profession: res.data.data.profession,
                    expertiseFeild: res.data.data.expertiseFeild,
                    town: res.data.data.town,
                    mobileNumber: res.data.data.mobileNumber,
                    telephone: res.data.data.telephone,
                    fax: res.data.data.fax,
                    profile: res.data.data.profile,
                    about: res.data.data.about,
                })
            })
    }, [])

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    const handleImg = (e) => {
        const file = e.target.files[0]

        if (file) {
            setData({ ...data, profile: '' })
            const formData = new FormData()
            formData.append(
                'userId', localStorage.getItem('userId')
            )
            formData.append(
                'file', file,
            )
            instance.post('s3/upload/profile', formData)
                .then(res => {
                    setData({ ...data, profile: res.data.data })
                })
        }
    }

    const handleSubmit = () => {
        instance.post('profile/update-profile', data)
        // .then(res => console.log('res update', res))
    }

    return (
        <div className="org">
            <SideBar index={4} />
            <div className="org_body">
                <Header />
                <div className="addOrg">
                    <div className="addOrg_form">
                        <label htmlFor="dp" className="addOrg_labelImg">
                            <img src={data?.profile ? data?.profile : avatar} alt="" />
                        </label>
                        <input type="file" id="dp" onChange={handleImg} />
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
                    </div>
                    <p className='addOrg_descTitle'>A PROPOS</p>
                    <div className="addOrg_desc">
                        <textarea value={data.about} name="about" placeholder="A PROPOS" onChange={handleChange}></textarea>
                    </div>
                    <div className="addOrg_btns">
                        <button onClick={handleSubmit}>UPDATE PROFILE</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Organizer