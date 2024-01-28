import React, { useState } from 'react'
import "./Signup.css"
import Button from 'react-bootstrap/Button';
import Instance from '../config/Instance';
import URL from '../config/apiURL';
import {useNavigate} from "react-router-dom"
function Signup() {
 const [firstName, setFirstName] = useState(null);
 const [lastName, setLastName] = useState(null);
 const [email, setEmail] = useState(null);
 const [contactNumber, setContactNumber] = useState(null);
 const [password, setPassword] = useState(null);
 const [location, setLocation] = useState(null);
 const navigate = useNavigate();
  const handleSubmit = async () =>{
    const data = {
      firstName : firstName,
      lastName : lastName,
      email : email,
      contactNumber : contactNumber,
      password : password,
      location, location
    }
    const user = await Instance.post(URL.signup,data);
    localStorage.setItem("loggedUser", JSON.stringify(user.data.user));
    localStorage.setItem("loggedUserToken", JSON.stringify(user.data.userToken));
    navigate('/home')
    console.log("This is new user",user);
  }
 
  return (
    <>
    <div className='mainContainerS'>
    <div className='inputContainer'>
    <h3 className='title'> Hospital Management App</h3>
    <h3 className='login'>Sign Up</h3>
    <input placeholder='First Name' type='text' className="input"  onChange={(e) => {
      setFirstName(e.target.value)
    }}  />
    <input placeholder='Last Name' type='text' className="input" onChange= {(e) => {
      setLastName(e.target.value);
    }}  />
    <input placeholder='Email' type='text' className="input" onChange={(e) => {
      setEmail(e.target.value)
    }}  />
    <input placeholder='Contact Number' type='text' className="input" onChange={(e) => {
      setContactNumber(e.target.value)
    }} />
    <input placeholder='Password' type='text' className="input" onChange={(e) => {
      setPassword(e.target.value);
    }}/>
    <input placeholder='Location' type='text' className="input" onChange={(e) => {
      setLocation(e.target.value)
    }} />
    <Button variant="outline-primary" className='signUpButton' onClick={handleSubmit} >Sign Up</Button>{' '}
    <p className='loginText'>Already have an account? <a href='/'>Login</a></p> 
    </div>
    
    </div>

    </>
  )
}

export default Signup