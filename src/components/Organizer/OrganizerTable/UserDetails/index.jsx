import ImgPeople from '../../../../assets/images/people4.jpg'
import Avatar from '../../../../assets/images/avatar.jpg'

const UserDetail = ({ setModal, setActiveTab, data }) => {

    const role = localStorage.getItem('role')

    return (
        <div className="user">
            <div className="user_inner">
                <span className='access_close' onClick={() => setModal('')}>&#9587;</span>
                <div className="user_details">
                    <div className="user_left">
                        <img src={data?.profile ? data.profile : Avatar} alt="" />
                    </div>
                    <div className="user_right">
                        <p><span>Noms:</span>{data?.name}</p>
                        <p><span>Profession:</span>{data?.profession}</p>
                        <p><span>Domaine d'expertise:</span>{data?.expertiseFeild}</p>
                        <p><span>Ville:</span>{data?.town}</p>
                        <p><span>Email:</span>{data?.email}</p>
                        <p><span>Tél. bureau :</span>{data?.telephone}</p>
                        <p><span>Tél. portable :</span>{data?.mobileNumber}</p>
                        <p><span>Fax</span>{data?.fax}</p>
                    </div>
                </div>
                <p className="user_descTitle">A PROPOS</p>
                <p className="user_desc">{data.about}</p>
                <div className="user_bot">
                    <p className="user_heading">Projets en cours: <span>{data.ongoingProjects.length}</span></p>
                    <p className="user_heading">Projets realises: <span>{data.completedProjects.length}</span></p>
                    {role === 'admin' && <button onClick={() => { setActiveTab(2) }}>MODIFIER</button>}
                </div>
            </div>
        </div>
    )
}

export default UserDetail