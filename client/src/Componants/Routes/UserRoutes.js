import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import axios from "axios";
import Spinner from "../Spinner";
import { useAuth } from "../../Context/Auth";

const APIUrl = "http://localhost:8000";

export default function PrivateRoute() {
  const [ok, setOk] = useState(false);
  const [auth, setAuth] = useAuth();

  useEffect(() => {
    const authCheck = async () => {
      const res = await axios.get(`${APIUrl}/api/v1/auth/user-auth`);
      if(res.data.ok) {
        setOk(true);
      } else {
        setOk(false);
      }
    }
    if(auth?.token) {
        authCheck();
    }
  }, [auth?.token]);

  return ok ? <Outlet /> : <Spinner />;
}