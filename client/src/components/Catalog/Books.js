import "./Books.css";
import { useState, useEffect } from "react";
import { Routes, Route, Link } from 'react-router-dom';

import BooksByGenre from "../BooksByGenre/BooksByGenre";
import Loader from "../Loader/Loader";

import { getCatalog } from "../../services/bookService";
import {genres} from "../../constants"

function Books() {

  const [loading, setLoading] = useState(true)
  const [genre, setGenre] = useState('')
  const [catalog, setCatalog] = useState([])
  const [sortedBooks, setSortedBooks] = useState([])

  useEffect(() => {
    getCatalog()
      .then(catalog => {
        setLoading(false)
        setCatalog(catalog)
      })
  }, [])

  useEffect(() => {
    const criterie = genre.toLowerCase()
    const sorted = catalog.filter(book => book.genre === criterie)
    setSortedBooks(sorted)

  }, [genre])



  return (
    <div className="catalogue">
      <div className="books-genres">
        <h3>Books</h3>
        <ul className="genres" onClick={(e) => setGenre(e.target.textContent)}>
           {genres.map(g=><li key={genres.indexOf(g)}><Link to={g.value}>{g.name}</Link></li>)}
        </ul>
      </div>
      {loading
        ? <Loader />
        : <Routes>
          <Route path='/' element={<BooksByGenre books={catalog} />} />
          <Route path="*" element={<BooksByGenre books={catalog} />} />
          <Route path={genre} element={<BooksByGenre genre={genre} books={sortedBooks} />} />
          
        </Routes>
      }

    </div>

  )

}

export default Books