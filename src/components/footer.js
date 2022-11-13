import '../css/layout/footer.css';
import '../css/layout/container.css';
import React, { useEffect } from "react";
export default function Footer(){
    useEffect(() => {
        document.getElementById("main-content").addEventListener("scroll", ()=>{
            if (document.getElementById("main-content").scrollTop > 0){
                document.getElementById("trang-fa-angle-up").style.opacity=1
            }
        });
    }, []);
    function onClickAngleUp(){
        window.scrollBy(0,300);
        document.getElementById("trang-fa-angle-up").style.opacity=0;
    }
    return (
    <footer className="footer-distributed">

      <div className="footer-left">
        <h3>
            <div className="logo-container">
                <a href="/" className="logo" style={{height: "111px"}}>
                    <img src={require("../assets/logo11.png")} alt="img-icon" style={{objectFit: "cover", width: "336px"}}/>
                </a>
            </div>
        </h3>
        <p className="footer-links">
          {/* <a href="/" className="link-1">Tổng quan</a> */}
          
          <a href="/" className="link-1">Map</a>
        
          <a href="/chartAQI">Biểu đồ AQI</a>
        
          <a href="/about">Thông tin AQI</a>
          
        </p>

        <p className="footer-company-name">Company Name © 2022</p>
      </div>

      <div className="footer-center">

        <div>
          <i className="fa fa-map-marker"></i>
          <p><span>104 Mễ Trì</span> Nam Từ Liêm, Hà Nội</p>
        </div>

        <div>
          <i className="fa fa-phone"></i>
          <p>0866023925</p>
        </div>

        <div>
          <i className="fa fa-envelope"></i>
          <p><a href="mailto:trangbg20@gmail.com">trangbg20@gmail.com</a></p>
        </div>

      </div>

      <div className="footer-right">

        <p className="footer-company-about">
          <span>About the company</span>
          Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
        </p>

        <div className="footer-icons">

          <a href="https://www.facebook.com/trang.nt.2201"><i className="fa fa-facebook"></i></a>
          <a href="#"><i className="fa fa-twitter"></i></a>
          <a href="#"><i className="fa fa-linkedin"></i></a>
          <a href="#"><i className="fa fa-github"></i></a>

        </div>

      </div>
      {/* <a href="#top" className="back-to-top button icon invert plain fixed bottom z-1 is-outline circle active" id="top-link">
        <i className="fa fa-angle-up trang-fa-angle-up" aria-hidden="true"></i>
      </a> */}
      <a href='#top' onClick={onClickAngleUp} id="btn-angUp">
        <i className="fa fa-angle-up trang-fa-angle-up" id="trang-fa-angle-up" aria-hidden="true"></i>
      </a>
    </footer>
    )
}