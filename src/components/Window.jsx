import React, { useState, useRef, PropsWithChildren } from "react";
import Draggable from "react-draggable";

export const window = (children, props) => {

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
        <div className="box bg-green-500 w-1/3" ref={nodeRef}>
          I am the component dude
        
        </div>
      </Draggable>
    );
  } else {
    programm =
      // <Draggable {...dragHandlers} nodeRef={nodeRef}>
      //   <div className="box bg-green-500 w-1/3" ref={nodeRef}>
      //     Oh no
      //   </div>
      // </Draggable>
      null;
  }

  return <>{programm}</>;
};

