import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Instance from '../config/Instance';
import apiUrl from '../config/apiUrl';
import { useNavigate } from "react-router-dom";
function ViewPatientslist() {
  const [users, setUsers] = useState(null);
  const [selectedUser,setSelectedUser] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const response = await Instance.get(apiUrl.getPatients);
        setUsers(response.data.patients); // Assuming response.data contains the user array
      } catch (error) {
        console.error('Error fetching patients:', error);
      }
    };
    fetchPatients();
  }, []);

  const handleEdituser=async ()=>{
   

    try{
      const user = await Instance.post(apiUrl.deleteUser, selectedUser);
      console.log("user deleted:", user);
    }
    catch(error){}

  }

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Location</th>
          <th>Mobile Number</th>
          <th>Last Visit</th>
          <th>Update</th>
        </tr>
      </thead>
      <tbody>
        {users && users.length > 0 && users.map((user, index) => (
         <tr key={index} onClick={(event) =>{console.log("This user is clicked: ", user)
         setSelectedUser(user);
         }}>
            <td>{index + 1}</td>
            <td>{user.firstname}</td>
            <td>{user.lastName}</td>
            <td>{user.location}</td>
            <td>{user.mobileNumber}</td>
            <td>{user.lastVisit}</td>
            <td>
              <Button variant="outline-danger" onClick={handleEdituser} >Delete</Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default ViewPatientslist;
