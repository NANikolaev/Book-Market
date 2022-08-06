import {Outlet, Navigate } from "react-router-dom";
import {useContext} from "react";
import OuthContext from "../contexts/OuthContext";

function GuardForGuest(){
   const [user]=useContext(OuthContext)
     return (user ? <Outlet/>: <Navigate to ="/login" replace/>)
}

export default GuardForGuest