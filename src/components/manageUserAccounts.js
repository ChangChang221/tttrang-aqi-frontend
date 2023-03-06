import React, { useEffect, useState } from 'react';
import { Message } from 'rsuite';
import '../css/manage-user-accounts.css';
import UserService from '../services/user';
import { getCookie } from '../utils/cookie';
import ButtonDelete from './component/ButtonDelete';
import ButtonEdit from './component/ButtonEdit';


export default function ManageUserAccounts(){
    const [success, setSuccess] = React.useState(false);
    const accessToken = getCookie('accessToken');
    
    const config = {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
    };

    const [users, setUsers] = useState([]);
    const fetchData = async () => {
        try {
            const { data } = await UserService.getListUser(config);
            setUsers(data)
        } catch (error) {
            console.log(error)
        }
      };

    const onClose = ()=>{
        setSuccess(false)
    }

    useEffect(()=>{
        fetchData();
    },[])

    return (
        <div>
            {
                success &&
                <Message showIcon type="success" onClose={onClose}>
                Success
                </Message>
            }
            <table width='100%' className='table-alarms'>
                <thead>
                <tr>
                    <th></th>
                    <th>USERNAME</th>
                    <th>PASSWORD</th>
                    <th>ROLE</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {users.map((data, index) => {
                    return (
                    <tr key={index}>
                        <td>
                        {index}
                        </td>
                        <td >{data.email}</td>
                        <td>{data.password}</td>
                        <td>{data.role}</td>
                        <td>
                            <ButtonEdit user={data} config={config} setUsers={setUsers}/>
                            <ButtonDelete idUser={data._id} config={config} setUsers={setUsers} setSuccess={setSuccess}/>
                            {/* <button onClick={()=>deleteUser(data._id)}>delete</button> */}
                        </td>
                    </tr>
                    );
                })}
                </tbody>
            </table>
        </div>
    )
}