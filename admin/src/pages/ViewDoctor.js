import React, { useEffect, useState } from 'react';
import Instance from '../config/Instance';
import apiUrl from '../config/apiUrl';
import DoctorCard from '../components/DoctorCard';
import "./viewDoctor.css";

function ViewDoctor() {
    const [doctorData, setDoctorData] = useState(null);

    useEffect(() => {
        async function fetchDoctors() {
            try {
                const response = await Instance.get(apiUrl.getDoctor);
                console.log("These are the doctors: ", response.data.doctors);
                setDoctorData(response.data.doctors);
            } catch (error) {
                console.error("Error fetching doctors: ", error);
            }
        }
        fetchDoctors();
    }, []);

    return (
        <div className='mainDoctorCardContainer'>
            {doctorData && <DoctorCard doctorData={doctorData} />}
        </div>
    );
}

export default ViewDoctor;
