import React from "react";
import './Color.css'

const Color = () => {
  return (
    <div id="colorContainer">
      <span
        className="colors"
        style={{
          //Syndicate
          backgroundColor: "#8c5c91",
        }}
      ></span>
      <div
        className="colors"
        style={{
          //Covenant
          backgroundColor: "#997337",
        }}
      ></div>
      <div
        className="colors"
        style={{
          //Maurauder
          backgroundColor: "#67854e",
        }}
      ></div>
    </div>
  );
};

export { Color };
