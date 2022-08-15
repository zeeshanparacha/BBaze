import ImgPeople from '../../../../assets/images/people4.jpg'
import Avatar from '../../../../assets/images/avatar.jpg'

const UserDetail = ({ setModal, setActiveTab, data }) => {

    return (
        <div className="user">
            <div className="user_inner">
                <span className='access_close' onClick={() => setModal('')}>&#9587;</span>
                <div className="user_details">
                    <div className="user_left">
                        <img src={data?.profile ? data.profile : Avatar} alt="" />
                    </div>
                    <div className="user_right">
                        <p><span>Noms:</span>{data?.loginName}</p>
                        <p><span>Profession:</span>{data?.profession}</p>
                        <p><span>Domaine d'expertise:</span>{data?.expertiseFeild}</p>
                        <p><span>Ville:</span>{data?.town}</p>
                        <p><span>Email:</span>{data?.email}</p>
                        <p><span>Tél. bureau :</span>{data?.telephone}</p>
                        <p><span>Tél. portable :</span>{data?.mobileNumber}</p>
                        <p><span>Fax</span>{data?.fax}</p>
                    </div>
                </div>
                {/* <p className="user_descTitle">A PROPOS</p>
                <p className="user_desc">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
                    euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad
                    minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip
                    ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate
                    velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros
                    et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit
                    augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh
                    euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad
                    minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip
                    ex ea commodo consequat.
                </p> */}
                <div className="user_bot">
                    <p className="user_heading">Projets en cours: <span>6</span></p>
                    <p className="user_heading">Projets realises: <span>11</span></p>
                    <button onClick={() => { setActiveTab(2) }}>MODIFIER</button>
                </div>
            </div>
        </div>
    )
}

export default UserDetail