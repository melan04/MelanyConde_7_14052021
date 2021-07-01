import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { isEmpty, timestampParser } from '../Utils';
import { NavLink } from 'react-router-dom';
import { addPost, getPosts } from '../../actions/post.actions';


const NewPostForm = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [content, setContent] = useState("");
    const [title, setTitle] = useState("");

    // const [postPicture, setPostPicture] = useState(null);
    // const [video, setVideo] = useState("");
    // const [file, setFile] = useState();
    const dispatch = useDispatch();
    const user = useSelector((state) => state.userReducer);


    // const handlePicture = (e) => {
    //     setPostPicture(URL.createObjectURL(e.target.files[0]));
    //     setFile(e.target.files[0]);
    //     setVideo("");
    // };


    const handlePost = async () => {
        // if (content || postPicture || video) {
        if (content || title) {
            const data = new FormData();

            // data.append('articleUrl', user.id);
            data.append('content', content);
            data.append('title', title);
            data.append('userID', user.id)
            // if (file) data.append("file", file)
            // data.append('articleUrl', video)


            await dispatch(addPost(data));

            dispatch(getPosts());
            cancelPost();

        } else {
            alert("Entrez votre message")
        }
    };

    const cancelPost = () => {
        setTitle('');
        setContent('');
        // setPostPicture('');
        // setVideo('');
        // setFile('')
    };

    useEffect(() => {
        if (!isEmpty(user)) setIsLoading(false);

        // const handleVideo = () => {
        //     let findLink = content.split(" ");
        //     for (let i = 0; i < findLink.length; i++) {
        //         if (
        //             findLink[i].includes("https://www.yout") ||
        //             findLink[i].includes("https://yout")
        //         ) {
        //             let embed = findLink[i].replace("watch?v=", "embed/");
        //             setVideo(embed.split("&")[0]);
        //             findLink.splice(i, 1);
        //             setContent(findLink.join(" "));
        //             setPostPicture('');
        //         }
        //     }
        // };


        // handleVideo();
    }, [user, content, title]);
    // }, [user, content, title, video]);

    return (
        <div className="post-container">
            {isLoading ? (
                <i className="fas fa-spinner fa-pulse"></i>
            ) : (
                <>
                    <NavLink exact to="/profil">
                        <div className="user-info">
                            <img src={"http://localhost:8080/images/" + user.imageUrl} alt="userpix" />
                        </div>
                    </NavLink>
                    <div className="post-form">
                        <textarea
                            name="title"
                            // id="title"
                            placeholder="Inscrire le titre"
                            onChange={(e) => setTitle(e.target.value)}
                            value={title}
                        />
                        <textarea
                            name="content"
                            // id="content"
                            placeholder="Quoi de  neuf ?"
                            onChange={(e) => setContent(e.target.value)}
                            value={content}
                        />
                        {/* {content || title || postPicture || video.length > 20 ? ( */}
                        {content || title > 20 ? (
                            <li className="card-container">
                                <div className="card-left">
                                    <img src={"http://localhost:8080/images/" + user.imageUrl} alt="userpix" />
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
                                    {/* <img src={postPicture} alt="" />
                                    {video && (
                                        <iframe
                                            src={video}
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                            title={video}
                                        ></iframe>
                                    )} */}
                                </div>

                            </li>

                        ) : null}
                        <div className="footer-form">
                            {/* <div className="icon">
                                {isEmpty(video) && (
                                    <>
                                        <img src="./img/icons/picture.svg" alt="img" />
                                        <input type="file" id="file-upload" name="file"
                                            accept=".jpg, .jpeg .png"
                                            onChange={(e) => handlePicture(e)} />
                                    </>
                                )}
                                {video && (
                                    <button onClick={() => setVideo('')}> Supprimer vidéo
                                    </button>
                                )}
                            </div> */}
                            <div className="btn-send">
                                {/* {content|| postPicture || video.length > 20 ? ( */}
                                {content || title > 20 ? (
                                    <button className="cancel" onClick={cancelPost}> Annuler message </button>
                                ) : null}
                                <button className="send" onClick={handlePost}>Envoyez</button>
                            </div>
                        </div>

                    </div>
                </>

            )}
        </div>
    );
};

export default NewPostForm;