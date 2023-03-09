
import React, {useEffect, useState} from 'react';
import UserService from '../../services/user';
import EditIcon from '@rsuite/icons/Edit';
import {Loader, IconButton, Modal, ButtonToolbar, Whisper, Input, Tooltip, FlexboxGrid, SelectPicker, Form, Button, Schema, Panel } from 'rsuite';

const { StringType } = Schema.Types;
const model = Schema.Model({
  name: StringType().isRequired('This field is required.'),
  password: StringType()
    .isRequired('This field is required.')
});


export default function ButtonEdit({user, openEdit, setOpenEdit, setSelectedUsers, setUsers, config, setSuccess}){
    // const [openEdit, setOpenEdit] = React.useState(false);
    const handleOpenEdit = () => setOpenEdit(true);
    const handleCloseEdit = () => setOpenEdit(false);
    const [username, setUsername]= useState(user.username)
    const [password, setPassword]= useState(user.password)
    const [role, setRole]= useState(user.role.toUpperCase())
    const [errorVisible, setErrorVisible] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const dataRole = ['ADMIN', 'USER'].map(
        item => ({ label: item, value: item })
      );

    function handleSubmit(e) {
        e.preventDefault();
        if (username === "" || password === "" | !role) {
            setErrorVisible("Vui lòng nhập đầy đủ thông tin.");
            return;
        }
        editUser(username, password, role);
    }

    const editUser = async (username, password, role)=>{
        const newUser ={
            username: username,
            password: password,
            role: role.toLowerCase()
        }
        setIsLoading(true);
        try {
            const res = await UserService.editUser(newUser, user._id, config)
            console.log({res})
            setOpenEdit(false)
            fetchData();
            setErrorVisible("");
            setSelectedUsers([])
            setSuccess(true);
            
        } catch (error) {
            console.log(error);
            setIsLoading(false);
            setErrorVisible(error.response.data.message);
        }
    }

    const fetchData = async () => {
        try {
            const { data } = await UserService.getListUser(config);
            setUsers(data)
        } catch (error) {
            console.log(error)
        }
      };

    //   const fetchDataUser = async () => {
    //     console.log({idUser})
    //     try {
    //         const { data } = await UserService.getDetailUser(idUser);
    //         setUsername(data.username);
    //         setPassword(data.password);
    //         setRole(data.role.toUpperCase());

    //     } catch (error) {
    //         console.log(error)
    //     }
    //   };


    // useEffect(()=>{
    //     fetchDataUser();
    // },[])

    return (
        <>
            {/* <ButtonToolbar>
                <IconButton onClick={handleOpenEdit} icon={<EditIcon />} />
               
            </ButtonToolbar> */}
            {/* {
            openEdit && */}
            <Modal open={openEdit} onClose={handleCloseEdit}>
                <Modal.Header>
                <Modal.Title>Chỉnh sửa tài khoản</Modal.Title>
                </Modal.Header>
                <Form model={model}>
                <Modal.Body>
                <div style={{margin: "20px 0px"}}>
                <label htmlFor="uname">Username:</label>
                <Whisper trigger="focus" speaker={<Tooltip>Required</Tooltip>}>
                        <Input style={{ width: 300 }} placeholder="Username" value={username} onChange={setUsername}/>
                </Whisper>
                </div>
                <div style={{margin: "20px 0px"}}>
                <label htmlFor="pword">Password:</label>
                <Whisper trigger="focus" speaker={<Tooltip>Required</Tooltip>}>
                    <Input style={{ width: 300 }} placeholder="Password" value={password} onChange={setPassword}/>
                </Whisper>
                </div>
                <div style={{margin: "20px 0px"}}>
                <label htmlFor="role">Role</label>
                <div>
                <SelectPicker data={dataRole} searchable={false} style={{ width: 300 }} value={role} onChange={setRole}/>
                </div>
                </div>
                <div className='login-error-message'>{errorVisible}</div>
                </Modal.Body>
                {isLoading ? <Loader /> :
                <Modal.Footer>
                <Button onClick={(e)=> handleSubmit(e)} appearance="primary" type="submit">
                    Ok
                </Button>
                <Button onClick={handleCloseEdit} appearance="subtle">
                    Cancel
                </Button>
                </Modal.Footer>
                }
                </Form>
            </Modal>
           {/* } */}
        </>
    )
}