import React, { useState,useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
// import GoogleApiWrapper from "./components/mapComponent.js";
// import Mapbox from "./components/mapbox.js";
import MapWithPlaceholder from "./components/mapLeaflet.js";
import AboutAQI from "./components/aboutAQI.component.js";
import './css/main.css';
import ChartAQI from "./components/chart.component.js";
import Footer from "./components/footer.js";
import Header from "./components/header.js";
import Login from "./components/login.js";
import Register from "./components/register.js";
import HomePage from "./components/homepage.js";
import Layout from "./components/layout";
import ManageUserAccounts from "./components/manageUserAccounts";
import NoPage from "./components/noPage";
import { Navigate, useNavigate } from "react-router-dom";
import {getCookie} from './utils/cookie'

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    if(width>800 && document.getElementById("menu-mobile") != null){
        document.getElementById("menu-mobile").style.display = "none";
    }
    return {
      width,
      height
    };
  }
   
  
const PrivateRouteLogin = ({ children }) => {
  const navigate = useNavigate();
  const isAuthenticated = getCookie('accessToken');

  return !isAuthenticated ? children : <Navigate to='/' />;
};

function App() {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
    useEffect(() => {
        function handleResize() {
          setWindowDimensions(getWindowDimensions());
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    function handleClick() {
        document.getElementById("menu-mobile").style.display = "block";
    }
    function mobileNavOverlay(){
        document.getElementById("menu-mobile").style.display = "none";
    }
    
return(
<div style={{widtGoogleApiWrapperh: "100%"}}>
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<div></div>}>
            <Route path="/" element={<Homepage />}></Route>
        </Route> */}
         <Route path="login" 
         element={
              <PrivateRouteLogin>
                <Login />
              </PrivateRouteLogin>
            }>
          </Route>
          <Route path="register" element={<Register/>} ></Route>
        <Route path="/" element={<Layout/>}>
            <Route index element={<HomePage />}></Route>
            <Route path="mapAQI" element={<MapWithPlaceholder/>} ></Route>
            <Route path="about" element={<AboutAQI/>} ></Route>
            <Route path="chartAQI" element={<ChartAQI/>} ></Route>
            <Route path="admin" element={<ManageUserAccounts/>} ></Route>
            <Route path="*" element={<NoPage/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
</div>

)
}

export default App;

