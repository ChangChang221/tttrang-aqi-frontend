
import React, {useState} from 'react';
import UserService from '../../services/user';
import { Modal, ButtonToolbar, Whisper, Input, Tooltip, FlexboxGrid, SelectPicker, Form, Button, Schema, Panel } from 'rsuite';

const { StringType } = Schema.Types;
const model = Schema.Model({
  name: StringType().isRequired('This field is required.'),
  password: StringType()
    .isRequired('This field is required.')
});

function TextField(props) {
  const { name, label, accepter, ...rest } = props;
  return (
    <Form.Group controlId={`${name}-3`}>
      <Form.ControlLabel>{label} </Form.ControlLabel>
      <Form.Control name={name} accepter={accepter} {...rest} />
    </Form.Group>
  );
}

export default function ButtonEdit({user, setUsers, config}){
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [username, setUsername]= useState(user.email)
    const [password, setPassword]= useState(user.password)
    const [role, setRole]= useState(user.role.toUpperCase())
    const [errorVisible, setErrorVisible] = useState("");

    const dataRole = ['ADMIN', 'USER'].map(
        item => ({ label: item, value: item })
      );

    

    const editUser = async ()=>{
        const newUser ={
            email: username,
            password: password,
            role: role.toLowerCase()
        }
        try {
            const res = await UserService.editUser(newUser, user._id, config)
            console.log({res})
            setOpen(false)
            fetchData();
            setErrorVisible("")
        } catch (error) {
            console.log(error)
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

    const ControlRow = ({ label, control, ...rest }) => (
        <FlexboxGrid {...rest} style={{ marginBottom: 10 }} align="middle">
          <FlexboxGrid.Item colspan={6}>{label}: </FlexboxGrid.Item>
          <FlexboxGrid.Item colspan={18}>{control}</FlexboxGrid.Item>
        </FlexboxGrid>
      );

    return (
        <>
            <ButtonToolbar>
                <Button onClick={handleOpen}> Edit</Button>
            </ButtonToolbar>

            <Modal open={open} onClose={handleClose}>
                <Modal.Header>
                <Modal.Title>Chỉnh sửa tài khoản</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <div style={{margin: "20px 0px"}}>
                <label for="uname">Username:</label>
                <Whisper trigger="focus" speaker={<Tooltip>Required</Tooltip>}>
                        <Input style={{ width: 300 }} placeholder="Username" value={username} onChange={setUsername}/>
                </Whisper>
                </div>
                <div style={{margin: "20px 0px"}}>
                <label for="pword">Password:</label>
                <Whisper trigger="focus" speaker={<Tooltip>Required</Tooltip>}>
                    <Input style={{ width: 300 }} placeholder="Password" value={password} onChange={setPassword}/>
                </Whisper>
                </div>
                <div style={{margin: "20px 0px"}}>
                <label for="role">Role</label>
                <div>
                <SelectPicker data={dataRole} searchable={false} style={{ width: 300 }} value={role} onChange={setRole}/>
                </div>
                </div>
                </Modal.Body>
                <Modal.Footer>
                <Button onClick={editUser} appearance="primary">
                    Ok
                </Button>
                <Button onClick={handleClose} appearance="subtle">
                    Cancel
                </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}