import React from "react";
import axios from "axios";
import "./AuthImages.css";
import AuthImage from "../AuthImage/AuthImage";

const dataa = [
  {
    id: 1,
    url: "/assets/auth-images/29-200x200.jpg",
  },
  {
    id: 2,
    url: "/assets/auth-images/141-200x200.jpg",
  },
  {
    id: 3,
    url: "/assets/auth-images/171-200x200.jpg",
  },
  {
    id: 4,
    url: "/assets/auth-images/197-200x200.jpg",
  },
  {
    id: 5,
    url: "/assets/auth-images/190-200x200.jpg",
  },
  {
    id: 6,
    url: "/assets/auth-images/425-200x200.jpg",
  },
];

function AuthImages({ order, setOrder, shuffle, setShuffle }) {
  const [data, setData] = React.useState();
  React.useEffect(() => {
    const getImageList = async () => {
      try {
        const r = await axios.get(`http://localhost:5000/user/getImages`);
        console.log("response for getImage->", r);
        return r.data;
      } catch (e) {
        console.log(e);
      }
    };
    getImageList().then((res) => {
      console.log("res->", res);
      const tmp = res.map((d) => {
        return {
          id: d._id,
          url: `http://localhost:5000/${d.url}`,
        };
      });
      console.log("processed->", tmp);
      setData(tmp);
    });
  }, []);
  React.useEffect(() => {
    setOrder("");
    const sel = document.querySelectorAll(".selected");
    sel?.forEach((element) => {
      element.classList.remove("selected");
    });
    function shuffle(arra1) {
      if (arra1) {
        var ctr = arra1.length,
          temp,
          index;
        while (ctr > 0) {
          index = Math.floor(Math.random() * ctr);
          ctr--;
          temp = arra1[ctr];
          arra1[ctr] = arra1[index];
          arra1[index] = temp;
        }
        return arra1;
      }
    }
    setData(shuffle(data));
  }, [data, shuffle, setOrder]);
  console.log("order->", order);
  return (
    <>
      <div class="bn31" onClick={(e) => setShuffle((s) => !s)}>
        <span class="bn31span">Shuffle</span>
      </div>
      {/* </div> */}
      <div className="result">
        <div className="img_container">
          {data &&
            data?.map((d) => {
              return <AuthImage d={d} setOrder={setOrder} key={d.id} />;
            })}
        </div>
      </div>
    </>
  );
}

export default AuthImages;
