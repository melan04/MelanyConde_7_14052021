import { GET_POSTS, UPDATE_POST } from "../actions/post.actions";

const initialState = {};

export default function postReducer(state = initialState, action) {
    switch (action.type) {
        case GET_POSTS:
            return action.payload;
        default:
            return state;

        case UPDATE_POST:
            return state.map((article) => {
                if (article.id === action.payload.articleId) {
                    return {
                        ...article,
                        content: action.payload.content,
                    };
                } else return article;
            });
    }
}

