import React, { useState } from "react";
import WinBox from "react-winbox";

export const About = (props) => {
  const [windows, setWindows] = useState([]);

  const handleClose = (force, id) => {
    let state = [...windows];
    const index = state.findIndex((info) => info.id === id);
    if (index !== -1) {
      if (state[index].onclose && state[index].onclose(force)) return true; // window-specific onclose, returns true if it does not need the default close process.
      state.splice(index, 1);
      setTimeout(() => setWindows(state)); // (Notice 5)to change winbox showing state in `onclose`, MUST wrap it within `setTimeout`
    }
  };

  const winProps = {
    width: "600px",
    height: "360px",
    title: "Lets have a talk",
    className: "bg-slate-700 rounded-t-lg",
    x: "center",
    y: 30,
  };

  return (
    <>
      <WinBox
        {...winProps}
        onclose={(force) => handleClose(force, props.index)}
      >
        <div className="text-slate-100 font-sans bg-gray-500 opacity-90 p-2 h-full">
          <span className="prompt">$</span>
        </div>
      </WinBox>
    </>
  );
};
