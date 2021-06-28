import axios from "axios";

export const GET_USER = "GET_USER";


export const getUser = (uid) => {

    const token = sessionStorage.getItem("jwt")
    console.log(token)

    return (dispatch) => {

        return axios
            .get(`${process.env.REACT_APP_API_URL}api/users/${uid}`, {
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            })
            .then((res) => {

                console.log(res.data.id)
                dispatch({ type: GET_USER, payload: res.data });

            })
            .catch((err) => {
                console.error(err)
            })
    }
}