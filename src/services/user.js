import axios from "axios";

const BASEURL = 'http://localhost:8080/api/user';

class UserService {
    getListCity() {
        return axios.get(BASEURL);
    }
}
export default new UserService();