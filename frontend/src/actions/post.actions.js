import axios from "axios";

//posts

export const GET_POSTS = "GET_POSTS";
export const ADD_POST = "ADD_POST";
export const UPDATE_POST = "UPDATE_POST";
export const DELETE_POST = "DELETE_POST";

const token = localStorage.getItem("jwt")

export const getPosts = (num) => {
    return (dispatch) => {
        return axios
            ({
                method: "get",
                url: `${process.env.REACT_APP_API_URL}api/articles`,
                headers: { 'Authorization': 'Bearer ' + token, 'Accept': 'application/json',
                'Content-Type': 'application/json' },
                
            })
            .then((res) => {
      
                dispatch({ type: GET_POSTS, payload: res.data})
            })
            .catch((err) => console.log(err))
    }
}

export const addPost = (data, userId) => {

    const token = localStorage.getItem("jwt")

    return (dispatch) => {
        return axios
            ({
                method: "post",
                url: `${process.env.REACT_APP_API_URL}api/articles`,
                headers: { 'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json'},
                data,
            })
            .then((res) => {
                dispatch({ type: ADD_POST, payload: res.data, userId });
            })
            .catch((err) => console.log(err))  
    }
}

export const updatePost = (articleId, content) => {
    return (dispatch) => {
        return axios
            ({
                method: "put",
                url: `${process.env.REACT_APP_API_URL}api/articles/` + articleId,
                headers: { 'Authorization': 'Bearer ' + token },
                data: { content },
            })
            .then((res) => {
                dispatch({ type: UPDATE_POST, payload: {content, articleId} })
            })
            .catch((err) => console.log(err))
    }
}

export const deletePost = (articleId) => {
    return (dispatch) => {
        return axios
            ({
                method: "delete",
                url: `${process.env.REACT_APP_API_URL}api/articles/` + articleId,
                headers: { 'Authorization': 'Bearer ' + token },
            })
            .then((res) => {
                dispatch({ type: DELETE_POST, payload: {articleId} })
            })
            .catch((err) => console.log(err))
    };
};