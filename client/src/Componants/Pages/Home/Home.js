import React from 'react'
import Layout from '../../Layout/Layout';
import Menu from '../../Menu';
import StudentApp from '../Students/StudentApp';



const Home = () => {
   const isAuthenticated = !!localStorage.getItem('auth');
  return (
    <>
        {
          !isAuthenticated ?
             <Layout title={"Home- School Management"}>
                <Menu/>
             </Layout>
          
          : 
          <StudentApp/>
        }
    </>
  )
}

export default Home;