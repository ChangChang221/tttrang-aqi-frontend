import React, { useRef, useState, useEffect,useMemo, Component, useCallback } from "react";
import { MapContainer,TileLayer, Popup, Marker, useMap, useMapEvents } from 'react-leaflet';
import 'map-icons/dist/css/map-icons.css';
import '../css/mapDiv.css';
import faceGreen from '../assets/ic-face-green.svg';
import faceYellow from '../assets/ic-face-yellow.svg';
import faceOrage from '../assets/ic-face-orange.svg';
import faceRed from '../assets/ic-face-red.svg';
import facePurple from '../assets/ic-face-purple.svg';
import faceMaroon from '../assets/ic-face-maroon.svg';
import L from 'leaflet';

const center = [21.030653, 105.84713]
const zoom = 10

function DisplayPosition({ map }) {
  const onClick = () => {
    console.log("hihi")
    navigator.geolocation.getCurrentPosition((position)=>{
      let centerPo=[position.coords.latitude,position.coords.longitude]
      map.flyTo(centerPo, 13)
    })
  }
  const reOnClick = () => {
    map.setView(center, zoom)
  }
  return (
    <p className="setView">
      <button className="btn-setView" onClick={onClick}><i className="fa fa-location-arrow" style={{marginRight:"5px"}} aria-hidden="true"></i>Định vị tôi</button>
      <button className="btn-setView" onClick={reOnClick}><i className="fa fa-undo" style={{marginRight:"5px"}} aria-hidden="true"></i>Reset</button>
    </p>
  )
}

function MapWithPlaceholder() {
  const [map, setMap] = useState(null)
  const [bounds, setbounds] = useState([
    [-90, -180],
    [90, 180],
  ]);
  const [dataCity, setDataCity] = useState([]);
  const [data, setData] = useState('');
  useEffect(() => {
    const timerID = setInterval(
      () => tick(),
      1000
    );
    // Specify how to clean up after this effect:
    return ()=>{
      clearInterval(timerID);
    }
  });

  function tick() {
  fetch("https://tttrang-aqi-backend.herokuapp.com/api") //http://localhost:5000/api/
    .then(res => res.json())
    .then(dataRes=>{
        setData(dataRes[1]);
        setDataCity(dataRes)
    })
    .catch(() => {
      alert('failed to fetch');
    });
  }

  // const displayMap = useMemo(
  //   () => (
  //     <div id="map">
  //     <div className='note-aqi'>
  //       <div className='green'>Tốt</div>
  //       <div className='yellow'>Trung bình</div>
  //       <div className='orange'>Không lành mạnh cho các nhóm nhạy cảm</div>
  //       <div className='red'>Không lành mạnh</div>
  //       <div className='purple'>Rất không lành mạnh</div>
  //       <div className='verypurple'>Nguy hiểm</div>
  //     </div>
    
  //     <MapContainer
  //       id="maptest"
  //       classList="map"
  //       style={{width: "100%",
  //       height:'calc(100vh - 154px)'}}
  //       // ref={mapRef}
  //       scrollWheelZoom={false}
  //       ref={setMap}
  //       center={center} 
  //       zoom={zoom}
  //       // center={[21.030653, 105.84713]}
  //       // zoom={10}
  //       maxZoom={19}
  //       minZoom={2}
  //       bounceAtZoomLimits={true}
  //       maxBoundsViscosity={0.95}
  //       maxBounds={bounds}
  //     >
  //       <TileLayer
  //       attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  //       url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  //       />
  //     { dataCity.map((data, index)=>{
  //       let url='';
  //       let face='';
  //       let background='';
  //       let miniBackground='';
  //       let aboutTypeAQI='';
  //       let colorText='';
  //       if(data.AQI<51) {
  //         url=1;
  //         face= faceGreen;
  //         background="#A8E05F";
  //         miniBackground="#87C13C"
  //         aboutTypeAQI='Tốt'
  //         colorText='#607631'
  //       }
  //       else if(data.AQI<101) {
  //         url=2;
  //         face=faceYellow
  //         background="#FDD64B"
  //         miniBackground="#EFBE1D"
  //         aboutTypeAQI='Trung bình'
  //         colorText='#8c6c1d'
  //       }
  //       else if(data.AQI<151) {
  //         url=3;
  //         face=faceOrage;
  //         miniBackground="#F27B2F"
  //         background="#FF9B57"
  //         aboutTypeAQI='Không lành mạnh cho các nhóm nhạy cảm'
  //         colorText='#974A20'
  //       }
  //       else if(data.AQI<201) {
  //         url=4;
  //         face=faceRed;
  //         background="#FE6A69"
  //         miniBackground="#E84B50"
  //         aboutTypeAQI='Không lành mạnh'
  //         colorText='#942431'
  //       }
  //       else if(data.AQI<301) {
  //         url=5;
  //         face=facePurple;
  //         background="#A97ABC"
  //         miniBackground="#8A5D9D"
  //         aboutTypeAQI='Rất không lành mạnh'
  //         colorText='#543b63'
  //       }
  //       else if(data.AQI>300) {
  //         url=6;
  //         face=faceMaroon;
  //         background="#a070b6"
  //         miniBackground="#69103d"
  //         aboutTypeAQI='Nguy hiểm'
  //         colorText='#69103d'
  //       }
  //       let numberIcon = L.divIcon({
  //         html: '<div class="leaflet-div-icon-'+url+'">'+data.AQI+'</div>'
  //     });
  //       return (
  //         <Marker                
  //         icon={numberIcon}
  //         position={{lat: data.lat, lng: data.lng}} 
  //         key={index}
  //         >
  //           <Popup>
  //           <div className="popup-header" style={{background}}>
  //             <div className='main-header-aqi' >
  //               <div className='value-aqi'style={{background:miniBackground}}>
  //                 <div style={{fontSize:'12px',paddingBottom:'20px'}}>US AQI</div>
  //                 <div>{data.AQI}</div>
  //               </div>
  //               <div style={{color:colorText}} className='place-aqi'>
  //                 <div>CHỈ SỐ AQI TRỰC TIẾP:</div>
  //                 <div style={{fontSize:'24px'}}>{aboutTypeAQI}</div>
  //             </div>
  //             </div>
  //             <div className='face-type'>
  //               <img src={face}></img>
  //             </div>
  //           </div>
  //           <div className='popup-main'>
  //             <div className='overview-aqi'>
  //               <div style={{fontWeight:'700',color:'#449FBC',fontSize:'15px'}}>Tổng quan</div>
  //               <div style={{fontSize:'14px'}}>Chất lượng không khí hiện tại gần {data.name} như thế nào?</div>
  //             </div>
  //             <div className='main-aqi'>
  //               <table>
  //                 <thead>
  //                   <tr>
  //                     <th>Mức ô nhiễm không khí</th>
  //                     <th>Chỉ số chất lượng không khí</th>
  //                     <th>Chất gây ô nhiễm chính</th>
  //                   </tr>
  //                 </thead>
  //                 <tbody>
  //                   <tr>
  //                     <td>{aboutTypeAQI}</td>
  //                     <td>{data.AQI} US AQI</td>
  //                     <td>PM2.5: {data.pm25}µg/m³</td>
  //                   </tr>
  //                 </tbody>
  //               </table>
  //             </div>
  //             <div className='detail-aqi'>
  //               <div style={{fontWeight:'700',color:'#449FBC',fontSize:'15px'}}>Chất lượng không khí:</div>
  //               <div className='detail'>
  //                 <div>
  //                   <div><i className="fa fa-thermometer-quarter" aria-hidden="true"  style={{fontSize:"14px", paddingRight:"6px", color:"#FF3300"}}/>Nhiệt độ: {data.temperature}<sup>o</sup>C</div>
  //                   <div><i className="fa fa-tint" aria-hidden="true" style={{fontSize:"14px", paddingRight:"6px", color:"#1E90FF"}}/>Độ ẩm: {data.humidity}%</div>
  //                 </div>
  //                 <div>
  //                   <div><i className="fa fa-cloud" aria-hidden="true" style={{fontSize:"14px", paddingRight:"6px", color:"#FF3300"}}></i>CO2: {data.co2} µg/m³</div>
  //                   <div><i className="fa fa-cloud" aria-hidden="true" style={{fontSize:"14px", paddingRight:"6px", color:"#FF3300"}}></i>CO: {data.co} µg/m³</div>
  //                 </div>
  //               </div>
  //             </div>
  //           </div>
  //           </Popup>
  //         </Marker>
  //       );
  //     })}
  //     </MapContainer>
  //   </div>
  //   ),
  //   [],
  // )

  return (
    <div>
      <DisplayPosition map={map} />
      <div id="map">
      <div className='note-aqi'>
        <div className="note-aqi-main">
          <div className='green'>Tốt</div>
          <div className='yellow'>Trung bình</div>
          <div className='orange'>Không lành mạnh cho các nhóm nhạy cảm</div>
          <div className='red'>Không lành mạnh</div>
          <div className='purple'>Rất không lành mạnh</div>
          <div className='verypurple'>Nguy hiểm</div>
        </div>
      </div>
      <MapContainer
        id="maptest"
        classList="map"
        style={{width: "100%",
        height:'calc(100vh - 154px)'}}
        // ref={mapRef}
        scrollWheelZoom={false}
        ref={setMap}
        center={center} 
        zoom={zoom}
        // center={[21.030653, 105.84713]}
        // zoom={10}
        maxZoom={19}
        minZoom={2}
        bounceAtZoomLimits={true}
        maxBoundsViscosity={0.95}
        maxBounds={bounds}
      >
        <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      { dataCity.map((data, index)=>{
        let url='';
        let face='';
        let background='';
        let miniBackground='';
        let aboutTypeAQI='';
        let colorText='';
        if(data.AQI<51) {
          url=1;
          face= faceGreen;
          background="#A8E05F";
          miniBackground="#87C13C"
          aboutTypeAQI='Tốt'
          colorText='#607631'
        }
        else if(data.AQI<101) {
          url=2;
          face=faceYellow
          background="#FDD64B"
          miniBackground="#EFBE1D"
          aboutTypeAQI='Trung bình'
          colorText='#8c6c1d'
        }
        else if(data.AQI<151) {
          url=3;
          face=faceOrage;
          miniBackground="#F27B2F"
          background="#FF9B57"
          aboutTypeAQI='Không lành mạnh cho các nhóm nhạy cảm'
          colorText='#974A20'
        }
        else if(data.AQI<201) {
          url=4;
          face=faceRed;
          background="#FE6A69"
          miniBackground="#E84B50"
          aboutTypeAQI='Không lành mạnh'
          colorText='#942431'
        }
        else if(data.AQI<301) {
          url=5;
          face=facePurple;
          background="#A97ABC"
          miniBackground="#8A5D9D"
          aboutTypeAQI='Rất không lành mạnh'
          colorText='#543b63'
        }
        else if(data.AQI>300) {
          url=6;
          face=faceMaroon;
          background="#a070b6"
          miniBackground="#69103d"
          aboutTypeAQI='Nguy hiểm'
          colorText='#69103d'
        }
        let numberIcon = L.divIcon({
          html: '<div class="leaflet-div-icon-'+url+'">'+data.AQI+'</div>'
      });
        return (
          <Marker           
          icon={numberIcon}
          position={{lat: data.lat, lng: data.lng}} 
          key={index}
          >
            <Popup>
            <div className="popup-header" style={{background}}>
              <div className='main-header-aqi' >
                <div className='value-aqi'style={{background:miniBackground}}>
                  <div style={{fontSize:'12px',paddingBottom:'20px'}}>US AQI</div>
                  <div>{data.AQI}</div>
                </div>
                <div style={{color:colorText}} className='place-aqi'>
                  <div>CHỈ SỐ AQI TRỰC TIẾP:</div>
                  <div style={{fontSize:'24px'}}>{aboutTypeAQI}</div>
              </div>
              </div>
              <div className='face-type'>
                <img src={face}></img>
              </div>
            </div>
            <div className='popup-main'>
              <div className='overview-aqi'>
                <div style={{fontWeight:'700',color:'#449FBC',fontSize:'15px'}}>Tổng quan</div>
                <div style={{fontSize:'14px'}}>Chất lượng không khí hiện tại gần {data.name} như thế nào?</div>
              </div>
              <div className='main-aqi'>
                <table>
                  <thead>
                    <tr>
                      <th>Mức ô nhiễm không khí</th>
                      <th>Chỉ số chất lượng không khí</th>
                      <th>Chất gây ô nhiễm chính</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{aboutTypeAQI}</td>
                      <td>{data.AQI} US AQI</td>
                      <td>PM2.5: {data.pm25}µg/m³</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className='detail-aqi'>
                <div style={{fontWeight:'700',color:'#449FBC',fontSize:'15px'}}>Chất lượng không khí:</div>
                <div className='detail'>
                  <div>
                    <div><i className="fa fa-thermometer-quarter" aria-hidden="true"  style={{fontSize:"14px", paddingRight:"6px", color:"#FF3300"}}/>Nhiệt độ: {data.temperature}<sup>o</sup>C</div>
                    <div><i className="fa fa-tint" aria-hidden="true" style={{fontSize:"14px", paddingRight:"6px", color:"#1E90FF"}}/>Độ ẩm: {data.humidity}%</div>
                  </div>
                  <div>
                    <div><i className="fa fa-cloud" aria-hidden="true" style={{fontSize:"14px", paddingRight:"6px", color:"#FF3300"}}></i>CO2: {data.co2} µg/m³</div>
                    <div><i className="fa fa-cloud" aria-hidden="true" style={{fontSize:"14px", paddingRight:"6px", color:"#FF3300"}}></i>CO: {data.co} µg/m³</div>
                  </div>
                </div>
              </div>
            </div>
            </Popup>
          </Marker>
        );
      })}
      </MapContainer>
      </div>
    </div>
  )
}


export default MapWithPlaceholder;
