import { useEffect, useState } from 'react';

import instance from '../../../instance';

import Search6 from '../../../assets/images/search6.svg'
import Avatar from '../../../assets/images/icon1.PNG'

const Access = ({ setModal, projectId, setClickUserId }) => {

    const [users, setUsers] = useState([])
    const [list, setList] = useState([])
    const [search, setSearch] = useState('')
    const newList = list.filter(item => item.loginName.toLowerCase().includes(search.toLowerCase()))

    useEffect(() => {
        instance.post('permissions/get-all-users-permissions', { projectId })
            .then(res => {
                setUsers(res.data.data)
            })

        instance.get('organization/users')
            .then(res => {
                setList(res.data.data)
            })
            .catch(err => {
                if (err.response.data.error) {
                    console.log(err.response.data.error)
                }
            })
    }, [])

    return (
        <div className="access">
            <div className="access_inner">
                <span className='access_close' onClick={() => setModal('')}>&#9587;</span>
                <div className="access_top">
                    <p className="access_title">ACCES A CE PROJET</p>
                    <p className="access_num">Nambre d'aorganisateurs: <span>10</span></p>
                </div>
                <div className="access_table">
                    <table>
                        <thead>
                            <tr>
                                <td></td>
                                <td>Noms</td>
                                <td>Email</td>
                                <td>Telephone</td>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((item, index) => (
                                <tr key={index}>
                                    <td>
                                        <span className='access_remove' onClick={() => { setModal('delete'); setClickUserId(item.user._id) }}>&#9587;</span>
                                        <img src={item.user.profile} alt="" onClick={() => { setModal('permission'); setClickUserId(item.user._id) }} />
                                    </td>
                                    <td>
                                        <p className="access_tableText1">{item.user.loginName}</p>
                                        <p className="access_tableText2">{item.user.profession}</p>
                                    </td>
                                    <td>
                                        <p className="access_tableText1">{item.user.email}</p>
                                    </td>
                                    <td>
                                        <p className="access_tableText1">{item.user.telephone}</p>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="access_search">
                    <div>
                        <img src={Search6} alt="..." />
                        <input type="search" placeholder='CHERCHER' onChange={(e) => setSearch(e.target.value)} />
                    </div>
                </div>
                <ul className="access_list">
                    {search && newList.map((item, index) => (
                        <li key={index}>
                            <div className="access_img">
                                <img src={item.profile ? item.profile : Avatar} alt="" onClick={() => { setModal('permission'); setClickUserId(item._id) }} />
                            </div>
                            <p className="access_tableText1">{item.loginName}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Access