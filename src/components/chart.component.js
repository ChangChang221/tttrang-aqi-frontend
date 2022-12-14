import React, { Component} from 'react';
import {Line, Doughnut, Bar} from 'react-chartjs-2';
import {Chart} from 'chart.js';
import {registerables } from 'chart.js';
import '../css/chart.css'
// Chart.register(CategoryScale);
// Chart.register(ArcElement);
Chart.register(...registerables);
export const dataNull=["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""];
export const date= new Date;
class ChartAQI extends Component {
  state = {
    datahumidity:{
      labels: dataNull,
      datasets: [{
          label: "Humidity",
          data:  dataNull,
          fill: true,
          backgroundColor: "rgba(75,192,192,0.2)",
          borderColor: "rgba(75,192,192,1)",
          borderWidth: 1
        }]
    },
    datatemperature:{
      labels: dataNull,
      datasets: [{
          data: dataNull,
          fill: true,
          backgroundColor: "rgba(255, 99, 132, 0.5)",
          borderColor: 'rgb(255, 99, 132)',
          borderWidth: 1,
          label: "Temperature",
        }]
    },
    dataAQI:{
      labels:  dataNull,
      datasets: [{
          data:  dataNull,
          fill: true,
          backgroundColor: "rgba(75,192,192,0.2)",
          borderColor: "rgba(75,192,192,1)",
          label: "AQI"
        }]
    },
    input: "",
    img:"https://khoahocphattrien.vn/Images/Uploaded/Share/2019/11/13/aqi_mini.png",
    optionss: {
      title:{
        display: "true",
        text: "tiêu đề"
      }
    }
  }

  componentDidMount() {
    console.log("trang 1");
  }

  // componentWillUnmount() {
  //   clearInterval(this.timer)
  // }

  increment(city) {
    let labelsCopy= this.state.datahumidity.labels.slice(0);

    const datasetsCopy = this.state.datahumidity.datasets.slice(0);
    var dataCopy = datasetsCopy[0].data.slice(0);

    const datasetsCopy2 = this.state.datatemperature.datasets.slice(0);
    var dataCopy2 = datasetsCopy2[0].data.slice(0);

    const datasetsCopy3 = this.state.dataAQI.datasets.slice(0);
    var dataCopy3 = datasetsCopy3[0].data.slice(0);
        fetch("https://tttrang-aqi-backend.onrender.com/api/history/name?name="+city) //http://localhost:5000/api/name?name=
          .then( res => res.json())
          .then(dataRes=>{
              if(dataRes==undefined) {
                console.log("error");
                clearInterval(this.timer);
                alert("Không tìm thấy dữ liệu");
                window.location.reload();
                return 0;
              }
              let date_now=new Date;
              console.log("dataRes",dataRes);
              const count=dataRes.length;
              if(count>24){
                dataRes=dataRes.slice(count-24,count);
              }
              dataCopy=dataRes.map((id)=> Number(id.humidity));
              labelsCopy=dataRes.map((id)=>{
                const dateH=new Date(id.date);
                return dateH.getMonth()+1+"m"+dateH.getDate()+"d"+dateH.getHours()+"h"
              });
              dataCopy2=dataRes.map((id)=> Number(id.temperature));
              dataCopy3=dataRes.map((id)=> Number(id.AQI));
             
              datasetsCopy[0].data = dataCopy;
              datasetsCopy2[0].data = dataCopy2;
              datasetsCopy3[0].data = dataCopy3;
              this.setState({
                datahumidity: Object.assign({}, this.state.datahumidity, {
                      datasets: datasetsCopy,
                      labels: labelsCopy
                  }),
                datatemperature: Object.assign({}, this.state.datatemperature, {
                    datasets: datasetsCopy2,
                    labels: labelsCopy
                }),
                dataAQI: Object.assign({}, this.state.dataAQI, {
                    datasets: datasetsCopy3,
                    labels: labelsCopy
                }),
              });
          })
          .catch((err) => {
            // alert('failed to fetch');
            console.log(err);
          });
  }

  handleClick = (e) => {
    if(this.state.input=="") return;
    clearInterval(this.timer);
    let inputSearch=this.state.input.toLowerCase();
    console.log(inputSearch);
    this.timer = setInterval(()=>
      {
        console.log(inputSearch);
        this.increment(inputSearch)
      },
      1000
    )
  }
  handleOnSubmit = event => {
    // 👇️ prevent page refresh
    event.preventDefault();

    console.log('form submitted ✅');
  }

  handleKeyPress=(event)=> {
    if (event.key === 'Enter') {
      if(event.target.value=="") return;
      clearInterval(this.timer);
      let inputSearch=event.target.value.toLowerCase();
      console.log(inputSearch);
      this.timer = setInterval(()=>
      {
        console.log(inputSearch);
        this.increment(inputSearch)
      },
      1000)
    }
  }

  render(){
    return(
      <>
      <form autoComplete="on" onSubmit={this.handleOnSubmit} 
      style={{display: "flex", flexDirection: "row-reverse"}}>
        <div>
          <div className="search">
            <i  onClick={this.handleClick} className="fa fa-search" aria-hidden="true"  style={{fontSize:"20px", paddingRight:"5px", color:"#1E90FF", cursor:"pointer"}}/>
            <input
              type="text" 
              value={this.state.input}
              onChange={(e) => 
                this.setState({
                input: (e.target.value)}
              )}
              onKeyPress={this.handleKeyPress}
              placeholder={"Nhập tên thành phố"}
              className="input"
              required/>
          </div>
          <button type="submit" onClick={this.handleClick} className="button">Tìm kiếm</button>
        </div>
      </form>
      <div className="group-chart">
        <div className="chartLine">
          <div>
            <i className="fa fa-smile-o" aria-hidden="true"  style={{fontSize:"30px", paddingRight:"10px", color:"#FF3300"}}/>
            Biểu đồ đường AQI theo thời gian
          </div>
          <Line data={this.state.dataAQI} key={1}/>      
        </div>
        <div className="chartLine">
          <img src={this.state.img}  alt="anh chat luong khong khi"/>
        </div>
        <div className="chartLine">
      <div>
        <i className="fa fa-tint" aria-hidden="true" style={{fontSize:"30px", paddingRight:"10px", color:"#1E90FF"}}/>
        Biểu đồ đường độ ẩm theo thời gian</div>
      <Bar data={this.state.datahumidity} key={2}/>      
        </div>
        <div className="chartLine">
        <div >
          <i className="fa fa-thermometer-quarter" aria-hidden="true"  style={{fontSize:"30px", paddingRight:"10px", color:"#FF3300"}}/>
          Biểu đồ đường nhiệt độ theo thời gian</div>
        <Bar data={this.state.datatemperature} key={3}/>      
        </div>
      </div>
      // <div>
     
      // </div>
      </>
    )
  }
}

export default ChartAQI;
// https://tttrang-aqi-backend.onrender.com/api