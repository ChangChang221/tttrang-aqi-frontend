import axios from "axios";

const BASEURLTEST = 'http://localhost:8080/api/city';

const BASEURL = 'https://tttrang-aqi-backend.onrender.com/api/city';

class CityService {
  getListCity() {
    return axios.get(BASEURL);
  }
  deleteCity(config, idCity){
    return axios.delete(`${BASEURL}/${idCity}`, config);
  }
  addCity(config, city){
    return axios.post(BASEURL, city, config);
  }
}
export default new CityService();
