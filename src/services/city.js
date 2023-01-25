import axios from "axios";

const BASEURL = 'https://tttrang-aqi-backend.onrender.com/api/city';

class CityService {
  getListCity() {
    return axios.get(BASEURL);
  }
}
export default new CityService();
