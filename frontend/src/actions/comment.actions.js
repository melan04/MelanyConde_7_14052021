import axios from "axios";

export const GET_COMMENTS = "GET_COMMENTS";
const token = localStorage.getItem("jwt")

export const getComments = () => {
    return (dispatch) => {
        return axios
        ({
            method: "get",
            url: `${process.env.REACT_APP_API_URL}api/comments`,
            headers: { 'Authorization': 'Bearer ' + token },
        })
        .then((res) => {
            console.log(res)
            dispatch ({type : GET_COMMENTS, payload:res.data})
        }) 
        .catch ((err)=> console.log(err))
    }
}