import React, { useState } from "react";

// Set props as a parameter if you want to use them.
const BoxForm = (props) => {
  // Here I have yhe State variable that belongs to the form. It is a String.
  const [colorBox, setColorBox] = useState("");
  const [boxSize, setBoxSize] = useState(300);

  // This function handles the submit form onSubmit(). I used the preventD to prevent refreshings and called handleNewBox from the parent which takes a parameter and adds the box to the colorBoxes array. After that I cleared the input.
  const handleSubmit = (e) => {
    e.preventDefault();
    props.onNewBox({ color: colorBox, size: boxSize });
    setColorBox("");
  };

  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          <div className="col"></div>
          <div className="col bg-light border border-dark rounded border-5 p-5 shadow p-3 mb-5 bg-body rounded font-monospace">
            {/* handleSubmit gets called  whenever we submit a form */}
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Color Box: </label>
                {/* Always set the value to its state variable. I have onChange because the input will be changing. e = the function's event. Target = the input. Value = whatever is typed by the user. */}
                <input
                  className="form-control"
                  type="text"
                  onChange={(e) => setColorBox(e.target.value)}
                  value={colorBox}
                />
                <label className="form-label">Color size: </label>
                <input
                  className="form-control"
                  type="text"
                  onChange={(e) => setBoxSize(e.target.value)}
                  value={boxSize}
                />
                <input
                  className="btn btn-primary mt-3"
                  type="submit"
                  value="Add"
                />
              </div>
            </form>
          </div>
          <div className="col"></div>
        </div>
      </div>
    </div>
  );
};

export default BoxForm;
