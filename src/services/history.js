import axios from "axios";

const BASEURLTEST = 'https://tttrang-aqi-backend.onrender.com/api/history/name?name=';
const BASEURL = 'https://tttrang-aqi-backend.onrender.com/api/history';
class HistoryService {
  getHistory(name) {
    return axios.get(BASEURLTEST+name);
  }
  getHistoryByName(name){
    return axios.post(BASEURL, name);
  }
}
export default new HistoryService();
