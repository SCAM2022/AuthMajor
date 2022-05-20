import React from "react";
import SetImageAuth from "../components/SetImageAuth/SetImageAuth";
import SetOtpAuth from "../components/SetOtpAuth/SetOtpAuth";
import SetTextAuth from "../components/SetTextAuth/SetTextAuth";
function Signup() {
  const [page, setPage] = React.useState(1);
  const [email, setEmail] = React.useState("");
  const [password1, setPassword1] = React.useState("");
  const [password2, setPassword2] = React.useState("");
  const [prevEmail, setPrevEmail] = React.useState("");
  const [prevPassword, setPrevPassword] = React.useState("");

  return (
    <>
      {page === 1 && (
        <SetTextAuth
          setPage={setPage}
          email={email}
          password1={password1}
          setPassword1={setPassword1}
          password2={password2}
          setPassword2={setPassword2}
          setEmail={setEmail}
          prevEmail={prevEmail}
          setPrevEmail={setPrevEmail}
          prevPassword={prevPassword}
          setPrevPassword={setPrevPassword}
        />
      )}
      {page === 2 && <SetImageAuth setPage={setPage} email={email} />}
      {page === 3 && <SetOtpAuth setPage={setPage} email={email} />}
    </>
  );
}

export default Signup;
