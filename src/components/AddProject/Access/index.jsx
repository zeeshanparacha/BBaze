import { useEffect, useState } from 'react';
import instance from '../../../instance';

import people1 from '../../../assets/images/people1.png'
import Search6 from '../../../assets/images/search6.svg'
import Avatar from '../../../assets/images/icon1.PNG'

const Access = ({ setModal, projectId }) => {

    const [list, setList] = useState([])
    const [search, setSearch] = useState('')

    const newList = list.filter(item => item.loginName.toLowerCase().includes(search.toLowerCase()))

    console.log('list', list);
    console.log('newList', newList);

    useEffect(() => {
        instance.post('permissions/get-all-users-permissions', { projectId })
            .then(res => console.log('res..', res))

        instance.get('organization/users')
            .then(res => {
                // setUsers(res.data.data)
                setList(res.data.data)
            })
            .catch(err => {
                if (err.response.data.error) {
                    console.log(err.response.data.error)
                }
            })
    }, [])

    console.log('runn access');

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
                            <tr>
                                <td>
                                    <span className='access_remove'>&#9587;</span>
                                    <img src={people1} alt="" onClick={() => setModal('permission')} />
                                </td>
                                <td>
                                    <p className="access_tableText1">Jane Doe</p>
                                    <p className="access_tableText2">Linda Bi</p>
                                </td>
                                <td>
                                    <p className="access_tableText1">rosette@gmail.com</p>
                                </td>
                                <td>
                                    <p className="access_tableText1">207 258 356 781</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <span className='access_remove'>&#9587;</span>
                                    <img src={people1} alt="" />
                                </td>
                                <td>
                                    <p className="access_tableText1">Jane Doe</p>
                                    <p className="access_tableText2">Linda Bi</p>
                                </td>
                                <td>
                                    <p className="access_tableText1">rosette@gmail.com</p>
                                </td>
                                <td>
                                    <p className="access_tableText1">207 258 356 781</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <span className='access_remove'>&#9587;</span>
                                    <img src={people1} alt="" />
                                </td>
                                <td>
                                    <p className="access_tableText1">Jane Doe</p>
                                    <p className="access_tableText2">Linda Bi</p>
                                </td>
                                <td>
                                    <p className="access_tableText1">rosette@gmail.com</p>
                                </td>
                                <td>
                                    <p className="access_tableText1">207 258 356 781</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <span className='access_remove'>&#9587;</span>
                                    <img src={people1} alt="" />
                                </td>
                                <td>
                                    <p className="access_tableText1">Jane Doe</p>
                                    <p className="access_tableText2">Linda Bi</p>
                                </td>
                                <td>
                                    <p className="access_tableText1">rosette@gmail.com</p>
                                </td>
                                <td>
                                    <p className="access_tableText1">207 258 356 781</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <span className='access_remove'>&#9587;</span>
                                    <img src={people1} alt="" />
                                </td>
                                <td>
                                    <p className="access_tableText1">Jane Doe</p>
                                    <p className="access_tableText2">Linda Bi</p>
                                </td>
                                <td>
                                    <p className="access_tableText1">rosette@gmail.com</p>
                                </td>
                                <td>
                                    <p className="access_tableText1">207 258 356 781</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <span className='access_remove'>&#9587;</span>
                                    <img src={people1} alt="" />
                                </td>
                                <td>
                                    <p className="access_tableText1">Jane Doe</p>
                                    <p className="access_tableText2">Linda Bi</p>
                                </td>
                                <td>
                                    <p className="access_tableText1">rosette@gmail.com</p>
                                </td>
                                <td>
                                    <p className="access_tableText1">207 258 356 781</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <span className='access_remove'>&#9587;</span>
                                    <img src={people1} alt="" />
                                </td>
                                <td>
                                    <p className="access_tableText1">Jane Doe</p>
                                    <p className="access_tableText2">Linda Bi</p>
                                </td>
                                <td>
                                    <p className="access_tableText1">rosette@gmail.com</p>
                                </td>
                                <td>
                                    <p className="access_tableText1">207 258 356 781</p>
                                </td>
                            </tr>

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
                                <img src={item.profile ? item.profile : Avatar} alt="" />
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