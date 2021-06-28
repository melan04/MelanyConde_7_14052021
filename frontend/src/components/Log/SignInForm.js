import React, { useState } from "react";
import axios from "axios";


const SignInForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    const handleLogin = (e) => {
        e.preventDefault();

        axios({
            method: "post",
            url: `${process.env.REACT_APP_API_URL}api/auth/login`,
            data: {
                email,
                password,
            },
        })
            .then((res) => {
                window.location = "/profil";
                sessionStorage.setItem('jwt', res.data.token);
                sessionStorage.setItem('userID', res.data.userId)
            })
            .catch((err) => {
                console.log(err.response);
                setError(err.response.data.error)
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
            <div>{error}</div>
            <br />
            <input type="submit" value="Se connecter" />
        </form>
    );
};

export default SignInForm;