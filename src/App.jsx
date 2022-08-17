import react, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "./assets/LOGO_T_256.png";
import {
  faWifi,
  faVolumeHigh,
  faTerminal,
  faCircleInfo,
  faBarsProgress,
} from "@fortawesome/free-solid-svg-icons";
import { faPaperPlane, faSun } from "@fortawesome/free-regular-svg-icons";


import { window as Programm } from "./components/Window";
import { TerminalWindow as Terminal } from "./components/TerminalWindow";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Contact } from "./components/Contact";
function App() {
  //Current Time and update every second
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  // useEffect(() => {
  //   setInterval(() => setTime(new Date().toLocaleTimeString()), 1000);
  // }, []);

  // setInterval(() => {
  //   setTime(new Date().toLocaleTimeString());
  // }, 1000);

  //-----------------------------------------------------SKILLS-------------------
  const [skillWindow, setSkillWindow] = useState([0]); //0 for Default Window
  
  //Open Skills Win on click event
  const openSkillWin = (e) => {
    e.preventDefault();
    if(skillWindow.length < 10) {
    setSkillWindow([...skillWindow, skillWindow.length]);
    }
    else{
      alert("Yo! Hold up! You can't open more than 10 windows");
      setSkillWindow([0]);
    }
  };
  //Remove aboutTask from taskbar
  // const removeAboutTask = (windex) => {
  //   setAboutWindow(aboutWindow.filter((window, index) => index !== windex));
  //   console.log(windex);
  // };
  //Open Multiple About window
  let AllSkillWindows = [];
  for (let i = 0; i < skillWindow.length; i++) {
    AllSkillWindows.push(
      <Skills key={i} index={i} />
    );
  }
  // //Add to taskbar
  // const aboutTask = aboutWindow.map((window, index) => (
  //   <div
  //     key={index}
  //     className="border-l-2 border-zinc-400 px-2 hover:bg-gray-500"
  //   >
  //     <FontAwesomeIcon icon={faCircleInfo} /> About{index}
  //   </div>
  // ));

  //-----------------------------------------------------About Section ----------------------------------
  const [AboutWindows, setAboutWindows] = useState([0]);
  const openAboutWin = (e) => {
    e.preventDefault();
    if(AboutWindows.length < 5) {
    setAboutWindows([...AboutWindows, AboutWindows.length]);
    }
    else{
      alert("Yo! Hold up! You can't open more than 5 windows");
      setAboutWindows([0]);
    }
  };
  //Open Multiple About window
  const AllAboutWindows = AboutWindows.map((window, index) => (
    <About key={index} index={window} />
    // <Skills key={index} index={window} handleClose={removeSkillsTask} />
  ));
 

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
            <div className="border-l-2 border-zinc-400 px-2 hover:bg-gray-500 cursor-default" onClick={openAboutWin}>
              <FontAwesomeIcon icon={faCircleInfo}  /> About
            </div>
            <div className="border-l-2 border-zinc-400 px-2 hover:bg-gray-500 cursor-default" onClick={openSkillWin}>
              <FontAwesomeIcon icon={faTerminal}  /> Skills
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
            <button onClick={() => removeAboutTask(10)}> Close </button> <br />
            <button onClick={openAboutWin}> Open About </button>
          </div>
          <button onClick={openSkillWin}> Open Skills </button>
          {AllAboutWindows} {AllSkillWindows}
        </div>
      </div>
    </div>
  );
}

export default App;
