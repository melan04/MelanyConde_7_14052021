import React, { useState } from "react";
import axios from "axios";
import SignInForm from "./SignInForm";


const SignUpForm = () => {
    const [formSubmit, setFormSubmit] = useState(false);
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [controlPassword, setControlPassword] = useState("");

    const handleRegister = async (e) => {
        e.preventDefault();
        const registerError = document.querySelector(".register.error");
        const passwordConfirmError = document.querySelector(
            ".password-confirm.error"
        );

        passwordConfirmError.innerHTML = "";

       
            if (password !== controlPassword) {
                passwordConfirmError.innerHTML =
                    "Les mots de passe ne correspondent pas";

        } else {
            await axios({
                method: "post",
                url: `${process.env.REACT_APP_API_URL}api/auth/signup`,
                data: {
                    firstname,
                    lastname,
                    email,
                    password,
                },
            })
                .then((res) => {
                    console.log(res);
                    setFormSubmit(true);
                })
                .catch((err) => {
                    console.log(err.response);
                    registerError.innerHTML = err.response.data.error
                });
        }
    };

    return (
        <>
            {formSubmit ? (
                <>
                    <SignInForm />
                    <span></span>
                    <h4 className="success">
                        Enregistrement réussi, veuillez-vous connecter
                    </h4>
                </>
            ) : (
                <form action="" onSubmit={handleRegister} id="sign-up-form">
                    <label htmlFor="firstname">Prénom</label>
                    <br />
                    <input
                        type="text"
                        name="firstname"
                        id="firstname"
                        onChange={(e) => setFirstname(e.target.value)}
                        value={firstname}
                    />
                    <br />
                    <label htmlFor="lastname">Nom</label>
                    <br />
                    <input
                        type="text"
                        name="lastname"
                        id="lastname"
                        onChange={(e) => setLastname(e.target.value)}
                        value={lastname}
                    />
                    <br />
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

                    <br />
                    <label htmlFor="password-conf">Confirmer mot de passe</label>
                    <br />
                    <input
                        type="password"
                        name="password"
                        id="password-conf"
                        onChange={(e) => setControlPassword(e.target.value)}
                        value={controlPassword}
                    />
                    <div className="password-confirm error"></div>
                    <div className="register error"></div>
                    <br />
                    <input type="submit" value="Valider inscription" />
                </form>
            )}
        </>
    );
};

export default SignUpForm;