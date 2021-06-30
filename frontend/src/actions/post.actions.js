import axios from "axios";

//posts

export const GET_POSTS = "GET_POSTS";
const token = localStorage.getItem("jwt")

export const getPosts = () => {
    return (dispatch) => {
        return axios
        ({
            method: "get",
            url: `${process.env.REACT_APP_API_URL}api/articles`,
            headers: { 'Authorization': 'Bearer ' + token },
        })
        .then((res) => {
            console.log(res)
            dispatch ({type : GET_POSTS, payload:res.data})
        }) 
        .catch ((err)=> console.log(err))
    }
}