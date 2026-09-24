import { useState } from "react"

function App() {
  // Keeping the state strictly to inject the active color value into the style property
  const [color, setColor] = useState("olive")

  return (
    <div className="app-container" style={{ backgroundColor: color }}>
      
      {/* Outer frame structure layout positioning the dock at the bottom-center */}
      <div className="toolbar-positioner">
        
        {/* White floating control hub wrapper block */}
        <div className="dock-bar">

          <button 
          onClick={()=>{setColor("red")}}
            className="color-button" 
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>

          <button 
          onClick={()=>{setColor("green")}}
            className="color-button" 
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>

          <button 
          onClick={()=>{setColor("blue")}}
            className="color-button" 
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>

          <button 
          onClick={()=>{setColor("purple")}}
            className="color-button" 
            style={{ backgroundColor: "purple" }}
          >
            Purple
          </button>

          <button 
          onClick={()=>{setColor("black")}}
            className="color-button" 
            style={{ backgroundColor: "black" }}
          >
            Black
          </button>

        </div>
      </div>
   
    </div>
  )
}

export default App
