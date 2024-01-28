import React from 'react';
import Home from '../Pages/Home';
import Doctors from '../Pages/Doctors';
import Specialities from '../Pages/Specialities';
import Appointments from '../Pages/Appointments';
import Prescription from '../Pages/Prescription';

function Body({ activePage }) {
  const renderPage = () => {
    switch (activePage) {
      case 'Home':
        return <Home />;
      case 'Doctors':
        return <Doctors />;
        case 'Specialities':
          return <Specialities />;
          case 'Appointments':
          return <Appointments/>;
          
          case 'Prescription':
          return <Prescription/>;//Prescription
        
      default:
        return null; // You can render a default component or handle it based on your requirements
    }
  };

  return (
    <div>
      {renderPage()}
    </div>
  );
}

export default Body;
