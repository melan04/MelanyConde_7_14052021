import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../actions/post.actions';
import Card from './Post/Card';

const Thread = () => {
    const [loadPost, setLoadPost] = useState(true);
    const [count, setCount ] = useState(5);
    const dispatch = useDispatch();
    const articles = useSelector((state) => state.postReducer);
    
    const loadMore = () => {
        if (window.innerHeight + document.documentElement.scrollTop + 1 > document.scrollingElement.scrollHeight) {
            setLoadPost(true);
        }
    }

    useEffect(() => {
        if (loadPost) {
            dispatch(getPosts(count));
            setLoadPost(false);
            setCount(count + 5);
        }
    

        window.addEventListener('scroll', loadMore);
        return () => window.removeEventListener('scroll', loadMore);
    }, [loadPost, dispatch, count]);

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