import { Carousel } from 'react-carousel-minimal';
import "../css/homepage.css";
import FAQImg from '../assets/FAQ.jpg'
import AT from '../assets/AT.jpg'
import FAQ from "./FAQ"
import Location_Map from "../assets/location-map.jpg"
import { Button } from 'rsuite';
import { NavLink, useNavigate } from 'react-router-dom';
function HomePage() {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/mapAQI");
  }
 const data = [
    {
      image: "https://haycafe.vn/wp-content/uploads/2022/01/Hinh-anh-nen-Ha-Noi-800x577.jpg",
      caption: "Hà Nội"
    },
    {
      image: "https://file1.dangcongsan.vn/data/0/images/2021/09/30/xuatbantrangbacgiang/1593415766538-28.jpg",
      caption: "Bắc Giang"
    },
    {
      image: "https://upload.wikimedia.org/wikipedia/commons/c/c8/Th%C3%A0nh_Ph%E1%BB%91_B%E1%BA%AFc_Ninh_4.jpg",
      caption: "Bắc Ninh"
    },
    {
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/PANO0002-Pano.jpg/1200px-PANO0002-Pano.jpg",
      caption: "Sài Gòn"
    },
    {
      image: "https://bvhttdl.mediacdn.vn/291773308735864832/2022/6/13/1206thuathienhue1-1655085592691-16550855944771876067726.jpg",
      caption: "Huế"
    },
    {
      image: "https://res.klook.com/image/upload/fl_lossy.progressive,w_800,c_fill,q_85/destination/ur2mrg23d91mex03l4mw.jpg",
      caption: "Đà Nẵng"
    },
    {
      image: "https://dulichdaiduong.vn/bat-mi-5-diem-du-lich-bien-quang-ninh-dep-den-sung-so-6.jpg",
      caption: "Quảng Ninh"
    },
    {
      image: "https://megateen.vn/wp-content/uploads/2020/01/review-du-lich-kon-tum-megateen.jpg",
      caption: "Kon Tum"
    }
  ];

  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
  }
  const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
  }
  return (
    <div >
      <div style={{ textAlign: "center" }}>
        <div style={{
          padding: "0 20px"
        }}>
          <Carousel
            data={data}
            time={2000}
            width="100%"
            height="500px"
            captionStyle={captionStyle}
            radius="10px"
            slideNumber={true}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={true}
            thumbnailWidth="100px"
            style={{
              textAlign: "center",
              maxWidth: "100%",
              maxHeight: "500px",
              margin: "40px auto",
            }}
          />
        </div>
      </div>
      <div style={{margin: "50px 50px 0px",borderBottom: "1px solid #ccc"}}></div>
          <div className='products'>
            <h1>Làm thế nào để bảo vệ một cách tốt nhất trước ô nhiễm không khí?</h1>
            <h5>Giảm mức tiếp xúc với ô nhiễm không khí tại Việt Nam của bạn</h5>
            <div>
              <div className='product-item'> <img src="https://www.iqair.com/assets/img/home/car-air-purifier@2x.jpg" alt="máy lọc nước"/></div>
              <div className='product-item'> <img src="https://www.iqair.com/assets/img/home/home-air-purifier.webp" alt="máy lọc không khí"/></div>
              <div className='product-item'>  <img src="https://www.iqair.com/assets/img/home/home-air-quality-monitor.webp" alt="trình theo dõi chất lượng không khí"/></div>
            </div>
          </div>
      <div style={{margin: "50px 50px 0px",borderBottom: "1px solid #ccc"}}></div>
      <div className="earth-component">
        <picture>
            <source  media="(min-width: 959px))" srcSet="https://cms.iqair.com/sites/default/files/2022-06/AVO-AVP%20intl%20mobile%20WorldAQ_1125x2436.jpg"/>
            <img style={{width: "100%"}} src="https://cms.iqair.com/sites/default/files/2022-06/AVO-AVP%20intl%20page%20WorldAQ_1882x750.jpg"/>
        </picture>
        <div>
          <div style={{width: "40%", color: "#ffffff", marginRight: '3%'}}>
            <h1>Thay đổi thế giới với dữ liệu chất lượng không khí của bạn</h1>
            <h5 className="earth-content">Tham gia cộng đồng toàn cầu gồm các nhà khoa học công dân gắn bó bằng cách đóng góp dữ liệu chất lượng không khí của bạn cho nền tảng dữ liệu không khí lớn nhất thế giới. 
              Đăng ký miễn phí bản thân và thiết bị đo của bạn trong ứng dụng AirVisual. 
              Dữ liệu của bạn sẽ được xác thực và hiển thị cho hàng triệu người dùng trên nền tảng và trang web của Chương trình Môi trường Liên hợp quốc.</h5>
            </div>
          </div>
      </div>
      <div style={{margin: "50px 50px 0px",borderBottom: "1px solid #ccc"}}></div>
          Giám sát tới các thông số: PM2.5, CO, CO2, Nhiệt độ, Độ ẩm:
            <div className='row-flex'>
              <div style={{flexGrow: 5, maxWidth: "45%"}}>
                <h1>
                Truy cập thông tin về chất lượng không khí của thành phố và tiểu bang của bạn từ 'Bản đồ AQI'
                </h1>
                <p>
                Nhận quyền truy cập miễn phí vào khu vực ngoài trời, mức chất lượng không khí của thành phố và tiểu bang của bạn trong dữ liệu lịch sử và thời gian thực hàng giờ, hàng tuần và hàng tháng từ 'Bản đồ AQI'. 
                Ngoài ra, hãy hiểu mức độ ô nhiễm không khí của các thành phố và tiểu bang lân cận của bạn.
                </p>
                <Button color="blue" appearance="primary" style={{marginTop: "45px"}} onClick={handleClick}> Khám phá</Button>
              </div >
              <div style={{flexGrow: 7}}><img src={Location_Map} alt="AQI pollution map" /></div>
            </div>
      <div>

      </div>
      <div style={{margin: "50px 0px", padding:"50px 50px", position:"relative", display: "flex", alignItems: "center", background: "rgba(21, 21, 21, 0.5)"}}>
        <div className="card-me">
        <img src="https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/2149507600/settings_images/WY1HGB3QQjyLm0V2AK2V_Untitled_design_2.jpg" alt="image me"/>
        <div className="infomation-me">
          <h5>QUAN TRẮC CHẤT LƯỢNG KHÔNG KHÍ</h5>
          <h1>IQAir</h1>
          <div>Người dùng sử dụng các chức năng của hệ thống như xem các thông tin về chất lượng không khí ,lịch sử quan trắc, tìm kiếm trạm đo, ...
            <strong>24/24 (h)</strong>
          </div>
          <button className="btn-more">More ...</button>
        </div>
        </div>
      </div>
      <div style={{margin: "50px 50px 0px",borderBottom: "1px solid #ccc"}}></div>
      <div style={{paddingTop: "50px"}}>
        <div style={{
                maxWidth: "1000px",
                margin: "0 auto"}}>
            <div className="title-FAQ">
                <div><img src={FAQImg} style={{width: "100%"}} alt="image FAQ"/></div>
                <div style={{margin: "auto"}}>
                    <div style={{fontSize: "50px"}}>Hỏi - Đáp__________</div>
                    <div style={{fontSize: "20px"}}>Hãy hỏi chúng tôi bất cứ điều gì bạn thắc mắc</div>
                    <div></div>
                    <div></div>
                </div>
                
            </div>
            <FAQ />
        </div>
      </div>
    </div>
  );
}

export default HomePage;