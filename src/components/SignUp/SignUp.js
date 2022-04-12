import React, { useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import "./SignUp.css";
import auth from "../../firbase.init";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const [createUserWithEmailAndPassword, user] =
    useCreateUserWithEmailAndPassword(auth);

  const handleEmailBlur = (event) => {
    setEmail(event.target.value);
  };
  const handlePassBlur = (event) => {
    setPass(event.target.value);
  };
  const handleConfirmPassBlur = (event) => {
    setConfirmPass(event.target.value);
  };
  if (user) {
    navigate("/shop");
  }
  const handleCreateUser = (event) => {
    event.preventDefault();
    if (pass !== confirmPass) {
      setError("Password did not match.");
      return;
    } else {
      setError("");
    }
    if (pass < 6) {
      setError("Password must be 6 characters or longer!");
      return;
    }
    createUserWithEmailAndPassword(email, pass);
  };
  return (
    <div className="form-container">
      <div>
        <h2 className="form-title">Sign Up</h2>
        <form onSubmit={handleCreateUser}>
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
              onBlur={handlePassBlur}
              type="password"
              name="password"
              id="password"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPass">Confirm password</label>
            <input
              onBlur={handleConfirmPassBlur}
              type="password"
              name="password"
              id="confirmPass"
              required
            />
          </div>
          <p className="error-message">{error}</p>
          <input type="submit" value="Sign Up" className="form-submit" />
        </form>
        <p>
          Already have an account?{" "}
          <Link className="form-link" to="/login">
            Log In
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

export default SignUp;
