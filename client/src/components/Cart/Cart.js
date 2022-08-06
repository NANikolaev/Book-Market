import "./Cart.css";
import { Link } from "react-router-dom";
import {useState,useEffect} from "react"

import CartCard from "../Cards/CartCard";
import OrderButton from "../Buttons/OrderButton";
import useOuthRequest from "../../hooks/useOuthRequest";
import {getCartContent} from "../../services/userService";


function Cart() {
    const[orders,setOrders]=useState([])
    const [totalPrice,setTotalPrice]=useState(0);
    const outhRequest=useOuthRequest()

    useEffect(()=>{
       getCartContent(outhRequest)
       .then(orders=>{
        let total=0
        orders.forEach(x => {total+=Number(x.price)});
        setTotalPrice(total.toFixed(2))
        setOrders(orders)
       })
    },[])



    return (
        <div className="cart">
            <div className="cart-container">
                <h4>My Order</h4>
                {orders.length > 0
                    
                    ? <>
                       <div className="orders">
                        {orders.map(x=><CartCard key={x._id} book={x} setTotalPrice={setTotalPrice} setOrders={setOrders} />)}
                       </div>
                       <h3>Total Cost: {totalPrice}$</h3>
                       <OrderButton setOrders={setOrders}/>
                      </>
                    : <h2>No Added books yet . Check out - <Link to="/books">Catalog</Link></h2>
                }

            </div>
        </div>
    )

}

export default Cart