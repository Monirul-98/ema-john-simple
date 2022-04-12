import React from "react";
import { Link } from "react-router-dom";
import "./LogIn.css";

const LogIn = () => {
  return (
    <div className="form-container">
      <div>
        <h2 className="form-title">Log In</h2>
        <form>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" required />
          </div>
          <input type="submit" value="Log In" className="form-submit" />
        </form>
        <p>
          New to Ema-John?{" "}
          <Link className="form-link" to="/signup">
            Create new account.
          </Link>
        </p>
        <div className="form-divider">
          <div className="form-line"></div>
          <div>or</div>
          <div className="form-line"></div>
        </div>
        <button className="btn-google"> Continue with Google</button>
      </div>
    </div>
  );
};

export default LogIn;
