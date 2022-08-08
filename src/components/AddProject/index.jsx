import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import instance from '../../instance'

import InfoModal from './InfoModal'
import ConfirmModal from './ConfirmModal'
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
import axios from 'axios'

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
    const userId = localStorage.getItem('userId')
    // const [img, setImg] = useState('')
    // const docUrl = 'https://drive.google.com/file/d/1QLpg2lFg0RdqxEIss6famu7NOev-2N3R/view'
    // const imgUrl = 'https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg'
    const navigate = useNavigate()
    const location = useLocation()

    useEffect(() => {
        setData({
            ...data,
            authorities,
            otherParticipants: participants,
            notes,
            documents: documents,
            images: images
        })
        // console.log('run1');
        // eslint-disable-next-line
    }, [authorities, participants, notes, images, documents])

    useEffect(() => {
        getProjectCategoryName()
        getProjectData()
        getProjectImages()
        // eslint-disable-next-line
    }, [])

    const getProjectImages = () => {
        if (location.state.edit) {
            instance.post('s3/bucket/images', { projectId: location.state.data._id })
                .then(res => console.log('res all img', res))
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

    // console.log('data', data);

    const getProjectData = () => {
        if (location.state.edit) {

            instance.post('projects/get-project', {
                _id: location.state.data._id
            })
                .then(res => {
                    const editData = res.data.data
                    console.log(editData.images);
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
                })
        }
        else {
            setIsNewProject(true)
        }
    }

    // console.log('images', images);
    // console.log('data..', data);
    // console.log('documents', documents);

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
        // console.log('param', param);

        const fileName = param.url.split('/').pop()
        const tempData = images
        const newData = tempData.filter((item) => item._id !== param._id)

        // console.log('fileName', fileName);

        if (fileType === 'img') {
            instance.post('s3/delete/images', {
                projectId: data._id,
                fileName: fileName,
                fileId: param._id
            })
                .then(res => {
                    console.log('res delete file', res)
                    setImages(newData)
                })
                .catch(err => console.log('err', err.response))
        }
        else if (fileType === 'doc') {
            instance.post('s3/delete/files', {
                projectId: data._id,
                fileName: fileName,
                fileId: param._id
            })
                .then(res => {
                    console.log('res delete doc', res)
                    setDocuments(newData)
                })
                .catch(err => console.log('err', err.response))
        }
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

    const uploadFile = (e, type) => {
        const file = e.target.files[0]

        if (file) {
            const formData = new FormData()
            formData.append(
                'file', file,
            )
            formData.append(
                'projectId', location.state.data._id
            )
            if (type === 'image') {
                instance.post('s3/upload/images', formData)
                    .then(res => {
                        setImages([...images, { url: res.data.data }])
                    })
            }
            else if (type === 'doc') {
                instance.post('s3/upload/files', formData)
                    .then(res => {
                        setDocuments([...documents, { url: res.data.data }])
                    })
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
                <div className="add_topRight">
                    <button className='add_btn' onClick={() => setModal('access')}>ACCES A CE PROJET</button>
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
                            <input disabled type="text" placeholder="Nom du document" />
                            {isNewProject === false ? <div>
                                <label htmlFor="doc">
                                    <img src={PlusIcon} alt="" />
                                </label>
                                <input type="file" id='doc' onChange={(e) => uploadFile(e, 'doc')} />
                            </div> : <button onClick={() => setModal('info')}><img src={PlusIcon} alt="" /></button>}
                        </div>
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
                    {isNewProject === false ? <div>
                        <label htmlFor="img">
                            <img src={PlusIcon} alt="" />
                        </label>
                        <input type="file" id='img' onChange={(e) => uploadFile(e, 'image')} />
                    </div> : <img src={PlusIcon} alt="" onClick={() => setModal('info')} />}
                </div>
                <div className="add_images">
                    {data?.images && data.images.map((item) => (
                        <div className="add_image" key={item.id}>
                            <img src={item.url} alt="" />
                            <i className="fa-solid fa-trash" onClick={() => { setModal('confirm'); setFileToRemove(item); setFileType('img') }} ></i>
                        </div>
                    ))}
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
            {modal === 'confirm' && <ConfirmModal setModal={setModal} removeFile={removeFile} fileToRemove={fileToRemove} />}
            {modal === 'info' && <InfoModal setModal={setModal} />}
            {modal === 'access' && <Access setModal={setModal} />}
            {modal === 'permission' && <Permission setModal={setModal} />}
        </div >
    )
}

export default AddProject