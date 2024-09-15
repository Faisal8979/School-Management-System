import React from 'react'
import Layout from '../../../Layout/Layout';
import { Card, CardBody, CardSubtitle, CardTitle} from 'reactstrap';
import { FaStar } from 'react-icons/fa6';
import Marquee from './Marquee';
import { FiArrowRightCircle } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import '../../../../Styles/HomeStudent.css';
import Navbar from '../../../Layout/Navbar';

const HomeStudent = () => {


const navigate = useNavigate();

  const handleStudentManagement = () =>{
    navigate("/admin/register")
  }
  const handleGetStudents = () =>{
    navigate("/admin/get-students")
  }
  const handleAttendense = () =>{
    navigate("/admin/attendence")
  }
  return (
    <>
       <Layout title={"Student Management"}>
        <Navbar/>
     <Marquee/>
     <div className='software-panel'>
      <h3>Student Management Panel</h3>
     </div>
     
     <div className='row' id='row2'>
      <div className='col-md-3'>
         <Card className='student-register'>
     
      <CardBody>
         <FaStar className='star'/>
        <CardTitle tag="h5">
          Student Registration
        </CardTitle>
      <CardSubtitle
      className="mb-2 text-white"
      tag="h6"
    >
      Enter
    </CardSubtitle>
    <p className='text'  onClick={handleStudentManagement}>
      More Info &nbsp;
      <FiArrowRightCircle/>
    </p>
      </CardBody>
    </Card>
      </div>
      <div className='col-md-3'>
        <Card className='student-list'>
     
      <CardBody>
         <FaStar className='star'/>
        <CardTitle tag="h5">
          Student Registration List
        </CardTitle>
      <CardSubtitle
      className="mb-2 text-white"
      tag="h6"
    >
      Enter
    </CardSubtitle>
    <p className='text' onClick={handleGetStudents}>
      More Info &nbsp;
      <FiArrowRightCircle/>
    </p>
      </CardBody>
    </Card>
      </div>
        <div className='col-md-3'>
         <Card className='student-att'>
     
      <CardBody>
         <FaStar className='star'/>
        <CardTitle tag="h5">
          Student Attandence
        </CardTitle>
      <CardSubtitle
      className="mb-2 text-white"
      tag="h6"
    >
      Enter
    </CardSubtitle>
    <p className='text' onClick={handleAttendense}>
      More Info &nbsp;
      <FiArrowRightCircle/>
    </p>
      </CardBody>
    </Card>
      </div>
      <div className='col-md-3'>
         <Card className='student-admission'>
     
      <CardBody>
         <FaStar className='star'/>
        <CardTitle tag="h5">
          Student Addmission List
        </CardTitle>
      <CardSubtitle
      className="mb-2 text-white"
      tag="h6"
    >
      Enter
    </CardSubtitle>
    <p className='text'>
      More Info &nbsp;
      <FiArrowRightCircle/>
    </p>
      </CardBody>
    </Card>
      </div>
      <div className='col-md-3'>
         <Card className='student-fee'>
     
      <CardBody>
         <FaStar className='star'/>
        <CardTitle tag="h5">
          Student Fee Category
        </CardTitle>
      <CardSubtitle
      className="mb-2 text-white"
      tag="h6"
    >
      Enter
    </CardSubtitle>
    <p className='text'>
      More Info &nbsp;
      <FiArrowRightCircle/>
    </p>
      </CardBody>
    </Card>
      </div>
     </div>
       </Layout>
    </>
  )
}

export default HomeStudent;