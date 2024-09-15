import React from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { useAuth } from '../../Context/Auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { LuLogOut } from 'react-icons/lu';
import "../../Styles/Navbar.css";

const Navbar = () => {
    const [auth, setAuth] = useAuth();

    const navigate = useNavigate();
    
    const handleLogout =() =>{
    setAuth({
      ...auth,
      user: null,
      token: " ",
    })
    localStorage.removeItem('auth')
    toast.success("Logout Successfully");
    navigate("/login")
  }
    const handleBack = () =>{
        navigate("/")
    }
  return (
    <>
    <div className='logout'>
     <h3 onClick={handleLogout} className='logout1'><LuLogOut size={30} /> Logout</h3>
     </div>

    <Nav className='nav'>
      <NavItem>
        <NavLink className='navlink' onClick={handleBack}>
        <FaArrowLeft/>
          Back
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink className='navlink'>
          Forward
          <FaArrowRight />
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink className='navlink'>
          Home
        </NavLink>
      </NavItem>
    </Nav>
    </>
  )
}

export default Navbar;