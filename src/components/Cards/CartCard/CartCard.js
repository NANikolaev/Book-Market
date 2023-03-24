import { Link } from "react-router-dom";

import { useOuthRequest } from "../../../hooks";
import { remove } from "../../../services";

import { 
    StyledArticle,
    StyledImg,
    StyledDiv,
    StyledInnerHeading,
    StyledSmallHeading,
    StyledSpan,
    StyledParagraph,
    StyledButton
 } 
 from "./elements";

const CartCard=({order,setTotalPrice,setOrders})=>{

    const outhRequest=useOuthRequest()
    
    function removeOrder(){
         remove(order._id,outhRequest)
         .then(orders=>{
            setOrders(orders)
            setTotalPrice((price)=>(price-order.price).toFixed(2))
         })
    }

   
    return (
        <StyledArticle>
         <Link to={`/book/details/${order._id}`}><StyledImg src={order.image.url}/></Link>
          <StyledDiv>
            <StyledInnerHeading>{order.title}</StyledInnerHeading>
            <StyledParagraph>Price: {order.price}$</StyledParagraph>
            <StyledSmallHeading>By: <StyledSpan>{order.author}</StyledSpan></StyledSmallHeading>
            <StyledButton onClick={removeOrder}><StyledSpan>x</StyledSpan>remove</StyledButton>
          </StyledDiv>
        </StyledArticle>
    )

};

export default CartCard