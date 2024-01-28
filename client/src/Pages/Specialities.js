import React, { useEffect, useState } from 'react';
import Instance from "../config/Instance";
import apiURL from '../config/apiURL';
import SpecialityCard from '../components/SpecialityCard';
import './speciality.css'

function Specialities() {
  const [specialities, setSpecialities] = useState(null);

  useEffect(() => {
    const getSpecialities = async () => {
      try {
        const response = await Instance.get(apiURL.specialitites);
        console.log(response.data.data);
        setSpecialities(response.data.data);
      } catch (error) {
        console.error("Error fetching specialities:", error);
      }
    };

    getSpecialities();
  }, []);

  useEffect(() => {
    console.log("This is the specialities from the server:", specialities);
  }, [specialities]);

  return (
    <>

<div className='speciality'>

      {specialities && specialities.map((speciality, index) => (
        <SpecialityCard
          key={index} // It's a good practice to use a unique key when mapping over elements
          title={speciality.title} // Replace with the actual property names from your API response
          image={speciality.imageUrl}
          description={speciality.description}
        />
      ))}
      </div>
    </>
  );
}

export default Specialities;
