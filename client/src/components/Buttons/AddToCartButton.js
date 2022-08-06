import "./AddToCartButton.css";
import { useState } from "react"
import { Popover, PopoverHeader } from "reactstrap";

import { add } from "../../services/userService"
import useOuthRequest from "../../hooks/useOuthRequest";


function AddToCartButton({ bookId, title }) {

  const [showSuccess, setSuccess] = useState(false)
  const [showFail, setFail] = useState(false)


  const outhRequest = useOuthRequest()

  function displayBox(state) {
    state(true)
    setTimeout(() => { state(false) }, 2000)
  }

  function addToCart() {
    add(bookId, outhRequest)
      .then((res) => displayBox(setSuccess))
      .catch((err) => displayBox(setFail))
  }

  return (
    <div >
      <button id="add-to-cart" onClick={addToCart} className="btn-cart"> Add to cart <i className="fa fa-shopping-cart " ></i></button>

      <Popover flip target="add-to-cart" placement="bottom" isOpen={showSuccess}>
        <PopoverHeader className="success" >
          <span>"{title}"</span> was added to cart
        </PopoverHeader>
      </Popover>

      <Popover flip target="add-to-cart" placement="bottom" isOpen={showFail}>
        <PopoverHeader className="fail" >
          <span>"{title}"</span> is already added to cart
        </PopoverHeader>
      </Popover>
      
    </div>
  )
}


export default AddToCartButton