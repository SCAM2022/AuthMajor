import React from "react";
import axios from "axios";
import ReactLoading from "react-loading";

import { useNavigate } from "react-router-dom";

const ResetPasswordPageLoading = (props) => {
  console.log("->", window.location.search);
  const [token, setToken] = React.useState(window.location.search.substring(1));
  const [verify, setVerify] = React.useState(-1);
  const [timer, setTimer] = React.useState(-1);
  const navigate = useNavigate();
  console.log(token);
  React.useEffect(() => {
    if (timer <= 5 && timer >= 0) {
      var timeout = setTimeout(() => {
        setTimer((e) => e - 1);
      }, 1000);
    }
    // setTimer()
    if (timer === 0) {
      // setEmail()
      navigate("/signup");
    }

    return () => clearInterval(timeout);
  }, [timer]);

  const redirectToResetPage = (email) => {
    // Redirect("/signup");
    localStorage.setItem("tmpEmail", email);

    setTimer(5);
  };
  React.useEffect(() => {
    if (token) {
      const sendToken = async () => {
        try {
          const payload = {
            time: new Date().toDateString,
            token: token,
          };

          const r = await axios.post(
            `http://localhost:5000/user/resetPassword`,
            payload
          );
          return r;
        } catch (e) {
          return e;
        }
      };
      sendToken()
        .then((res) => {
          console.log("res->", res);

          if (res.status === 200) {
            setVerify(1);

            redirectToResetPage(res?.data?.email);
          } else {
            setVerify(0);
          }
        })
        .catch((e) => console.log(e));
    }
  }, [token]);

  return (
    <>
      <h1>Verifying the token...</h1>
      {verify === -1 && (
        <ReactLoading type={"cubes"} color={"gray"} height={667} width={375} />
      )}
      {verify === 0 && (
        <p style={{ fontSize: "2rem", color: "black" }}>
          Token is invalid, Please check your link...
        </p>
      )}
      {verify === 1 && (
        <p style={{ fontSize: "2rem", color: "black" }}>
          Token is valid, redirecting to reset Password Page in {timer} sec...
        </p>
      )}
    </>
  );
};

export default ResetPasswordPageLoading;
