
import React, {useEffect, useState} from 'react';
import CityService from '../../services/city';
import {Loader, Modal, ButtonToolbar, Whisper, Input, Tooltip, FlexboxGrid, SelectPicker, Form, Button, Schema, Panel } from 'rsuite';

export default function ButtonAddStation({openAdd, setOpenAdd, config, setCities, setSuccess}){
    // const [openAdd, setOpenAdd] = React.useState(false);
    const handleOpenAdd = () => setOpenAdd(true);
    const handleCloseAdd = () => setOpenAdd(false);
    const [name, setName]= useState("")
    const [lat, setLat]= useState("")
    const [lng, setLng]= useState("")
    const [errorVisible, setErrorVisible] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        if (name === "" || lat === "" | !lng) {
            setErrorVisible("Vui lòng nhập đầy đủ thông tin.");
            return;
        }
        
        // Xác thực đăng nhập và gọi API
        addCity(name, lat, lng);
    }

    const addCity = async (name, lat, lng)=>{
        const newCity ={
            name: name,
            lat: lat,
            lng: lng
        }

        setIsLoading(true);
        
        try {
            const res = await CityService.addCity(config, newCity)
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
            const { data } = await CityService.getListCity();
            setCities(data)
        } catch (error) {
            console.log(error)
        }
      };

    return (
        <>
            <Modal open={openAdd} onClose={handleCloseAdd}>
                <Modal.Header>
                <Modal.Title>Thêm mới tài khoản</Modal.Title>
                </Modal.Header>
                <Form >
                <Modal.Body>
                <div style={{margin: "20px 0px"}}>
                <label htmlFor="uname">Name:</label>
                <Whisper trigger="focus" speaker={<Tooltip>Required</Tooltip>}>
                        <Input style={{ width: 300 }} placeholder="name" value={name} onChange={setName}/>
                </Whisper>
                </div>
                <div style={{margin: "20px 0px"}}>
                <label htmlFor="pword">Latitude:</label>
                <Whisper trigger="focus" speaker={<Tooltip>Required</Tooltip>}>
                    <Input style={{ width: 300 }} placeholder="Latitude" value={lat} onChange={setLat}/>
                </Whisper>
                </div>
                <div style={{margin: "20px 0px"}}>
                <label htmlFor="lng">Longitude</label>
                <div>
                <Whisper trigger="focus" speaker={<Tooltip>Required</Tooltip>}>
                    <Input style={{ width: 300 }} placeholder="Longitude" value={lng} onChange={setLng}/>
                </Whisper>
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