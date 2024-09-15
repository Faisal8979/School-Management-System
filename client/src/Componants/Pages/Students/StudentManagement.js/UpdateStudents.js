import React, { useEffect, useState } from 'react'
import { Button, Form,  Input, Label} from 'reactstrap';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import '../../../../Styles/Register.css';
import Layout from '../../../Layout/Layout';
import Navbar from '../../../Layout/Navbar';
import Marquee from './Marquee';





const APIUrl = "http://localhost:8000";

const UpdateStudents = () => {
    const [cls ,setCls] = useState("");
    const [section ,setSection] = useState("");
    const [sname ,setSname] = useState("");   
    const [fname , setFname] = useState("");
    const [mname , setMname] = useState(""); 
    const [gender ,setGender] = useState(""); 
    const [phone1 ,setPhone1] = useState(""); 
    const [phone2, setPhone2] = useState("");
    const [phone3, setPhone3] = useState("");
    const [email, setEmail] = useState("");
    const [dob, setDob] = useState('');
    const [saadhar, setSaadhar] = useState("");
    const [soldnew, setSoldnew] = useState("");
    const [admission, setAdmission] = useState("");
    const [address, setAddress] = useState("");
    const [address1, setAddress1] = useState("");
    const [town, setTown] = useState("");
    const [city, setCity] = useState("");
    const [district, setDistrict] = useState("");
    const [state, setState] = useState("");
    const [pincode, setPincode] = useState("");
    const [landmark, setLandmark] = useState("");
    const [password, setPassword] = useState("");
    const [currentDate, setCurrentDate] = useState('');
    const [error, setError] = useState("");
    const [photo, setPhoto] = useState("");
    const [id, setId] = useState("");
   

    const navigate = useNavigate()
    const params = useParams();

     const getSingleStudent = async () => {
    try {
      const {data} = await axios.get(
        `${APIUrl}/api/v1/student/single-student/${params.sid}`
      )

      setCls(data.student.cls);
      setSection(data.student.section);
      setSname(data.student.sname);
      setFname(data.student.fname);
      setMname(data.student.mname);
      setDob(data.student.dob);
      setEmail(data.student.email);
      setGender(data.student.gender);
      setPhone1(data.student.phone1);
      setPhone2(data.student.phone2);
      setPhone3(data.student.phone3);
      setAddress(data.student.address);
      setAddress1(data.student.address1);
      setSaadhar(data.student.saadhar);
      setSoldnew(data.student.soldnew);
      setAdmission(data.student.admission);
      setTown(data.student.town);
      setCity(data.student.city);
      setState(data.student.state);
      setDistrict(data.student.district);
      setLandmark(data.student.landmark);
      setPincode(data.student.pincode);
      setPhoto(data.student.photo);
      setPassword(data.student.password);
      setId(data.student._id);
    
     

    } catch (error) {
      console.log(error);
    }
  };
useEffect(() => {
    getSingleStudent();
    //eslint-disable-next-line
  }, []);
  // const getAllStudents = async() =>{
  //      try {
  //       const res = await axios.get(`${APIUrl}/api/v1/student/get-students`)
  //       setStudents(res.data.students);
  //      } catch (error) {
  //       console.log(error);
  //       toast.error("Something Went Wrong");
  //      }
  //   }
  //     useEffect(() => {
  //   const today = new Date();
  //   const date = today.toISOString().split('T')[0]; // Format date as YYYY-MM-DD
  //   setCurrentDate(date);
  // }, []);

  //   useEffect(() =>{
  //       getAllStudents();
  //   }, [])

      const handleAadharChange = (e) => {
    const value = e.target.value;
    if (value.length <= 12) {
      setSaadhar(value);
      if (value.length !== 12) {
        setError("Aadhaar Card Number Must Be Exactly 12 Digits**");
      } else {
        setError("");
      }
    }
  };


  //=====Update Student =====//
   const handleUpdate = async(e) =>{
        e.preventDefault()
        try {
    //       if (saadhar.length !== 12) {
    //   setError("Please enter a valid 12-digit Aadhaar card number.");
    // } else {
    //   setError("");

      const studentData = new FormData();

       studentData.append("cls", cls)
       studentData.append("section", section)
       studentData.append("sname", sname)
       studentData.append("fname", fname)
       studentData.append("mname", mname)
       studentData.append("gender", gender)
       studentData.append("phone1", phone1)
       studentData.append("phone2", phone2)
       studentData.append("phone3", phone3)
       studentData.append("email", email)
       studentData.append("dob", dob)
       studentData.append("saadhar", saadhar)
       studentData.append("soldnew", soldnew)
       studentData.append("admission", admission)
       studentData.append("address", address)
       studentData.append("address1", address1)
       studentData.append("town", town)
       studentData.append("city", city)
       studentData.append("district", district)
       studentData.append("state", state)
       studentData.append("pincode", pincode)
       studentData.append("landmark", landmark)
       photo && studentData.append("photo", photo)
       studentData.append("password", password)
      
      // Submit form
      const {data} = await axios.put(`${APIUrl}/api/v1/student/update-student/${id}`,
         studentData);
                toast.success(data.message);
              navigate('/admin/get-students')
                
            // }
        } catch (error) {
            console.log(error);
            toast.error("Something went Wrong with Updated")
        }

    }

    
    //=====Delete Student ====///
    const handleDelete = async(e) =>{
       e.preventDefault()
    try {
      let answer = window.confirm("Are You Sure Want To Delete This Student ? ")
      if(!answer) return;
        await axios.delete(`${APIUrl}/api/v1/student/delete-student/${id}`);
     
      toast.success("Student Deleted Successfully");
      navigate("/admin/get-students")
    } catch (error) {
      console.log(error);
      toast.error("Something Went Wrong")
    }
    }
  return (
  <>
     <Layout title={"Update - School Management"}>
             <Navbar/>
             <Marquee/>
      
             <h1>Student Update</h1>
             <div className='pd'>
                <h4>Personal Details</h4>
             </div>
     <Form onSubmit={handleUpdate}>
     <div  className='form-container'>
       <Label for='exampleRegistration'>
                Registration No.<span style={{color:'red'}}>*</span>
            </Label>
            <Input
            id='exampleRegistration'
            name='registration'
            type='text'
            value="9"
            readOnly
            required
            />
              <Label for='exampleDate'>
                Registration Date<span style={{color:'red'}}>*</span>
            </Label>
            <Input
            id='exampleDate'
            name='rdate'
            type='date'
            value={currentDate}
            readOnly
            required
            />
              <Label for='exampleClass'>
                Class<span style={{color:'red'}}>*</span>
            </Label>
            <Input
            id='exampleClass'
            name='cls'
            type='select'
            value={cls}
            onChange={(e) => setCls(e.target.value)}
            required
            >
                <option>
                    Select Class
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
                Section<span style={{color:'red'}}>*</span>
            </Label>
            <Input
            id='exampleSection'
            name='section'
            type='select'
            value={section}
            onChange={(e) => setSection(e.target.value)}
            required
            >
                <option>
                    Select Section
                </option>
                <option>
                    A
                </option>
                <option>
                    B
                </option>
                <option>
                    C
                </option>
                <option>
                    D
                </option>
            </Input>
            <Label for='exampleSname'>
               Student Name<span style={{color:'red'}}>*</span>
            </Label>
            <Input
            id='exampleSname'
            name='sname'
            type='text'
            placeholder='Enter Student Name**'
            value={sname}
            onChange={(e) => setSname(e.target.value)}
            required
            />
              <Label for='exampleFname'>
               Father Name<span style={{color:'red'}}>*</span>
            </Label>
            <Input
            id='exampleFname'
            name='fname'
            type='text'
            placeholder="Enter Student's Father Name**"
            value={fname}
            onChange={(e) => setFname(e.target.value)}
            required
            />
              <Label for='exampleMname'>
              Mother  Name
            </Label>
            <Input
            id='exampleMname'
            name='mname'
            type='text'
            placeholder="Enter Student's Mother Name**"
            value={mname}
            onChange={(e) => setMname(e.target.value)}
            required
            />
            <Label for='exampleGender'>
                Gender<span style={{color:'red'}}>*</span>
            </Label>
            <Input
            id='exampleGender'
            name='gender'
            type='select'
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            required
            >
                <option>Select Gender</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
            </Input>
        
            <Label for='examplePhone1'>
                Contact No.<span style={{color:'red'}}>*</span>
            </Label>
            <Input
            id='examplePhone1'
            name='phone1'
            type='phone'
            placeholder='Contact Number**'
            value={phone1}
            onChange={(e) => setPhone1(e.target.value)}
            required
            />
            <Label for='examplePhone2'>
                Whatsapp No.<span style={{color:'red'}}>*</span>
            </Label>
            <Input
            id='examplePhone2'
            name='phone2'
            type='phone'
            placeholder='Whatsapp Number**'
            value={phone2}
            onChange={(e) => setPhone2(e.target.value)}
            required
            />
            <Label for='examplePhone3'>
                Father Contact No.<span style={{color:'red'}}>*</span>
            </Label>
            <Input
            id='examplePhone3'
            name='phone3'
            type='phone'
            placeholder='Father Contact Number**'
            value={phone3}
            onChange={(e) => setPhone3(e.target.value)}
            required
            />
            <Label for='exampleEmail'>
              Communication Email<span style={{color:'red'}}>*</span>
            </Label>
            <Input
            id='exampleEmail'
            name='email'
            type='email'
            placeholder="Enter Student's Email**"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            />
          <Label for='exampleDOB' style={{width:"100%"}}>
         Date Of Birth:
            </Label>
       <Input
          type="date"
          name="dob"
          id="dob"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
        />
           <Label for='exampleSaadhar' style={{width:"100%"}}>
                Student Aadhar<span style={{color:'red'}}>*</span>
            </Label>
            <Input
            id='exampleSaadhar'
            name='saadhar'
            type='number'
            minLength="12"
            maxLength="12"
            value={saadhar}
            onChange={handleAadharChange}
            required
            />
            {error && <p style={{ color: "red" }}>{error}</p>}
               <Label for='exampleSoldnew' style={{width:"100%"}}>
                Student Old/New<span style={{color:'red'}}>*</span>
            </Label>
            <Input
            id='exampleSoldnew'
            name='soldnew'
            type='select'
            value={soldnew}
            onChange={(e) => setSoldnew(e.target.value)}
           >
           <option>Select**</option>
          <option>New</option>
          <option>Old</option>
           </Input>
               <Label for='exampleAdmission'>
                Admission Type<span style={{color:'red'}}>*</span>
            </Label>
            <Input
            id='exampleAdmission'
            name='admission'
            type='select'
            value={admission}
            onChange={(e) => setAdmission(e.target.value)}
           >
           <option>Select Admission Type**</option>
          <option>Regular</option>
          <option>Private</option>
           </Input>

        </div>
        
            <div  className='pd' style={{background:"gray"}}>
                <h4>Present Address  Details</h4>
             </div>
        <div className='form-container'>
       <Label for='exampleAddress'>
               Student Address Line 1
            </Label>
            <Input
            id='exampleAddress'
            name='address'
            type='text'
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
            />
             <Label for='exampleAddress1'>
               Student Address Line 2
            </Label>
            <Input
            id='exampleAddress1'
            name='address1'
            type='text'
            value={address1}
            onChange={(e) => setAddress1(e.target.value)}
            required
            />
              <Label for='exampleTown'>
               Town/Village
            </Label>
            <Input
            id='exampleTown'
            name='town'
            type='text'
            value={town}
            onChange={(e) => setTown(e.target.value)}
            required
            />
              <Label for='exampleCity'>
               City/Block
            </Label>
            <Input
            id='exampleCity'
            name='city'
            type='text'
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
            />
              <Label for='exampleDistrict'>
               District
            </Label>
            <Input
            id='exampleDistrct'
            name='district'
            type='text'
            value={district}
            onChange={(e) => setDistrict(e.target.value)}
            required
            />
              <Label for='exampleState'>
               State
            </Label>
            <Input
            id='exampleState'
            name='state'
            type='text'
            value={state}
            onChange={(e) => setState(e.target.value)}
            required
            />
              <Label for='examplePincode'>
               Pincode
            </Label>
            <Input
            id='examplePincode'
            name='pincode'
            type='text'
            value={pincode}
            onChange={(e) => setPincode(e.target.value)}
            required
            />
              <Label for='exampleLandmark'>
               Landmark
            </Label>
            <Input
            id='exampleLandmark'
            name='landmark'
            type='text'
            value={landmark}
            onChange={(e) => setLandmark(e.target.value)}
            required
            />
             
        </div>
         <div  className='pd' style={{background:"gray"}}>
                <h4>Others Details</h4>
             </div>
                
       <div className='form-container'>  
        <div className="mb-3">
                <Label className="btn btn-outline-secondary col-md-12">
                  {photo ? photo.name : "Upload Photo"}
                  <Input
                    type="file"
                    name="photo"
                    accept="image/*"
                    onChange={(e) => setPhoto(e.target.files[0])}
                    hidden
                  />
                </Label>
              </div>
              <div className="mb-3">
                {photo ? (
                  <div className="text-center">
                    <img
                      src={URL.createObjectURL(photo)}
                      alt="product_photo"
                      height={"200px"}
                      className="img img-responsive"
                    />
                  </div>
                ) :(
                   <div className="text-center">
                    <img
                     src={`${APIUrl}/api/v1/student/get-photo/${id}`}
                      alt="product_photo1"
                      height={"200px"}
                      className="img img-responsive"
                    />
                  </div>
                )}
              </div>          
           <Label for='examplePassword' style={{width:"100%"}}>
                Password<span style={{color:'red'}}>*</span>
            </Label>
            <Input
            id='examplePassword'
            name='password'
            type='password'
            placeholder='Enter Your Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            />
        <div className='register'>
            <Button color='primary' type='submit'>
            Update
        </Button>
         <Button color='danger'  onClick={handleDelete}>Delete</Button>
        </div>
       </div>
    </Form>
   </Layout>
  </>
  )
}

export default UpdateStudents;