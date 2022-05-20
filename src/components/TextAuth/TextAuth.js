import React from "react";
import axios from "axios";

import { useNavigate } from "react-router-dom";
import "./TextAuth.css";
function TextAuth({
  email,
  setEmail,
  password,
  setPassword,
  setPage,
  setMobileNo,
}) {
  const navigate = useNavigate();

  const textAuthHandler = (e) => {
    e.preventDefault();

    const sendAuth = async () => {
      try {
        const data = {
          email: email,
          password: password,
        };
        const r = await axios.post(`http://localhost:5000/user/signin`, data);
        return r;

        // console.log("response->", r);
      } catch (e) {
        console.log(e);
      }
    };
    sendAuth()
      .then((res) => {
        console.log("res->", res);
        if (res.status === 200) {
          setMobileNo(res?.data?.user?.number);
          setPage(2);
        } else {
          alert("Please enter valid email or password!!");
          return;
        }
      })
      .catch((e) => {
        console.log(e);
        alert("Please enter valid email or password!!");
        return;
      });
  };

  return (
    <div className="login_container">
      <h1>Login Page</h1>
      <h2>LEVEL-1 Text-Based Authentication</h2>
      <form className="signup_container" onSubmit={textAuthHandler}>
        <div className="signup_email">
          <svg className="icon">
            <use xlinkHref="#icon-user"></use>
          </svg>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            name="email"
            id="signup_email"
            placeholder="E-mail"
            required
          />
        </div>
        <div className="signup_pass">
          <svg className="icon">
            <use xlinkHref="#icon-lock"></use>
          </svg>
          <input
            value={password}
            type="password"
            name="password"
            id="signup_pass"
            placeholder="Password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="forgot_pass-container">
          <label
            htmlFor="resetPass"
            onClick={() => navigate("/forgotPassword")}
          >
            forgot Password?
          </label>
        </div>
        <div className="submit_btn-container">
          <button type="submit">SUBMIT</button>
        </div>
      </form>
      <svg xmlns="http://www.w3.org/2000/svg" className="icons">
        <symbol id="icon-arrow-right" viewBox="0 0 1792 1792">
          <path d="M1600 960q0 54-37 91l-651 651q-39 37-91 37-51 0-90-37l-75-75q-38-38-38-91t38-91l293-293H245q-52 0-84.5-37.5T128 1024V896q0-53 32.5-90.5T245 768h704L656 474q-38-36-38-90t38-90l75-75q38-38 90-38 53 0 91 38l651 651q37 35 37 90z" />
        </symbol>
        <symbol id="icon-lock" viewBox="0 0 1792 1792">
          <path d="M640 768h512V576q0-106-75-181t-181-75-181 75-75 181v192zm832 96v576q0 40-28 68t-68 28H416q-40 0-68-28t-28-68V864q0-40 28-68t68-28h32V576q0-184 132-316t316-132 316 132 132 316v192h32q40 0 68 28t28 68z" />
        </symbol>
        <symbol id="icon-user" viewBox="0 0 1792 1792">
          <path d="M1600 1405q0 120-73 189.5t-194 69.5H459q-121 0-194-69.5T192 1405q0-53 3.5-103.5t14-109T236 1084t43-97.5 62-81 85.5-53.5T538 832q9 0 42 21.5t74.5 48 108 48T896 971t133.5-21.5 108-48 74.5-48 42-21.5q61 0 111.5 20t85.5 53.5 62 81 43 97.5 26.5 108.5 14 109 3.5 103.5zm-320-893q0 159-112.5 271.5T896 896 624.5 783.5 512 512t112.5-271.5T896 128t271.5 112.5T1280 512z" />
        </symbol>
      </svg>
    </div>
  );
}

export default TextAuth;
