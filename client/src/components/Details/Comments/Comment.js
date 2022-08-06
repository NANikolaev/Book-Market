import "./Comment.css"


function Comment({comment}) {

    return (
        <div className="comment">
            <p className="com-user">from: {comment.username}</p>
            <p className="com-text">{comment.comment}</p>
        </div>
    )
}

export default Comment
