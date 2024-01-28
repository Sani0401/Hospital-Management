import React from 'react';
import Home from '../pages/Home';
import AddDoctor from '../pages/AddDoctor';
import ViewDoctor from '../pages/ViewDoctor';
import ViewPatientslist from './ViewPatients';
function Body({ currentPage }) {
    console.log("This is the active page: ", currentPage);
  const renderPage = () => {
    switch (currentPage) {
      case 'Home':
        return <Home />;
        case 'AddDoctor':
            return <AddDoctor/>
            case 'ViewDoctors':
              return <ViewDoctor/>
              case 'ViewPatients':
                return <ViewPatientslist/>
     
          
    
        
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
