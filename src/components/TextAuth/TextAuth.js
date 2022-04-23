import React from "react";

function TextAuth({ email, setEmail, password, setPassword, setPage }) {
  const textAuthHandler = (e) => {
    e.preventDefault();
    setPage(2);
  };

  return (
    <div>
      <h1>Login Page</h1>
      <h2>Text Authentication Login</h2>
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
    </div>
  );
}

export default TextAuth;
