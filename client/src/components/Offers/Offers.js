import "./Offers.css";
import {Link} from "react-router-dom";
import { useState,useEffect } from "react";

import useOuthRequest from "../../hooks/useOuthRequest";
import OfferCard from "../Cards/Offer-Card";
import {getUserOffers} from "../../services/userService";

function Offers() {
   
    const [offers,setOffers]=useState([])
    const outhRequest=useOuthRequest()
    useEffect(()=>{
         getUserOffers(outhRequest)
         .then(offers=>setOffers(offers))
    },[])


    return (
        <div className="offers">
            <div className="offers-container">
                <h4>My Offers - {offers.length}</h4>
                 {offers.length > 0
                  ?<div className="user-offers">
                    {offers.map(x=><OfferCard key={x._id} book={x} setOffers={setOffers} />)} 
                  </div>
                  : <h2>Currently no offers - <Link to="/add-book">Add Book</Link></h2>
                 }
                
            </div>
        </div>
    )
}

export default Offers