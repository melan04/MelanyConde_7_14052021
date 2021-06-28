import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { UidContext } from './AppContext';

const Navbar = () => {


    const uid = useContext(UidContext);
    const user = useSelector((state) => state.userReducer); 

    return (
        <nav>
            <div className="nav-container">
                <div className="logo">
                    <NavLink exact to="/">
                        <div className="logo">
                            <img src="./img/icon.png" alt="icon du site" />
                            <h3>Groupomania Network</h3>
                        </div>
                    </NavLink>
                </div>
                {
                    uid ? (
                        <ul>
                            <li></li>
                            <li className ="welcome">
                                <NavLink exact to = "/profil">
                                    <h5>Bienvenue {user.firstname}</h5>
                                </NavLink>
                            </li>
                        </ul>
                    ) : (
                        <ul>
                        <li></li>
                        <li className ="welcome">
                            <NavLink exact to = "/profil">
                                <img src = "./img/icons/login.svg" alt= "login"/>
                            </NavLink>
                        </li>
                    </ul>
                    )}
            </div>
        </nav>
    );
};

export default Navbar;