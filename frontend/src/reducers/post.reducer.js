import { ADD_COMMENTS, DELETE_COMMENTS, GET_COMMENTS } from "../actions/comment.actions";
import { DELETE_POST, GET_POSTS, UPDATE_POST, ADD_POST } from "../actions/post.actions";

const initialState = {};

export default function postReducer(state = initialState, action) {
    switch (action.type) {
        case GET_POSTS:
            return action.payload;

        case ADD_POST:
            return action.payload;

        case UPDATE_POST:
            return state.map((article) => {
                if (article.id === action.payload.articleId) {
                    return {
                        ...article,
                        content: action.payload.content,
                    };
                } else return article;
            });

        case DELETE_POST:
            return state.filter((article) => article.id !== action.payload.articleId)

        case GET_COMMENTS:
            return state.map((article) => {
                if (article.id === action.payload.articleId) {
                    return {
                        ...article,
                        comments: action.payload.comments,
                    };
                } else return article;
            });

        case ADD_COMMENTS:
            return state.map((article) => {
                if (article.id === action.payload.articleId) {
                    return {
                        ...article,
                        comments: action.payload.comments,
                    };
                } else return article;
            });


        case DELETE_COMMENTS:
                return state.map((article) => {
                    if (article.id === action.payload.articleId) {
                        return {
                            ...article,
                            comments: article.comments.filter((comment) => comment.id !== action.payload.commentId),
                        };
                    } else return article;
                });

        default:
            return state;
    }
}

