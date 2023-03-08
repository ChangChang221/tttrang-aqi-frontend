
import React, {useEffect, useState} from 'react';
import SignInUpService from '../../services/signup';
import UserService from '../../services/user';
import AddOutlineIcon from '@rsuite/icons/AddOutline';
import {Loader, IconButton, Modal, ButtonToolbar, Whisper, Input, Tooltip, FlexboxGrid, SelectPicker, Form, Button, Schema, Panel } from 'rsuite';

export default function ButtonAdd({openAdd, setOpenAdd, config, setUsers, setSuccess}){
    // const [openAdd, setOpenAdd] = React.useState(false);
    const handleOpenAdd = () => setOpenAdd(true);
    const handleCloseAdd = () => setOpenAdd(false);
    const [username, setUsername]= useState("")
    const [password, setPassword]= useState("")
    const [role, setRole]= useState("")
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
        
        // Xác thực đăng nhập và gọi API
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
            const res = await SignInUpService.registerAuth(newUser)
            console.log({res})
            setOpenAdd(false)
            fetchData();
            setErrorVisible("");
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

    return (
        <>
            {/* <ButtonToolbar className="button-add">
                <IconButton onClick={handleOpenAdd} icon={<AddOutlineIcon />} />
            </ButtonToolbar>
           {
            openAdd && */}
            <Modal open={openAdd} onClose={handleCloseAdd}>
                <Modal.Header>
                <Modal.Title>Chỉnh sửa tài khoản</Modal.Title>
                </Modal.Header>
                <Form >
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
                <Button onClick={handleCloseAdd} appearance="subtle">
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