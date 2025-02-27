import {useState} from 'react';

export default function App() {

  console.log("App() is being called");

  // for React to remember a value, it must be stored
  // in a state
  // useState -> create a state (aka a value/data that the component remembers)
  //  parameter -> default value/data of the state (only applies when the component is drawn for the first time aka initial render aka mounting)
  // useState returns two values
  //  -- first value (in this case, the `count` variable) --> a variable that stores the current data
  //  -- second value (in thsi case, the `setCount` function ) --> a function to change the value/data of the state
  // when a variable created using useState is changed via the setter function,
  // its owning component will automatically re-renders (in other redraw itselfs)
  const [count, setCount] = useState(0);
  const [colour, setColour] = useState("blue");

  // a function that is called when an event happens
  // is known an event handler
  // In react, event handlers are written using ARROW functions
  //  not the usual functions
  const boxClicked = () => {
    // CANNOT MODIFY THE STATE VARIABLE DIRECTLY
    // count = count + 1;
    // Use the mutator functiong given back by useState to update the value of the state
    setCount(count + 1);
  }

   const helloMouse = () => {
    console.log("Mouse cursor detected");
    setColour("red");
  }

  return (
    <>
      <h1>Events</h1>
      <div style={{
        "width":"50px",
        "height":"50px",
        "border":"1px solid black",
        "backgroundColor": colour
      }} 
      onClick={boxClicked}
      onMouseEnter={helloMouse}
      onMouseLeave={()=>{
        console.log("Mouse out of the box");
        setColour("blue");
      }}
      >
      {count}
      </div>
    </>
  )
}