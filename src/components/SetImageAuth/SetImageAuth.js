import React from "react";
import axios from "axios";

import AuthImages from "../AuthImages/AuthImages";
import "./SetImageAuth.css";

function SetImageAuth(props) {
  const [order, setOrder] = React.useState("");
  const [shuffle, setShuffle] = React.useState(false);

  const sendData = async () => {
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
      alert("successfully signedUp");
      setShuffle((e) => !e);
      props?.setPage(3);
    } catch (e) {
      alert("try again!!");
      setShuffle((e) => !e);

      console.log(e);
    }
  };

  return (
    <>
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
        <button className="prev-btn" onClick={() => sendData()}>
          {" "}
          Submit Pass
        </button>
      </div>
    </>
  );
}

export default SetImageAuth;
