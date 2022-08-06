import "./OrderButton.css";
import { useState } from "react";
import { Modal, ModalBody} from "reactstrap";

import {order} from "../../services/userService";
import useOuthRequest from "../../hooks/useOuthRequest";

function OrderButton({setOrders}){
    let [show,setShow]=useState(false)
    let outhRequest=useOuthRequest()

    function makeOrder(){
         order(outhRequest)
         .then(()=>{
            setShow(true)
            
            setTimeout(()=>{
            setOrders([])
            setShow(false)
            },3000)
         })
    }


  return(
      <div>
        <button className="order-btn" onClick={makeOrder}> Order</button>
        <Modal isOpen={show} centered={true}>
            <ModalBody className="order-modal"><img className="check" src="/images/check.png" alt="success"/>Your order has been successfully taken.</ModalBody>
        </Modal>
      </div>

  )

}

export default OrderButton