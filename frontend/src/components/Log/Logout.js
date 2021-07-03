import React from 'react';

const Logout = () => {
    const logout = () => {
        localStorage.clear();
        window.location = "/profil";
    }
    return (
        <li onClick={logout}>
            <img src="../img/icons/logout.svg" alt="logo logout" />
        </li>
    );
};

export default Logout;