import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import instance from '../../instance'

import InfoModal from './InfoModal'
import ConfirmModal from './ConfirmModal'
import ConfirmModalProject from './ConfirmModalProject'
import Access from './Access'
import Permission from './Permission'
import DeleteUser from './Access/DeleteUser'

import Icon1 from '../../assets/images/project-icon1.svg'
import Icon2 from '../../assets/images/project-icon2.svg'
import Icon3 from '../../assets/images/project-icon3.svg'
import Icon4 from '../../assets/images/project-icon4.svg'
import Icon5 from '../../assets/images/project-icon5.svg'
import Avatar from '../../assets/images/avatar.jpg'
import PlusIcon from '../../assets/images/plus1.svg'
import PeopleImg from '../../assets/images/people1.png'
import IconSend from '../../assets/images/send.svg'

const AddProject = () => {

    const [projectIcon, setProjectIcon] = useState()
    const [modal, setModal] = useState('')
    const [authorityName, setAuthorityName] = useState('')
    const [authorityRole, setAuthorityRole] = useState('')
    const [authorities, setAuthorities] = useState([])
    const [participantName, setParticipantName] = useState('')
    const [participantRole, setParticipantRole] = useState('')
    const [participants, setParticipants] = useState([])
    const [notesDate, setNotesDate] = useState('')
    const [notesText, setNotesText] = useState('')
    const [isNewProject, setIsNewProject] = useState(false)
    const [notes, setNotes] = useState([])
    const [data, setData] = useState({})
    const [images, setImages] = useState([])
    const [documents, setDocuments] = useState([])
    const [fileType, setFileType] = useState('')
    const [fileToRemove, setFileToRemove] = useState({})
    const [clickUserId, setClickUserId] = useState('')
    const [btnType, setBtnType] = useState('')
    const [projectStatus, setProjectStatus] = useState('')
    const [users, setUsers] = useState([])
    const [err, setErr] = useState({})
    const role = localStorage.getItem('role')
    const userId = localStorage.getItem('userId')
    const navigate = useNavigate()
    const location = useLocation()

    console.log('role', role);
    console.log('projectStatus', projectStatus);

    useEffect(() => {
        setData({
            ...data,
            category: location.state.category,
            user: userId,
            authorities,
            otherParticipants: participants,
            notes,
            documents: documents,
            images: images
        })
        // eslint-disable-next-line
    }, [authorities, participants, notes, images, documents])

    useEffect(() => {
        getProjectCategoryName()
        getProjectData()
        getUsers()
        // getProjectImages()
        // eslint-disable-next-line
    }, [])

    const getUsers = () => {
        if (location.state.edit) {
            instance.post('permissions/get-all-users-permissions', { projectId: location.state.data._id })
                .then(res => {
                    setUsers(res.data.data)
                })
        }
    }

    console.log('users', users);
    console.log('documents', documents);

    const getProjectCategoryName = () => {
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
    }

    const getProjectData = () => {
        if (location.state.edit) {
            instance.post('projects/get-project', {
                _id: location.state.data._id
            })
                .then(res => {
                    const editData = res.data.data
                    setData({
                        user: userId,
                        authorities: editData.authorities,
                        otherParticipants: editData.otherParticipants,
                        notes: editData.notes,
                        category: location.state.category,
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
                    setImages(editData.images)
                    setDocuments(editData.documents)
                    setProjectStatus(editData.status)
                })
        }
        else {
            setIsNewProject(true)
        }
    }

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

    const removeFile = (param) => {
        const fileName = param.url.split('/').pop()

        if (fileType === 'img') {
            const tempData = images
            const newData = tempData.filter((item) => item._id !== param._id)
            instance.post('s3/delete/images', {
                projectId: data._id,
                fileName: fileName,
                fileId: param._id
            })
                .then(res => {
                    setImages(newData)
                })
                .catch(err => console.log('err', err.response))
        }
        else if (fileType === 'doc') {
            const tempData = documents
            const newData = tempData.filter((item) => item._id !== param._id)
            instance.post('s3/delete/files', {
                projectId: data._id,
                fileName: fileName,
                fileId: param._id
            })
                .then(res => {
                    setDocuments(newData)
                })
                .catch(err => console.log('err', err.response))
        }
    }

    const uploadFile = (e, type) => {
        const file = e.target.files[0]

        if (file) {
            const formData = new FormData()
            formData.append(
                'projectId', location.state.data._id
            )
            formData.append(
                'file', file,
            )
            if (type === 'image') {
                const allowedType = ['tif', 'tiff', 'bmp', 'jpg', 'jpeg', 'gif', 'png']
                const uploadedType = file.name.split('.').pop()
                if (file.size > 2000000) {
                    setErr({ type: 'image', text: 'Maximum File Size Allowed is 2mb' })
                }
                else if (allowedType.includes(uploadedType)) {
                    instance.post('s3/upload/images', formData)
                        .then(res => {
                            setImages([...images, { url: res.data.data }])
                            setErr({})
                        })
                }
                else {
                    setErr({ type: 'image', text: 'Only Images Are Allowed' })
                }
            }
            else if (type === 'doc') {
                if (file.size > 2000000) {
                    setErr({ type: 'doc', text: 'Maximum File Size Allowed is 2mb' })
                }
                else {
                    instance.post('s3/upload/files', formData)
                        .then(res => {
                            setDocuments([...documents, { url: res.data.data }])
                            setErr({})
                        })
                }
            }
        }
    }

    return (
        <div className="add">
            <div className="add_top">
                <div className="add_topLeft">
                    <img src={projectIcon} alt="" />
                    <p>{data.category}</p>
                </div>
                {location.state.edit && <div className="add_topRight">
                    <button className='add_btn' onClick={() => setModal('access')}>ACCES A CE PROJET</button>
                </div>}
            </div>
            <div className="add_form">
                <div className="add_formLeft">
                    <label>Nom du projet</label>
                    <input type="text" name='projectName' disabled={projectStatus === 'closed' ? true : false} value={data.projectName} onChange={handleChange} />
                    <label>Ville</label>
                    <input type="text" name='town' disabled={projectStatus === 'closed' ? true : false} value={data.town} onChange={handleChange} />
                    <label>Quartier</label>
                    <input type="text" name='headQuartier' disabled={projectStatus === 'closed' ? true : false} value={data.headQuartier} onChange={handleChange} />
                    <label>À propos du projet</label>
                    <textarea name='about' disabled={projectStatus === 'closed' ? true : false} value={data.about} onChange={handleChange}></textarea>
                    <label>Organisateur (trice)</label>
                    <input type="text" disabled={projectStatus === 'closed' ? true : false} placeholder="Taper le nom de l'organisateur" name='organizerName' value={data.organizerName} onChange={handleChange} />
                    <label>Animateur (trice)</label>
                    <input type="text" disabled={projectStatus === 'closed' ? true : false} placeholder="Taper le nom de l'animateur" name='animator' value={data.animator} onChange={handleChange} />
                    <label>Hote / Hotesse</label>
                    <input type="text" disabled={projectStatus === 'closed' ? true : false} placeholder="Taper le nom de la personne (Physique ou morale) qui recoit" name='host' value={data.host} onChange={handleChange} />
                </div>
                <div className="add_formRight">
                    <div>
                        <label>Autorité locale</label>
                        <div className='add_inputMain'>
                            <input type="text" placeholder="Nom de l" disabled={projectStatus === 'closed' ? true : false} value={authorityName} onChange={(e) => setAuthorityName(e.target.value)} />
                            <button disabled={projectStatus === 'closed' ? true : false}><img src={PlusIcon} alt="" onClick={handleAuthorities} /></button>
                        </div>
                        <div className='add_inputMain'>
                            <input type="text" placeholder="Titre cu role" disabled={projectStatus === 'closed' ? true : false} value={authorityRole} onChange={(e) => setAuthorityRole(e.target.value)} />
                            <button className='add_btnHidden' ></button>
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
                            <input type="text" placeholder="Nom de l'autorite" disabled={projectStatus === 'closed' ? true : false} value={participantName} onChange={(e) => setParticipantName(e.target.value)} />
                            <button disabled={projectStatus === 'closed' ? true : false}><img src={PlusIcon} alt="" onClick={handleParticipants} /></button>
                        </div>
                        <div className='add_inputMain'>
                            <input type="text" placeholder="Titre cu role" disabled={projectStatus === 'closed' ? true : false} value={participantRole} onChange={(e) => setParticipantRole(e.target.value)} />
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
                            <input disabled type="text" placeholder="Nom du document" />
                            {(isNewProject === false && projectStatus !== 'closed') ? <div>
                                <label htmlFor="doc">
                                    <img src={PlusIcon} alt="" />
                                </label>
                                <input type="file" id='doc' onChange={(e) => uploadFile(e, 'doc')} />
                            </div> : <button onClick={() => setModal('info')}><img src={PlusIcon} alt="" /></button>}
                        </div>
                        {err.type === 'doc' && <p className='add_error'>{err.text}</p>}
                        <div className="add_authorities">
                            {documents.length > 0 && documents.map((item, index) => (
                                <div key={index}>
                                    <a href={item.url} download><i class="fa-solid fa-file"></i></a>
                                    <p>{item.url.split('/').pop()}</p>
                                    <span onClick={() => { setModal('confirm'); setFileToRemove(item); setFileType('doc') }}>x</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div>
                        <label>Notes de la réunion</label>
                        <div className='add_inputMain'>
                            <input type="text" placeholder="Date de la reunion" disabled={projectStatus === 'closed' ? true : false} value={notesDate} onChange={(e) => setNotesDate(e.target.value)} />
                            <button disabled={projectStatus === 'closed' ? true : false}><img src={PlusIcon} alt="" onClick={handleNotes} /></button>
                        </div>
                        <div className='add_inputMain'>
                            <textarea type="text" placeholder="Notes" disabled={projectStatus === 'closed' ? true : false} value={notesText} onChange={(e) => setNotesText(e.target.value)} />
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
                    {isNewProject === false ? <div>
                        <label htmlFor="img">
                            <img src={PlusIcon} alt="" />
                        </label>
                        <input type="file" id='img' disabled={projectStatus === 'closed' ? true : false} accept="image/*" onChange={(e) => uploadFile(e, 'image')} />
                    </div> : <img src={PlusIcon} alt="" onClick={() => setModal('info')} />}
                    {err.type === 'image' && <p className='add_error'>{err.text}</p>}
                </div>
                <div className="add_images">
                    {data?.images && data.images.map((item) => (
                        <div className="add_image" key={item.id} >
                            <img src={item.url} alt="" />
                            {projectStatus === 'closed' ? <i className="fa-solid fa-trash" ></i> : <i className="fa-solid fa-trash" onClick={() => { setModal('confirm'); setFileToRemove(item); setFileType('img') }} ></i>}
                        </div>
                    ))}
                </div>
            </div>
            <div className="add_btns">
                {projectStatus === 'approved' && <button onClick={() => { setBtnType('UPDATE'); setModal('projectModal') }}>MODIFIER</button>}
                <button onClick={() => navigate('/dashboard')} >ANNULER</button>
                {role === 'admin' && projectStatus === 'pending' && <button onClick={() => { setBtnType('APPROVE'); setModal('projectModal') }}>APPROUVER LE PROJET</button>}
                {isNewProject && <button onClick={() => { setBtnType('CREATE'); setModal('projectModal') }}>LANCER LE PROJET</button>}
                {role === 'admin' && projectStatus === 'approved' && <button onClick={() => { setBtnType('CLOSE'); setModal('projectModal') }}>CLOTURER LE PROJET</button>}
            </div>
            <div className="add_bot">
                <div className="add_people">
                    <span className='add_peopleTitle'>ACCES A CE PROJET</span>
                    <div className="add_peopleBody">
                        {users.map((item, index) => (
                            <div>
                                <img src={item.user.profile ? item.user.profile : Avatar} alt="..." key={index} />
                            </div>
                        ))}
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
            {modal === 'projectModal' && <ConfirmModalProject setModal={setModal} type={btnType} data={data} />}
            {modal === 'confirm' && <ConfirmModal setModal={setModal} removeFile={removeFile} fileToRemove={fileToRemove} />}
            {modal === 'info' && <InfoModal setModal={setModal} />}
            {modal === 'access' && <Access setModal={setModal} projectId={location.state.data._id} setClickUserId={setClickUserId} />}
            {modal === 'permission' && <Permission setModal={setModal} projectId={location.state.data._id} clickUserId={clickUserId} />}
            {modal === 'delete' && <DeleteUser setModal={setModal} projectId={location.state.data._id} clickUserId={clickUserId} />}
        </div >
    )
}

export default AddProject