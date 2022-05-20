import React from "react";
import axios from "axios";

import "./SetOtpAuth.css";

function SetOtpAuth({ email }) {
  const [mobileNo, setMobileNo] = React.useState("");
  const [otp, setOtp] = React.useState("");
  const [otpTimer, setOtpTimer] = React.useState(30);
  const [optSend, setOptSend] = React.useState(false);
  const [otpId, setOtpId] = React.useState(false);

  const sendOtpHandler = (e) => {
    e.preventDefault();
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
        // setOptSend(true);
        alert("Please enter valid number!");
      });
    console.log("send");
  };

  const verifyOtpHandler = (e) => {
    e.preventDefault();
    console.log("verify");
    const verifyOtp = async () => {
      try {
        const payload = {
          id: otpId,
          token: otp,
          email: email,
          number: mobileNo,
        };
        const r = await axios.post(
          `http://localhost:5000/user/verifyAndSave`,
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
  React.useEffect(() => {}, []);

  return (
    <>
      <h1>SignUp Page</h1>
      <h2>LEVEL-3 OTP based Password</h2>
      {/* <h3>Please enter the Mobile Number to-be used for otp</h3> */}
      <form className="opt_container">
        {!optSend ? (
          <div className="mobile-no">
            <label htmlFor="mobile_no">Enter Mobile No.</label>
            <div className="mobile_no-container">
              <img src={"/assets/mobile-svg.svg"} alt="mobile-icon" />
              <input
                value={mobileNo}
                onChange={(e) => setMobileNo(e.target.value)}
                type="number"
                name="mobile-no"
                id="mobile-no"
                placeholder="Mobile no."
                required
              />
            </div>
          </div>
        ) : (
          <div className="mobile-no">
            <label htmlFor="otp-label">
              Enter OTP sent to *******{mobileNo.slice(-3)}
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
        )}

        <div
          className="submit_btn-container"
          onClick={optSend ? verifyOtpHandler : sendOtpHandler}
        >
          <button type="submit">{optSend ? "SUBMIT" : "VERIFY"}</button>
        </div>
      </form>
    </>
  );
}

export default SetOtpAuth;
