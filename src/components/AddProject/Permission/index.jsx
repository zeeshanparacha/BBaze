import { useState, useEffect } from 'react';

import instance from '../../../instance';

import People from '../../../assets/images/people1.png'

const Permission = ({ setModal, clickUserId, projectId }) => {

    const [permissions, setPermissions] = useState({
        "projectId": projectId,
        "user": clickUserId,
        "headQuartier": {
            "read": true,
            "write": true
        },
        "town": {
            "read": true,
            "write": true
        },
        "about": {
            "read": true,
            "write": true
        },
        "animator": {
            "read": true,
            "write": true
        },
        "organizerName": {
            "read": true,
            "write": true
        },
        "host": {
            "read": true,
            "write": true
        },
        "authorities": {
            "read": true,
            "write": true
        },
        "otherParticipants": {
            "read": true,
            "write": true
        },
        "documents": {
            "read": true,
            "write": true
        },
        "images": {
            "read": true,
            "write": true
        },
        "notes": {
            "read": true,
            "write": true
        },
        "conversations": {
            "read": true,
            "write": true
        }
    })


    // console.log('clickUserId', clickUserId);
    // console.log('projectId', projectId);
    console.log('permissions', permissions);

    useEffect(() => {
        getUserPermissions()
    }, [])

    const updatePermissions = () => {
        instance.post('permissions/add-user', permissions)
            .then(res => {
                console.log('res update', res)
                setModal('access')
            })
    }

    const getUserPermissions = () => {
        instance.post('permissions/get-user-permissions', {
            projectId,
            user: clickUserId
        })
            .then(res => {
                console.log('get permissions', res)
                if (res.data.code === 1) {
                    setPermissions({
                        ...permissions,
                        headQuartier: res.data.data.headQuartier,
                        town: res.data.data.town,
                        about: res.data.data.about,
                        animator: res.data.data.animator,
                        organizerName: res.data.data.organizerName,
                        host: res.data.data.host,
                        authorities: res.data.data.authorities,
                        otherParticipants: res.data.data.otherParticipants,
                        documents: res.data.data.documents,
                        images: res.data.data.images,
                        notes: res.data.data.notes,
                        conversations: res.data.data.conversations,
                    })
                }
            })
            .catch(err => console.log('err', err.response.data))
    }

    const handleChange = (value, type) => {
        console.log('value', type);
        setPermissions({ ...permissions, [value]: type === 'write' ? { read: permissions[value]['read'], write: !permissions[value]['write'] } : { read: !permissions[value]['read'], write: permissions[value]['write'] } })
        // setPermissions({ ...permissions, [`${value}.${type}`]: permissions[value][type] ? false : true })
    }

    const value = 'otherParticipants'
    const type = 'read'
    // console.log('permissions[value[type]]', permissions[value][type]);

    return (
        <div className="per">
            <div className="per_inner">
                <div className="per_top">
                    <div className="per_image">
                        <img src={People} alt="" />
                    </div>
                    <div>
                        <p className="per_name">Gina</p>
                        <p className="per_role">Geographe</p>
                    </div>
                    <span className='per_reject'>Retirer</span>
                </div>
                <p className="per_email">Email: <span>gsola@vil.fr</span></p>
                <p className="per_phone">Telephone: <span>+1 604 218 269 4455</span></p>
                <div className="per_roles">
                    <span className="per_type">Ecrire</span>
                    <span className="per_type">Lire</span>
                    <div>
                        <input type="checkbox" checked={permissions.otherParticipants.write} onChange={() => handleChange('otherParticipants', 'write')} />
                        <input type="checkbox" checked={permissions.otherParticipants.read} onChange={() => handleChange('otherParticipants', 'read')} />
                        <label>Autres participants clés</label>
                    </div>
                    <div>
                        <input type="checkbox" checked={permissions.town.write} onChange={() => handleChange('town', 'write')} />
                        <input type="checkbox" checked={permissions.town.read} onChange={() => handleChange('town', 'read')} />
                        <label>Ville</label>
                    </div>
                    <div>
                        <input type="checkbox" checked={permissions.headQuartier.write} onChange={() => handleChange('headQuartier', 'write')} />
                        <input type="checkbox" checked={permissions.headQuartier.read} onChange={() => handleChange('headQuartier', 'read')} />
                        <label>Quartier</label>
                    </div>
                    <div>
                        <input type="checkbox" checked={permissions.about.write} onChange={() => handleChange('about', 'write')} />
                        <input type="checkbox" checked={permissions.about.read} onChange={() => handleChange('about', 'read')} />
                        <label>Description</label>
                    </div>
                    <div>
                        <input type="checkbox" checked={permissions.organizerName.write} onChange={() => handleChange('organizerName', 'write')} />
                        <input type="checkbox" checked={permissions.organizerName.read} onChange={() => handleChange('organizerName', 'read')} />
                        <label>Organisateur (trice)</label>
                    </div>
                    <div>
                        <input type="checkbox" checked={permissions.animator.write} onChange={() => handleChange('animator', 'write')} />
                        <input type="checkbox" checked={permissions.animator.read} onChange={() => handleChange('animator', 'read')} />
                        <label>Animateur (trice)</label>
                    </div>
                    <div>
                        <input type="checkbox" checked={permissions.host.write} onChange={() => handleChange('host', 'write')} />
                        <input type="checkbox" checked={permissions.host.read} onChange={() => handleChange('host', 'read')} />
                        <label>Hote/Hotesse</label>
                    </div>
                    <div>
                        <input type="checkbox" checked={permissions.authorities.write} onChange={() => handleChange('authorities', 'write')} />
                        <input type="checkbox" checked={permissions.authorities.read} onChange={() => handleChange('authorities', 'read')} />
                        <label>Autorite locale</label>
                    </div>
                    <div>
                        <input type="checkbox" checked={permissions.documents.write} onChange={() => handleChange('documents', 'write')} />
                        <input type="checkbox" checked={permissions.documents.read} onChange={() => handleChange('documents', 'read')} />
                        <label>Document</label>
                    </div>
                    <div>
                        <input type="checkbox" checked={permissions.notes.write} onChange={() => handleChange('notes', 'write')} />
                        <input type="checkbox" checked={permissions.notes.read} onChange={() => handleChange('notes', 'read')} />
                        <label>Notes de reunion</label>
                    </div>
                    <div>
                        <input type="checkbox" checked={permissions.images.write} onChange={() => handleChange('images', 'write')} />
                        <input type="checkbox" checked={permissions.images.read} onChange={() => handleChange('images', 'read')} />
                        <label>Photos</label>
                    </div>
                    <div>
                        <input type="checkbox" checked={permissions.conversations.write} onChange={() => handleChange('conversations', 'write')} />
                        <input type="checkbox" checked={permissions.conversations.read} onChange={() => handleChange('conversations', 'read')} />
                        <label>Conversations</label>
                    </div>
                </div>
                <div className="per_btns">
                    <button onClick={updatePermissions}>AJOUTER</button>
                    <button onClick={() => setModal('')}>ANNULER</button>
                </div>
            </div>
        </div>
    )
}

export default Permission