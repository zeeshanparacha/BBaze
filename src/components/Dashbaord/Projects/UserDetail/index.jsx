import { useState, useEffect } from 'react'
import Avatar from '../../../../assets/images/avatar.jpg'

const UserDetail = ({ setModal, data, projectList }) => {

    const [onGoing, setOngoing] = useState([])
    const [closed, setClosed] = useState([])

    useEffect(() => {
        const array1 = []
        const array2 = []
        projectList.forEach(item => {
            if (data.user.projects.includes(item._id)) {
                if (item.status === 'approved') {
                    array1.push(item)
                }

                else if (item.status === 'closed') {
                    array2.push(item)
                }
            }
        })
        setOngoing(array1)
        setClosed(array2)
    }, [])

    // const close = projectList.filter(item => item.status === 'closed' || item.status === 'approved'))

    return (
        <div className="user">
            <div className="user_inner">
                <span className='access_close' onClick={() => setModal('')}>&#9587;</span>
                <div className="user_details">
                    <div className="user_left">
                        <img src={data?.user?.profile ? data?.user?.profile : Avatar} alt="" />
                    </div>
                    <div className="user_right">
                        <p><span>Noms:</span>{data?.user?.name}</p>
                        <p><span>Profession:</span>{data?.user?.profession}</p>
                        <p><span>Domaine d'expertise:</span>{data?.user?.expertiseFeild}</p>
                        <p><span>Ville:</span>{data?.user?.town}</p>
                        <p><span>Email:</span>{data?.user?.email}</p>
                        <p><span>Tél. bureau :</span>{data?.user?.telephone}</p>
                        <p><span>Tél. portable :</span>{data?.user?.mobileNumber}</p>
                        <p><span>Fax</span>{data?.user?.fax}</p>
                    </div>
                </div>
                <p className="user_descTitle">A PROPOS</p>
                <p className="user_desc">{data?.user?.about}</p>
                <p className="user_heading">Projets en cours: <span>{onGoing.length}</span></p>
                <div className="user_projects">
                    {onGoing.map((item, index) => item.images.map((img, index) => (
                        <div className="user_box" key={index}>
                            <div className="user_img">
                                <img src={img.url} alt="" />
                            </div>
                            {/* <p className="user_name">Green Space day</p>
                                <p className="user_date">mai 2022</p> */}
                        </div>
                    )))}
                </div>
                <p className="user_heading">Projets realises: <span>{closed.length}</span></p>
                <div className="user_projects">
                    {closed.map((item, index) => item.images.map((img, index) => (
                        <div className="user_box" key={index}>
                            <div className="user_img">
                                <img src={img.url} alt="" />
                            </div>
                            {/* <p className="user_name">Green Space day</p>
                                <p className="user_date">mai 2022</p> */}
                        </div>
                    )))}
                </div>
            </div>
        </div>
    )
}

export default UserDetail