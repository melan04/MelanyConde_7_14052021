import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteComment } from '../../actions/comment.actions';

const DeleteComment = (props) => {
    const dispatch = useDispatch();
    const deleteQuote = () => {dispatch(deleteComment(props.id, props.articleId))
    }

  
    return (
        <div onClick={() => {
            if (window.confirm('Voulez-vous supprimer votre commentaire ? ')) {
                deleteQuote()
                
            }
        }}
        >
            <img src="./img/icons/trash.svg" alt="trash" />
        </div>
    );
};

export default DeleteComment;