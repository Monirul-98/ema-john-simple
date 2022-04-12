import React, { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firbase.init";
import "./LogIn.css";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleEmailBlur = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordBlur = (event) => {
    setPass(event.target.value);
  };
  const handleUserLogIn = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(email, pass);
  };

  if (user) {
    navigate(from, { replace: true });
  }
  return (
    <div className="form-container">
      <div>
        <h2 className="form-title">Log In</h2>
        <form onSubmit={handleUserLogIn}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              onBlur={handleEmailBlur}
              type="email"
              name="email"
              id="email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              onBlur={handlePasswordBlur}
              type="password"
              name="password"
              id="password"
              required
            />
          </div>
          <p className="error-message">{error ? error.message : " "}</p>
          {loading && <p>Loading...</p>}
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
