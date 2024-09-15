import React from 'react'
import Layout from '../../Layout/Layout';
import { Card, CardBody, CardSubtitle, CardTitle } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import { FaStar } from "react-icons/fa6";
import '../../../Styles/StudentApp.css';
import { FiArrowRightCircle } from "react-icons/fi";
import Marquee from './StudentManagement.js/Marquee';
import Navbar from '../../Layout/Navbar';


const StudentApp = () => {

  const navigate = useNavigate();

    

  const handleStudentManagement = () =>{
    navigate("/admin/home-student")
  }
  return (
       <>
      <Layout>
      <Navbar/>
     <Marquee/>
     <div className='software-panel'>
      <h3>Software Panel</h3>
     </div>
     <div className='row' id='row1'>
      <div className='col-md-3'>
          <Card className='student-management'>
     
      <CardBody>
         <FaStar className='star'/>
        <CardTitle tag="h5">
          Student Management
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
         <Card color='primary' className='student-management'>
     
      <CardBody>
         <FaStar className='star'/>
        <CardTitle tag="h5">
          Attendance Management
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
        <Card className='staff-management'>
     
      <CardBody>
         <FaStar className='star'/>
        <CardTitle tag="h5">
          Staff Management
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
        <Card className='fee-management'>
     
      <CardBody>
         <FaStar className='star'/>
        <CardTitle tag="h5">
          Fee Management
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
          <Card className='account-management'>
     
      <CardBody>
         <FaStar className='star'/>
        <CardTitle tag="h5">
          Account Management
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
         <Card className='enquiry'>
     
      <CardBody>
         <FaStar className='star'/>
        <CardTitle tag="h5">
          Enquiry
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
        <Card className='exam'>
     
      <CardBody>
         <FaStar className='star'/>
        <CardTitle tag="h5">
          Examination
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
        <Card className='exam-sheet'>
     
      <CardBody>
         <FaStar className='star'/>
        <CardTitle tag="h5">
          Examination Result Sheet
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
          <Card className='certificate'>
     
      <CardBody>
         <FaStar className='star'/>
        <CardTitle tag="h5">
          Certificate Management
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
         <Card className='time-table'>
     
      <CardBody>
         <FaStar className='star'/>
        <CardTitle tag="h5">
          Time Table
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
        <Card className='student-info'>
     
      <CardBody>
         <FaStar className='star'/>
        <CardTitle tag="h5">
          Student Info
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
        <Card className='gallery'>
     
      <CardBody>
         <FaStar className='star'/>
        <CardTitle tag="h5">
          Gallery
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

export default StudentApp;