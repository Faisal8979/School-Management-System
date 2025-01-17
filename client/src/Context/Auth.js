import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({children}) =>{
  const [auth, setAuth] = useState({
    student: null,
    token: "",
  })

  //Default Axios
  axios.defaults.headers.common['Authorization'] = auth?.token;
  
  useEffect(() =>{
    const data = localStorage.getItem('auth')
    if(data){
        const parseData = JSON.parse(data)
        setAuth({
            ...auth,
             student: parseData.student,
            token: parseData.token
        })
    }
    //Eslint-Disable-Next-Line
  },[])
  return(
    <AuthContext.Provider value={[auth, setAuth]}>
        {children}
    </AuthContext.Provider>
  )
}

//Custom Hooks

const useAuth = () => useContext(AuthContext);

export {useAuth, AuthProvider}