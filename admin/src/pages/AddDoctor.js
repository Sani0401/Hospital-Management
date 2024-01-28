import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './AddDoctor.css';
import DropDown from '../components/DropDown';
import { MultiSelect } from "react-multi-select-component";
import Instance from '../config/Instance';
import apiUrl from '../config/apiUrl'

const options = [
  { label: "Monday", value: "Monday" },
  { label: "Tuesday", value: "Tuesday" },
  { label: "Wednesday", value: "Wednesday" },
  { label: "Thursday", value: "Thursday" },
  { label: "Friday", value: "Friday" },
  { label: "Saturday", value: "Saturday" },
];

function AddDoctor() {
  const [selected, setSelected] = useState([]);
  const [available, setAvailable] = useState([]);
  const [name, setName] = useState('');
  const [specialization, setSpecialization] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const [Doctordata, setDoctordata] = useState([]);
  const [DoctorLoginID, setDoctorLogiId] = useState([]);
  const [DoctorPassword, setDoctorpassword] = useState([]);
  
  
  
  async function addDoctor(){
    console.log(Doctordata);
    if(Doctordata ){
      const user = await Instance.post(apiUrl.AddDoctor, Doctordata);
    console.log(user);
    }
    
   }

 

  useEffect(() =>{
    const doctorData = {
      name,
      specialization,
      contactNumber,
      availability: available,
      image: selectedFile,
      DoctorLoginID,
      DoctorPassword
    };
    setDoctordata(doctorData)
  },[available])

  const handleFileChange = (event) => {
    // Update the selectedFile state with the selected file
    setSelectedFile(event.target.files[0]);
};
 
const handleDoctor = async () =>{
  if( Doctordata.availability){
    addDoctor();
  }
}
  return (
    <>
      <div className='mainContainer'>
        <div className='doctorAddContainer'>
          <h3 className='addTitle'>Add Doctor</h3>

          <input placeholder='Enter Name' onChange={(e) => setName(e.target.value)} />
          <input placeholder='Enter Specialization' onChange={(e) => setSpecialization(e.target.value)} />
          <input placeholder='Enter Contact Number' onChange={(e) => setContactNumber(e.target.value)} />

     

          <div className='dropdown'>
            <MultiSelect
              options={options}
              value={selected}
              onChange={setSelected}
              labelledBy="Select"
            />
          </div>
          <input placeholder='Create Login Id' onChange={(e) => setDoctorLogiId(e.target.value)} />

          <input placeholder='Create Password' type='password' onChange={(e) => setDoctorpassword(e.target.value)} />


          <Button
            variant="outline-primary"
            className='loginButton'
            onClick={async () => {
              setAvailable(selected.map(day => day.value))
              
              handleDoctor();
             
              
                
             
             
            }}
          >
            Create Doctor
          </Button>
        </div>
      </div>
    </>
  );
}

export default AddDoctor;
