import React, { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

const SignInForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
        const loginError = document.querySelector(".login.error");

        axios({
            method: "post",
            url: `${process.env.REACT_APP_API_URL}api/auth/login`,
            data: {
                email,
                password,
            },
        })
            .then((res) => {
                window.location = "/";
                Cookies.set("jwt", res.data.token)
            })
            .catch((err) => {
                console.log(err.response);
                loginError.innerHTML = err.response.data.error;
            });
    };

    return (
        <form action="" onSubmit={handleLogin} id="sign-up-form">
            <label htmlFor="email">Email</label>
            <br />
            <input
                type="text"
                name="email"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
            />
            <br />
            <label htmlFor="password">Mot de passe</label>
            <br />
            <input
                type="password"
                name="password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
            />
            <div className="login error"></div>
            <br />
            <input type="submit" value="Se connecter" />
        </form>
    );
};

export default SignInForm;