import React from "react";
import axios from "axios";
import AuthImages from "../AuthImages/AuthImages";

function ImageAuth(props) {
  const [order, setOrder] = React.useState("");
  const [shuffle, setShuffle] = React.useState(false);

  const authHandler = async () => {
    //   abcd@gmail.com
    if (!order) {
      console.log("No images selected");
      alert("Please select images!");
      return;
    }
    const payload = {
      email: props?.email,
      password: order,
    };
    setShuffle((e) => !e);
    try {
      const r = await axios.post(`http://localhost:5000/Guser/signin`, payload);
      if (r.status === 200) alert("successfully Logged in");
      else alert("try again");
      console.log("response after setting graphical pass->", r);
    } catch (e) {
      alert("try again");
      console.log(e);
    }
  };

  return (
    <>
      <h2>User SignIn</h2>
      <AuthImages
        order={order}
        setOrder={setOrder}
        shuffle={shuffle}
        setShuffle={setShuffle}
      />
      <div className="prev_btn">
        <button className="prev-btn" onClick={() => props.setPage(2)}>
          {" "}
          Goto next page
        </button>
        <button className="prev-btn" onClick={authHandler}>
          {" "}
          check password
        </button>
      </div>
    </>
  );
}

export default ImageAuth;
