import React from 'react'
import homeImage from "../Images/home.png"
import doctorImage from "../Images/doctor-image.png"
import appointmentImage from "../Images/appointment.png"
import specialities from "../Images/specialities.png"
import prescription from "../Images/prescription.png"
import "../components/TabBar.css"
function TabBar({  setpage }) {
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
        <div className='Home' onClick={() => setpage('ViewPatients')}>
          <img src={prescription} className='home-image' />
          <p className='paraImage'> View Patients</p>
          <hr/>
        </div>
        <hr/>
        <div className='Home' onClick={() => setpage('ViewDoctors')}>
          <img src={prescription} className='home-image' />
          <p className='paraImage'> View Doctors</p>
          
        </div>
        <hr/>
        <div className='Home' onClick={() => setpage('AddDoctor')}>
          <img src={prescription} className='home-image' />
          <p className='paraImage'> Add Doctors</p>
          
        </div>
        <hr/>
        <div className='Home' onClick={() => setpage('AddPatient')}>
          <img src={prescription} className='home-image' />
          <p className='paraImage'> Add Patient</p>
          
        </div>
       
      
     
        
      </div>
     </>
  );
}

export default TabBar