import People from '../../../assets/images/people1.png'

const Permission = ({setPermission}) => {
    return(
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
                        <input type="checkbox" />
                        <input type="checkbox" />
                        <label>Tout</label>
                    </div>
                    <div>
                        <input type="checkbox" />
                        <input type="checkbox" />
                        <label>Ville</label>
                    </div>
                    <div>
                        <input type="checkbox" />
                        <input type="checkbox" />
                        <label>Quartier</label>
                    </div>
                    <div>
                        <input type="checkbox" />
                        <input type="checkbox" />
                        <label>Description</label>
                    </div>
                    <div>
                        <input type="checkbox" />
                        <input type="checkbox" />
                        <label>Organisateur (trice)</label>
                    </div>
                    <div>
                        <input type="checkbox" />
                        <input type="checkbox" />
                        <label>Animateur (trice)</label>
                    </div>
                    <div>
                        <input type="checkbox" />
                        <input type="checkbox" />
                        <label>Hote/Hotesse</label>
                    </div>
                    <div>
                        <input type="checkbox" />
                        <input type="checkbox" />
                        <label>Autorite locale</label>
                    </div>
                    <div>
                        <input type="checkbox" />
                        <input type="checkbox" />
                        <label>Document</label>
                    </div>
                    <div>
                        <input type="checkbox" />
                        <input type="checkbox" />
                        <label>Notes de reunion</label>
                    </div>
                    <div>
                        <input type="checkbox" />
                        <input type="checkbox" />
                        <label>Photos</label>
                    </div>
                    <div>
                        <input type="checkbox" />
                        <input type="checkbox" />
                        <label>Conversations</label>
                    </div>
                </div>
                <div className="per_btns">
                    <button>AJOUTER</button>
                    <button onClick={() => setPermission(false)}>ANNULER</button>
                </div>
            </div>
        </div>
    )
}

export default Permission