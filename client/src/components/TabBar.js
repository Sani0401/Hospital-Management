import React from 'react'
import homeImage from "../Images/home.png"
import doctorImage from "../Images/doctor-image.png"
import appointmentImage from "../Images/appointment.png"
import specialities from "../Images/specialities.png"
import prescription from "../Images/prescription.png"
import "../components/TabBar.css"
function TabBar({ open, setpage }) {
  return (
    <>
 <div className='mainTab'>
        <div className='Home' onClick={() => setpage('Home')}>
          <img src={homeImage} className='home-image' />
          <p className='paraImage'> Home</p>
          <hr/>
        </div>
        <hr/>
        <div className='Home' onClick={() => setpage('Specialities')}>
          <img src={specialities} className='home-image' />
          <p className='paraImage'> Specialities</p>
          <hr/>
        </div>
        <hr/>
        <div className='Home' onClick={() => setpage('Doctors')}>
          <img src={doctorImage} className='home-image' />
          <p className='paraImage' id='Doctor'> Doctors</p>
          <hr/>
        </div>  <hr/>
        <div className='Home' onClick={() => setpage('Appointments')}>
          <img src={appointmentImage} className='home-image' />
          <p className='paraImage'> Appointments</p>
          <hr/>
        </div>
        <hr/>
        <div className='Home' onClick={() => setpage('Prescription')}>
          <img src={prescription} className='home-image' />
          <p className='paraImage'> Prescription</p>
          <hr/>
        </div>
        
        <hr/>
     
        
      </div>
     </>
  );
}

export default TabBar