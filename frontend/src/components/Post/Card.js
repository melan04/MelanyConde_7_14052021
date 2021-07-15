import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updatePost } from "../../actions/post.actions";
import { dateParser } from "../Utils";
import DeleteCard from "./DeleteCard";
import CardComments from "./CardComments";
import { getComments } from "../../actions/comment.actions";

// import LikeButton from './LikeButton';

const Card = ({ article }) => {
  const [isUpdated, setIsUpdated] = useState(false);
  const [textUpdate, setTextUpdate] = useState(null);
  const [showComments, setShowComment] = useState(false);
  const users = useSelector((state) => state.usersReducer);
  const user = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    if (showComments) {
      dispatch(getComments(article.id));
    }
  }, [showComments, article.id, dispatch]);

  const updateItem = () => {
    if (textUpdate) {
      dispatch(updatePost(article.id, textUpdate));
    }
    setIsUpdated(false);
  };

  return (
    <li className="card-container" key={article.id}>
      <div className="card-left">
        {users.map((user) => {
          if (user.id === article.userId && user.imageUrl) {
            return (
              <img
                src={"http://localhost:8080/images/" + user.imageUrl}
                alt="user"
                key={"id" + article.id}
              />
            );
          } else if (user.id === article.userId && !user.imageUrl) {
            return null;
          } else {
            return null;
          }
        })}
      </div>
      <div className="card-right">
        <div className="card-header">
          <div className="pseudo">
            {users.map((user) => {
              if (user.id === article.userId) {
                return <h3>{user.firstname}</h3>;
              } else {
                return null;
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
              <button className="btn">Valider les modifications</button>
            </div>
          </div>
        )}

        {article.articleUrl && (
          <img  src={"http://localhost:8080/images/" + article.articleUrl} alt="article" className="card-pic" key = {"articleImage" + user.id}/>
        )}

        {user.isAdmin && (
          <div className="button-container">
            <div onClick={() => setIsUpdated(!isUpdated)}>
              <img src="./img/icons/edit.svg" alt="edit" />
            </div>
            <DeleteCard id={article.id} />
          </div>
        )}

        {user.id === article.userId && (
          <div className="button-container">
            <div onClick={() => setIsUpdated(!isUpdated)}>
              <img src="./img/icons/edit.svg" alt="edit" />
            </div>
            <DeleteCard id={article.id} />
          </div>
        )}

        <div className="card-footer">
          <div className="comment-icon">
            <img
              onClick={() => setShowComment(!showComments)}
              src="./img/icons/message1.svg"
              alt="comment"
            />

            <span>{article.comments && article.comments.length}</span>
          </div>
        </div>

        {showComments && <CardComments comments={article.comments} articleId = {article.id} userId = {user.id} />}
      </div>
    </li>
  );
};

export default Card;


