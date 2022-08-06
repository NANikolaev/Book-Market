import "./AddBook.css"
import { useNavigate } from "react-router-dom"
import {
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap'

import { genres } from "../../constants";
import { create } from "../../services/bookService";
import ErrorBox from "../ErrorBox/ErrorBox";
import useOuthRequest from "../../hooks/useOuthRequest";
import useErrors from "../../hooks/useErrors";

function AddBook() {
  
  const [errors,showErrors]=useErrors()
  const navigate = useNavigate()
  const outhRequest = useOuthRequest()

  function createBook(e) {
    create(e, outhRequest)
      .then(book => navigate(`/book/details/${book._id}`))
      .catch(err => showErrors(err))

  }

  return (
    <div className="create">

      <div className="create-container">
        <h2>Add New Book</h2>
        <Form onSubmit={createBook} className="create-form">
          <FormGroup>
            <Label for="title">
              Title
            </Label>
            <Input 
              id="title"
              name="title"
              type="text"
              placeholder="title"
              required

            />
          </FormGroup>
          <FormGroup>
            <Label for="pages">
              Pages
            </Label>
            <Input
              id="pages"
              name="pages"
              type="number"
              min="0"
              placeholder="pages"
              required
            />
          </FormGroup>
          <FormGroup>
            <Label for="author">
              Author
            </Label>
            <Input
              id="author"
              name="author"
              type="text"
              placeholder="author"
              required
            />
          </FormGroup>
          <FormGroup>
            <Label for="image">
              Image Url
            </Label>
            <Input
              id="image"
              name="image"
              type="text"
              placeholder="image"
              required
            />
          </FormGroup>
          <FormGroup>
            <Label for="price">
              Price
            </Label>
            <Input
              id="price"
              name="price"
              type="number"
              step="any"
              placeholder="0.00"
              required
            />
          </FormGroup>
          <FormGroup>
            <Label for="date">
              Release On
            </Label>
            <Input
              id="date"
              name="year"
              type="number"
              min="0"
              placeholder="2020"
              required
            />
          </FormGroup>
          <FormGroup >
            <Label for="genre">
              Genre
            </Label>
            <select id="genre-opt" name="genre">
              {genres.map(g => <option key={genres.indexOf(g)} value={g.value}>{g.name}</option>)}
            </select>
          </FormGroup>
          <FormGroup className="description">
            <Label for="description">
              Description
            </Label>
            <textarea id="book-dsc" placeholder="Description" name="description" required></textarea>
          </FormGroup>

          <Input type='submit' id="submit" value='Add Book' />
        </Form>
        <ErrorBox errors={errors}/>
      </div>
    </div>
  )
}

export default AddBook