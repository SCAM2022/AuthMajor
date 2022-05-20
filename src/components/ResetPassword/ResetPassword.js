import axios from "axios";
import React from "react";
import classes from "./ResetPassword.module.css";
const ResetPassword = () => {
  //   const [passwordSent, setPasswordSent] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const resetPasswordHandler = (e) => {
    e.preventDefault();
    const resetPass = async () => {
      try {
        const r = await axios.post(
          `http://localhost:5000/user/forgetPassword`,
          { email }
        );

        return r;
      } catch (e) {
        return e;
      }
    };
    resetPass()
      .then((res) => {
        console.log("resetPass response->", res);
        if (res.status === 200) {
          alert("Please check your email.");
          return;
        }
        alert("Invalid Email, Please provide valid email.");
      })
      .catch((e) => console.log(e));
  };

  return (
    <>
      <div className={classes["reset_pass_container"]}>
        <div className={classes["img-container"]}>
          <img src={"/assets/password-key.svg"} alt="reset-icon" />
        </div>
        <form
          className={classes["email-container"]}
          onSubmit={resetPasswordHandler}
        >
          <label htmlFor="email">Please enter email</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">RESET PASSWORD</button>
        </form>
      </div>
    </>
  );
};

export default ResetPassword;
