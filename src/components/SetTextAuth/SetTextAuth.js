import React from "react";

function SetTextAuth({ email, setEmail, password, setPassword, setPage }) {
  const textAuthHandler = (e) => {
    e.preventDefault();
    console.log("*");
    setPage(2);
  };

  return (
    <>
      <h1>SignUp Page</h1>
      <h2>Text Auth</h2>
      <form className="signup_container" onSubmit={textAuthHandler}>
        <div className="signup_email">
          <label htmlFor="email">Email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            name="email"
            id="signup_email"
            required
          />
        </div>
        <div className="signup_pass">
          <label htmlFor="email">Password</label>
          <input
            value={password}
            type="password"
            name="password"
            id="signup_pass"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <button type="submit">SUBMIT</button>
        </div>
      </form>
    </>
  );
}

export default SetTextAuth;
