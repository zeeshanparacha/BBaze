import { useState } from 'react'
import Access from './Access'
import Permission from './Permission'

import ProjectIcon from '../../assets/images/project-icon1.svg'
import PlusIcon from '../../assets/images/plus1.svg'
import Img1 from '../../assets/images/img1.jpg'
import Img2 from '../../assets/images/img2.jpg'
import PeopleImg from '../../assets/images/people1.png'
import IconSend from '../../assets/images/send.svg'

const AddProject = () => {

    const [access, setAccess] = useState(false)
    const [permission, setPermission] = useState(false)

    return(
        <div className="add">
            <div className="add_top">
                <div className="add_topLeft">
                    <img src={ProjectIcon} alt="" />
                    <p>ESPACE VERT: CREER UN NOUVEAU PROJET</p>
                </div>
                <div className="add_topRight">
                    <button className='add_btn' onClick={() => setAccess(true)}>ACCES A CE PROJET</button>
                </div>
            </div>
            <div className="add_form">
                <div className="add_formLeft">
                    <label>Nom du projet</label>
                    <input type="text" />
                    <label>Vile</label>
                    <input type="text" />
                    <label>Quartier</label>
                    <input type="text" />
                    <label>A propos du projet</label>
                    <textarea></textarea>
                    <label>Organisateur (trice)</label>
                    <input type="text" placeholder="Taper le nom de l'organisateur" />
                    <label>Animateur (trice)</label>
                    <input type="text" placeholder="Taper le nom de l'animateur" />
                    <label>Hote / Hotesse</label>
                    <input type="text" placeholder="Taper le nom de la personne (Physique ou morale) qui recoit" />
                </div>
                <div className="add_formRight">
                    <div>
                        <label>Autorite locale</label>
                        <div className='add_inputMain'>
                            <input type="text" placeholder="Nom de l" />
                            <button><img src={PlusIcon} alt="" /></button>
                        </div>
                        <div className='add_inputMain'>
                            <input type="text" placeholder="Titre cu role" />
                            <button className='add_btnHidden'></button>
                        </div>
                    </div>
                    <div>
                        <label>Autres participants cles</label>
                        <div className='add_inputMain'>
                            <input type="text" placeholder="Nom de l'autorite" />
                            <button><img src={PlusIcon} alt="" /></button>
                        </div>
                        <div className='add_inputMain'>
                            <input type="text" placeholder="Titre cu role" />
                            <button className='add_btnHidden'></button>
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
                        <label>Notes de la reunion</label>
                        <div className='add_inputMain'>
                            <input type="text" placeholder="Date de la reunion" />
                            <button><img src={PlusIcon} alt="" /></button>
                        </div>
                        <div className='add_inputMain'>
                            <textarea type="text" placeholder="Notes" />
                            <button className='add_btnHidden'></button>
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
                <button>MODIFIER</button>
                <button>SAUVEGARDER</button>
                <button>ANNULER</button>
                <button>APPROUVER LE PROJET</button>
                <button>LANCER LE PROJET</button>
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