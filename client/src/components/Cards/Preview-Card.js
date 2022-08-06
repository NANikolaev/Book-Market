import "./Preview-Card.css"

import {Link} from "react-router-dom"

function PreviewCard({book}) {

    return (
        <div className="preview-card">
            <Link to={`/book/details/${book._id}` }>
                <img src={book.image} />
                <div className="preview-info">
                    <h5>{book.title}</h5>
                    <p><span>by: </span>{book.author}</p>
                    <p><span>$ </span> {book.price}</p>
                </div>
            </Link>
        </div>
    )
}




export default PreviewCard