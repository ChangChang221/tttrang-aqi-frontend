import { Modal, IconButton, ButtonToolbar, Button } from 'rsuite';
import React from 'react';
import UserService from '../../services/user'
import TrashIcon from '@rsuite/icons/Trash';

export default function ButtonDelete({idUser, config, setUsers, setSuccess}){
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const deleteUser = async ()=>{
      try {
          const res = await UserService.deleteUser(idUser,config)
          fetchData();
          setOpen(false);
          setSuccess(true);
      } catch (error) {
          console.log(error)
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

        <ButtonToolbar>
          <IconButton onClick={handleOpen} icon={<TrashIcon />} />
          {/* <Button onClick={handleOpen}>Delete</Button> */}
        </ButtonToolbar>
  
        <Modal backdrop="static" role="alertdialog" open={open} onClose={handleClose} size="xs">
          <Modal.Body>
            Bạn chắc chắn muốn xóa tài khoản này?
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={deleteUser} appearance="primary">
              Ok
            </Button>
            <Button onClick={handleClose} appearance="subtle">
              Cancel
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  };