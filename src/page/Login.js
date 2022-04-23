import React from "react";
import ImageAuth from "../components/ImageAuth/ImageAuth";
import OtpAuth from "../components/OptAuth/OtpAuth";
import TextAuth from "../components/TextAuth/TextAuth";

function Login() {
  const [page, setPage] = React.useState(1);
  console.log("login page");
  return (
    <>
      {page === 1 && <TextAuth setPage={setPage} />}
      {page === 2 && <ImageAuth setPage={setPage} />}
      {page === 3 && <OtpAuth setPage={setPage} />}
    </>
  );
}

export default Login;
