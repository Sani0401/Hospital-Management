import React, { useState } from 'react'
import TabBar from '../components/Tabbar'
import Navbar from '../components/Navbar'
import Body from '../components/Body'
import './Home.css'
function Home() {
const [page, setPage] = useState(null);
  const handlePageSet = (pagep) =>{
    console.log("Changing to: ", pagep);
      setPage(pagep);
  }

  return (
    <> 
    <div className=''><Navbar/></div>

 

    <div className='tabBody'>

    <div className='Tabbar'> <TabBar setpage={handlePageSet}/></div>


    <div className='Body'> <Body currentPage={page} /></div>

    </div>
    </>
  )
}

export default Home