import axios from "axios";

//posts

export const GET_POSTS = "GET_POSTS";
export const UPDATE_POST = "UPDATE_POST";

const token = localStorage.getItem("jwt")

export const getPosts = (num) => {
    return (dispatch) => {
        return axios
            ({
                method: "get",
                url: `${process.env.REACT_APP_API_URL}api/articles`,
                headers: { 'Authorization': 'Bearer ' + token },
            })
            .then((res) => {
                const array = res.data.slice(0, num)
                console.log(res)
                dispatch({ type: GET_POSTS, payload: array })
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