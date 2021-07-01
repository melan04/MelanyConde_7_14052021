// import axios from "axios";

// export const GET_LIKES = "GET_LIKES";
// const token = localStorage.getItem("jwt")
// const  userId = localStorage.getItem("userId")
// const articleId = article.params.id;

// export const getLikes = () => {
//     return (dispatch) => {
//         return axios
//         ({
//             method: "get",
//             url: `${process.env.REACT_APP_API_URL}api/likes`,
//             headers: { 'Authorization': 'Bearer ' + token },
//         })
//         .then((res) => {
//             console.log(res)
//             dispatch ({type : GET_LIKES, payload:res.data})
//         }) 
//         .catch ((err)=> console.log(err))
//     }
// }