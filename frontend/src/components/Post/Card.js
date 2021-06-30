import React from 'react';
import { useSelector } from 'react-redux';
import { dateParser } from '../Utils';
import LikeButton from './LikeButton';

const Card = ({ article }) => {
    const users = useSelector((state) => state.usersReducer);
    const user = useSelector((state) => state.userReducer);
    const articles = useSelector((state) => state.postReducer);


    return (
        <li className="card-container" key={article.id}>
            <div className="card-left">
                {users.map((user) => {
                    if (user.id === article.userId && user.imageUrl) {
                        return <img src = {"http://localhost:8080/images/" + user.imageUrl} 
                        alt="user" key={"id"+ article.id} />
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
                    if (user.id === article.userId && user.imageUrl) {
                        return <h3>{user.firstname}</h3>
                    } else {
                        return null
                    }
                })}
                    </div>
                    <span>{dateParser(article.createdAt)}</span>
                </div>
                <p className ="card-title">{article.title}</p>
                <p>{article.content}</p>
                {article.articleUrl
                 ? <a target="_blank" rel="noopener noreferrer" className="nav-link" href={article.articleUrl} >{article.articleUrl}</a> : null}
<div className="card-footer">
    <div className="comment-icon">
        <img src="./img/icons/message1.svg" alt="comment"/>
        <span>"Ajouter le nombre de commentaires"</span>
    </div>
    <LikeButton article={article} />
</div>
            </div>
        </li>
    );
};

export default Card;