import React, { useState,useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import GoogleApiWrapper from "./components/mapComponent.js";
import Mapbox from "./components/mapbox.js";
import MapWithPlaceholder from "./components/mapLeaflet.js";
import AboutAQI from "./components/aboutAQI.component.js";
import './css/main.css';
import ChartAQI from "./components/chart.component.js";
import Footer from "./components/footer.js";

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
<div style={{width: "100%"}}>
    <div className="container">
        <div className="menu-container-desktop menu-container">
            <div className="logo-container">
                <a href="/" className="logo">
                    <img src={require("./assets/logo11.png")} alt="img-icon"/>
                </a>
            </div>
            <div className="menu-list">
                <div className="tooltip">
                    <a href="/" className={`tooltip-content ${ Number(sessionStorage.getItem('menuIndex')) == 0? 'active' : '' }`}  onClick={()=>{ sessionStorage.setItem("menuIndex",0) }}> 
                        <i id="iconMenu" style={{fontSize:"24px"}} className="fa fa-list-ul" ></i>
                        <div className="title-tooltip">Tổng quan</div>
                    </a>
                </div>
                <div className="tooltip">
                    <a href="/chartAQI" className={`tooltip-content ${ Number(sessionStorage.getItem('menuIndex')) == 1 ? 'active' : '' }`}  onClick={()=>{ sessionStorage.setItem("menuIndex",1) }}>
                        {/* <div className="icon-tooltip cash-icon">
                        </div>           */}
                        <i id="iconMenu" style={{fontSize:"24px"}} className="fa fa-line-chart" ></i>                  
                        <div className="title-tooltip">Biểu đồ AQI</div>
                    </a>
                </div>
                <div className="tooltip">
                    <a href="/about" className={`tooltip-content ${ Number(sessionStorage.getItem('menuIndex')) == 2 ? 'active' : '' }`}  onClick={()=>{ sessionStorage.setItem("menuIndex",2) }}>
                        <i id="iconMenu" style={{fontSize:"30px"}} className="fa fa-info-circle" ></i>
                        <div className="title-tooltip">Thông tin về AQI</div>
                    </a>
                </div>
            </div>
        </div>
        <div className="menu-mobile" id="menu-mobile">
            <div className="mobile-nav-overlay" onClick={mobileNavOverlay}></div>
            <div className="menu-container menu-container-mobile">
                <div className="logo-container">
                    <a href="/" className="logo">
                        <img src={require("./assets/logo11.png")} alt="img-icon"/>
                    </a>
                </div>
                <div className="menu-list">
                    <div className="tooltip">
                        <a href="/" className={`tooltip-content ${ Number(sessionStorage.getItem('menuIndex')) == 0? 'active' : '' }`}  onClick={()=>{ sessionStorage.setItem("menuIndex",0) }}> 
                            <i id="iconMenu" style={{fontSize:"24px"}} className="fa fa-list-ul" ></i>
                            <div className="title-tooltip">Tổng quan</div>
                        </a>
                    </div>
                    <div className="tooltip">
                        <a href="/chartAQI" className={`tooltip-content ${ Number(sessionStorage.getItem('menuIndex')) == 1 ? 'active' : '' }`}  onClick={()=>{ sessionStorage.setItem("menuIndex",1) }}>
                            {/* <div className="icon-tooltip cash-icon">
                            </div>           */}
                            <i id="iconMenu" style={{fontSize:"24px"}} className="fa fa-line-chart" ></i>                  
                            <div className="title-tooltip">Biểu đồ AQI</div>
                        </a>
                    </div>
                    <div className="tooltip">
                        <a href="/about" className={`tooltip-content ${ Number(sessionStorage.getItem('menuIndex')) == 2 ? 'active' : '' }`}  onClick={()=>{ sessionStorage.setItem("menuIndex",2) }}>
                            <i id="iconMenu" style={{fontSize:"30px"}} className="fa fa-info-circle" ></i>
                            <div className="title-tooltip">Thông tin về AQI</div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div className="area-content">
            <div className="header">
                <button className=" menu-list-mobile" onClick ={handleClick}>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                </svg>
                </button>
                <div className="main-company">
                    <img className="mini-logo" src={require("./assets/logo.png")} alt="img-icon"/>
                    <div className="company-name">CHẤT LƯỢNG KHÔNG KHÍ VIỆT NAM</div>
                </div>
            </div>
            <div className="main-content" id="main-content">
                <div className="header-content">
                    <BrowserRouter>
                            <Routes>
                                <Route path="/mapAQI" element={<div className="title-content">Bản đồ chất lượng không khí Việt Nam</div>} ></Route>
                                <Route path="/about" element={<div className="title-content">Thông tin chất lượng không khí Việt Nam</div>} ></Route>
                                <Route path="/chartAQI" element={<div className="title-content">Chất lượng không khí của các tỉnh Việt Nam</div>} ></Route>
                                <Route path="/" element={<div className="title-content">Bản đồ chất lượng không khí Việt Nam</div>}></Route>
                            </Routes>
                        </BrowserRouter>
                </div>
                <div className="content-table">
                    <div className="main-table">
                         <BrowserRouter>
                            <Routes>
                                {/* <Route path="/mapAQI" element={<GoogleApiWrapper/>} ></Route>
                                 */}
                                <Route path="/mapAQI" element={<MapWithPlaceholder/>} ></Route>
                                <Route path="/about" element={<AboutAQI/>} ></Route>
                                <Route path="/chartAQI" element={<ChartAQI/>} ></Route>
                                <Route path="/" element={<MapWithPlaceholder />}></Route>
                            </Routes>
                        </BrowserRouter>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Footer/>
</div>

)
}

export default App;

