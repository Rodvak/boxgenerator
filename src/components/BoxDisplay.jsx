import React from "react";

// Set props as a parameter if you want to use them.
const BoxDisplay = (props) => {
  return (
    // I am using the array and maping it to get all the values inside of itself. Remember you need the key i always.
    <div className="mt-5 " style={{ display: "flex", flexWrap: "wrap" }}>
      {props.colorBoxes.map((box, i) => {
        return (
          <div
            className="m-1"
            key={i}
            style={{
              backgroundColor: box.color,
              width: parseInt(box.size),
              height: parseInt(box.size),
            }}
          ></div>
        );
      })}
    </div>
  );
};

export default BoxDisplay;
