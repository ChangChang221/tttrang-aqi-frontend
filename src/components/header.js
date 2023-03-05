import '../css/layout/header.css';
import '../css/layout/container.css';
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {getCookie, deleteCookie} from '../utils/cookie'

export default function Header({navNum, setNavNum}){
    const isAuthenticated = getCookie('accessToken');
    const[test, setTest]=useState(0);

    const atobToken = JSON.parse(atob(isAuthenticated.split('.')[1]));
    const role = atobToken.role;
  
    return(
    <div className="menu-desktop navbar navbar-expand-lg navbar-light py-lg-0 px-lg-5 wow fadeIn">
         <div className="logo-container" style={{flexGrow: 1}}>
            <a href="/" className="logo" style={{height: "80px"}}>
                <img src={require("../assets/logo11.png")} alt="img-icon" style={{objectFit: "cover", width: "336px"}}/>
            </a>
        </div>
        <div className='navbar-collapse'>
            <div>
                <NavLink to='/' className={`nav-item nav-link`}  onClick={()=>{ sessionStorage.setItem("menuIndex",0); setNavNum(0) }}>Tổng quan </NavLink>
                <NavLink to='/mapAQI' className={`nav-item nav-link`}  onClick={()=>{ sessionStorage.setItem("menuIndex",1); setNavNum(1) }}>Google map</NavLink>
                <NavLink to='/chartAQI' className= {`nav-item nav-link`} onClick={()=>{ sessionStorage.setItem("menuIndex",2);setNavNum(2) }}>Biểu đồ AQI</NavLink>
                <NavLink to='/about' className={`nav-item nav-link `}  onClick={()=>{ sessionStorage.setItem("menuIndex",3); setNavNum(3) }}>Thông tin về AQI</NavLink>
                {/* <a href="/" className={`nav-item nav-link ${ Number(sessionStorage.getItem('menuIndex')) === 0 ? 'active' : '' }`}  onClick={()=>{ sessionStorage.setItem("menuIndex",0); setTest(0) }}>Tổng quan</a> */}
                {/* <a href="/mapAQI" className={`nav-item nav-link ${ Number(sessionStorage.getItem('menuIndex')) === 1 ? 'active' : '' }`}  onClick={()=>{ sessionStorage.setItem("menuIndex",1); setTest(1) }}>Google map</a> */}
                {/* <a href="/chartAQI" className= {`nav-item nav-link ${ Number(sessionStorage.getItem('menuIndex')) === 2 ? 'active' : '' }`}  onClick={()=>{ sessionStorage.setItem("menuIndex",2);setTest(2) }}>Biểu đồ AQI</a> */}
                {/* <a href="/about" className={`nav-item nav-link ${ Number(sessionStorage.getItem('menuIndex')) === 3 ? 'active' : '' }`}  onClick={()=>{ sessionStorage.setItem("menuIndex",3); setTest(3) }}>Thông tin về AQI</a> */}
            </div>
            <div className="header-icons">
                <a href="https://www.facebook.com/trang.nt.2201"><i className="fa fa-facebook"></i></a>
                <a href="https://github.com/ChangChang221"><i className="fa fa-github"></i></a>
                
                { !isAuthenticated &&
                    <NavLink to='/login' ><i className="fa fa-sign-in"></i></NavLink>}
                { isAuthenticated &&
                    <span>
                        <a href='/login' onClick={()=> { deleteCookie('accessToken')}}><i className="fa fa-sign-out" aria-hidden="true"></i></a>
                    </span>
                    }
                {role ==="admin" &&
                     <NavLink to='/admin' ><i className="fa fa-users" aria-hidden="true"></i></NavLink>
                }
            </div>
        </div>
    </div>
    );
}
