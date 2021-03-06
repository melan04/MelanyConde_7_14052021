import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../actions/post.actions';
import Card from './Post/Card';

const Thread = () => {
    const [loadPost, setLoadPost] = useState(true);
    const dispatch = useDispatch();
    const articles = useSelector((state) => state.postReducer);



    useEffect(() => {
        if (loadPost) {

            dispatch(getPosts());
            setLoadPost(false);

        }


    }, [dispatch, loadPost]);


    return (
        <div className="thread-container">
            {loadPost &&
                <i className="fas fa-spinner fa-spin"></i>}
            <ul>
                {articles.length > 0 &&
                    articles.map((article) => {
                        return <Card article={article} key={article.id} />;
                    })}
            </ul>
        </div>
    );
};

export default Thread;