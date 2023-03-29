import React from 'react'
import '../NavBar/navbar.css'

const Navbar = () => {
  return (
    <div className='nav'>
       <div className="nav-sections">
        <a href="#Home">Home</a>
        <a href="#Space">Space</a>
        <a href="">Team</a>
        <a href="">Contact</a>
       </div>
    </div>
  )
}

export default Navbar