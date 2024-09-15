import React from 'react';
import '../../Styles/Footer.css';
import {Link} from  'react-router-dom';
import { FcAbout, FcCopyright, FcContacts, FcPrivacy } from "react-icons/fc";

const Footer = () => {
  return (
     <div className='footer'>
        <h4 className='text-center'>
            All Right Reserverd <FcCopyright /> Faisal
        </h4>
        <p className='text-center mt-3'>
            <Link to='/about'><FcAbout /> About</Link> |
            <Link to='/contact'><FcContacts /> Contact</Link> |
            <Link to='/policy'><FcPrivacy /> Privacy Policy</Link>
        </p>
        </div>
  )
}

export default Footer;