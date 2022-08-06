import {Outlet, Navigate } from "react-router-dom";
import {useContext} from "react";
import OuthContext from "../contexts/OuthContext";

function GuardForUser(){
   const [user]=useContext(OuthContext)
     return (user ? <Navigate to ="/" /> : <Outlet/>)
}

export default GuardForUser