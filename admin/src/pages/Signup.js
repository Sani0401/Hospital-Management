import React, {useState} from 'react'
import './signup.css'
import Button from 'react-bootstrap/Button';
import Instance from '../config/Instance';
import apiUrl from '../config/apiUrl';
import { signedIn,userFound } from '../constants/toast';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
function Signup() {

    const[email, setEmail] = useState(null);
    const[password, setPassword] = useState(null);
    const navigate = useNavigate();

    const handleSubmit =async ()=>{
        const userData = {email: email, password: password};

        try{
            const user = await Instance.post(apiUrl.Signup, userData);
           if( user.request.status === 200){
            signedIn();
            setTimeout(() =>{navigate("/home")},4000)
           }
        }
        catch(error){
            if( error.response.status === 400){
                userFound();
                setTimeout(() =>{
                    navigate("/")
                }, 4000)
            }
        }
    }
  return (
    <>
    
    <div className='mainsignupContainer'>

<div className='signupinputContainer'>
<h3 className='signupTitle'>Hospital Management App</h3>
          <h3 className='Signup'>Admin Signup</h3>
          <input placeholder='Email' type='email' onChange={(e) => setEmail(e.target.value)} />
          <input placeholder='Password' type='password' onChange={(e) => setPassword(e.target.value)} />
          <Button className='createAdmin' onClick={handleSubmit}>Create Admin</Button>
</div>
<ToastContainer/>
    </div>

    </>
  )
}

export default Signup