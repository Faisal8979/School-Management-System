import './App.css';
import { Route, Routes} from 'react-router-dom';
import Home from './Componants/Pages/Home/Home';
import Register from './Componants/Pages/Auth/Register';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './Componants/Pages/Auth/Login';
import StudentApp from './Componants/Pages/Students/StudentApp';
import TeachersLogin from './Componants/Pages/Auth/Login/TeachersLogin';
import DriverLogin from './Componants/Pages/Auth/Login/DriverLogin';
import StudentLogin from './Componants/Pages/Auth/Login/StudentLogin';
import AdminRoute from './Componants/Routes/AdminRoutes';
import HomeStudent from './Componants/Pages/Students/StudentManagement.js/HomeStudent';
import AdminRegister from './Componants/Pages/Auth/AdminRegister';
import GetStudents from './Componants/Pages/Students/GetStudents';
import UpdateStudents from './Componants/Pages/Students/StudentManagement.js/UpdateStudents';
import PageNotFound from './Componants/Pages/Home/PageNotFound';
import Nursery from './Componants/Pages/Classes/Nursery';

function App() {
  return (
    <>
  <ToastContainer
position="top-center"
autoClose={3000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>

 
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/admin-register' element={<AdminRegister/>}/>
      <Route path='/teacher-login' element={<TeachersLogin/>}/>
      <Route path='/driver-login' element={<DriverLogin/>}/>
      <Route path='/student-login' element={<StudentLogin/>}/>
      <Route path='*' element={<PageNotFound/>}/>
      <Route path='/admin' element={<AdminRoute/>}>
        <Route path='student-app' element={<StudentApp/>}/>
        <Route path='home-student' element={<HomeStudent/>}/>
        <Route path='register' element={<Register/>}/>
        <Route path='get-students' element={<GetStudents/>}/>
        <Route path='student/:sid' element={<UpdateStudents/>}/>
        <Route path='attendence' element={<Nursery/>}/>
      </Route>
    </Routes>
  
    </>
  );
}

export default App;
