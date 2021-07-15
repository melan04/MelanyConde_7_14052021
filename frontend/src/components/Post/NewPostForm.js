import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isEmpty, timestampParser } from "../Utils";
import { NavLink } from "react-router-dom";
import { addPost, getPosts } from "../../actions/post.actions";

const NewPostForm = (userId) => {
    const [isLoading, setIsLoading] = useState(true);
    const [content, setContent] = useState(" ");
    const [title, setTitle] = useState(" ");
    const [articleUrl, setArticleUrl] = useState('');
    const dispatch = useDispatch();
    const user = useSelector((state) => state.userReducer);


    const handlePost = async (e) => {
        e.preventDefault();
        if (content || articleUrl || title) {

            const data = new FormData();
            data.append("content", content);
            data.append("title", title);
            data.append("userId", user.id);
            data.append("image", articleUrl);

            await dispatch(addPost(data));

            dispatch(getPosts());
            cancelPost();
        } else {
            alert("Entrez votre message");
        }
    };

    const cancelPost = () => {
        setTitle("");
        setContent("");
        setArticleUrl("");

    };

    useEffect(() => {
        if (!isEmpty(user)) setIsLoading(false);

    }, [user, content, title, articleUrl]);

    return (
        <div className="post-container">
            {isLoading ? (
                <i className="fas fa-spinner fa-pulse"></i>
            ) : (
                <>
                    <NavLink exact to="/profil">
                        <div className="user-info">
                            <img
                                src={"http://localhost:8080/images/" + user.imageUrl}
                                alt="userpix"
                            />
                        </div>
                    </NavLink>
                    <div className="post-form">
                        <textarea
                            name="title"
                            placeholder="Inscrire le titre"
                            onChange={(e) => setTitle(e.target.value)}
                            value={title}
                        />
                        <textarea
                            name="content"
                            placeholder="Quoi de  neuf ?"
                            onChange={(e) => setContent(e.target.value)}
                            value={content}
                        />
                        {content || title || articleUrl > 20 ? (
                            <li className="card-container">
                                <div className="card-left">
                                    <img
                                        src={"http://localhost:8080/images/" + user.imageUrl}
                                        alt="userpix"
                                    />
                                </div>

                                <div className="card-right">
                                    <div className="card-header">
                                        <div className="pseudo">
                                            <h3>{user.firstname}</h3>
                                        </div>
                                    </div>
                                    <span>{timestampParser(Date.now())}</span>
                                </div>
                                <div className="content">
                                    <p>{title}</p>
                                    <p>{content}</p>
                                    <img src={articleUrl} alt="" />
                                </div>
                            </li>
                        ) : null}
                        <div className="footer-form">
                            <div className="icon">
                                {isEmpty(articleUrl) && (
                                    <>
                                        <img src="./img/icons/picture.svg" alt="img" />
                                        <input
                                            type="file"
                                            id="file"
                                            name="file"
                                            accept=".jpg, .jpeg, .png"
                                            onChange={(e) => setArticleUrl(e.target.files[0])}
                                        />
                                    </>
                                )}
                                {articleUrl && (
                                    <button onClick={() => setArticleUrl("")}> Supprimer photo</button>
                                )}
                            </div>
                            <div className="btn-send">
                                {content || articleUrl || title > 20 ? (
                                    <button className="cancel" onClick={cancelPost}>
                                        {" "}
                                        Annuler message{" "}
                                    </button>
                                ) : null}
                                <button className="send" onClick={handlePost}>
                                    Envoyez
                                </button>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default NewPostForm;
