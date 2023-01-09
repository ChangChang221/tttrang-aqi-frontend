import React, { Component } from 'react';
import Faq from 'react-faq-component';

const data = {
  // title: "FAQ (How it works)",
  rows: [
    {
      title: "FM2.5 là gì?",
      content: "Hỗn hợp các hạt (hạt) rắn và các giọt chất lỏng được tìm thấy trong không khí."
    },
    {
      title: "Các ví dụ về PM2.5 là gì?",
      content: "Bụi, bẩn, khói hoặc tro, v.v."
    },
    {
      title: "Tình trạng sức khỏe có thể gây ra do sự gia tăng mức độ PM2.5 là gì?",
      content: "Các vấn đề về hô hấp trầm trọng hơn, tổn thương phổi, v.v."
    },
    {
      title: "Tôi nên làm gì để được an toàn trước PM2.5?",
      content: <div>- Đeo mặt nạ ô nhiễm không khí trước khi bước ra khỏi nhà.<br/>- Lắp đặt máy lọc không khí HEPA để loại bỏ các hạt không khí trong nhà.</div>
    },
    {
      title: " Tôi không nên làm gì khi có cảnh báo PM2.5?",
      content: <div>- Tránh các hoạt động khiến bạn thở nhanh hơn hoặc sâu hơn.<br/>- Không hút thuốc trong nhà hoặc đốt nến hoặc nhang.</div> 
    },
    {
      title: "PM2.5 tiêu chuẩn cho cuộc sống khỏe mạnh là gì?",
      content: "0–8,9 μg/m3 được coi là thấp theo PM2.5 trong 24 giờ"
    },
    {
      title: "Sự khác biệt giữa Pm2.5 và 10 là gì?",
      content: "PM 2,5 là vật chất dạng hạt có đường kính từ 2,5 micromet trở xuống trong khi PM 10 là vật chất dạng hạt có đường kính từ 10 micromet trở xuống. PM 2.5 thường được mô tả là các hạt mịn."
    },
    {
      title: "PM2.5 có lớn hơn PM10 không?",
      content: "Không. PM ​​2.5 là vật chất dạng hạt mịn (các hạt có thể hít phải trong số các hạt có thể hít thở) có đường kính từ 2,5 micromet trở xuống."
    },
    {
      title: "PM2.5 có hại cho sức khỏe không?",
      content: "PM2.5 (các hạt có đường kính nhỏ hơn 2,5 micromet) có thể xâm nhập sâu vào phổi, gây kích ứng và ăn mòn thành phế nang, từ đó làm suy giảm chức năng của phổi."
    },
    {
      title: "PM2.5 ảnh hưởng đến người mắc bệnh tim như thế nào?",
      content:"Hít thở không khí chứa PM 2.5 có thể gây ra các tác động viêm nhiễm lên tim, gây ra các vấn đề về tim mạch mãn tính."
    },
    {
      title: "Ô nhiễm là gì",
      content:"Sự ô nhiễm môi trường xung quanh do bổ sung các chất lạ/không mong muốn được gọi là ô nhiễm và bất cứ điều gì làm cho môi trường xung quanh không lành mạnh/không phù hợp cho cuộc sống được gọi là ô nhiễm."
    }]
}

export default class FAQ extends Component {
  render() {
    return (
      <div style={{paddingBottom: "100px"}}>
        <Faq data={data}/>
      </div>
    )
  }
}