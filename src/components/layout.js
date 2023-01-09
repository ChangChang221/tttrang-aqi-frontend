import { Outlet } from "react-router-dom";
import React, { useState,useEffect } from "react";

import MapWithPlaceholder from "./mapLeaflet.js";
import AboutAQI from "./aboutAQI.component.js";
import '../css/main.css';
import ChartAQI from "./chart.component.js";
import Footer from "./footer.js";
import Header from "./header.js";
import Homepage from "./homepage";
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
const Layout = () => {
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
  return (
    <>
    <Header/>
    <div className="container">
        <div className="menu-container-desktop menu-container" style={{display: "none"}}>
            <div className="logo-container">
                <a href="/" className="logo">
                    <img src={require("../assets/logo11.png")} alt="img-icon"/>
                </a>
            </div>
            <div className="menu-list">
                <div className="tooltip">
                    <a href="/" className={`tooltip-content ${ Number(sessionStorage.getItem('menuIndex')) === 0? 'active' : '' }`}  onClick={()=>{ sessionStorage.setItem("menuIndex",0) }}> 
                        <i id="iconMenu" style={{fontSize:"24px"}} className="fa fa-list-ul" ></i>
                        <div className="title-tooltip">Tổng quan</div>
                    </a>
                </div>
                <div className="tooltip">
                    <a href="/chartAQI" className={`tooltip-content ${ Number(sessionStorage.getItem('menuIndex')) === 1 ? 'active' : '' }`}  onClick={()=>{ sessionStorage.setItem("menuIndex",1) }}>
                        {/* <div className="icon-tooltip cash-icon">
                        </div>           */}
                        <i id="iconMenu" style={{fontSize:"24px"}} className="fa fa-line-chart" ></i>                  
                        <div className="title-tooltip">Biểu đồ AQI</div>
                    </a>
                </div>
                <div className="tooltip">
                    <a href="/about" className={`tooltip-content ${ Number(sessionStorage.getItem('menuIndex')) === 2 ? 'active' : '' }`}  onClick={()=>{ sessionStorage.setItem("menuIndex",2) }}>
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
                        <img src={require("../assets/logo11.png")} alt="img-icon"/>
                    </a>
                </div>
                <div className="menu-list">
                    <div className="tooltip">
                        <a href="/" className={`tooltip-content ${ Number(sessionStorage.getItem('menuIndex')) === 0? 'active' : '' }`}  onClick={()=>{ sessionStorage.setItem("menuIndex",0) }}> 
                            <i id="iconMenu" style={{fontSize:"24px"}} className="fa fa-list-ul" ></i>
                            <div className="title-tooltip">Tổng quan</div>
                        </a>
                    </div>
                    <div className="tooltip">
                        <a href="/chartAQI" className={`tooltip-content ${ Number(sessionStorage.getItem('menuIndex')) === 1 ? 'active' : '' }`}  onClick={()=>{ sessionStorage.setItem("menuIndex",1) }}>
                            <i id="iconMenu" style={{fontSize:"24px"}} className="fa fa-line-chart" ></i>                  
                            <div className="title-tooltip">Google Map</div>
                        </a>
                    </div>
                    <div className="tooltip">
                        <a href="/chartAQI" className={`tooltip-content ${ Number(sessionStorage.getItem('menuIndex')) === 2 ? 'active' : '' }`}  onClick={()=>{ sessionStorage.setItem("menuIndex",2) }}>
                            <i id="iconMenu" style={{fontSize:"24px"}} className="fa fa-line-chart" ></i>                  
                            <div className="title-tooltip">Biểu đồ AQI</div>
                        </a>
                    </div>
                    <div className="tooltip">
                        <a href="/about" className={`tooltip-content ${ Number(sessionStorage.getItem('menuIndex')) === 3 ? 'active' : '' }`}  onClick={()=>{ sessionStorage.setItem("menuIndex",3) }}>
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
                    <img className="mini-logo" src={require("../assets/logo.png")} alt="img-icon"/>
                    <div className="company-name">CHẤT LƯỢNG KHÔNG KHÍ VIỆT NAM</div>
                </div>
            </div>
            <div className="main-content" id="main-content">
                <div className="header-content">
                    <img className="mini-logo" src={require("../assets/logo.png")} alt="img-icon"/>
                    { Number(sessionStorage.getItem('menuIndex')) === 0 &&   <div className="title-content">Trang chủ</div>}
                    { Number(sessionStorage.getItem('menuIndex')) === 1 &&   <div className="title-content">Bản đồ chất lượng không khí Việt Nam</div>}
                    { Number(sessionStorage.getItem('menuIndex')) === 2 &&   <div className="title-content">Chất lượng không khí của các tỉnh Việt Nam</div>}
                    { Number(sessionStorage.getItem('menuIndex')) === 3 &&   <div className="title-content">Thông tin chất lượng không khí Việt Nam</div>}
                    {/* <BrowserRouter>
                        <Routes>
                            <Route path="/mapAQI" element={<div className="title-content">Bản đồ chất lượng không khí Việt Nam</div>} ></Route>
                            <Route path="/about" element={<div className="title-content">Thông tin chất lượng không khí Việt Nam</div>} ></Route>
                            <Route path="/chartAQI" element={<div className="title-content">Chất lượng không khí của các tỉnh Việt Nam</div>} ></Route>
                            <Route path="/" element={<div className="title-content">Trang chủ</div>}></Route>
                        </Routes>
                    </BrowserRouter> */}
                </div>
                <div className="content-table">
                    <div className="main-table">
                        <Outlet/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Footer/>
    </>
  )
};

export default Layout;