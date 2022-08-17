import React, { useState, useRef } from "react";
import Draggable from "react-draggable";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWifi,
} from "@fortawesome/free-solid-svg-icons";

export const Skills = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const dragHandlers = {
    axis: "both",
    bounds: "parent",
    allowAnyClick: true,
    defaultPosition: { x: 200, y: 0 },
    // positionOffset: { x: "10%", y: "10%" },
  };
  const nodeRef = useRef(null);

  const closeWindow = (e) => {
    e.preventDefault();
    setIsOpen(true);
    props.handleClose(props.index);
    console.log(props.index);
  }

  let programm;
  if (!isOpen) {
    programm = (
      <Draggable {...dragHandlers} nodeRef={nodeRef}>
        <div className="wrapper w-1/3" ref={nodeRef}>
          <div className="text-left w-[600px] h-[360px] rounded-t-lg shadow-lg m-auto">
            <div className="bg-slate-300 h-8 rounded-t-lg pl-2 pt-1 flex justify-between">
              <h3 className="text-slate-900 font-mono cursor-default">
                Takinur M - a web developer and a software engineer
              </h3>
              <div className="mr-2">
              <FontAwesomeIcon icon={faWifi} className="text-red-500 hover:opacity-60" onClick={closeWindow} />
              </div>
            </div>
            <div className="text-slate-100 font-sans bg-gray-900 opacity-80 p-2 h-full">
              <div                
                class="hero-text text-center items-center content-center mt-3"
              >
                <h1 className="font-bold text-4xl md:text-3xl text-white leading-tight">                  
                  Hi, I’m Takinur. Nice to meet you.
                </h1>
                <p className="text-white text-lg text-justify leading-relaxed mt-8 font-semibold px-4">                  
                  Since beginning my journey as a freelance web developer nearly
                  3 years ago, I've done remote work for agencies, consulted for
                  startups, and collaborated with talented people to create
                  digital products for both business and consumer use. I'm a
                  quiet confident person who is naturally curious and is
                  constantly working on improving my skills resolving one
                  development problem at a time.
                </p>
              </div>
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
