import React, { useEffect, useState } from 'react';
import { IconButton, Message, ButtonToolbar, Loader } from 'rsuite';
import '../css/manage-user-accounts.css';
import UserService from '../services/user';
import { getCookie } from '../utils/cookie';
import ButtonDelete from './component/ButtonDelete';
import ButtonEdit from './component/ButtonEdit';
import ButtonAdd from './component/ButtonAdd';
import AddOutlineIcon from '@rsuite/icons/AddOutline';
import EditIcon from '@rsuite/icons/Edit';

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
    const [SelectedUsers, setSelectedUsers] = useState([]);

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

    function onItemCheck(e, item) {
        let tempList = users;
        tempList.map((user) => {
          if (user._id === item._id) {
            user.selected = e.target.checked;
          } else {
            user.selected = false;
          }
          return user;
        });
        setUsers(tempList);
        setSelectedUsers(users.filter((e) => e.selected));
      }

    const [openAdd, setOpenAdd] = React.useState(false);
    const handleOpenAdd = () => setOpenAdd(true);
    const [openEdit, setOpenEdit] = React.useState(false);
    const handleOpenEdit = () => setOpenEdit(true);

    return (
        <div>
            {
                success &&
                <Message showIcon type="success" onClose={onClose}>
                Success
                </Message>
            }
            <ButtonToolbar className="button-add">
            <IconButton onClick={handleOpenAdd} icon={<AddOutlineIcon />} color="blue" appearance="primary" circle />
                {
                    SelectedUsers.length !==0 && <IconButton onClick={handleOpenEdit} icon={<EditIcon />} circle/>
                }
            </ButtonToolbar>
            {openAdd &&
                <ButtonAdd openAdd={openAdd} setOpenAdd={setOpenAdd} config={config} setUsers={setUsers}  setSuccess={setSuccess} />
            }
             {isLoading ? (
                    <Loader />
                ) : (
            <table width='100%' className='table-alarms'>
                <thead>
                <tr>
                    <th></th>
                    <th>STT</th>
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
                            <input
                                type='checkbox'
                                checked={data.selected || false}
                                id={'rowcheck' + data._id}
                                onChange={(e) => onItemCheck(e, data)}
                            />
                        </td>
                        <td>
                        {index+1}
                        </td>
                        <td >{data.username}</td>
                        <td>{data.password}</td>
                        <td>{titleCase(data.role)}</td>
                        <td style={{width: "50px"}} className={username === data.username? "disable-button":""}>
                            {/* <ButtonToolbar >
                                <ButtonEdit user={data} config={config} setUsers={setUsers}  setSuccess={setSuccess} />
                                <ButtonDelete idUser={data._id} config={config} setUsers={setUsers} setSuccess={setSuccess} />
                               
                            </ButtonToolbar> */}
                            <ButtonDelete idUser={data._id} config={config} setUsers={setUsers} setSuccess={setSuccess} />
                            {/* <button onClick={()=>deleteUser(data._id)}>delete</button> */}
                        </td>
                    </tr>
                    );
                })}
                </tbody>
            </table>
             )}
       
        
        {openEdit && (
          <ButtonEdit
            openEdit={openEdit}
            // idUser={SelectedUsers[0]._id}
            user={SelectedUsers[0]}
            setOpenEdit={setOpenEdit}
            setSelectedUsers={setSelectedUsers}
            config={config} setUsers={setUsers}  setSuccess={setSuccess}
          />
        )}
        </div>
    )
}


export function titleCase(str) {
    var convertToArray = str.toLowerCase().split(' ');
    var result = convertToArray.map(function(val) {
      return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
    });
    
    return result.join(' ');
}