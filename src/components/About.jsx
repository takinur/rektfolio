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
    title: "Takinur M - a web developer and a software engineer",
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
        <div className="text-slate-100 font-sans bg-gray-900 opacity-80 p-2 h-full">
          <div class="hero-text text-center items-center content-center mt-3">
            <h1 className="font-bold text-4xl md:text-3xl text-white leading-tight">
              Hi, I’m Takinur. Nice to meet you.
            </h1>
            <p className="text-white text-lg text-justify leading-relaxed mt-8 font-semibold px-4">
              Since beginning my journey as a freelance web developer nearly 3
              years ago, I've done remote work for agencies, consulted for
              startups, and collaborated with talented people to create digital
              products for both business and consumer use. I'm a quiet confident
              person who is naturally curious and is constantly working on
              improving my skills resolving one development problem at a time.
            </p>
          </div>
        </div>
      </WinBox>
    </>
  );
};
