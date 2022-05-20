import React from "react";
import "./AuthImage.css";
function AuthImage({ d, ...props }) {
  const imgSelectHandler = (e, val) => {
    console.log(e.target.id, val);
    console.log('itemselected->',e);
    e.target.innerText = 'testing';
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
    // image.classList.toggle("img-overlay");
    props.setOrder((prev) => prev + val);

    // });
    // });
  };

  return (
    <div>
      <div className="img_container_withoverlay">
        <img
          src={d.url}
          className="selectableImg"
          alt=""
          data-count="8"
          onClick={(e) => imgSelectHandler(e, d.id)}
          id={`img-id-${d?.id}`}
          key={`img-id-${d?.id}`}
        />
        <div className={`img-overlay`}></div>
      </div>
    </div>
  );
}

export default AuthImage;
