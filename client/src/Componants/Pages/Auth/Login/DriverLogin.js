import React, { useState } from 'react';
import { Button, Form, Input, Label } from 'reactstrap';
import '../../../../Styles/Login.css'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';
import { FcAutomotive } from "react-icons/fc";
import Layout from '../../../Layout/Layout';


const APIUrl = "http://localhost:8000";


const DriverLogin = () => {

     const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleLogin = async(e) =>{
     e.preventDefault()
     try {
        const res = await axios.post(`${APIUrl}/api/v1/student/login`,
            { email, password},
            {
                 headers:{
                "Content-Type":"Application/json"
            }
            }
        );
            if(res && res.data.success){
                toast.success(res.data && res.data.message)
                navigate('/student-app')
            }else{
                toast.error(res.data.message)
            }
     } catch (error) {
        console.log(error);
        toast.error("Something Went Wrong")
        
     }
    }
    const handkeBack = () =>{
        navigate("/")
    }
  return (
     <Layout title={"Driver-Login"}>
        <Form className='form-container1' onSubmit={handleLogin}>
        <FcAutomotive size={50}/>
            <h1>Driver Login</h1>
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
            <Button color='primary' type='submit'>Log In</Button>
             <Button color='danger' onClick={handkeBack}>Back</Button>
        </Form>
    </Layout>
  )
}

export default DriverLogin;