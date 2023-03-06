import '../css/login.css';
import React, {useEffect, useState} from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import { setCookie } from '../utils/cookie';
import SignInUpService from '../services/signup'


const initialFormValue = {
    username: '',
    password: '',
  };

export default function Login(){
    const navigate = useNavigate();
    const [visible, setVisible] = React.useState(false);
    const [formValues, setFormValues] = useState(initialFormValue);
    const [formErrors, setFormErrors] = useState({});

    const [usename, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [errorVisible, setErrorVisible] = useState("");

    const login = async () => {
        console.log(usename,password)
        try {

          const res = await SignInUpService.loginAuth({ email: usename, password: password });
          if (res.status === 200) {
            const { data } = res;
            console.log({data})
            setCookie('accessToken', data.token);
            
            navigate('/');
            setErrorVisible("")
          }
        } catch (error) {
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
                    <input type="text" name="usename" required="" value={usename} onChange={(e)=> setUsername(e.target.value)}/>
                    <label>Username <span>*</span></label>
                    </div>
                    <div className="user-box">
                    <input type="password" name="password" required="" value={password} onChange={(e)=> setPassword(e.target.value)}/>
                    <label>Password <span>*</span></label>
                    </div>
                    <div className='login-error-message'>{errorVisible}</div>
                    <div type="submit" className="submit" onClick={login}>
                        {/* <a href="#"> */}
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            Submit
                        {/* </a> */}
                        
                    </div>
                    <span><div className='span-login'><NavLink to='/register' >Đăng ký</NavLink></div></span>
                </form>
            </div>
        </div>
        
    )
}