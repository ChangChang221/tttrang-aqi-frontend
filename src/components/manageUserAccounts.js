import React, { useEffect, useState } from 'react';
import { Message, ButtonToolbar, Loader } from 'rsuite';
import '../css/manage-user-accounts.css';
import UserService from '../services/user';
import { getCookie } from '../utils/cookie';
import ButtonDelete from './component/ButtonDelete';
import ButtonEdit from './component/ButtonEdit';

export default function ManageUserAccounts(){
    const [success, setSuccess] = React.useState(false);
    const accessToken = getCookie('accessToken');
    const username = JSON.parse(atob(accessToken.split('.')[1])).username;
    
    const config = {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
    };

    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const fetchData = async () => {
        try {
            const { data } = await UserService.getListUser(config);
            setUsers(data)
            setIsLoading(false);
        } catch (error) {
            console.log(error)
        }
      };

    const onClose = ()=>{
        setSuccess(false)
    }

    useEffect(()=>{
        setIsLoading(true);
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
             {isLoading ? (
                    <Loader />
                ) : (
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
                        <td >{data.username}</td>
                        <td>{data.password}</td>
                        <td>{data.role}</td>
                        <td style={{width: "125px"}} className={username === data.username? "disable-button":""}>
                            <ButtonToolbar >
                                <ButtonEdit user={data} config={config} setUsers={setUsers}  setSuccess={setSuccess} />
                                <ButtonDelete idUser={data._id} config={config} setUsers={setUsers} setSuccess={setSuccess} />
                            </ButtonToolbar>
                            {/* <button onClick={()=>deleteUser(data._id)}>delete</button> */}
                        </td>
                    </tr>
                    );
                })}
                </tbody>
            </table>
             )}
        </div>
    )
}