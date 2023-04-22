import React from 'react'
import logo from '../images/logo.png'
import './style/Navbar.css'
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";


const Navbar = () => {
  return (  
    <header>
      <nav className='navbar' class='row align-items-center mx-3' >

          <li class='col'>
            <img src={logo} alt="logo" width="20%" height="20%" />
          </li>

          <li class='col text-end'>
            <a href="#home">
            <Button variant="danger">Sign out <FontAwesomeIcon icon={faArrowRightFromBracket} /></Button>
            </a>
          </li>
          
      </nav>
    </header>
  )
}

export default Navbar