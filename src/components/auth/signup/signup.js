import React from "react";
import { Link } from "react-router-dom";
import Button from "../../button/button";

import "./signup.css";

const Signup = () => {
    return (
        <div className="signup__wrapper">
            <h3 className="signup__title">Create Account</h3>
            <p className="signup__paragraph">Already have an account? <Link to={`/auth/signin`} >Sign In</Link> </p>
            <div className="signup">
                <div className="signup__firstname">
                    <label htmlFor="" className="label" >First name</label>
                    <input type="text" className="signup__text" />
                </div>
                <div className="signup__lastname">
                    <label htmlFor="">Last name</label>
                    <input type="text" className="signup__text" />
                </div>
                <div className="signup__email">
                    <label htmlFor="">Email address</label>
                    <input type="email" className="signup__text" />
                </div>
                <div className="">
                    <label htmlFor="">Password</label>
                    <input type="password" className="signup__password" />
                </div>
                <div className="">
                    <label htmlFor="">A little bit about you.</label>
                    <textarea type="text" rows="6" className="signup__textarea" />
                </div>
                <div className="signup__button">
                    <Button>Create Account</Button>
                </div>
            </div>
        </div>
    );
};

export default Signup;