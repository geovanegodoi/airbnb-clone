import React from 'react'
import logo from '../assets/airbnb-logo.png'

function Navbar() {
  return (
    <nav className='nav'>
      <img className='nav--logo' src={logo} />
    </nav>
  )
}

export default Navbar