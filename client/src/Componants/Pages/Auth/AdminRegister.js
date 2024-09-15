import React, { useState } from 'react'
import Layout from '../../Layout/Layout';
import Spinner from '../../Spinner';
import { Button, Form, Input, Label} from 'reactstrap';
import "../../../Styles/AdminRegister.css";
import { FcUnlock } from 'react-icons/fc';
import { toast } from 'react-toastify';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';


const APIUrl = "http://localhost:8000";

const AdminRegister = () => {
   const isAuthenticated = !!localStorage.getItem('auth');

   const navigate = useNavigate();

   const [secret, setSecret] = useState("");
   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [phone, setPhone] = useState("");

   const handlesubmit = async(e) =>{
     e.preventDefault()
    try {
      const res = await axios.post(`${APIUrl}/api/v1/admin/register`,
        {secret, name, email, password, phone})
      if(res && res.data.success){
      toast.success(res.data && res.data.message);
      navigate('/login')
      }else{
        toast.error(res.data && res.data.message)
      }
    } catch (error) {
      console.log(error);
      toast.error("Something Went Wrong");
      
    }
   }

  return (
    <>
        <Layout title={"Admin-Registration"}>
        {
            !isAuthenticated ? (
              <>
              
              <div className='pd' style={{marginTop:"20px"}}>
                <h4>Personal Details</h4>
             </div>
            <Form onSubmit={handlesubmit}>
             
            <div className='form-container2'>
            <div className='admin-registeration'>
            <FcUnlock size={80}/>
            <h1>Admin Registration</h1>
            </div>
               <Label for='exampleSecret'>Secret Key<span style={{color:'red'}}>*</span></Label>
              <Input
                id="exampleSecret"
                name='secret'
                type='password'
                placeholder='Please Enter Your Secret Key**'
                required
                value={secret}
                onChange={(e) => setSecret(e.target.value)}
              />
              <Label for='exampleName'>Name<span style={{color:'red'}}>*</span></Label>
              <Input
                id="exampleName"
                name='name'
                type='text'
                placeholder='Please Enter Your Name**'
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
               <Label for='exampleEmail'>Email<span style={{color:'red'}}>*</span></Label>
              <Input
                id="exampleEmail"
                name='email'
                type='email'
                placeholder='Please Enter Your Email**'
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
               <Label for='examplePassword'>Password<span style={{color:'red'}}>*</span></Label>
              <Input
                id="examplePassword"
                name='password'
                type='password'
                placeholder='Please Enter Your Password**'
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
               <Label for='examplePhone'>Phone<span style={{color:'red'}}>*</span></Label>
              <Input
                id="examplePhone"
                name='phone'
                type='phone'
                placeholder='Please Enter Your Phone**'
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <p style={{textAlign:'center',marginTop:'10px'}}>Have An Account /<Link to='/login'>Login Now</Link></p>
              <div className='register'>
              
              <Button type='submit' color='success'>Admin Registration</Button>
              
              </div>
              </div>
            </Form>
            </>
            ) :
            (
                <Spinner path=""/>
            )
        }
            
        </Layout>
    </>
  )
}

export default AdminRegister;