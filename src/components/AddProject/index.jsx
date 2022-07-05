import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import instance from '../../instance'

import Access from './Access'
import Permission from './Permission'

import Icon1 from '../../assets/images/project-icon1.svg'
import Icon2 from '../../assets/images/project-icon2.svg'
import Icon3 from '../../assets/images/project-icon3.svg'
import Icon4 from '../../assets/images/project-icon4.svg'
import Icon5 from '../../assets/images/project-icon5.svg'
import PlusIcon from '../../assets/images/plus1.svg'
import Img1 from '../../assets/images/img1.jpg'
import Img2 from '../../assets/images/img2.jpg'
import PeopleImg from '../../assets/images/people1.png'
import IconSend from '../../assets/images/send.svg'

const AddProject = () => {

    const [projectIcon, setProjectIcon] = useState()
    const [access, setAccess] = useState(false)
    const [permission, setPermission] = useState(false)
    const [authorityName, setAuthorityName] = useState('')
    const [authorityRole, setAuthorityRole] = useState('')
    const [authorities, setAuthorities] = useState([])
    const [participantName, setParticipantName] = useState('')
    const [participantRole, setParticipantRole] = useState('')
    const [participants, setParticipants] = useState([])
    const [notesDate, setNotesDate] = useState('')
    const [notesText, setNotesText] = useState('')
    const [notes, setNotes] = useState([])
    const [data, setData] = useState({})
    const userId = localStorage.getItem('userId')
    const docUrl = 'https://drive.google.com/file/d/1QLpg2lFg0RdqxEIss6famu7NOev-2N3R/view'
    const imgUrl = 'https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg'
    const navigate = useNavigate()
    const location = useLocation()

    useEffect(() => {
        if (location.state.category === 'Espace vert') {
            setProjectIcon(Icon1)
        }
        else if (location.state.category === 'Fond local') {
            setProjectIcon(Icon2)
        }
        else if (location.state.category === 'Partage social') {
            setProjectIcon(Icon3)
        }
        else if (location.state.category === 'Wikend') {
            setProjectIcon(Icon4)
        }
        else if (location.state.category === 'KinFest') {
            setProjectIcon(Icon5)
        }
        // eslint-disable-next-line
    }, [])

    useEffect(() => {
        setData({ ...data, user: userId, authorities, otherParticipants: participants, notes, category: location.state.category, documents: [{ url: docUrl }], images: [{ url: imgUrl }] })
        // eslint-disable-next-line
    }, [authorities, participants, notes])

    useEffect(() => {
        if (location.state.edit) {
            const editData = location.state.data
            setData({
                ...data,
                user: userId,
                authorities: editData.authorities,
                otherParticipants: editData.otherParticipants,
                notes: editData.notes,
                category: location.state.category,
                documents: [{ url: docUrl }],
                images: [{ url: imgUrl }],
                about: editData.about,
                animator: editData.animator,
                headQuartier: editData.headQuartier,
                host: editData.host,
                organizerName: editData.organizerName,
                projectName: editData.projectName,
                town: editData.town,
                _id: editData._id
            })
            setAuthorities(editData.authorities)
            setParticipants(editData.otherParticipants)
            setNotes(editData.notes)
        }
        // eslint-disable-next-line
    }, [])

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    const handleAuthorities = () => {
        if (authorityName && authorityRole) {
            setAuthorities([...authorities, { name: authorityName, roleTitle: authorityRole }])
            setAuthorityName('')
            setAuthorityRole('')
        }
    }

    const removeAuthority = (param) => {
        const temp = authorities.filter((item, index) => index !== param)
        setAuthorities(temp)
    }

    const handleParticipants = () => {
        if (participantName && participantRole) {
            setParticipants([...participants, { name: participantName, roleTitle: participantRole }])
            setParticipantName('')
            setParticipantRole('')
        }
    }

    const removeParticipant = (param) => {
        const temp = authorities.filter((item, index) => index !== param)
        setParticipants(temp)
    }

    const handleNotes = () => {
        if (notesDate && notesText) {
            setNotes([...notes, { meetingDate: notesDate, text: notesText }])
            setNotesDate('')
            setNotesText('')
        }
    }

    const removeNote = (param) => {
        const temp = authorities.filter((item, index) => index !== param)
        setNotes(temp)
    }

    const handleSubmit = () => {
        instance.post('projects/create-project', data)
            .then(res => {
                if (res.data.code === 1) {
                    navigate('/dashboard')
                }
            })
            .catch(err => console.log(err.response))
    }

    const handleUpdate = () => {
        instance.post('projects/update-project', data)
            .then(res => {
                if (res.data.code === 1) {
                    navigate('/dashboard')
                }
            })
            .catch(err => console.log(err.response))
    }

    return (
        <div className="add">
            <div className="add_top">
                <div className="add_topLeft">
                    <img src={projectIcon} alt="" />
                    <p>{data.category}</p>
                </div>
                <div className="add_topRight">
                    <button className='add_btn' onClick={() => setAccess(true)}>ACCES A CE PROJET</button>
                </div>
            </div>
            <div className="add_form">
                <div className="add_formLeft">
                    <label>Nom du projet</label>
                    <input type="text" name='projectName' value={data.projectName} onChange={handleChange} />
                    <label>Ville</label>
                    <input type="text" name='town' value={data.town} onChange={handleChange} />
                    <label>Quartier</label>
                    <input type="text" name='headQuartier' value={data.headQuartier} onChange={handleChange} />
                    <label>À propos du projet</label>
                    <textarea name='about' value={data.about} onChange={handleChange}></textarea>
                    <label>Organisateur (trice)</label>
                    <input type="text" placeholder="Taper le nom de l'organisateur" name='organizerName' value={data.organizerName} onChange={handleChange} />
                    <label>Animateur (trice)</label>
                    <input type="text" placeholder="Taper le nom de l'animateur" name='animator' value={data.animator} onChange={handleChange} />
                    <label>Hote / Hotesse</label>
                    <input type="text" placeholder="Taper le nom de la personne (Physique ou morale) qui recoit" name='host' value={data.host} onChange={handleChange} />
                </div>
                <div className="add_formRight">
                    <div>
                        <label>Autorité locale</label>
                        <div className='add_inputMain'>
                            <input type="text" placeholder="Nom de l" value={authorityName} onChange={(e) => setAuthorityName(e.target.value)} />
                            <button><img src={PlusIcon} alt="" onClick={handleAuthorities} /></button>
                        </div>
                        <div className='add_inputMain'>
                            <input type="text" placeholder="Titre cu role" value={authorityRole} onChange={(e) => setAuthorityRole(e.target.value)} />
                            <button className='add_btnHidden'></button>
                        </div>
                        <div className="add_authorities">
                            {authorities.length > 0 && authorities.map((item, index) => (
                                <div key={index}>
                                    <p>{item.name}</p>
                                    <p>{item.roleTitle}</p>
                                    <span onClick={() => removeAuthority(index)}>x</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div>
                        <label>Autres participants clés</label>
                        <div className='add_inputMain'>
                            <input type="text" placeholder="Nom de l'autorite" value={participantName} onChange={(e) => setParticipantName(e.target.value)} />
                            <button><img src={PlusIcon} alt="" onClick={handleParticipants} /></button>
                        </div>
                        <div className='add_inputMain'>
                            <input type="text" placeholder="Titre cu role" value={participantRole} onChange={(e) => setParticipantRole(e.target.value)} />
                            <button className='add_btnHidden'></button>
                        </div>
                        <div className="add_authorities">
                            {participants.length > 0 && participants.map((item, index) => (
                                <div key={index}>
                                    <p>{item.name}</p>
                                    <p>{item.roleTitle}</p>
                                    <span onClick={() => removeParticipant(index)}>x</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div>
                        <label>Document</label>
                        <div className='add_inputMain'>
                            <input type="text" placeholder="Nom du document" />
                            <button><img src={PlusIcon} alt="" /></button>
                        </div>
                    </div>
                    <div>
                        <label>Notes de la réunion</label>
                        <div className='add_inputMain'>
                            <input type="text" placeholder="Date de la reunion" value={notesDate} onChange={(e) => setNotesDate(e.target.value)} />
                            <button><img src={PlusIcon} alt="" onClick={handleNotes} /></button>
                        </div>
                        <div className='add_inputMain'>
                            <textarea type="text" placeholder="Notes" value={notesText} onChange={(e) => setNotesText(e.target.value)} />
                            <button className='add_btnHidden'></button>
                        </div>
                        <div className="add_authorities">
                            {notes.length > 0 && notes.map((item, index) => (
                                <div key={index}>
                                    <p>{item.meetingDate}</p>
                                    <p>{item.text}</p>
                                    <span onClick={() => removeNote(index)}>x</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="add_imagesBody">
                <div className="add_btnImg">
                    <img src={PlusIcon} alt="" />
                </div>
                <div className="add_images">
                    <div className="add_image">
                        <img src={Img1} alt="" />
                    </div>
                    <div className="add_image">
                        <img src={Img2} alt="" />
                    </div>
                    <div className="add_image">
                        <img src={Img1} alt="" />
                    </div>
                </div>
            </div>
            <div className="add_btns">
                <button onClick={handleUpdate}>MODIFIER</button>
                <button>SAUVEGARDER</button>
                <button>ANNULER</button>
                <button>APPROUVER LE PROJET</button>
                <button onClick={handleSubmit}>LANCER LE PROJET</button>
                <button>CLOTURER LE PROJET</button>
            </div>
            <div className="add_bot">
                <div className="add_people">
                    <span className='add_peopleTitle'>ACCES A CE PROJET</span>
                    <div className="add_peopleBody">
                        <img src={PeopleImg} alt="..." />
                        <img src={PeopleImg} alt="..." />
                        <img src={PeopleImg} alt="..." />
                        <img src={PeopleImg} alt="..." />
                        <img src={PeopleImg} alt="..." />
                        <img src={PeopleImg} alt="..." />
                        <img src={PeopleImg} alt="..." />
                    </div>
                </div>
                <div className="add_convo">
                    <span className='add_convoTitle'>CONVERSATIONS</span>
                    <div className="add_convoBody">
                        <div className="add_convoLeft">
                            <img src={PeopleImg} alt="..." />
                        </div>
                        <div className="add_convoRight">
                            <p className="add_convoname">Joseph Mpia</p>
                            <p className="add_convodesc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium aliquam officia eaque aperiam neque. Officia alias dolorum a temporibus sequi.</p>
                            <p className="add_convoreplies">5 responses</p>
                        </div>
                    </div>
                    <div className="add_convoReply">
                        <input type="text" placeholder='Ecrivez ici' />
                        <img src={IconSend} alt="..." />
                    </div>
                </div>
            </div>
            {access && <Access setAccess={setAccess} setPermission={setPermission} />}
            {permission && <Permission setPermission={setPermission} />}
        </div>
    )
}

export default AddProject