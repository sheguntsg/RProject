import React from "react";
import Likes from "../../Likes/Likes";
import "./comment.css";


function Comment() {
  return (
    <div className="div">
      <div className="divv">
        <div className="div1">
          <div className="img"></div>
          <input type="text" />
          <Likes/>
        </div>
        <div className="div2">
          <input></input>
        </div>
      </div>
    </div>
  );
}

export default Comment;
