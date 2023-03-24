import {Outlet, Navigate } from "react-router-dom";
import {useContext} from "react";
import {OuthContext} from "../../contexts";

const GuardForUser=()=>{
   const [user]=useContext(OuthContext)
     return (user ? <Navigate to ="/home" /> : <Outlet/>)
}

export default GuardForUser