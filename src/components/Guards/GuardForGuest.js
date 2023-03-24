import {Outlet, Navigate } from "react-router-dom";
import {useContext} from "react";
import {OuthContext} from "../../contexts";

const GuardForGuest=()=>{
   const [user]=useContext(OuthContext)
    return (user ? <Outlet/>: <Navigate to ="/sign-in" replace/>)
}

export default GuardForGuest