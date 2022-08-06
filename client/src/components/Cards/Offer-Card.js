import "./Offer-Card.css"
import { Modal, ModalBody, ModalFooter, Button } from "reactstrap";
import { useState } from "react";
import { Link } from "react-router-dom";

import { del } from "../../services/bookService";
import useOuthRequest from "../../hooks/useOuthRequest";


function OfferCard({ book, setOffers }) {

    const [show, setShow] = useState(false)
    const outhRequest = useOuthRequest()

    function toggle() { setShow(!show) }
    function deleteBook() {
        del(book._id, outhRequest)
            .then(() => {
                setOffers(offers => {
                    let offersLeft = offers.filter(x => x._id !== book._id)
                    return offersLeft
                })
            })
    }

    return (
        <div className="offer-card">
            <img src={book.image} />
            <div className="offer-opt">
                <Link to={`/book/details/${book._id}`}>Details</Link>
                <button className="del-btn" onClick={toggle} >Delete </button>
                <Modal returnFocusAfterClose={false} isOpen={show} centered={true}>
                    <ModalBody className="del-modal">
                        <span >"{book.title}"</span> will be deleted!
                    </ModalBody>
                    <ModalFooter>
                        <Button color="success" onClick={deleteBook} >Yes</Button>
                        <Button color="danger" onClick={toggle}>No</Button>
                    </ModalFooter>
                </Modal>
            </div>
        </div>
    )
}

export default OfferCard