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
      email: "abcd@gmail.com",
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
      <button onClick={() => props.setPage(2)}> Goto next page</button>
      <button onClick={authHandler}> check password</button>
    </>
  );
}

export default ImageAuth;
