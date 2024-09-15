import React, { useState } from 'react'
import Layout from '../../Layout/Layout';
import { Button, Form, Input, Label } from 'reactstrap';
import '../../../Styles/Login.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';
import {FcUnlock } from "react-icons/fc";
import { useAuth } from '../../../Context/Auth';
import Spinner from '../../Spinner';





const APIUrl = "https://school-backend-95kz.onrender.com/";

const Login = () => {
      const isAuthenticated = !!localStorage.getItem('auth');

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [auth, setAuth] = useAuth();

    const navigate = useNavigate();
    const location = useLocation();

    const handleLogin = async(e) =>{
     e.preventDefault()
     try {
        const res = await axios.post(`${APIUrl}/api/v1/admin/login`,
            { email, password});

            if(res && res.data.success){
                toast.success(res.data.message)
                setAuth({
                    ...auth,
                    student: res.data.student,
                    token: res.data.token
                })
                localStorage.setItem("auth", JSON.stringify(res.data));
                navigate(location.state || '/admin/student-app')
             
            }else{
              toast.error("Please Login Admin Id")
            }
           
     } catch (error) {
        console.log(error);
        toast.error("Please Login Admin Id")
        
     }
    }
    const handkeBack = () =>{
        navigate("/")
    }
  return (
    <>
    <Layout title={"Admin-Login"}>
      {
        !isAuthenticated ? (
            <Form className='form-container1' onSubmit={handleLogin}>
           <FcUnlock size={50}/>
            <h1>Admin Login</h1>
            <hr/>
            <Label for='exampleEmail'>Email</Label>
            <Input 
                id='exampleEmail'
                name='email'
                placeholder='Enter Yout Email'
                type='email'
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <Label for='examplePassword'>Password</Label>
            <Input
                id='examplePassword'
                name='password'
                placeholder='Enter Your Password'
                type='password'
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <p style={{marginTop:"10px"}}>You Don't Have An Account Please / <Link to='/admin-register'>Registration Now</Link></p>
            <Button color='primary' type='submit'>Log In</Button>
            <Button color='danger' onClick={handkeBack}>Back</Button>
        </Form>
        ) : (
            <Spinner path=""/>
        )
      }
    </Layout>
    </>
  )
}

export default Login;