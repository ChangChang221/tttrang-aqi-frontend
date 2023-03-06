import axios from "axios";
import { getCookie } from "../utils/cookie";

const BASEURL = 'http://localhost:8080/api/users';

class UserService {
  getListUser(config) {
    return axios.get(BASEURL, config);
  }
  getDetailUser(idUser){
    return axios.get(`${BASEURL}/${idUser}`);
  }
  deleteUser(idUser, config){
    return axios.delete(`${BASEURL}/${idUser}`, config);
  }
  editUser(user, idUser, config){
    return axios.put(`${BASEURL}/${idUser}`,user, config);
  }
}

export default new UserService();