import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../features/userSlice";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const dispatch = useDispatch();

  const loginToApp = (e: any) => {
    e.preventDefault();

    dispatch(
      login({
        name: name,
        email: email, 
        password: password,
      })
    );
  };

  const register = () => {
    if (!name) {
      return alert("Please enter a full name");
    } else if (!email) {
      return alert("Please enter a email");
    } else if (!password) {
      return alert("Please enter a password");
    }
    dispatch(
      login({
        name: name,
        email: email,
        password: password,
      })
    );
  };

  return (
    <div className="login_header">
      <h1> Login here</h1>

      <div className="login">
        <form>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Full name"
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <button type="submit" onClick={loginToApp}>
            Login
          </button>
        </form>
        <p>
          Not a member?
          <span className="login_register" onClick={register}>
            Sign up
          </span>
        </p>
      </div>
    </div>
  );
}

export default Login;
