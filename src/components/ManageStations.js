import React, { useEffect, useState } from 'react';
import { IconButton, Message, ButtonToolbar, Loader } from 'rsuite';
import '../css/manage-user-accounts.css';
import CityService from '../services/city';
import { getCookie } from '../utils/cookie';
import ButtonDelete from './component/ButtonDelete';
import ButtonAdd from './component/ButtonAdd';
import AddOutlineIcon from '@rsuite/icons/AddOutline';
import {titleCase} from './manageUserAccounts'
import ButtonAddStation from './component/ButtonAddStation';
import ButtonDeleteStation from './component/ButtonDeleteStation';

export default function ManageStations(){
    const [success, setSuccess] = React.useState(false);
    const accessToken = getCookie('accessToken');
    const username = JSON.parse(atob(accessToken.split('.')[1])).username;
    
    const config = {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
    };

    const [cities, setCities] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [Selectedcities, setSelectedcities] = useState([]);

    const fetchData = async () => {
        try {
            const { data } = await CityService.getListCity();
            setCities(data)
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

    const [openAdd, setOpenAdd] = React.useState(false);
    const handleOpenAdd = () => setOpenAdd(true);

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
            </ButtonToolbar>
            {openAdd &&
                <ButtonAddStation openAdd={openAdd} setOpenAdd={setOpenAdd} config={config} setCities={setCities}  setSuccess={setSuccess} />
            }
             {isLoading ? (
                    <Loader />
                ) : (
            <table width='100%' className='table-alarms'>
                <thead>
                <tr>
                    <th>STT</th>
                    <th>NAME</th>
                    <th>LATITUDE</th>
                    <th>LONGITUDE</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {cities.map((data, index) => {
                    return (
                    <tr key={index}>
                        <td>
                        {index+1}
                        </td>
                        <td >{titleCase(data.name)}</td>
                        <td>{data.lat}</td>
                        <td>{data.lng}</td>
                        <td style={{width: "50px"}} className={username === data.username? "disable-button":""}>
                            <ButtonDeleteStation idCity={data._id} config={config} setCities={setCities} setSuccess={setSuccess} />
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