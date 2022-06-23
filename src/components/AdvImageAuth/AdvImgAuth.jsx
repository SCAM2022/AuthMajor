import React from "react";
import sha256 from 'crypto-js/sha256';
import imagePath from "./shutterstock_451077043-hero1.jpg";
function AdvImgAuth() {
  let image = new Image();
  const [imagePieces, setImagePieces] = React.useState([]);
  const [password, setPassword] = React.useState("");
  function cutImageUp() {
    let numColsToCut = 3,
      numRowsToCut = 3;
    let widthOfOnePiece = 200,
      heightOfOnePiece = 200;
    let tmp = [];
    for (let x = 0; x < numColsToCut; ++x) {
      tmp[x] = [];
    }
    for (let x = 0; x < numColsToCut; ++x) {
      // imagePieces[x]=[];
      for (var y = 0; y < numRowsToCut; ++y) {
        var canvas = document.createElement("canvas");
        canvas.width = widthOfOnePiece;
        canvas.height = heightOfOnePiece;
        var context = canvas.getContext("2d");
        context.drawImage(
            image,
            x * widthOfOnePiece,
          y * heightOfOnePiece,
          widthOfOnePiece,
          heightOfOnePiece,
          0,
          0,
          canvas.width,
          canvas.height
        );
        tmp[y].push(canvas.toDataURL());
      }
    }
    console.log("->", tmp);
    setImagePieces(tmp);
  }
  React.useEffect(() => {
      image.onload = cutImageUp;
      image.src = imagePath;
    // cutImageUp();
  }, []);

//   cutImageUp();
  const imageClickHandler = (e) => {
    console.log(e.target.src);
    const currString = e.target.src;
function hashCode(string) {
    var hash = 0, i, chr;
    if (string.length === 0) return hash;
    for (i = 0; i < string.length; i++) {
      chr   = string.charCodeAt(i);
      hash  = ((hash << 5) - hash) + chr;
      hash |= 0; // Convert to 32bit integer
    }
    return hash;
  };
    console.log('hashed->',hashCode(currString));
    const hashedString =  String(sha256(currString));
    console.log(hashedString);
    
  }
  return (
    <>
      <h1>Advance Auth Password</h1>

      {imagePieces &&imagePieces.map((imageArr,idx1) => (
        <div>
          {imageArr.map((i,idx2) => (
            <img src={i} key={`${idx1}${idx2}`} alt="" style={{ margin: "5px" }} onClick={imageClickHandler}/>
          ))}
        </div>
      ))}
      {/* { for(var x = 0; x < numColsToCut; ++x) {
            for(var y = 0; y < numRowsToCut; ++y) {
            
            
            }
        }
    } */}
    </>
  );
}

export default AdvImgAuth;
