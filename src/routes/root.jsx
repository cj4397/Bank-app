
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import './root.css'
import { users, make_user } from "../storage.js";

// function invisible(sign) {
//     // if (sign === 'sign-in') {
//     //     let email = document.getElementById('user_email').value
//     //     let password = document.getElementById('user_password').value
//     //     let id
//     //     users.forEach((e) => {
//     //         if (e.email === email) id.push(e.id)
//     //     })

//     // }

//     document.getElementById('sidebar').style.display = 'none'
// }



export default function Root() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit_sign_in = (e) => {
        e.preventDefault();

        // let user_index = users.findIndex((e) => e.email === email)
        // if (users[user_index].password === password) {
        navigate('/Home')
        // }



        console.log({ name, email, password });
        console.log(users)

        setName("");
        setPassword("");
        setEmail("");

    };


    const handleSubmit_sign_up = (e) => {
        e.preventDefault();

        users.push(make_user(name, email, password))

        console.log({ name, email, password });
        console.log(users)

        setName("");
        setPassword("");
        setEmail("");

    };


    return (
        <>

            <main id="body">
                <div className="container" id="sidebar">
                    <div className="form-container sign-up-container">
                        <form action="#" onSubmit={handleSubmit_sign_up}>
                            <h1>Create Account</h1>
                            <div className="social-container">
                                <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
                                <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
                                <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
                            </div>
                            <span>or use your email for registration</span>
                            <input id="new_name" type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                            <input id="new_email" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                            <input id="new_password" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                            <button >Sign Up</button>
                        </form>
                    </div>
                    <div className="form-container sign-in-container">
                        <form action="#" onSubmit={handleSubmit_sign_in}>
                            <h1>Sign in</h1>
                            <div className="social-container">
                                <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
                                <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
                                <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
                            </div>
                            <span>or use your account</span>
                            <input id="user_email" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                            <input id="user_password" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                            <a href="#">Forgot your password?</a>
                            <button >Sign In</button>
                        </form>
                    </div>
                    <div className="overlay-container">
                        <div className="overlay">
                            <div className="overlay-panel overlay-left">
                                <h1>Welcome Back!</h1>
                                <p>To keep connected with us please login with your personal info</p>
                                <button className="ghost" id="signIn">Sign In</button>
                            </div>
                            <div className="overlay-panel overlay-right">
                                <h1>Hello, Friend!</h1>
                                <p>Enter your personal details and start journey with us</p>
                                <button className="ghost" id="signUp">Sign Up</button>
                            </div>
                        </div>
                    </div>
                </div>

                <footer>
                    <p>
                        Created with <i className="fa fa-heart"></i> by

                    </p>
                </footer>
            </main>
        </>
    );
}