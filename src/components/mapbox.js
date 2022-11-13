// import React from "react";
// import ReactMapGL, { Marker, Popup, Map } from "react-map-gl";
// import iconRed from '../assets/red.png';
// import iconGreen from '../assets/green.png';
// import iconYellow from '../assets/yellow.png';
// import iconPurple from '../assets/purple.png';
// import iconOrange from '../assets/orange.png';
// import iconVerypurle from '../assets/verypurple.png';
// import faceGreen from '../assets/ic-face-green.svg';
// import faceYellow from '../assets/ic-face-yellow.svg';
// import faceOrage from '../assets/ic-face-orange.svg';
// import faceRed from '../assets/ic-face-red.svg';
// import facePurple from '../assets/ic-face-purple.svg';
// import faceMaroon from '../assets/ic-face-maroon.svg';
// import '../css/mapDiv.css';
// import 'mapbox-gl/dist/mapbox-gl.css'
// function Mapbox() {
//   const [viewport, setViewport] = React.useState({
//     width: "100vw",
//     height: "calc(100vh - 154px)",
//     latitude: 10.86195853994233,
//     longitude: 106.74362380706191,
//     zoom: 10,
//   });
//   const [showPopup, togglePopup] = React.useState(false);
//   return (
//     <div id="outmap">
//    {/* <div className='note-poistion'> */}         
//         <div className='note-aqi'>
//             <div className='green'>Tốt</div>
//             <div className='yellow'>Trung bình</div>           
//             <div className='orange'>Không lành mạnh cho các nhóm nhạy cảm</div>
//             <div className='red'>Không lành mạnh</div>
//             <div className='purple'>Rất không lành mạnh</div>
//             <div className='verypurple'>Nguy hiểm</div>
//         </div>
//        {/* </div> */}
// <ReactMapGL
//       initialViewState={{
//         longitude: 105.84713, 
//         latitude: 21.030653,
//         zoom: 10
//     }}
//       mapStyle="mapbox://styles/mapbox/streets-v11"
//       style={{width: "100%", height: "calc(100vh - 154px)"}}
//       mapboxAccessToken ="pk.eyJ1IjoidHJhbmcyMjAxIiwiYSI6ImNsOXI2amtrZjAwYW0zdW1zM3p4NHprYW0ifQ.lo22G072MxNngvayroxTGA"
//     >
//         <Marker
//         latitude={21.0278}
//         longitude={105.84713}
//         offsetLeft={-20}
//         offsetTop={-30}
//       >
//         <img
//         //   onClick={() => togglePopup(true)}
//           style={{ height: 50, width: 50 }}
//           src="https://xuonginthanhpho.com/wp-content/uploads/2020/03/map-marker-icon.png"
//         />
//       </Marker>
//     </ReactMapGL>
// </div>
//   );
// }

// export default Mapbox;