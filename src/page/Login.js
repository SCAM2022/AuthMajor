import React from "react";
import ImageAuth from "../components/ImageAuth/ImageAuth";
import OtpAuth from "../components/OptAuth/OtpAuth";
import TextAuth from "../components/TextAuth/TextAuth";

function Login() {
  const [page, setPage] = React.useState(1);

  const [email, setEmail] = React.useState("");
  const [mobileNo, setMobileNo] = React.useState("");
  const [password, setPassword] = React.useState("");

  console.log("login page");
  return (
    <>
      {page === 1 && (
        <TextAuth
          setPage={setPage}
          email={email}
          password={password}
          setPassword={setPassword}
          setEmail={setEmail}
          setMobileNo={setMobileNo}
        />
      )}
      {page === 2 && (
        <ImageAuth email={email} password={password} setPage={setPage} />
      )}
      {page === 3 && (
        <OtpAuth mobileNo={mobileNo} setPage={setPage} email={email} />
      )}
    </>
  );
}

export default Login;
