import React from 'react';
import axios  from 'axios';
// finir la fonction pour logout

const Logout = () => {
    // const logout = async () => (
    //     await axios
    //         ({
    //             method: "get",
    //             url: `${process.env.REACT_APP_API_URL}api/user/logout`,
    //             headers: { 'Authorization': 'Bearer ' + token },
    //         })
    //         .then((res) => {
    //             const array = res.data.slice(0, num)
      
    //             dispatch({ type: GET_POSTS, payload: array })
    //         })
    //         .catch((err) => console.log(err))
    // }

    //     ))
    // )

    return (
    //   <li onClick = {logout}>
          <li>
            <img src="../img/icons/logout.svg" alt="logo logout" />
  </li>
    );
};

export default Logout;