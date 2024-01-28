import React , {useState,useEffect} from 'react'
import "./Login.css"
import messages from '../constants/message'
import Button from 'react-bootstrap/Button';
import Instance from '../config/Instance';
import { useNavigate } from "react-router-dom";
import URL from '../config/apiUrl'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {userNotfound,loggedIn} from '../constants/toast'
function Login() {
    const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const navigate = useNavigate();
  

    useEffect(() => {
        const intervalId = setInterval(() => {
          setCurrentMessageIndex((prevIndex) => (prevIndex + 1) % Object.keys(messages).length);
        }, 1000);
    
        // Clean up the interval on component unmount
        return () => clearInterval(intervalId);
      }, []);


      const handleSubmit = async () => {
       
        const data = {
            email: email,
            password: password
        };
    
        try {
            const response = await Instance.post(URL.login, data);
    
            if (response.data.user) {
                loggedIn();
                console.log("this is user: ", response.data.user);
                setTimeout(() => { navigate("/home");}, 4000)
               
            }
        } catch (error) {
            if (error.response.status === 400) {
                userNotfound();
                console.log("User not found");
               
            } else if (error.response.status === 401) {
                
                console.log("Incorrect email or password");
            } else {
                
                console.error(error);
            }
        }
    };

  return (
  <>
  <div className='adminMainContainer'>
<div className='imageSignUp'>
    <img className='logoImage' src="https://res.cloudinary.com/practicaldev/image/fetch/s--O0u1bNHs--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://miro.medium.com/max/1400/0%2APXf5ge7QCN9Ga_CL.gif"/>
    <p>Don't have an account? <a href='/signup'>Signup</a></p>
</div>
<div className='loginQuotes'>
        <h3 className='title'>Hospital Management App</h3>
          <h3 className='login'>Admin Login</h3>
          <input placeholder='Email' type='email' onChange={(e) => setEmail(e.target.value)} />
          <input placeholder='Password' type='password' onChange={(e) => setPassword(e.target.value)} />
          <Button variant="outline-primary" className='loginButton' onClick={handleSubmit} >Login</Button>
          <p className='footer'>{Object.values(messages)[currentMessageIndex]}</p>
          <hr className='horizontalRow'/>
          </div>
          <ToastContainer/>
  </div>
  

  </>
  )
}

export default Login