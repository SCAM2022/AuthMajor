import React from "react";
import axios from "axios";
import "./SetTextAuth.css";
function SetTextAuth({
  email,
  setEmail,
  password1,
  setPassword1,
  password2,
  setPassword2,
  setPage,
  prevEmail,
  setPrevEmail,
  prevPassword,
  setPrevPassword,
}) {
  const textAuthHandler = (e) => {
    e.preventDefault();
    console.log("*");
    if (password1 !== password2) {
      alert("Please enter same password");
      return;
    }
    const data = {
      email: email,
      password: password1,
    };

    if (data.email === prevEmail && data.password === prevPassword) {
      setPage(2);
      return;
    }

    const sendData = async () => {
      try {
        const r = await axios.post(`http://localhost:5000/user/signup`, data);
        return r?.data;
      } catch (e) {
        console.log(e);
      }
    };
    sendData()
      .then((res) => {
        console.log("response after sending req->", res);
        if (res?.success) {
          setPrevPassword(data?.password);
          setPrevEmail(data?.email);

          setPage(2);
        } else {
          alert("Please try again");
          return;
        }
      })
      .catch((e) => console.log(e));
  };

  React.useState(() => {
    if (localStorage.getItem("tmpEmail")) {
      setEmail(localStorage.getItem("tmpEmail"));
      localStorage.removeItem("tmpEmail");
    }
  }, []);

  return (
    <>
      <h1>SignUp Page</h1>
      <h2>LEVEL-1 Text Password Signup</h2>

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
            placeholder="e-mail"
            required
          />
        </div>
        <div className="signup_pass">
          <svg className="icon">
            <use xlinkHref="#icon-lock"></use>
          </svg>
          <input
            value={password1}
            type="password"
            name="password1"
            id="signup_pass1"
            placeholder="password"
            required
            onChange={(e) => setPassword1(e.target.value)}
          />
        </div>
        <div className="signup_pass">
          <svg className="icon">
            <use xlinkHref="#icon-lock"></use>
          </svg>
          <input
            value={password2}
            type="password"
            name="password2"
            id="signup_pass2"
            placeholder="re-enter password"
            required
            onChange={(e) => setPassword2(e.target.value)}
          />
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
    </>
  );
}

export default SetTextAuth;
