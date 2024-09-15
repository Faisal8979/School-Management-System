import React from 'react'
import Layout from '../../../Layout/Layout';
import "../../../../Styles/Attendense.css";
import AllClassess from './AllClassess';

const Attendence = () => {
 
  return (
    <Layout title={"Attendanse"}>
        <div className='row'>
            <div className='col-md-3' style={{background:"#4a235a", minHeight:"70vh"}}>
            <AllClassess/>
            </div>
        </div>
    </Layout>
  )
}

export default Attendence;