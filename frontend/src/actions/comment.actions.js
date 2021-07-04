import axios from "axios";

export const GET_COMMENTS = "GET_COMMENTS";
export const ADD_COMMENTS = "ADD_COMMENTS";

const token = localStorage.getItem("jwt")

export const getComments = () => {
    return (dispatch) => {
        return axios
        ({
            method: "get",
            // url: `${process.env.REACT_APP_API_URL}api/articles/` + articleId + "/comments/",
            url : "http://localhost:8080/api/comments/" ,
            headers: { 'Authorization': 'Bearer ' + token },
        })
        .then((res) => {
            console.log(res)
            dispatch ({type : GET_COMMENTS, payload:res.data})
        }) 
        .catch ((err)=> console.log(err))
    }
}


export const addComments = (articleId, userId, content, firstname) => {
    return (dispatch) => {
        return axios
        ({
            method: "post",
            url : "http://localhost:8080/api/comments/" ,
            headers: { 'Authorization': 'Bearer ' + token, 'Accept': 'application/json',
            'Content-Type': 'application/json' },
            data: {content, userId, firstname, articleId}
        })
        .then((res) => {
            console.log(res)
            dispatch ({type : ADD_COMMENTS, payload:res.data})
        }) 
        .catch ((err)=> console.log(err))
    }
}