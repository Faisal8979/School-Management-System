import React, { useEffect, useState } from 'react'
import Layout from '../../Layout/Layout';
import Navbar from '../../Layout/Navbar';
import Marquee from '../Students/StudentManagement.js/Marquee';
import { Button, Form, Input, Label, Table } from 'reactstrap';
import "../../../Styles/Nursery.css";
import { toast } from 'react-toastify';
import axios from 'axios';
import ViewAttendance from '../Students/Attandence/ViewAttendance';
import { useParams } from 'react-router-dom';

const APIUrl = "http://localhost:8000";
const Nursery = () => {
    // const params = useParams();

    const [currentDate, setCurrentDate] = useState('');
    const [isVisible, setIsVisible] = useState(true);
    const [students, setStudents] = useState([]);
    const [studentId, setStudentId] = useState('')
    const [status, setStatus] = useState('');

    const params = useParams();

    //Attendace Fill

    const getAttendace = async (e) => {
        e.preventDefault()
        try {
            const { data } = await axios.post(`${APIUrl}/api/v1/attendanse/attendance-fill/${params.sid}`,
                {studentId, status}
            )
            
                if (data.success) {
                    toast.success(data.message);
                }
        } catch (error) {
            console.log(error);
            toast.error("Something Went Wrong")
        }
    }

      //Get Single Student
const getAllStudents = async() =>{
    try {
        const res = await axios.get(`${APIUrl}/api/v1/student/get-students`)
        setStudents(res.data.students)
    } catch (error) {
        console.log(error);
        toast.error("Something Went Wrong")
    }
}

useEffect(() =>{
    getAllStudents();
}, [])
    
    

    // const toggleContent = () => {
    //    setIsVisible(true)
    // };
    // const toggleViewatt = () => {
    //     setIsVisible(false)
    // };
    // useEffect(() => {
    //        $("#viewbutton").click(() => {
    //          $("#view").toggle();
    //     });
    // })

    useEffect(() => {
    const today = new Date();
    const date = today.toISOString().split('T')[0]; // Format date as YYYY-MM-DD
    setCurrentDate(date);
  }, []);

  return (
    <Layout title={"Attendance"}>
      <Navbar/>
      <Marquee/>
       <div className='pd'>
                <h4>Attendance Panel</h4>
             </div>
             <Form>
                <div className='form-containerr'>
                    <Label for='exampleClass'>Class<span style={{color:"red"}}>*</span></Label>
                    <Input
                        id='exampleClass'
                        name='cls'
                        type='select'
                        required
                    >
                    <option>
                   All
                    </option>
                    <option>
                    Nursery
                </option>
                <option>
                    L.K.G.
                </option>
                <option>
                   U.K.G
                </option>
                <option>
                    Ist
                </option>
                <option>
                    IInd
                </option>
                <option>
                    IIIrd
                </option>
                <option>
                    IVth
                </option>
                <option>
                    Vth
                </option>
              <option>
                    VIth
                </option>
                <option>
                    VIIth
                </option>
                <option>
                    VIIIth
                </option>
                <option>
                    IXth
                </option>
                <option>
                    Xth
                </option>
                <option>
                    XIth
                </option>
                <option>
                    XIIth
                </option>
                    </Input>
                    <Label for='exampleSection'>
                        Section<span style={{color:"red"}}>*</span>
                    </Label>
                    <Input
                    id='exampleSection'
                    name='section'
                    type='select'
                    required
                    >
                     <option>All</option>
                     <option>A</option> 
                     <option>B</option>
                     <option>C</option>
                     <option>D</option>  
                    </Input>
                    <Label for='exampleDate'>
                        Date:
                    </Label>
                    <Input 
                        id='exampleDate'
                        name='date'
                        type='date'
                        value={currentDate}
                    />
                    <Label for='exampleAttendance'>
                        Default Attendance:
                    </Label>
                    <Input 
                        id='exampleAttendance'
                        name='attendance'
                        type='text'
                        defaultValue="P"
                        readOnly
                    />
                    <div className='registerr'>
                      <Button onClick={() => setIsVisible('content1')}>
                          Fill Attendance
                    </Button>
                      <Button onClick={() => setIsVisible('content2')}>
                          View Attendance
                         </Button>
                     
                    </div>
                  
                </div>
                  <div className='pd'>
                <h4>Attendance Details</h4>
             </div>
             <div className='form-containerrr'>
                  <div style={{ display: isVisible === 'content1' ? 'block' : 'none' }} >
                      <Form  onSubmit={getAttendace}>
                      <div className='scroll'>
                         
                              <Table hover>
                                  <thead>
                                      <tr className='table-dark'>
                                          <th>S.R. No.</th>
                                          <th>Student Name</th>
                                          <th>Father Name</th>
                                          <th>Class</th>
                                          <th>Section</th>
                                          <th>Attendance</th>
                                          <th>Contact No.</th>
                                          <th>Whatsapp No.</th>
                                          <th>Student Id</th>
                                      </tr>
                                  </thead>
                                  <tbody>
                                      {students?.map((s, index) => (
                                          <tr key={s._id}>
                                              <td>{index + 1}</td>
                                              <td>{s.sname}</td>
                                              <td>{s.fname}</td>
                                              <td>{s.cls}</td>
                                              <td>{s.section}</td>
                                              <td><Input
                                                  id='exampleAttendance'
                                                  name='status'
                                                  required
                                                  type='select'
                                                  style={{ border: '1px solid green' }}
                                              >
                                                  <option>Select*</option>
                                                  <option>P</option>
                                                  <option>A</option>
                                              </Input></td>
                                              <td>{s.phone1}</td>
                                              <td>{s.phone2}</td>
                                              <td name='studentId'>{s._id }</td>
                                          </tr>
                                      ))}
                                  </tbody>
                 
                              </Table>
                          
                         
                          </div>
                           <div className='register'>
                              <Button type='submit' color='primary'>Submit</Button>
                          </div>
                          </Form>
                         
                          <div className='text-center mt-2'>
                              <h4>Attendance Note:-</h4>
                              <p>1:-"P" Is Stand For Present*</p>
                              <p>2:-"A" Is Stand For Absent*</p>
                      </div>
                      </div>
                 
                      <div style={{display : isVisible ==='content2' ? 'block' : 'none'}}>
                          <ViewAttendance />
                      </div>
                  
             </div>
             
             </Form>
    </Layout>
  )
}

export default Nursery;