import React from 'react'
import logo from '../images/logo.png'
import './style/Navbar.css'
import Button from 'react-bootstrap/Button';


const Navbar = () => {
  return (  
    <header>
      <nav className='navbar' class='row align-items-center mx-3' >

          <li class='col'>
            <img src={logo} alt="logo" width="20%" height="20%" />
          </li>

          <li class='col text-end'>
            <a href="#home">
            <Button variant="danger">Sign out</Button>
            </a>
          </li>
          
      </nav>
    
    </header>
  )
}

export default Navbar