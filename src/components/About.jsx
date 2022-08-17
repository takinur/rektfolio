import React, { useState, useRef } from "react";
import Draggable from "react-draggable";

export const About = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dragHandlers = {
    axis: "both",
    bounds: "parent",
    allowAnyClick: true,
    defaultPosition: { x: 200, y: 200 },
    // positionOffset: { x: "10%", y: "10%" },
  };
  const nodeRef = useRef(null);

  let programm;
  if (!isOpen) {
    programm = (
      <Draggable {...dragHandlers} nodeRef={nodeRef}>
        <div className="wrapper w-1/3" ref={nodeRef}>
          {/* I am the About Component
          <button onClick={() => setIsOpen(true)}>CLOSE</button> */}
          <div className="text-left w-[600px] h-[360px] rounded-t-lg relative shadow-lg m-auto">
            <div className="bg-slate-300 h-8 rounded-t-lg pl-3">
              <div className="w-3 h-3 mt-2 mr-1 inline-block rounded-full bg-green-600"></div>
              <div className="w-3 h-3 mt-2 mr-1 inline-block rounded-full bg-yellow-600"></div>
              <div className="w-3 h-3 mt-2 mr-1 inline-block rounded-full bg-indigo-600"></div>
            </div>
            <div className="text-slate-100 font-sans bg-gray-500 opacity-90 p-2 h-full">
              <span className="prompt">$</span>
            </div>
          </div>
        </div>
      </Draggable>
    );
  } else {
    programm = null;
  }

  return programm;
};
