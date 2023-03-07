import '../css/login.css';
import React, {useEffect, useState} from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import { setCookie } from '../utils/cookie';
import SignInUpService from '../services/signup'
import { Loader } from 'rsuite';


const initialFormValue = {
    username: '',
    password: '',
  };

export default function Login(){
    const navigate = useNavigate();
    const [visible, setVisible] = React.useState(false);
    const [formValues, setFormValues] = useState(initialFormValue);
    const [formErrors, setFormErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [errorVisible, setErrorVisible] = useState("");

    const login = async () => {
      
        console.log(username,password)
        try {
          setIsLoading(true);
          const res = await SignInUpService.loginAuth({ username: username, password: password });
          if (res.status === 200) {
            const { data } = res;
            console.log({data})
            setCookie('accessToken', data.token, 60);
            navigate('/');
            setErrorVisible("")
          }
          
        } catch (error) {
          setIsLoading(false);
          setErrorVisible(error.response.data.message);
        }
      };

    const handleChange = () => {
    setVisible(!visible);
    };

    return(
        <div className="html">
            <div className="login-box">
                <h2>Login</h2>
                <form>
                    <div className="user-box">
                    <input type="text" name="username" required="" value={username} onChange={(e)=> setUsername(e.target.value)}/>
                    <label>Username <span>*</span></label>
                    </div>
                    <div className="user-box">
                    <input type="password" name="password" required="" value={password} onChange={(e)=> setPassword(e.target.value)}/>
                    <label>Password <span>*</span></label>
                    </div>
                    <div className='login-error-message'>{errorVisible}</div>
                    <div style={{textAlign: "center"}}>
                      {isLoading ? <Loader /> :
                      <button type="submit" className="submit" onClick={login} disabled={isLoading}>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                        Submit
                      </button>
                      }
                    </div>
                    <div style={{textAlign: "center"}}><NavLink to='/register' >Đăng ký</NavLink></div>
                </form>
            </div>
        </div>
        
    )
}