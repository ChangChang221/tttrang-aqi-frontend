import { Carousel } from 'react-carousel-minimal';
import "../css/homepage.css";
import FAQImg from '../assets/FAQ.jpg'
import AT from '../assets/AT.jpg'
import FAQ from "./FAQ"
function HomePage() {
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
      image: "https://www.baokontum.com.vn/uploads/Image/2021/09/21/21261803%20Nha%20Tho%20Go.jpg",
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
    
      <div style={{margin: "50px 0px", padding:"50px 50px", position:"relative", display: "flex", alignItems: "center", background: "rgba(21, 21, 21, 0.5)"}}>
        <div className="card-me">
        <img src="https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/2149507600/settings_images/WY1HGB3QQjyLm0V2AK2V_Untitled_design_2.jpg" alt="image me"/>
        <div className="infomation-me">
          <h5>FREE WEBINAR</h5>
          <h1>The title of your webinar goes here</h1>
          <div>Let them know what the webinar is about. Any incentives for showing up live? Mention here, i.e. a bonus, discount or extra free resource. 
            <strong> Mark your calendar: Wednesday, June 1st at 10am PT.</strong>
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
                <img src={FAQImg} style={{maxWidth: "550px"}} alt="image FAQ"/>
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