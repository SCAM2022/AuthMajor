import axios from "axios";
import React from "react";

function OtpAuth({ email, mobileNo }) {
  const [otp, setOtp] = React.useState("");
  const [otpTimer, setOtpTimer] = React.useState(30);
  const [optSend, setOptSend] = React.useState(false);
  const [otpId, setOtpId] = React.useState(false);
  console.log("->", mobileNo);

  const verifyOtpHandler = (e) => {
    e.preventDefault();
    console.log("verify");
    const verifyOtp = async () => {
      try {
        const payload = {
          id: otpId,
          otp: otp,
          number: mobileNo,
        };
        const r = await axios.post(
          `http://localhost:5000/user/varifyOtp`,
          payload
        );
        console.log("rs", r);
        return r;
      } catch (e) {
        console.log(e);
      }
    };
    verifyOtp()
      .then((res) => {
        console.log("response->", res);
        if (res.status === 200) {
          alert("USER HAVE SUCCESSFULLY DONE 3 LEVEL AUTHENTICATION");
          return;
        }
      })
      .catch((e) => {
        console.log(e);
        alert("Please enter valid OTP");

        return;
      });
  };

  React.useEffect(() => {
    const sendOtpHandler = () => {
      const sendOtp = async () => {
        try {
          const payload = {
            email: email,
            number: mobileNo,
          };
          const r = await axios.post(
            `http://localhost:5000/user/sendOtp`,
            payload
          );
          console.log("rs", r);
          return r;
        } catch (e) {
          console.log(e);
        }
      };
      sendOtp()
        .then((res) => {
          console.log("response->", res);
          setOtpId(res.data.id);
          setOptSend(true);
        })
        .catch((e) => {
          console.log(e);
          setOptSend(true);
          alert("Please try again");
        });
      console.log("send");
    };
    if (mobileNo) {
      sendOtpHandler();
    }
  }, [mobileNo]);

  return (
    <>
      <h1>LOGIN Page</h1>
      <h2>LEVEL-3 OTP-Based Authentication</h2>
      <form className="opt_container">
        {
          <div className="mobile-no">
            <label htmlFor="otp-label">
              Enter OTP sent to *******{mobileNo?.slice(-3)}
            </label>
            <div className="otp-container">
              <img src={"/assets/otp.svg"} alt="otp-icon" />
              <input
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                type="number"
                name="otp"
                id="otp"
                placeholder="OTP"
                required
              />
            </div>
          </div>
        }

        <div className="submit_btn-container" onClick={verifyOtpHandler}>
          <button type="submit">{"VERIFY"}</button>
        </div>
      </form>
    </>
  );
}

export default OtpAuth;
