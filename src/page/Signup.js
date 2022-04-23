import React from "react";
import SetImageAuth from "../components/SetImageAuth/SetImageAuth";
import SetOtpAuth from "../components/SetOtpAuth/SetOtpAuth";
import SetTextAuth from "../components/SetTextAuth/SetTextAuth";
function Signup() {
  const [page, setPage] = React.useState(1);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <>
      {page === 1 && (
        <SetTextAuth
          setPage={setPage}
          email={email}
          password={password}
          setPassword={setPassword}
          setEmail={setEmail}
        />
      )}
      {page === 2 && <SetImageAuth setPage={setPage} email={email} />}
      {page === 3 && <SetOtpAuth setPage={setPage} />}
    </>
  );
}

export default Signup;
