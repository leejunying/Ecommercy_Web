import React, { useState } from "react";
import { LoginStyled } from "./IndexStyled";

function Login() {
  const [input, setInput] = useState({
    username: "",
    password: "",
  });

  return (
    <LoginStyled>
      <div class="login-wrap">
        <h2>Login</h2>

        <div class="form">
          <input type="text" name="username" placeholder="Username" name="un" />
          <input
            type="password"
            name="password"
            placeholder="Password"
            name="pw"
          />
          <button> Sign in </button>
          <a href="#">
            {" "}
            <p> Don't have an account? Register </p>
          </a>
        </div>
      </div>
    </LoginStyled>
  );
}

export default Login;
