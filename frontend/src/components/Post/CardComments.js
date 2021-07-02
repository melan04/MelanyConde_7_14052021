import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const CardComments = () => {
    const [text, setText] = useState("");
    const users = useSelector((state) => state.usersReducer);
    const user = useSelector((state) => state.userReducer);
    const dispatch = useDispatch();
    const comments = useSelector((state) => state.commentReducer)
    const article = useSelector((state) => state.postReducer)

    const handleComment = (e) =>{
        e.preventDefault();
    }

    return (
        <div className = "comments-container">
            {comments.map((comments)=> {
                return (
                    <div className="left-part">
                    {users.map((user) => {
                        if (user.id === comments.userId && user.imageUrl) {
                            return <img src={"http://localhost:8080/images/" + user.imageUrl}
                                alt="commenter-pic" key={"id" + article.id} />
                        } else if (user.id === article.userId && !user.imageUrl) {
                            return null
                        } else {
                            return null
                        }
                    })}
                </div>
                )
            })}

        </div>
    )
};

export default CardComments;