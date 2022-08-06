import "./CartCard.css";
import {Link} from "react-router-dom";

import useOuthRequest from "../../hooks/useOuthRequest";
import {remove} from "../../services/userService";

function CartCard({book,setTotalPrice,setOrders}) {

    const outhRequest=useOuthRequest()
    
    function removeBook(){
         remove(book._id,outhRequest)
         .then(orders=>{
            setOrders(orders)
            setTotalPrice((price)=>price-book.price)
         })
    }

    return (

        <div className="card-book">
            <Link className="book-img" to={`/book/details/${book._id}`}><img src={book.image} /></Link>
            <div className="body">
                <p className="book-title">{book.title}</p>
                <p className="book-author"><span>author:</span> {book.author}</p>
            </div>
            <div className="book-price">
                <p>Price $: <span>{book.price}</span></p>
                <button onClick={removeBook}>remove <i className="fa fa-times"></i> </button>
            </div>
        </div>

    )
}

export default CartCard