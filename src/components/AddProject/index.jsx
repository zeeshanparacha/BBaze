import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import instance from '../../instance'
import dateFormat from "dateformat";

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
    const [err2, setErr2] = useState('')
    const [msgList, setMsgList] = useState([])
    const [msg, setMsg] = useState('')
    const [reply, setReply] = useState('')
    const [clickIndex, setClickIndex] = useState(-1)
    const [ownerDetails, setOwnerDetails] = useState({})
    const role = localStorage.getItem('role')
    const userId = localStorage.getItem('userId')
    const navigate = useNavigate()
    const location = useLocation()
    const [permissions, setPermissions] = useState({
        about: {read: true, write: true},
        animator: {read: true, write: true},
        authorities: {read: true, write: true},
        conversations: {read: true, write: true},
        documents: {read: true, write: true},
        headQuartier: {read: true, write: true},
        host: {read: true, write: true},
        images: {read: true, write: true},
        notes: {read: true, write: true},
        organizerName: {read: true, write: true},
        otherParticipants: {read: true, write: true},
        town: {read: true, write: true}
    })

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
        getMsgs()
        // eslint-disable-next-line
    }, [])

    const addMsg = (e) => {
        if (msg) {
            if (e.key === 'Enter' || e === 'click') {
                instance.post('chat/add-message', {
                    message: msg,
                    projectId: location.state.data._id,
                    user: userId,
                    parentId: null
                })
                    .then(res => {
                        if (res.data.code === 1) {
                            getMsgs()
                            setMsg('')
                        }
                    })
            }
        }
    }

    const addReply = (e, parentId) => {
        if (reply) {
            if (e.key === 'Enter' || e === 'click') {
                instance.post('chat/add-message', {
                    message: reply,
                    projectId: location.state.data._id,
                    user: userId,
                    parentId
                })
                    .then(res => {
                        if (res.data.code === 1) {
                            getMsgs()
                            setReply('')
                        }
                    })
            }
        }
    }

    const getMsgs = () => {
        if (location.state.edit) {
            instance.post('/chat/get-messages', { projectId: location.state.data._id })
                .then(res => {
                    setMsgList(res.data.data)
                })
        }
    }

    const getUsers = () => {
        if (location.state.edit) {
            instance.post('permissions/get-all-users-permissions', { projectId: location.state.data._id })
                .then(res => {
                    setUsers(res.data.data)
                    res.data.data.forEach(item => {
                        if (item.user._id === userId)
                        {
                            setPermissions(item)
                        }
                    })
                })
        }
    }

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
                    setOwnerDetails(editData.user)
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

    const toggleReply = (index) => {
        if (clickIndex === index) {
            setClickIndex(-1)
        }
        else {
            setClickIndex(index)
        }
    }

    return (
        <div className="add">
            <div className="add_top">
                <div className="add_topLeft">
                    <img src={projectIcon} alt="" />
                    <div>
                        <p>{data.category}</p>
                        {projectStatus === 'closed' && <p className='add_closeDate'>proyecto cerrado el {dateFormat(location.state.data.updatedAt, "dd-mmm-yyyy")}</p>}
                    </div>
                </div>
                {projectStatus === 'approved' && <div className="add_topRight">
                    <button className='add_btn' onClick={() => setModal('access')}>ACCES A CE PROJET</button>
                </div>}
            </div>
            <div className="add_form">
                <div className="add_formLeft">
                    <div>
                        <label>Nom du projet</label>
                        <input type="text" name='projectName' disabled={(projectStatus === 'closed' || (userId !== ownerDetails._id && role !== 'admin')) ? true : false} value={data.projectName || ''} onChange={handleChange} />
                    </div>
                    {permissions.town.read && <div>
                        <label>Ville</label>
                        <input type="text" name='town' disabled={(projectStatus === 'closed' || !permissions.town.write) ? true : false} value={data.town || ''} onChange={handleChange} />
                    </div>}
                    {permissions.headQuartier.read && <div>
                        <label>Quartier</label>
                        <input type="text" name='headQuartier' disabled={(projectStatus === 'closed' || !permissions.headQuartier.write) ? true : false} value={data.headQuartier || ''} onChange={handleChange} />
                    </div>}
                    {permissions.about.read && <div>
                        <label>À propos du projet</label>
                        <textarea name='about' placeholder='Expliquez brièvement le projet' disabled={(projectStatus === 'closed' || !permissions.about.write) ? true : false} value={data.about || ''} onChange={handleChange}></textarea>
                    </div>}
                    {permissions.organizerName.read && <div>
                        <label>Organisateur (trice)</label>
                        <input type="text" disabled={(projectStatus === 'closed' || !permissions.organizerName.write) ? true : false} placeholder="Tapez le nom de l’organisateur (trice) de l’activité" name='organizerName' value={data.organizerName || ''} onChange={handleChange} />
                    </div>}
                    {permissions.animator.read && <div>
                        <label>Animateur (trice)</label>
                        <input type="text" disabled={(projectStatus === 'closed' || !permissions.animator.write) ? true : false} placeholder="Tapez le nom de l’animateur (trice) de l’activité" name='animator' value={data.animator || ''} onChange={handleChange} />
                    </div>}
                    {permissions.host.read && <div>
                        <label>Hôte / Hôtesse</label>
                        <input type="text" disabled={(projectStatus === 'closed' || !permissions.host.write) ? true : false} placeholder="Tapez le nom de l’organisation ou personne qui accueil l’activité." name='host' value={data.host || ''} onChange={handleChange} />
                    </div>}
                </div>
                <div className="add_formRight">
                    {permissions.authorities.read && <div>
                        <label>Autorité locale</label>
                        <div className='add_inputMain'>
                            <input type="text" placeholder="Ouvert" disabled={(projectStatus === 'closed' || !permissions.authorities.write) ? true : false} value={authorityName  || ''} onChange={(e) => setAuthorityName(e.target.value)} />
                            <button disabled={projectStatus === 'closed' ? true : false}><img src={PlusIcon} alt="" onClick={handleAuthorities} /></button>
                        </div>
                        <div className='add_inputMain'>
                            <input type="text" placeholder="Fonction" disabled={(projectStatus === 'closed' || !permissions.authorities.write) ? true : false} value={authorityRole  || ''} onChange={(e) => setAuthorityRole(e.target.value)} />
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
                    </div>}
                    {permissions.otherParticipants.read && <div>
                        <label>Autres participants clés</label>
                        <div className='add_inputMain'>
                            <input type="text" placeholder="Nom" disabled={(projectStatus === 'closed' || !permissions.otherParticipants.write) ? true : false} value={participantName  || ''} onChange={(e) => setParticipantName(e.target.value)} />
                            <button disabled={projectStatus === 'closed' ? true : false}><img src={PlusIcon} alt="" onClick={handleParticipants} /></button>
                        </div>
                        <div className='add_inputMain'>
                            <input type="text" placeholder="Titre" disabled={(projectStatus === 'closed' || !permissions.otherParticipants.write) ? true : false} value={participantRole  || ''} onChange={(e) => setParticipantRole(e.target.value)} />
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
                    </div>}
                    {permissions.documents.read && <div>
                        <label>Document</label>
                        <div className='add_inputMain'>
                            <input disabled type="text" placeholder="Téléchargez tous les documents liés à ce projet" />
                            {(isNewProject === false && projectStatus !== 'closed') ? <div>
                                <label htmlFor="doc">
                                    <img src={PlusIcon} alt="" />
                                </label>
                                <input type="file" id='doc' disabled={!permissions.documents.write} onChange={(e) => uploadFile(e, 'doc')} />
                            </div> : <button disabled={(projectStatus === 'closed' || !permissions.documents.write) ? true : false} onClick={() => setModal('info')}><img src={PlusIcon} alt="" /></button>}
                        </div>
                        {err.type === 'doc' && <p className='add_error'>{err.text}</p>}
                        <div className="add_authorities">
                            {documents.length > 0 && documents.map((item, index) => (
                                <div key={index}>
                                    <a href={item.url} download><i className="fa-solid fa-file"></i></a>
                                    <p>{item.url.split('/').pop()}</p>
                                    <span onClick={() => { setModal('confirm'); setFileToRemove(item); setFileType('doc') }}>x</span>
                                </div>
                            ))}
                        </div>
                    </div>}
                    {permissions.notes.read && <div>
                        <label>Notes de la réunion</label>
                        <div className='add_inputMain'>
                            <input type="text" placeholder="Date de la reunion" disabled={(projectStatus === 'closed' || !permissions.notes.write) ? true : false} value={notesDate  || ''} onChange={(e) => setNotesDate(e.target.value)} />
                            <button disabled={(projectStatus === 'closed' || !permissions.notes.write) ? true : false}><img src={PlusIcon} alt="" onClick={handleNotes} /></button>
                        </div>
                        <div className='add_inputMain'>
                            <textarea type="text" placeholder="Notes" disabled={(projectStatus === 'closed' || !permissions.notes.write) ? true : false} value={notesText  || ''} onChange={(e) => setNotesText(e.target.value)} />
                            <button className='add_btnHidden'></button>
                        </div>
                        <div className="add_authorities">
                            {notes.length > 0 && notes.map((item, index) => (
                                <div key={index}>
                                    <p>{dateFormat(location.state.data.updatedAt, "dd-mmm-yyyy")}</p>
                                    <p>{item.text}</p>
                                    <span onClick={() => removeNote(index)}>x</span>
                                </div>
                            ))}
                        </div>
                    </div>}
                </div>
            </div>
            {permissions.images.read && <div className="add_imagesBody">
                <div className="add_btnImg">
                    {isNewProject === false ? <div>
                        <label htmlFor="img">
                            <img src={PlusIcon} alt="" />
                        </label>
                        <input type="file" id='img' disabled={(projectStatus === 'closed' || !permissions.images.write) ? true : false} accept="image/*" onChange={(e) => uploadFile(e, 'image')} />
                    </div> : <img src={PlusIcon} alt="" onClick={() => setModal('info')} />}
                    {err.type === 'image' && <p className='add_error'>{err.text}</p>}
                </div>
                <div className="add_images">
                    {data?.images && data.images.map((item) => (
                        <div className="add_image" key={item._id} >
                            <img src={item.url} alt="" />
                            {(projectStatus === 'closed' || !permissions.images.write) ? <i className="fa-solid fa-trash" ></i> : <i className="fa-solid fa-trash" onClick={() => { setModal('confirm'); setFileToRemove(item); setFileType('img') }} ></i>}
                        </div>
                    ))}
                </div>
            </div>}
            <div className="add_btns">
                {projectStatus === 'approved' && <button onClick={() => { setBtnType('ACTUALIZAR'); setModal('projectModal') }}>MODIFIER</button>}
                <button onClick={() => navigate('/dashboard')} >{projectStatus === 'closed' ? 'REGRESA' : 'ANNULER'}</button>
                {role === 'admin' && projectStatus === 'pending' && <button onClick={() => { setBtnType('APROBAR'); setModal('projectModal') }}>APPROUVER LE PROJET</button>}
                {isNewProject && <button onClick={() => { setBtnType('CREAR'); setModal('projectModal') }}>LANCER LE PROJET</button>}
                {role === 'admin' && projectStatus === 'approved' && <button onClick={() => { setBtnType('CERCA'); setModal('projectModal') }}>CLOTURER LE PROJET</button>}
            </div>
            {err2 && <p className='add_error'>{err2}</p>}
            {location.state.edit && <div className="add_bot">
                <div className="add_people">
                    {projectStatus === 'approved' && <span className='add_peopleTitle' onClick={() => setModal('access')}>ACCES A CE PROJET</span>}
                    <div className="add_peopleBody">
                        <div className="add_peopleBodyLeft">
                            <div className="add_peopleBodyBox">
                                <div className="add_peopleBodyImg">
                                    <img src={ownerDetails.profile ? ownerDetails.profile : Avatar} alt="..." />
                                </div>
                                <p>{ownerDetails.name}</p>
                            </div>
                        </div>
                        <div className="add_peopleBodyRight">
                            {users.map((item, index) => (
                                <div className="add_peopleBodyBox" key={index}>
                                    <div className="add_peopleBodyImg">
                                        <img src={item.user.profile ? item.user.profile : Avatar} alt="..." />
                                    </div>
                                    <p>{item.user.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="add_convo">
                    <span className='add_convoTitle'>CONVERSATIONS</span>
                    <div className="add_convoBox">
                        {msgList.map((item, index) => (
                            <div className="add_convoBody" key={index}>
                                <div className="add_convoLeft">
                                    <img src={item.user.profile ? item.user.profile : Avatar} alt="..." />
                                </div>
                                <div className="add_convoRight">
                                    <p className="add_convoname">{item.user.name}</p>
                                    <p className="add_convodesc">{item.message}</p>
                                    {item.replies.length > 0 && <p className="add_convoreplies" onClick={() => toggleReply(index)}>{item.replies.length} Réponses</p>}
                                    {item.replies.map((reply) => (
                                        <div key={reply._id} className={index === clickIndex ? 'add_convoReplyBody show' : 'add_convoReplyBody'}>
                                            <div>
                                                <img src={reply.user.profile ? reply.user.profile : Avatar} alt="..." />
                                            </div>
                                            <p className='add_reply'>{reply.message}</p>
                                        </div>
                                    ))}
                                    <div className="add_convoReply">
                                        <input type="text" placeholder='Répondre à cette conversation' value={reply} onChange={(e) => setReply(e.target.value)} onKeyDown={(e) => addReply(e, item._id)} />
                                        <img src={IconSend} alt="..." onClick={() => addReply('click', item._id)} />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    {msgList.length === 0 && <div className="add_convoBody">
                        <h6>Il n'y a aucune conversation dans ce projet pour le moment.  Vous pouvez commencer une conversation</h6>
                    </div>}
                    <div className="add_convoMsg">
                        <input type="text" placeholder='Ecrivez ici' value={msg} onChange={(e) => setMsg(e.target.value)} onKeyDown={addMsg} />
                        <img src={IconSend} alt="..." onClick={() => addMsg('click')} />
                    </div>
                </div>
            </div>}
            {modal === 'projectModal' && <ConfirmModalProject setErr2={setErr2} setModal={setModal} type={btnType} data={data} />}
            {modal === 'confirm' && <ConfirmModal setModal={setModal} removeFile={removeFile} fileToRemove={fileToRemove} />}
            {modal === 'info' && <InfoModal setModal={setModal} />}
            {modal === 'access' && <Access setModal={setModal} projectId={location.state.data._id} setClickUserId={setClickUserId} />}
            {modal === 'permission' && <Permission getUsers={getUsers} setModal={setModal} projectId={location.state.data._id} clickUserId={clickUserId} />}
            {modal === 'delete' && <DeleteUser getUsers={getUsers} setModal={setModal} projectId={location.state.data._id} clickUserId={clickUserId} />}
        </div >
    )
}

export default AddProject