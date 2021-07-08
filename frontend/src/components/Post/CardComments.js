import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addComment, getComments } from "../../actions/comment.actions";
import { dateParser } from "../Utils";

const CardComments = ({ comments, articleId, userId }) => {
    const [content, setContent] = useState("");
    const [loadComment, setLoadComment] = useState(true);
    const users = useSelector((state) => state.usersReducer);
    const user = useSelector((state) => state.userReducer);
    const dispatch = useDispatch();

    const handleComment = (e) => {
        e.preventDefault();

        if (content) {
            dispatch(addComment(articleId, userId, content))
                .then(() => dispatch(getComments()))
                .then(() => setContent(''));
        }
    }

    useEffect(() => {
        if (loadComment)
            dispatch(getComments())
                .then(() => setLoadComment(false));
    }, [dispatch, loadComment]);

    return (
        <div className="comments-container">
            {loadComment && <i className="fas fa-spinner fa-spin"></i>}
            <ul>
                {comments && comments.length > 0 &&
                    comments.map((comment) => {
                        return (
                            <div className="comment-container" >
                                <div className="left-part">
                                    {users.map((user) => {
                                        if (user.id === comment.userId && user.imageUrl) {
                                            return (
                                                <img
                                                    src={"http://localhost:8080/images/" + user.imageUrl}
                                                    alt="user"
                                                    key={"id" + comment.id}
                                                />
                                            );
                                        } else if (user.id === comment.userId && !user.imageUrl) {
                                            return null;
                                        } else {
                                            return null;
                                        }
                                    })}
                                </div>
                                <div className="right-part">
                                    <div className="comment-header ">
                                        <div className="pseudo">
                                            {users.map((user) => {
                                                if (user.id === comment.userId && user.firstname) {
                                                    return <h3>{user.firstname}</h3>;
                                                } else {
                                                    return null;
                                                }
                                            })}
                                        </div>
                                        <span>{dateParser(comment.createdAt)}</span>
                                    </div>
                                    <p>{comment.content}</p>
                                </div>
                            </div>
                        );
                    })}

                {user.id && (
                    <form action="" onSubmit={handleComment} className="comment-form">
                        <input
                            type="text"
                            name="content"
                            onChange={(e) => setContent(e.target.value)}
                            value={content}
                            placeholder="Laisser un commentaire"
                        />
                        <br />
                        <input type="submit" value="Envoyer" />
                    </form>
                )} </ul>
        </div>
    );
};

export default CardComments;
