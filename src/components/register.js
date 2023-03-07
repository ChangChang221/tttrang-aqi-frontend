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
    const [usename, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [errorVisible, setErrorVisible] = useState("");

    const register = async () => {
        console.log(usename,password)
        try {
          setIsLoading(true);
          const res = await SignInUpService.registerAuth({ username: usename, password: password });
          if (res.status === 201) {
            const { data } = res;
            console.log({data})
            
            navigate('/login');
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
                <h2>Register</h2>
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
                    <div style={{textAlign: "center"}}>
                    {isLoading ? <Loader /> :
                      <button type="submit" className="submit" onClick={register}>
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                          Submit
                      </button>
                    }
                    </div>
                    
                    <div style={{textAlign: "center"}}><NavLink to='/login' >Đăng nhập</NavLink></div>
                </form>
            </div>
        </div>
        
    )
}