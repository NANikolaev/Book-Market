import "./Edit.css";
import { useNavigate } from "react-router-dom";

import useOuthRequest from "../../../hooks/useOuthRequest";
import useErrors from "../../../hooks/useErrors";
import ErrorBox from "../../ErrorBox/ErrorBox";
import { genres } from "../../../constants";
import { update } from "../../../services/bookService";

function Edit({ book, setBook, setActive }) {

  const [errors,showErrors]=useErrors()
  let navigate = useNavigate()
  let outhRequest = useOuthRequest()
  let currentGenre = genres.find(x => x.value === book.genre)
  let restOfGenres = genres.filter(x => x.value !== book.genre)



  function updateBook(e) {
    
    update(e, book._id, outhRequest)
      .then(book => {
        setBook(book)
        setActive("1")
        navigate(`/book/details/${book._id}`)
      })
      .catch(err =>showErrors(err))
  }


  return (
    <>
      <div className="edit">
        <h3>Edit -{book.title}</h3>
        <form onSubmit={updateBook} className="edit-form">
          <label htmlFor="title"> Title </label>
          <input type="text" name="title" placeholder="title" defaultValue={book.title} required ></input>
          <label htmlFor="pages"> Pages </label>
          <input type="number" min="0" name="pages" placeholder="pages" defaultValue={book.pages} required ></input>
          <label htmlFor="author"> Author </label>
          <input type="text" name="author" placeholder="author" defaultValue={book.author} required ></input>
          <label htmlFor="image"> Image Url </label>
          <input type="text" name="image" placeholder="url" defaultValue={book.image} required ></input>
          <label htmlFor="price"> Price </label>
          <input type="number" min="0" step="any" name="price" placeholder="0.00" defaultValue={book.price} required ></input>
          <label htmlFor="year"> Release On </label>
          <input type="number" min="0" name="year" placeholder="year" defaultValue={book.year} required ></input>
          <label htmlFor="genre">Genre</label>
          <select id="edit-opt" name="genre" >
            <option value={currentGenre.value}>{currentGenre.name}</option>
            {restOfGenres.map(x => <option key={restOfGenres.indexOf(x)} value={x.value}>{x.name}</option>)}
          </select>
          <label htmlFor="description">Description</label>
          <textarea id="edit-dsc" placeholder="Description..." name="description" defaultValue={book.description} required></textarea>

          <input type="submit" id="edit-btn" value="Edit" />
        </form>
        <ErrorBox errors={errors}/>
      </div>
    </>
  )
}

export default Edit