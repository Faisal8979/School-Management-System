import React from 'react'
import { FcBusinessman,FcAutomotive ,FcUnlock,FcOnlineSupport   } from "react-icons/fc";
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';


const Menu = () => {
   

  return (
    <>
    <h1>School Management</h1>
   <div className='row' style={{display:'flex', justifyContent:'center',marginTop:'20px'}}>
    <div className='col-md-6' style={{width:'45%'}}>
    <div style={{border:'2px solid gray',padding:'20px', borderRadius:'20px'}}>
        <FcUnlock  size={50} />
        <h5>Admin App</h5>
        <Link to="/login"><Button color='info'>Log In</Button></Link>
        </div>
    </div>
    <div className='col-md-6' style={{width:'45%'}}>
    <div style={{border:'2px solid gray',padding:'20px', borderRadius:'20px'}}>
        <FcUnlock  size={50} />
        <h5>Registration</h5>
        <Link to="/admin-register"><Button color='primary'>Registration</Button></Link>
        </div>
    </div>
   </div>
   <div className='row' style={{display:'flex', justifyContent:'center',marginTop:'20px'}}>
  <div className='col-md-6' style={{width:'45%'}}>
     <div style={{border:'2px solid gray',padding:'20px', borderRadius:'20px'}}>
        <FcOnlineSupport  size={50}/>
        <h5>Teachers App</h5>
        <Link to="/teacher-login"><Button color='warning'>Log In</Button></Link>
        </div>
    </div>
     <div className='col-md-6' style={{width:'45%'}}>
     <div style={{border:'2px solid gray',padding:'20px', borderRadius:'20px'}}>
        <FcAutomotive  size={50}/>
        <h5>Driver App</h5>
      <Link to="/driver-login"><Button color='warning'>Log In</Button></Link>
        </div>
    </div>
   </div>
     <div className='row' style={{display:'flex', justifyContent:'center',marginTop:'20px', marginBottom:'20px'}}>
    <div className='col-md-12' style={{width:'90%'}}>
    <div style={{border:'2px solid gray',padding:'20px', borderRadius:'20px'}}>
        <FcBusinessman size={50} />
        <h5>Student App</h5>
       <Link to="/student-login"><Button color='info'>Log In</Button></Link>
        </div>
    </div>
   </div>
    </>
  )
}

export default Menu;