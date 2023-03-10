import { Modal, IconButton, ButtonToolbar, Button } from 'rsuite';
import React from 'react';
import CityService from '../../services/city'
import TrashIcon from '@rsuite/icons/Trash';

export default function ButtonDeleteStation({idCity, config, setCities, setSuccess}){
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const deleteCity = async ()=>{
      try {
          const res = await CityService.deleteCity(config, idCity)
          fetchData();
          setOpen(false);
          setSuccess(true);
      } catch (error) {
          console.log(error)
      }
    }

    const fetchData = async () => {
      try {
          const { data } = await CityService.getListCity();
          setCities(data)
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
            Bạn chắc chắn muốn xóa trạm này?
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={deleteCity} appearance="primary">
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