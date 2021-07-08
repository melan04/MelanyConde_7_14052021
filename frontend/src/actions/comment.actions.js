import axios from "axios";

export const GET_COMMENTS = "GET_COMMENTS";
export const ADD_COMMENTS = "ADD_COMMENTS";

const token = localStorage.getItem("jwt")

export const getComments = (articleId) => {
    return (dispatch) => {
        return axios
            ({
                method: "get",
                url: "http://localhost:8080/api/articles/" + articleId + "/comments/",
                headers: { 'Authorization': 'Bearer ' + token },
            })
            .then((comment) => {
                dispatch({ type: GET_COMMENTS, payload: { articleId, comments: comment.data } })
            })
            .catch((err) => console.log(err))
    }
}


export const addComment = (articleId, userId, content) => {

    return (dispatch) => {
        return axios
            ({
                method: "post",
                url: "http://localhost:8080/api/comments/",
                headers: { 'Authorization': 'Bearer ' + token, 'Content-Type' : 'application/json'},
                data: {userId, content,articleId},
            })
            .then((res) => {
                console.log(res);
                dispatch({ type: ADD_COMMENTS, payload: { articleId, comments: res.data } });
            })
            .catch((err) => console.log(err))
    }
}