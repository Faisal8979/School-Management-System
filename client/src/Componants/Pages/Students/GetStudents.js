import React, { useEffect, useState } from 'react'
import Layout from '../../Layout/Layout';
import { toast } from 'react-toastify';
import axios from 'axios';
import "../../../Styles/GetAllStudents.css"
import { Button, Card, CardBody,  CardGroup,  CardImg,  CardText, CardTitle} from 'reactstrap';
import ClassName from './StudentManagement.js/ClassName';
import { Link, useNavigate } from 'react-router-dom';



const APIUrl = "http://localhost:8000";

const GetStudents = () => {
    const [students, setStudents] = useState([]);
    const navigate = useNavigate();
  
   
  const getAllStudents = async() =>{
       try {
        const res = await axios.get(`${APIUrl}/api/v1/student/get-students`)
        setStudents(res.data.students);
       } catch (error) {
        console.log(error);
        toast.error("Something Went Wrong");
       }
    }

    useEffect(() =>{
        getAllStudents();
    }, [])

// const handleHome = () =>{
//   navigate("/")
// }
// const handleBack = () =>{
//   navigate("/admin/home-student")
// }
  return (
    <Layout title={"Get All Students"}>
   
        <div className='row'>
          <div className='col-md-3 mt-5'>
           <ClassName/>
          </div>
          <div className='col-md-9 mt-5'>
            <h1>Get All Students</h1>
        <div className='d-flex flex-wrap' id='cards'>
        {students?.map((s) =>(
              <>
             
                 <CardGroup className='m-2' style={{width: '18rem'}} key={s._id}>
                 <Card className='student-card'>
                   <CardImg
                      alt={s.name}
                      src={`${APIUrl}/api/v1/student/get-photo/${s._id}`}
                      top
                      width="100%" 
                      height="200px"
                      />
                      <hr/>
                <CardBody>
                    <CardTitle tag="h5">Student Name</CardTitle>
                    <CardText>{s.sname}</CardText>
                    <CardTitle tag="h5">Class</CardTitle>
                    <CardText>{s.cls}</CardText>
                </CardBody>
            
                   <Link to={`/admin/student/${s._id}`} className='profile-link'>
                <Button color='info' className='mb-2'>Update</Button>
                 </Link>                 
              </Card>  
              </CardGroup>
             
         
         
              </>           
            ))
        }
        </div>
          </div>
        </div>
    </Layout>
  )
}

export default GetStudents;