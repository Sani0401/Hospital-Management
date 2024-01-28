import React , {useState, useEffect} from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Instance from '../config/Instance';
import apiUrl from '../config/apiUrl'
function DoctorCard({ doctorData }) {
const [selectedDoctor, setSelectedDoctor] = useState(null);
  const handleDoctorDelete = async()=>{
    try{
      const doctor = await Instance.post(apiUrl.deleteDoctor, selectedDoctor);
      console.log(doctor);
    }
    catch(error){
      console.error("Error deleting Doctor: ", error)
    }
    
  }



  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Specialization</th>
          <th>Availability</th>
          <th>Mobile Number</th>
          <th>Login ID</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {doctorData.map((doctor, index) => (
          <tr key={index} onClick={(event) =>{setSelectedDoctor(doctor)}}>
            <td>{index + 1}</td>
            <td>{doctor.name}</td>
            <td>{doctor.specialization}</td>
            <td>{doctor.availability.join(', ')}</td> {/* Join the availability array */}
            <td>{doctor.mobileNumber}</td>
            <td>{doctor.loginId}</td>
            <td>
              <Button variant="outline-danger" onClick={handleDoctorDelete}>Delete</Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default DoctorCard;
