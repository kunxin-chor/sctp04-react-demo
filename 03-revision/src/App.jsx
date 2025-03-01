import {useState} from 'react';  // enable using state

export default function App() {


  // create the state variable
  // when a component is being displayed (i.e rendered) for the first time
  // it is known as "mounting"
  // the first parameter of useState is the value for the state variable
  // when the component is being mounted
  const [boxColor, setBoxColor] = useState("red");

  // assign a function to a variable

  // 1. Start with an annyomous JavaScript function
  // const greenButtonClicked = function() {
  //   alert("Green has been clicked")
  // }

  // 2. Remove the function keyword, and put
  // and arrow between the () and the { }
  //   const greenButtonClicked = () => {
  //   alert("Green has been clicked")
  // }

  // 3. OPTIONAL: If an arrow function only
  // HAVE ONE LINE, the {} is optional
  const greenButtonClicked = () => setBoxColor("green");
  

  return (
    <>
      <h1>Revision 3</h1>
      <div style={{
        backgroundColor: boxColor,
        width:"50px",
        height:"50px",
        border:"1px solid black"
      }}>

      </div>
      {/* Event handlers are function that triggered or called
      when an event happens, like greenButtonClicked */}
      <button onClick={greenButtonClicked}>Green</button>
      <button onClick={()=>{
        setBoxColor("red");
      }}>Red</button>
      <button onClick={()=>{
       setBoxColor("blue");
      }}>Blue</button>

      <p>The current color of the box is {boxColor}</p>

    </>
  )
}