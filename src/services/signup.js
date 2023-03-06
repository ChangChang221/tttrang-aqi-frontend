import axios from "axios";

const BASEURL = 'https://tttrang-aqi-backend.onrender.com/api/'; 
const BASEURL_Test = "http://localhost:8080/api/"

class SignInUpService {
    loginAuth(user) {
        return axios.post(BASEURL+"login", user);
    }
    registerAuth(user) {
        return axios.post(BASEURL+"register", user);
    }
}
export default new SignInUpService();
