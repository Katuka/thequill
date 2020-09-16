import React from "react";
import { Link } from "react-router-dom";

import "./authreminder.css";

const AuthReminder = () => {
  return (
    <div className="authreminder">
      <h2 className="authreminder__greeting">Hey! Stranger</h2>
      <p className="authreminder__text">
        It looks like you're not authenticated. Please click the button bellow
        to log in and write your next super piece.
      </p>
      <button className="authreminder__login">Login</button>
      <p className="authreminder__signup">
        Don't have an account? <Link to="/auth/signup">Sign up</Link>
      </p>
    </div>
  );
};

export default AuthReminder;
