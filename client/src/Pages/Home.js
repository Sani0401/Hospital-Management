import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import TabBar from '../components/TabBar'
import Button from 'react-bootstrap/Button';
import "./Home.css"
import menuImage from "../Images/menu.png"
import Body from '../components/Body'

function Home() {

  const [activePage, setActivePage] = useState(null);
  const [open, setOpen] = useState(false)

const activePageSet = (data) =>{
  setActivePage(data);
}

const handleNavbar = () =>{
  setOpen(!open)
}

useEffect(() => {
  console.log("This is the current page: ", activePage);
},[activePage])

  return (
    <>
    
    <div className='mainHomeContainer'>
      <div className='Navbar'>
      <Navbar/>
      </div>
     
     <div className='div-maker'>

     <div className='TabBar'>
  <TabBar open={open} setpage={activePageSet} />
  


  {/*  */}

</div>
    <div className='Body'>
      <Body activePage={activePage} />
      </div>
      
      
       </div>
     
    </div>

    </>
  )
}

export default Home