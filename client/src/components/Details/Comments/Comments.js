import "./Comments.css";
import { useEffect, useState } from "react";
import { Popover, PopoverHeader} from "reactstrap";

import { comment } from "../../../services/bookService";

import Comment from "./Comment";
import useOuthRequest from "../../../hooks/useOuthRequest";

function Comments({ book,user}) {

  const [comments, setComments] = useState([]);
  const [text, setText] = useState('');
  let [show, setShow] = useState(false);
  let outhRequest=useOuthRequest()

  useEffect(() => setComments(book.comments), []);

  function postComment(e) {
        if(!text){
           setShow(true)
           setTimeout(() => setShow(false), 2000);
        }
        else{
           comment(book._id,text,outhRequest)
           .then(comments=>{
            setComments(comments)
            setText('')
           })
        }
       
  }
  
  return (
    <>
      {comments.length > 0  && comments.map(x => <Comment key={comments.indexOf(x)} comment={x} />)   }

      {user && comments.length < 1 && <h3>Write first comment</h3>  }

      {!user && comments.length < 1 && <h3>Still no comments</h3> }

      {user
        ? <div className="com-body">
          <textarea onChange={(e) => setText(e.target.value)} className="com-area" value={text}></textarea>
          <button id="popover" className="btn-add-com" onClick={postComment} >Add Comment</button>
          <Popover flip target='popover' isOpen={show}>
            <PopoverHeader>
              Field is empty
            </PopoverHeader>
          </Popover>
        </div>
        : ""
      }
    </>
  )
}
export default Comments