import React from "react";
import axios from "axios";

import AuthImages from "../AuthImages/AuthImages";
import "./SetImageAuth.css";

function SetImageAuth(props) {
  const [order, setOrder] = React.useState("");
  const [shuffle, setShuffle] = React.useState(false);

  const nextPageHandler = async () => {
    if (!order) {
      console.log("No images selected");
      alert("Please select images!");
      return;
    }
    const payload = {
      email: props?.email,
      password: order,
    };

    try {
      const r = axios.post(`http://localhost:5000/Guser/signup`, payload);
      console.log("response after setting graphical pass->", r);
      setShuffle((e) => !e);
      props?.setPage(3);
      alert("successfully signedUp");
    } catch (e) {
      alert("try again!!");
      setShuffle((e) => !e);

      console.log(e);
    }
  };

  return (
    <>
      <h2>LEVEL-2 Image Password Signup</h2>
      <AuthImages
        order={order}
        setOrder={setOrder}
        shuffle={shuffle}
        setShuffle={setShuffle}
      />
      <div className="prev_btn">
        <button className="prev-btn" onClick={() => props.setPage(1)}>
          {" "}
          Goto prev page
        </button>
        <button className="prev-btn" onClick={() => nextPageHandler()}>
          {" "}
          Submit Password
        </button>
      </div>
    </>
  );
}

export default SetImageAuth;
