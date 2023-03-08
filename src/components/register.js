import '../css/login.css';
import React, {useEffect, useState} from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import SignInUpService from '../services/signup';
import { Loader } from 'rsuite';

const initialFormValue = {
    username: '',
    password: '',
  };

export default function Register(){
    const navigate = useNavigate();
    const [visible, setVisible] = React.useState(false);
    const [formValues, setFormValues] = useState(initialFormValue);
    const [formErrors, setFormErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [errorVisible, setErrorVisible] = useState("");

    const register = async () => {
        if(username !== "" && password !== ""){
          try {
            setIsLoading(true);
            const res = await SignInUpService.registerAuth({ username: username, password: password });
            if (res.status === 201) {
              const { data } = res;
              navigate('/login');
              setErrorVisible("")
            }
            
          } catch (error) {
            setIsLoading(false);
            setErrorVisible(error.response.data.message);
          }
        }
        else{
          setErrorVisible("Yêu cầu nhập đủ thông tin")
        }
      };

    return(
        <div className="html">
            <div className="login-box">
                <h2>Register</h2>
                <form>
                    <div className="user-box">
                    <input type="text" name="username" required="required" value={username} onChange={(e)=> setUsername(e.target.value)}/>
                    <label>Username <span>*</span></label>
                    </div>
                    <div className="user-box">
                    <input type="password" name="password" required="required" value={password} onChange={(e)=> setPassword(e.target.value)}/>
                    <label>Password <span>*</span></label>
                    </div>
                    <div className='login-error-message'>{errorVisible}</div>
                    <div style={{textAlign: "center"}}>
                    {isLoading ? <Loader /> :
                      <button type="submit" className="submit" onClick={register} disabled={isLoading}>
                      <span></span>
                      <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                          Submit
                      </button>
                    }
                    </div>
                    {/* <button type="submit" className="submit" onClick={register}>Submit </button> */}
                    <div style={{textAlign: "center"}}><NavLink to='/login' >Đăng nhập</NavLink></div>
                </form>
            </div>
        </div>
        
    )
}