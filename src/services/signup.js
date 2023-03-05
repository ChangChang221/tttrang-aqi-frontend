import axios from "axios";

const BASEURL = 'https://tttrang-aqi-backend.onrender.com/'; //http://localhost:8080/

class SignInUpService {
    loginAuth(user) {
        return axios.post(BASEURL+"login", user);
    }
    registerAuth(user) {
        return axios.post(BASEURL+"register", user);
    }
}
export default new SignInUpService();
