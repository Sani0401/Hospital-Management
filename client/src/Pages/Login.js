import React, { useState, useEffect } from 'react';
import logo from "../Images/doctor-welcoming.gif";
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
import messages from '../constants/messages';
import Instance from '../config/Instance';
import URL from '../config/apiURL';
import "../Pages/Login.css";

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

  useEffect(() => {
    const login = () => {
      const user = JSON.parse(localStorage.getItem("loggedUser")) || {};
      setEmail(user.email);
      setPassword(user.password);
    };

    login();
  }, []);

  useEffect(() => {
    const loginUser = async () => {
      try {
        const response = await Instance.post(URL.login, { email, password });

        if (response.data.user === -1) {
          console.log("Login Again");
        } else {
          navigate("/home");
        }
      } catch (error) {
        console.error("Error logging in:", error);
      }
    };

    if (email && password) {
      loginUser();
    }
  }, [email, password, navigate]);

  const handleLogin = async () => {
    const data = {
      email: email,
      password: password,
    };

    try {
      const user = await Instance.post(URL.login, data);

      if (user.data.user === -1) {
        console.log("User not found");
      } else {
        console.log(user);
        localStorage.setItem("loggedUser", JSON.stringify(user.data.user));
      }
    } catch (error) {
      console.error("Error logging in", error);
    }
  };

  return (
    <>
      <div className='mainContainer'>
        <div className='firstPart'>
          <img src={logo} className='logoImage' alt="Doctor Welcoming" />
          <p className='signUptext'>Don't have an account? <a href='/signUp'>Sign Up</a></p>
        </div>
        <div className='secondPart'>
          <h3 className='title'>Hospital Management App</h3>
          <h3 className='login'>Login</h3>
          <input placeholder='Email' type='email' onChange={(e) => setEmail(e.target.value)} />
          <input placeholder='password' type='password' onChange={(e) => setPassword(e.target.value)} />
          <Button variant="outline-primary" className='loginButton' onClick={handleLogin}>Login</Button>
          <p className='footer'>{Object.values(messages)[currentMessageIndex]}</p>
          <hr className='horizontalRow'/>
        </div>
      </div>
    </>
  );
}

export default Login;
