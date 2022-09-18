import "./Details.css";
import { useState, useContext, useEffect } from "react";
import { Link, useParams, Routes, Route } from "react-router-dom";


import Description from "./Description/Description";
import Comments from "./Comments/Comments";
import Edit from "./Edit/Edit";
import AddToCartButton from "../Buttons/AddToCartButton";

import OuthContext from "../../contexts/OuthContext";
import { getSpecificBook } from "../../services/bookService";



function Details() {

    const bookId = useParams().bookId;
    const [user] = useContext(OuthContext);
    const [book, setBook] = useState({});
    const [active, setActive] = useState("1");



    useEffect(() => {
        getSpecificBook(bookId, user)
            .then(book => setBook(book))
    }, [])


    return (
        <div className="details">
            <div className="details-container">
                <div className="details-image">
                    <img src={book.image} />
                    <p>viewed : {book.views}</p>
                </div>
                <div className="details-info">
                    <div className="product">
                        <h3>{book.title}</h3>
                        <table >
                            <tbody>
                                <tr>
                                    <td>Author: {book.author} </td>
                                </tr>
                                <tr>
                                    <td> Pages: {book.pages}</td>
                                </tr>
                                <tr>
                                    <td>Released on: {book.year}</td>
                                </tr>
                                <tr>
                                    <td>Genre: {book.genre}</td>
                                </tr>
                                <tr>
                                    <td>Price : $ {book.price}</td>
                                </tr>
                            </tbody>
                        </table>

                        {!user && <p ><Link className="alt-opt" to="/login">Login</Link>/<Link className="alt-opt" to="/register">Register</Link> to order</p>}

                        {user && user.id !== book.owner && <AddToCartButton bookId={bookId} title={book.title} />}

                    </div>
                    <div className="product-container">
                        <ul >
                            <li ><Link to="description" className={active === "1" ? ' pr-btn pr-on' : 'pr-btn'} onClick={() => setActive("1")}><i className="fa fa-list-alt"></i> Description</Link></li>
                            <li ><Link to="comments" className={active === "2" ? ' pr-btn pr-on' : 'pr-btn'} onClick={() => setActive("2")}><i className="fa fa-comments-o" ></i> Comments</Link></li>
                            {user && user.id === book.owner &&
                                <li ><Link to="edit" className={active === "3" ? ' pr-btn pr-on' : 'pr-btn'} onClick={() => setActive("3")}><i className="fa fa-pencil-square-o"></i> Edit</Link></li>}

                        </ul>
                        <div className="content">
                            <Routes>
                                <Route path='/' element={<Description description={book.description} />} />
                                <Route path='description' element={<Description description={book.description} />} />
                                <Route path='comments' element={<Comments book={book} user={user} />} />
                                <Route path='edit' element={user && user.id === book.owner
                                    ? <Edit book={book} setBook={setBook} setActive={setActive} />
                                    : <Description description={book.description} />
                                } />


                            </Routes>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Details