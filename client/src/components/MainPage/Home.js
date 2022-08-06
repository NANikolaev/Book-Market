import "./Home.css";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import PreviewCard from "../Cards/Preview-Card";
import { getCatalog } from "../../services/bookService"

function Home() {

  const [newBooks, setNewBooks] = useState([]);
  const [topBooks, setTopBooks] = useState([]);

  useEffect(() => {
    getCatalog()
      .then(catalog => {
       let newest = catalog.slice(catalog.length - 5);
        let top15 = catalog.sort((a, b) => b.views - a.views).slice(0, 15)
       setNewBooks(newest)
       setTopBooks(top15)
     })
  }, [])
  
 


  return (
    <div className="home-container">
      <img src='/images/stylish-bright-poster-people-reading-books-orange-background-banner-saying-book-festival-date-promotion-colorful-118386605 – Копие.jpg'/>
      <div className="intro">
        <div className="intro-image">
          <img src="/images/64585_939165_52624_image.jpg"/>
        </div>
        <section id="info">
          <div className="title-dsc">
             <img className="my-books" src="/images/1000_F_216109211_axXKFnEB3AGoKUnevT2hXoIsLVdJden3.jpg"/>
          </div>
           
           <h2>New Additions</h2>
          <ul>
            {newBooks.length>0 && newBooks.map(book =><Link key={book._id} to={`/book/details/${book._id}`}><img src={book.image} alt="cover" />{book.title}</Link>)}
          </ul>
        </section>
      </div>
      <h2>Most Viewed</h2>
      <div id="most-viewed">
        {topBooks.length>0 &&  topBooks.map(book => <PreviewCard key={book._id} book={book} />)}
      </div>

    </div>
  )
}

export default Home