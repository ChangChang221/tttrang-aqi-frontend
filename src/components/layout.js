import { NavLink, Outlet } from "react-router-dom";
import React, { useState,useEffect } from "react";
import '../css/main.css';
import Footer from "./footer.js";
import Header from "./header.js";
import {getCookie, deleteCookie} from '../utils/cookie.js'

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
    const isAuthenticated = getCookie('accessToken');
    const checkRole =()=>{
        if(isAuthenticated){
            const atobToken = JSON.parse(atob(isAuthenticated.split('.')[1]));
            return atobToken.role;
        }
            
        else return "";
        
    }
    
    const CheckValue = ()=>{
        if(window.location.pathname ==='/') return 0;
        else if(window.location.pathname ==='/mapAQI') return 1;
        else if(window.location.pathname ==='/chartAQI') return 2;
        else if(window.location.pathname ==='/about') return 3;
        else if(window.location.pathname ==='/admin') return 4;
        else return 4;
    }
    const[navNum, setNavNum]=useState(CheckValue);
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
    <Header navNum={navNum} setNavNum={setNavNum} isAuthenticated={isAuthenticated} checkRole={checkRole}/>
    <div className="container">
        <div className="menu-container-desktop menu-container" style={{display: "none"}}>
            <div className="logo-container">
                <NavLink to="/" className="logo">
                    <img src={require("../assets/logo11.png")} alt="img-icon"/>
                </NavLink>
            </div>
            <div className="menu-list">
                <div className="tooltip">
                    <NavLink to="/" className={`tooltip-content ${ navNum === 0? 'active' : '' }`}  onClick={()=>{ setNavNum(0) }}> 
                        <i style={{fontSize:"24px"}} className="fa fa-list-ul" ></i>
                        <div className="title-tooltip">Tổng quan</div>
                    </NavLink>
                </div>
                <div className="tooltip">
                    <NavLink to="/" className={`tooltip-content ${ navNum === 1? 'active' : '' }`}  onClick={()=>{ setNavNum(1) }}> 
                        <i style={{fontSize:"24px"}} className="fa fa-list-ul" ></i>
                        <div className="title-tooltip">Google Map</div>
                    </NavLink>
                </div>
                <div className="tooltip">
                    <NavLink to="/chartAQI" className={`tooltip-content ${ navNum === 2 ? 'active' : '' }`}  onClick={()=>{ setNavNum(2) }}>
                        {/* <div className="icon-tooltip cash-icon">
                        </div>           */}
                        <i style={{fontSize:"24px"}} className="fa fa-line-chart" ></i>                  
                        <div className="title-tooltip">Biểu đồ AQI</div>
                    </NavLink>
                </div>
                <div className="tooltip">
                    <NavLink to="/about" className={`tooltip-content ${ navNum === 3 ? 'active' : '' }`}  onClick={()=>{ setNavNum(3) }}>
                        <i style={{fontSize:"30px"}} className="fa fa-info-circle" ></i>
                        <div className="title-tooltip">Thông tin về AQI</div>
                    </NavLink>
                    
                </div>
            </div>
        </div>
        <div className="menu-mobile" id="menu-mobile">
            <div className="mobile-nav-overlay" onClick={mobileNavOverlay}></div>
            <div className="menu-container menu-container-mobile">
                <div className="logo-container">
                    <NavLink to="/" className="logo">
                        <img src={require("../assets/logo11.png")} alt="img-icon"/>
                    </NavLink>
                </div>
                <div className="menu-list">
                    <div className="tooltip">
                        <NavLink to="/" className={`tooltip-content ${ navNum === 0? 'active' : '' }`}  onClick={()=>{setNavNum(0) }}> 
                            <i id="iconMenu" style={{fontSize:"24px"}} className="fa fa-list-ul" ></i>
                            <div className="title-tooltip">Tổng quan</div>
                        </NavLink>
                    </div>
                    <div className="tooltip">
                        <NavLink to="/chartAQI" className={`tooltip-content ${ navNum === 1 ? 'active' : '' }`}  onClick={()=>{ setNavNum(1) }}>
                            <i style={{fontSize:"24px"}} className="fa fa-line-chart" ></i>                  
                            <div className="title-tooltip">Google Map</div>
                        </NavLink>
                    </div>
                    <div className="tooltip">
                        <NavLink to="/chartAQI" className={`tooltip-content ${ navNum === 2 ? 'active' : '' }`}  onClick={()=>{ setNavNum(2) }}>
                            <i style={{fontSize:"24px"}} className="fa fa-line-chart" ></i>                  
                            <div className="title-tooltip">Biểu đồ AQI</div>
                        </NavLink>
                    </div>
                    <div className="tooltip">
                        <NavLink to="/about" className={`tooltip-content ${ navNum === 3 ? 'active' : '' }`}  onClick={()=>{ setNavNum(3) }}>
                            <i style={{fontSize:"30px"}} className="fa fa-info-circle" ></i>
                            <div className="title-tooltip">Thông tin về AQI</div>
                        </NavLink>
                    </div>
                    
                    {checkRole() ==="admin" &&
                        <div className="tooltip">
                            <NavLink to="/admin" className={`tooltip-content ${ navNum === 4 ? 'active' : '' }`}  onClick={()=>{ setNavNum(4) }}>
                                <i style={{fontSize:"30px"}} className="fa fa-users" aria-hidden="true"></i>
                                <div className="title-tooltip">Quản lý user</div>
                            </NavLink>
                        </div>
                    }
                    { isAuthenticated &&
                        <div className="tooltip">
                        
                            <a href='/login' onClick={()=> { deleteCookie('accessToken')}}>
                                <i id="iconMenu" style={{fontSize:"30px"}} className="fa fa-sign-out" aria-hidden="true"></i>
                            </a>
                        
                        </div>
                    }
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
                    { navNum === 0 &&   <div className="title-content">Trang chủ</div>}
                    { navNum === 1 &&   <div className="title-content">Bản đồ chất lượng không khí Việt Nam</div>}
                    { navNum === 2 &&   <div className="title-content">Chất lượng không khí của các tỉnh Việt Nam</div>}
                    { navNum === 3 &&   <div className="title-content">Thông tin chất lượng không khí Việt Nam</div>}
                    { navNum === 4 &&   <div className="title-content">Quản lý tài khoản</div>}
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