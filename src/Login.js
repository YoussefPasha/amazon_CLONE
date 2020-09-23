import { Link } from "react-router-dom";
import React, { useState } from "react";
import { auth } from "./firebase";
import "./Login.css";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signIn = (e) => {
    e.preventDefault();
  };
  const registerButton = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {})
      .catch((error) => alert(error.message));
  };
  const NewTabFunction = () => {
    window.open("https://github.com/YoussefPasha");
  };
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>
      <div className="login__container">
        <h1>Sign-in</h1>
        <form>
          <h5 className="fontStylingStrings">E-mail</h5>
          <input
            className="inputStyling"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5 className="fontStylingStrings">Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            onClick={signIn}
            className="login__signInButton"
          >
            Sign in
          </button>
        </form>
        <p>
          By Signing-in You Will have best design ever been made
          <p>BY👇</p>
          <button
            type="button"
            onClick={NewTabFunction}
            className="Pasha__Button"
          >
            Youssef Pasha
          </button>
        </p>
        <button onClick={registerButton} className="login__registerButton">
          Create Your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
