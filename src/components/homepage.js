import { Carousel } from 'react-carousel-minimal';
import "../css/homepage.css";
import FAQImg from '../assets/FAQ.jpg'
import AT from '../assets/AT.jpg'
import FAQ from "./FAQ"
function HomePage() {
 const data = [
    {
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/GoldenGateBridge-001.jpg/1200px-GoldenGateBridge-001.jpg",
      caption: "San Francisco"
    },
    {
      image: "https://cdn.britannica.com/s:800x450,c:crop/35/204435-138-2F2B745A/Time-lapse-hyper-lapse-Isle-Skye-Scotland.jpg",
      caption: "Scotland"
    },
    {
      image: "https://static2.tripoto.com/media/filter/tst/img/735873/TripDocument/1537686560_1537686557954.jpg",
      caption: "Darjeeling"
    },
    {
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Palace_of_Fine_Arts_%2816794p%29.jpg/1200px-Palace_of_Fine_Arts_%2816794p%29.jpg",
      caption: "San Francisco"
    },
    {
      image: "https://i.natgeofe.com/n/f7732389-a045-402c-bf39-cb4eda39e786/scotland_travel_4x3.jpg",
      caption: "Scotland"
    },
    {
      image: "https://www.tusktravel.com/blog/wp-content/uploads/2020/07/Best-Time-to-Visit-Darjeeling-for-Honeymoon.jpg",
      caption: "Darjeeling"
    },
    {
      image: "https://images.ctfassets.net/bth3mlrehms2/6Ypj2Qd3m3jQk6ygmpsNAM/61d2f8cb9f939beed918971b9bc59bcd/Scotland.jpg?w=750&h=422&fl=progressive&q=50&fm=jpg",
      caption: "Scotland"
    },
    {
      image: "https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/02/summer-7.jpg",
      caption: "Darjeeling"
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
      <div style={{margin: "155px 50px 0px",borderBottom: "1px solid #ccc"}}></div>
      <div style={{margin: "50px 0px", padding:"0px 50px", position:"relative", display: "flex", alignItems: "center", background: "rgba(21, 21, 21, 0.5)"}}>
        <img src="https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/2149507600/settings_images/WY1HGB3QQjyLm0V2AK2V_Untitled_design_2.jpg" width="550px" alt="image me"/>
        <div className="infomation-me">
          <h5>FREE WEBINAR</h5>
          <h1>The title of your webinar goes here</h1>
          <div>Let them know what the webinar is about. Any incentives for showing up live? Mention here, i.e. a bonus, discount or extra free resource. 
            <strong>Mark your calendar: Wednesday, June 1st at 10am PT.</strong>
          </div>
          <button>More ...</button>
        </div>
      </div>
      <div style={{margin: "70px 50px 0px",borderBottom: "1px solid #ccc"}}></div>
      <div style={{paddingTop: "50px"}}>
        <div style={{
                maxWidth: "1000px",
                margin: "0 auto"}}>
            <div style={{display: "flex"}}>
                <img src={FAQImg} width="550px" alt="image FAQ"/>
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