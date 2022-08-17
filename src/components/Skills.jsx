import React, { useState, useRef } from "react";
import Draggable from "react-draggable";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWifi, faXmark } from "@fortawesome/free-solid-svg-icons";

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
  };

  let programm;
  if (!isOpen) {
    programm = (
      <Draggable {...dragHandlers} nodeRef={nodeRef}>
        <div className="wrapper w-1/3" ref={nodeRef}>
          <div className="text-left w-[600px] h-[360px] rounded-t-lg shadow-lg m-auto">
            <div className="bg-slate-300 h-8 rounded-t-lg pl-2 pt-1 flex justify-between">
              <div className="h-8 rounded-t-lg pl-2">
                <div className="w-3 h-3 mt-2 mr-1 inline-block rounded-full bg-green-600"></div>
                <div className="w-3 h-3 mt-2 mr-1 inline-block rounded-full bg-rose-500"></div>
                <div className="w-3 h-3 mt-2 mr-1 inline-block rounded-full bg-indigo-600"></div>
              </div>
              <div className="mr-2">
                <FontAwesomeIcon
                  icon={faXmark}
                  className="text-red-500 hover:opacity-60 text-2xl"
                  onClick={closeWindow}
                />
              </div>
            </div>
            <div className="text-slate-100 font-sans bg-gray-700 opacity-90 p-2 h-full ">
              <div className="wrapper">
              <span className="prompt inline-block">$ py -m print.json skills.json</span>
              <div className="mt-">{'{'}</div>
              <div className="mt-">{'"Languages" : { "Python", "JavaScript", "TypeScript", "HTML", "CSS", "PHP" },'}</div>
              <div className="mt-2">{'"Frameworks" : { "Django", "React", "FastAPI", "Vue", "Laravel", "Bootstrap" },'}</div>
              <div className="mt-2">{'"Database" : { "MySQL", "Postgre", "MongoDB", "MariaDB", "Oracle", "SqLite" },'}</div>
              <div className="mt-2">{'"Tools" : { "Git", "Docker", "NPM", "Terminal", "VSCODE", "Chrome" },'}</div>
              <div className="mt-2">{'"Others" : { "Linux", "Shell Scripting", "UnitTest", "ResAPI", "AWS", "TensorFLow" }'}</div>
              <div className="mt-">{'}'}</div>

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
