import react, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Draggable from "react-draggable";
import Logo from "./assets/LOGO_T_256.png";
import {
  faWifi,
  faVolumeHigh,
  faTerminal,
  faCircleInfo,
  faBarsProgress,
} from "@fortawesome/free-solid-svg-icons";
import { faPaperPlane, faSun } from "@fortawesome/free-regular-svg-icons";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const nodeRef = useRef(null);

  //Current Time and update every second
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  setInterval(() => {
    setTime(new Date().toLocaleTimeString());
  }, 1000);
  //Dragg Settings
  const dragHandlers = {
    axis: "both",
    bounds: "parent",
    allowAnyClick: true,
    defaultPosition: { x: 200, y: 200 },
    // positionOffset: { x: "10%", y: "10%" },
  };
  //Open program on click event
  const handleClick = (e) => {
    e.preventDefault();
    setIsOpen(true);
    console.log("Clicked", e);
  };
  let programm;
  if (isOpen) {
    programm = (
      <Draggable {...dragHandlers} nodeRef={nodeRef}>
        <div className="box bg-green-500 w-1/3" ref={nodeRef}>
          I can only be moved within my offsetParent.
        </div>
      </Draggable>
    );
  } else {
    programm = (
      // <Draggable {...dragHandlers} nodeRef={nodeRef}>
      //   <div className="box bg-green-500 w-1/3" ref={nodeRef}>
      //     Oh no
      //   </div>
      // </Draggable>
      null
    );
  }

  return (
    <div className="App">
      <header className="top-0 left-0 absolute w-full bg-gradient-to-r from-gray-700 via-gray-900 to-black py-1 ">
        <nav className="flex justify-between text-white">
          <div className="flex items-center">
            <div className="px-1 ">
              <a href="/">
                <img
                  src={Logo}
                  alt="logo"
                  className="h-5 w-6 hover:animate-ping"
                />
              </a>
            </div>
            <div className="border-l-2 border-zinc-400 px-2 hover:bg-gray-500">
            <FontAwesomeIcon icon={faCircleInfo} /> About
            </div>
            <div className="border-l-2 border-zinc-400 px-2 hover:bg-gray-500">
            <FontAwesomeIcon icon={faTerminal} /> Skills
            </div>
            <div className="border-l-2 border-zinc-400 px-2 hover:bg-gray-500">
            <FontAwesomeIcon icon={faBarsProgress} /> Work
            </div>
            <div className="border-l-2 border-zinc-400 px-2 hover:bg-gray-500">
            <FontAwesomeIcon icon={faPaperPlane} /> Contact
            </div>
          </div>
          <div className="flex items-end">
            <div className=" px-2 ">Takinur M</div>
            <div className="px-2 border-l-2 border-zinc-400">
              <FontAwesomeIcon icon={faSun} />
            </div>
            <div className="px-2">{time}</div>
            <div className="px-2 border-l-2 border-zinc-400">
              <FontAwesomeIcon icon={faVolumeHigh} />
            </div>
            <div className="px-2">
              <FontAwesomeIcon icon={faWifi} className="text-zinc-100" />
            </div>
          </div>
        </nav>
      </header>
      <div className="contaner w-full bg-green-600 h-screen flex pt-8">
        <div className="w-full relative overflow-hidden">
          <div className="bg-violet-500 w-32">
            <button onClick={handleClick}> CLick me </button>
          </div>
          {programm}
          <Draggable {...dragHandlers} nodeRef={nodeRef}>
            <div className="box bg-green-500 w-1/3" ref={nodeRef}>
              I can only be moved within my offsetParent.
            </div>
          </Draggable>
        </div>
      </div>
    </div>
  );
}

export default App;
