import React, { Component} from 'react';
import {Line, Doughnut, Bar} from 'react-chartjs-2';
import {Chart} from 'chart.js';
import {registerables } from 'chart.js';
import '../css/chart.css'
import io from "socket.io-client";
import historyService from '../services/history';
// import DateRangePicker from './component/DateRangePicker';
import { ButtonToolbar, IconButton, InputGroup, Input, DateRangePicker, AutoComplete } from 'rsuite';
import SearchIcon from '@rsuite/icons/Search';
import dayjs from 'dayjs'
import {listCity} from '../utils/data'
const { allowedMaxDays } = DateRangePicker;

Chart.register(...registerables);
// Chart.register(CategoryScale);
// Chart.register(ArcElement);

export const dataNull=[];
export const date= new Date;
const socket = io("https://tttrang-aqi-backend.onrender.com/api/socket"); //http://localhost:8080/api/socket

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
    },
    valueDate: [],
  }

  componentDidMount() {
    
    socket.connect();
    //console.log("trang 1");
    
    return () => {
      socket.disconnect();
    };
  }

  // componentWillUnmount() {
  //   clearInterval(this.timer)
  // }

  async increment(city) {
    let labelsCopy= this.state.datahumidity.labels.slice(0);

    const datasetsCopy = this.state.datahumidity.datasets.slice(0);
    var dataCopy = datasetsCopy[0].data.slice(0);

    const datasetsCopy2 = this.state.datatemperature.datasets.slice(0);
    var dataCopy2 = datasetsCopy2[0].data.slice(0);

    const datasetsCopy3 = this.state.dataAQI.datasets.slice(0);
    var dataCopy3 = datasetsCopy3[0].data.slice(0);
    
    try {
      const nameCity={
        name: city,
        startDate: dayjs(this.state.valueDate[0]).format('YYYY-MM-DD'),
        endDate: dayjs(this.state.valueDate[1]).format('YYYY-MM-DD'),
      }
      const res = await historyService.getHistoryByName(nameCity)
      // const res = await historyService.getHistory(city)

      console.log({res})
      const dataRes = res.data;
      if(dataRes==undefined) {
        console.log("error");
        clearInterval(this.timer);
        alert("Không tìm thấy dữ liệu");
        window.location.reload();
        return 0;
      }
      // let date_now=new Date;
      // console.log("dataRes",dataRes);
      // const count=dataRes.length;
      // if(count>24){
      //   dataRes=dataRes.slice(count-24,count);
      // }
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
    } catch (error) {
      console.log(error)
    }
    // fetch("http://localhost:8080/api/history/name?name="+city) //http://localhost:5000/api/name?name=  https://tttrang-aqi-backend.onrender.com/api/history/name?name=
    //   .then( res => res.json())
    //   .then(dataRes=>{
    //       if(dataRes==undefined) {
    //         console.log("error");
    //         clearInterval(this.timer);
    //         alert("Không tìm thấy dữ liệu");
    //         window.location.reload();
    //         return 0;
    //       }
    //       let date_now=new Date;
    //       console.log("dataRes",dataRes);
    //       const count=dataRes.length;
    //       if(count>24){
    //         dataRes=dataRes.slice(count-24,count);
    //       }
    //       dataCopy=dataRes.map((id)=> Number(id.humidity));

    //       labelsCopy=dataRes.map((id)=>{
    //         const dateH=new Date(id.date);
    //         return dateH.getMonth()+1+"m"+dateH.getDate()+"d"+dateH.getHours()+"h"
    //       });

    //       dataCopy2=dataRes.map((id)=> Number(id.temperature));
    //       dataCopy3=dataRes.map((id)=> Number(id.AQI));
          
    //       datasetsCopy[0].data = dataCopy;
    //       datasetsCopy2[0].data = dataCopy2;
    //       datasetsCopy3[0].data = dataCopy3;
    //       this.setState({
    //         datahumidity: Object.assign({}, this.state.datahumidity, {
    //               datasets: datasetsCopy,
    //               labels: labelsCopy
    //           }),
    //         datatemperature: Object.assign({}, this.state.datatemperature, {
    //             datasets: datasetsCopy2,
    //             labels: labelsCopy
    //         }),
    //         dataAQI: Object.assign({}, this.state.dataAQI, {
    //             datasets: datasetsCopy3,
    //             labels: labelsCopy
    //         }),
    //       });
    //   })
    //   .catch((err) => {
    //     // alert('failed to fetch');
    //     console.log(err);
    //   });
  }

  // handleClick = (e) => {
  //   if(this.state.input=="") return;
  //   clearInterval(this.timer);
  //   let inputSearch=this.state.input.toLowerCase();
  //   console.log(inputSearch);
  //   this.timer = setInterval(()=>
  //     {
  //       console.log(inputSearch);
  //       this.increment(inputSearch)
  //     },
  //     1000
  //   )
  // }

  handleClick = (e) => {
    if(this.state.input=="") return;
    let inputSearch=this.state.input.toLowerCase();
    console.log(inputSearch);
    const onEmit= async () =>{   
      console.log("lang nghe")
      socket.on("newHistory", (newHistory) => {
        console.log("newHistory")
        console.log({newHistory})
        this.increment(inputSearch)
      });
      socket.on("updateCity", (city) => {
        console.log("updateCity")
        this.increment(inputSearch)
      });
      await this.increment(inputSearch)
    }
    onEmit()
  }


  handleOnSubmit = event => {
    // 👇️ prevent page refresh
    event.preventDefault();

    console.log('form submitted ✅');
  }

  handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      if(event.target.value=="") return;
      let inputSearch=event.target.value.toLowerCase();
      const onEmit= async () =>{   
        socket.on("newHistory", (newHistory) => {
          console.log({newHistory})
          this.increment(inputSearch)
        });
  
        await this.increment(inputSearch)
      }
      onEmit()
    }
  }

  render(){
    console.log("valueDate", this.state.valueDate)
    return(
      <>
      <form autoComplete="on" onSubmit={this.handleOnSubmit} 
      style={{display: "flex", flexDirection: "row-reverse"}}>
        <div 
          style={{    
            gap: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}>
          {/* <div className="search">
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
          </div> */}
          {/* <DateRangePicker setState={this.setState}/> */}
          <DateRangePicker value={this.state.valueDate} disabledDate={allowedMaxDays(30)} onChange={(e)=> this.setState({valueDate: e})}/>
          <InputGroup inside>
            <AutoComplete 
              data={listCity} 
              value={this.state.input}
              placeholder={"Nhập tên thành phố"} 
              onKeyPress={this.handleKeyPress}
              onChange={(e) => 
                this.setState({
                input: e}
              )}/>
            <InputGroup.Button>
              <SearchIcon />
            </InputGroup.Button>
          </InputGroup>
          <ButtonToolbar onClick={this.handleClick}>
            <IconButton appearance="primary" color="cyan" icon={<SearchIcon />}>
              Tìm kiếm
            </IconButton>
          </ButtonToolbar>
          {/* <button type="submit" onClick={this.handleClick} className="button">Tìm kiếm</button> */}
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
     {/* <div>
     
      </div> */}
      </>
    )
  }
}

export default ChartAQI;
// https://tttrang-aqi-backend.onrender.com/api