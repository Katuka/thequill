import React from "react";
import { Link } from "react-router-dom";
import Button from "../../button/button";

import "./signin.css";

const Signin = () => {
    return (
        <div className="signin__wrapper">
            <h3 className="signin__title">Sign In</h3>
            <p className="signin__paragraph">Don't have an account? <Link to={`/auth/signup`} >Sign Up</Link> </p>
            <div className="signin">
                <div className="signin__email">
                    <label htmlFor="">Email address</label>
                    <input type="email" className="signin__text" />
                </div>
                <div className="">
                    <label htmlFor="">Password</label>
                    <input type="password" className="signin__password" />
                </div>
                <div className="signin__button">
                    <Button>Create Account</Button>
                </div>
            </div>
        </div>
    );
};

export default Signin;