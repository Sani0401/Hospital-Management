import React, { useState,useEffect} from 'react'
import logoImage from "../Images/KEM-Logo1.png"
import ambulanceImage from "../Images/ambulance-image.png"
import mainLine from "../Images/call-image.png"
import emergencylogo from '../Images/emergency-image.png'
import consultDoctor from "../Images/doctor-image.png"
import "./Navbar.css"
function Navbar() {
  const [user, setUser] = useState(null);
  useEffect(() => {
   
    const storedUser = localStorage.getItem('loggedUser');

    if (storedUser) {
      try {
       
        const parsedUser = JSON.parse(storedUser);
        setUser(parsedUser.firstname);

        console.log("This is user's first name:", user);
      } catch (error) {
        console.error('Error parsing user data:', error);
      }
    }
  }, []);

  return (
    <>
<div className='mainNavbarContainer'>

<img src={logoImage} className='logo-image' />

<div className='ambulance-contact' > 

<img src={ambulanceImage}  className='ambulance-image'/>
<div className='ambulance-contact-details'>
  <h6 className='ambulance-name'>Ambulance</h6>
  <p className='ambulance-contact-number'>+919022808784</p>
</div>
</div>


<div className='main-line-contact'>

<img src={mainLine} className='mainLine-image' />

<div className='ambulance-contact-details'>
  <h6 className='ambulance-name'>Main Line</h6>
  <p className='ambulance-contact-number'>+919022808784</p>
</div>

</div>



<div className='emergency-contact-number'>

<img src={emergencylogo} className='emergency-image' />
<div className='ambulance-contact-details'>
  <h6 className='ambulance-name'>Emergency</h6>
  <p className='ambulance-contact-number'>+919022808784</p>
</div>

</div>


<div className='consult-doctor'>

<img src={consultDoctor} className='consult-doctor-image' />

<div className='ambulance-contact-details'>
  <h6 className='ambulance-name'>Doctor Line</h6>
  <p className='ambulance-contact-number'>+919022808784</p>
</div>

</div>

<div className='greet-user'>
<img src="https://cdnl.iconscout.com/lottie/premium/thumb/happy-robot-say-hai-5665357-4729052.gif" className='greetingRobo' />
</div>

   </div>
    <hr className='lower-line'/>
   </>
  )
}

export default Navbar