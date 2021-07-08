import axios from "axios";

export const GET_USER = "GET_USER";
export const UPLOAD_PICTURE = "UPLOAD_PICTURE";
export const UPDATE_BIO = "UPDATE_BIO";
export const DELETE_PROFIL = "DELETE_PROFIL";

const token = localStorage.getItem("jwt")

export const getUser = (uid) => {

    const token = localStorage.getItem("jwt")

    return (dispatch) => {

        return axios
            .get(`${process.env.REACT_APP_API_URL}api/users/${uid}`, {
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            })
            .then((res) => {

             
                dispatch({ type: GET_USER, payload: res.data });

            })
            .catch((err) => {
                console.error(err)
            })
    }
}



export const uploadPicture = (data, id) => {

    const token = localStorage.getItem("jwt")

    return (dispatch) => {

        return axios

            ({
                method: "put",
                url: `${process.env.REACT_APP_API_URL}api/users/` + id,
                headers: { 'Authorization': 'Bearer ' + token },
                data,
            })
            .then((res) => {
                return axios
                    ({
                        method: "get",
                        url: `${process.env.REACT_APP_API_URL}api/users/` + id,
                        headers: { 'Authorization': 'Bearer ' + token },
                    })
                    .then((res) => {
                        dispatch({ type: UPLOAD_PICTURE, payload: res.data.imageUrl });
                    });
            })
            .catch((err) => console.error(err))
    }
}




export const updateBio = (userId, bio) => {

    const token = localStorage.getItem("jwt")

    return (dispatch) => {

        return axios

            ({
                method: "put",
                url: `${process.env.REACT_APP_API_URL}api/users/` + userId,
                headers: { 'Authorization': 'Bearer ' + token },
                data: { bio },
            })
            .then((res) => {
                dispatch({ type: UPDATE_BIO, payload: bio });

            })
            .catch((err) => console.error(err))
    }
}

export const deleteProfil = (userId) => {
    return (dispatch) => {
        return axios
            ({
                method: "delete",
                url: `${process.env.REACT_APP_API_URL}api/users/` + userId,
                headers: { 'Authorization': 'Bearer ' + token },
            })
            .then((res) => {
                dispatch({ type: DELETE_PROFIL, payload: {userId} })
            })
            .catch((err) => console.log(err))
    };
};
