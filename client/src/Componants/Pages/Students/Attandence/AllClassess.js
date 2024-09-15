import React from 'react'
import "../../../../Styles/Attendense.css";
import { FaChevronRight } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';


const AllClassess = () => {

  const navigate = useNavigate();

  const handleNursery = () =>{
    navigate("/admin/nursery")
  }
  return (
       <>
         <div>
            <h1 className='att-class'>Classes</h1>
            <div className='at-class'>
            <h4 onClick={handleNursery}>Nursery <FaChevronRight style={{float:'right'}} /></h4>
            <h4>L.K.G. <FaChevronRight style={{float:'right'}}/></h4>
            <h4>U.K.G. <FaChevronRight style={{float:'right'}}/></h4>
            <h4>Ist <FaChevronRight style={{float:'right'}}/></h4>
            <h4>IInd <FaChevronRight style={{float:'right'}}/></h4>
            <h4>IIIrd <FaChevronRight style={{float:'right'}}/></h4>
            <h4>IVth <FaChevronRight style={{float:'right'}}/></h4>
            <h4>Vth <FaChevronRight style={{float:'right'}}/></h4>
            <h4>VIth <FaChevronRight style={{float:'right'}}/></h4>
            <h4>VIIth <FaChevronRight style={{float:'right'}}/></h4>
            <h4>VIIIth <FaChevronRight style={{float:'right'}}/></h4>
            <h4>IXth <FaChevronRight style={{float:'right'}}/></h4>
            <h4>Xth <FaChevronRight style={{float:'right'}}/></h4>
            <h4>XIth <FaChevronRight style={{float:'right'}}/></h4>
            <h4>XIIth <FaChevronRight style={{float:'right'}}/></h4>
            </div>
        </div>
       </>
       
  )
}

export default AllClassess;

          