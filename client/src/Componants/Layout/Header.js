import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import '../../Styles/Header.css'

const Header = () => {
  return (
    <>
      <div className='navbar d-block'>
          <Navbar>
            <NavbarBrand id='navbarbrand'>
            <img src='/Images/logo2.png' alt='logo' width={80} className='img1'/>
               <h2> <span className='span'>S</span>chool <span className='span'>M</span>anagement</h2>
               <img src='/Images/logo2.png' alt='logo' width={80} className='img1'/>
            </NavbarBrand>
        </Navbar>
      </div>
    </>
  )
}

export default Header;