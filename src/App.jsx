import react from "react";
import Draggable from "react-draggable";

function App() {
  // const [position, setPosition] = useState({x: 0, y: 0});
  // const [drag, setDrag] = useState(false);

  // const handleDrag = (e, ui) => {
  //   setPosition({
  //     x: ui.x,
  //     y: ui.y
  //   });

  const dragHandlers = { axis: "both", bounds: "parent" , allowAnyClick: true, defaultPosition: { x: 100, y: 100 }, positionOffset: { x: '10%', y: '10%' } };

  return (
    <div className="App">
      <h1 className="bg-red-500">Hi there</h1>

      <div className="box bg-green-700 w-full h-screen relative overflow-auto p-0">
        <div
          className="bg-red-400 w-3/5 h-screen"
        >
          <Draggable {...dragHandlers}>
            <div className="box bg-green-500 w-1/3">
              I can only be moved within my offsetParent.
            </div>
          </Draggable>
        </div>
      </div>
    </div>
  );
}

export default App;
