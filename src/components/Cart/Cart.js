import { useState,useEffect } from "react";
import { Link } from "react-router-dom";

import {useOuthRequest} from "../../hooks"
import { getCartContent } from "../../services";

import CartCard from "../Cards/CartCard/CartCard";

import { StyledSection,StyledHeading,StyledInnerHeading,StyledParagraph,StyledButton } from "./elements";


const Cart =()=>{
    
    let [show,setShow]=useState(false); 
    let [orders,setOrders]=useState([]);
    let [totalPrice,setTotalPrice]=useState(0);
    let outhRequest=useOuthRequest();

    useEffect(()=>{
        getCartContent(outhRequest)
        .then(orders=>{
         let total=0
         orders.forEach(x => {total+=Number(x.price)});
         setTotalPrice(total.toFixed(2))
         setOrders(orders)
         setShow(true)
        })
     },[])

    return (
        <StyledSection>
         <StyledHeading>My Order</StyledHeading>
          {orders.length > 0
           ? <>
             { orders.map((x,i)=><CartCard key={i} order={x} setTotalPrice={setTotalPrice} setOrders={setOrders}/>)}
             <StyledParagraph>Total Price: {totalPrice}$</StyledParagraph>
             <StyledButton>Complete Order</StyledButton>
             </>
           :  <StyledInnerHeading show={show} >Cart is empty. Check out - <Link to="/catalog">Catalog</Link></StyledInnerHeading>
          }
        </StyledSection>
    )


};

export default Cart