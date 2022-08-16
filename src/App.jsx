import react, { useRef, useState } from "react";
import Draggable from "react-draggable";
import Logo from './assets/LOGO_T_256.png'

function App() {
  // const [position, setPosition] = useState({x: 0, y: 0});
  // const [drag, setDrag] = useState(false);

  const dragHandlers = {
    axis: "both",
    bounds: "parent",
    allowAnyClick: true,
    defaultPosition: { x: 100, y: 100 },
    positionOffset: { x: "10%", y: "10%" },
  };
  const nodeRef = useRef(null);
  return (
    <div className="App">
      <header className="w-full bg-gradient-to-r from-gray-700 via-gray-900 to-black py-1 ">
        <nav className="flex justify-between text-white">
          <div className="flex items-center">
            <div className="px-1 ">
              <img src={Logo} alt="logo" className="h-5 w-6" />
            </div>
     
          </div>
          <div className="flex items-end">
            second section
          </div>
        </nav>
      </header>

      {/* <div className="box bg-green-700 w-full h-screen relative overflow-auto p-0">
        <div className="bg-red-400 w-3/5 h-screen">
          <Draggable {...dragHandlers} nodeRef={nodeRef}>
            <div className="box bg-green-500 w-1/3" ref={nodeRef}>
              I can only be moved within my offsetParent.
            </div>
          </Draggable>
        </div>
      </div> */}
    </div>
  );
}

export default App;
