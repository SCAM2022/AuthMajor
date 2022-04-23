import React from "react";
import "./AuthImage.css";
function AuthImage({ d, ...props }) {
  const imgSelectHandler = (e, val) => {
    console.log(e.target.id, val);
    var image = document.getElementById(e.target.id);
    if (image.classList.contains("selected")) {
      return;
    }
    // else {
    // }
    // images.forEach(function (i) {
    // image.addEventListener("click", function (event) {
    image.classList.toggle("selected");
    image.classList.toggle("overlay");
    props.setOrder((prev) => prev + val);

    // });
    // });
  };
  return (
    <div>
      <img
        src={d.url}
        className="selectableImg"
        alt=""
        onClick={(e) => imgSelectHandler(e, d.id)}
        id={`img-id-${d?.id}`}
        key={`img-id-${d?.id}`}
      />
    </div>
  );
}

export default AuthImage;
