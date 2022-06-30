import ImgPeople from '../../../../assets/images/people4.jpg'
import Img from '../../../../assets/images/img1.jpg'

const UserDetail = () => {
    return(
        <div className="user">
            <div className="user_inner">
                <span className='access_close'>&#9587;</span>
                <div className="user_details">
                    <div className="user_left">
                        <img src={ImgPeople} alt="" />
                    </div>
                    <div className="user_right">
                        <p><span>Noms:</span>Paullet dsa</p>
                        <p><span>Profession:</span>Paullet dsa</p>
                        <p><span>Domaine d'expertise:</span>Paullet dsa</p>
                        <p><span>Ville:</span>Paullet dsa</p>
                        <p><span>Email:</span>Paullet dsa</p>
                        <p><span>Tél. bureau :</span>Paullet dsa</p>
                        <p><span>Tél. portable :</span>Paullet dsa</p>
                        <p><span>Fax</span>Paullet dsa</p>
                    </div>
                </div>
                <p className="user_descTitle">A PROPOS</p>
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
                </p>
                <p className="user_heading">Projets en cours: <span>6</span></p>
                <div className="user_projects">
                    <div className="user_box">
                        <div className="user_img">
                            <img src={Img} alt="" />
                        </div>
                        <p className="user_name">Green Space day</p>
                        <p className="user_date">mai 2022</p>
                    </div>
                    <div className="user_box">
                        <div className="user_img">
                            <img src={Img} alt="" />
                        </div>
                        <p className="user_name">Green Space day</p>
                        <p className="user_date">mai 2022</p>
                    </div>
                    <div className="user_box">
                        <div className="user_img">
                            <img src={Img} alt="" />
                        </div>
                        <p className="user_name">Green Space day</p>
                        <p className="user_date">mai 2022</p>
                    </div>
                    <div className="user_box">
                        <div className="user_img">
                            <img src={Img} alt="" />
                        </div>
                        <p className="user_name">Green Space day</p>
                        <p className="user_date">mai 2022</p>
                    </div>
                    <div className="user_box">
                        <div className="user_img">
                            <img src={Img} alt="" />
                        </div>
                        <p className="user_name">Green Space day</p>
                        <p className="user_date">mai 2022</p>
                    </div>
                </div>
                <p className="user_heading">Projets realises: <span>11</span></p>
                <div className="user_projects">
                    <div className="user_box">
                        <div className="user_img">
                            <img src={Img} alt="" />
                        </div>
                        <p className="user_name">Green Space day</p>
                        <p className="user_date">mai 2022</p>
                    </div>
                    <div className="user_box">
                        <div className="user_img">
                            <img src={Img} alt="" />
                        </div>
                        <p className="user_name">Green Space day</p>
                        <p className="user_date">mai 2022</p>
                    </div>
                    <div className="user_box">
                        <div className="user_img">
                            <img src={Img} alt="" />
                        </div>
                        <p className="user_name">Green Space day</p>
                        <p className="user_date">mai 2022</p>
                    </div>
                    <div className="user_box">
                        <div className="user_img">
                            <img src={Img} alt="" />
                        </div>
                        <p className="user_name">Green Space day</p>
                        <p className="user_date">mai 2022</p>
                    </div>
                    <div className="user_box">
                        <div className="user_img">
                            <img src={Img} alt="" />
                        </div>
                        <p className="user_name">Green Space day</p>
                        <p className="user_date">mai 2022</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserDetail