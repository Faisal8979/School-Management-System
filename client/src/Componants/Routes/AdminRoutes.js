import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import axios from "axios";
import Spinner from "../Spinner";
import { useAuth } from "../../Context/Auth";



const APIUrl = "http://localhost:8000";

export default function AdminRoute() {
  const [ok, setOk] = useState(false);
  const [auth, setAuth] = useAuth();

    const authCheck = async () => {
     try {
       const res = await axios.get(`${APIUrl}/api/v1/student/admin-auth`);
      if(res.data.ok) {
        setOk(true);
      } else {
        setOk(false);
      }
     } catch (error) {
      console.log(error);
      
     }
    };

  useEffect(() => {
  
    if(auth?.token) authCheck();
  }, [auth?.token]);

  return ok ? <Outlet /> : <Spinner path=""/>; 
}