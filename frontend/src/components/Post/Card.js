import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updatePost } from '../../actions/post.actions';
import { dateParser } from '../Utils';
import DeleteCard from './DeleteCard';
// import LikeButton from './LikeButton';

const Card = ({ article }) => {
    const [isUpdated, setIsUpdated] = useState(false);
    const [textUpdate, setTextUpdate] = useState(null);
    const users = useSelector((state) => state.usersReducer);
    const user = useSelector((state) => state.userReducer);
    const dispatch = useDispatch();
    // const comments = useSelector((state)=> state.commentsReducer)


    const updateItem = () => {
        if (textUpdate) {
           dispatch(updatePost(article.id, textUpdate))
        }
        setIsUpdated(false);
    }

    return (
        <li className="card-container" key={article.id}>
            <div className="card-left">
                {users.map((user) => {
                    if (user.id === article.userId && user.imageUrl) {
                        return <img src={"http://localhost:8080/images/" + user.imageUrl}
                            alt="user" key={"id" + article.id} />
                    } else if (user.id === article.userId && !user.imageUrl) {
                        return null
                    } else {
                        return null
                    }
                })}
            </div>
            <div className="card-right">
                <div className="card-header">
                    <div className="pseudo">
                        {users.map((user) => {
                            if (user.id === article.userId) {
                                return <h3>{user.firstname}</h3>
                            } else {
                                return null
                            }
                        })}
                    </div>
                    <span>{dateParser(article.createdAt)}</span>
                </div>
                <p>{article.title}</p>
                {isUpdated === false && <p>{article.content}</p>}
                {isUpdated && (
                    <div className="update-post">
                        <textarea
                            defaultValue={article.content}
                            onChange={(e) => setTextUpdate(e.target.value)}
                        />
                        <div className="button-container" onClick={updateItem}>
                            <button className="btn">
                                Valider les modifications
                            </button>
                        </div>
                    </div>
                )}
                {article.articleUrl
                    ? <a target="_blank" rel="noopener noreferrer" className="nav-link" href={article.articleUrl} >{article.articleUrl}</a> : null}

                {user.id === article.userId && (
                    <div className="button-container">
                        <div onClick={() => setIsUpdated(!isUpdated)}>
                            <img src="./img/icons/edit.svg" alt="edit" />
                        </div>
                        <DeleteCard id= {article.id} />
                    </div>
                )}

                <div className="card-footer">
                    <div className="comment-icon">
                        <img src="./img/icons/message1.svg" alt="comment" />
                        <span>"Ajouter les commentaires"</span>
                    </div>
                    "Like à ajouter"
                </div>
            </div>
        </li>
    );
};

export default Card;