import dog from "./assets/puppy.jpg" 
import "./App.css"
function App() {
  // Whatever JSX is returned from
  // the App() function, it is "rendered"
  // for the user to see

  const name = "Alice Wonder";

  // <> ... </> = React Fragment (acts as a top level element
  // but is not part of the DOM)
  return (<>
    <h1 style={{
      backgroundColor: "white",
      color: "pink",
      fontSize: "64px"
    }}>Puppy Adoption Agency</h1>
    <h2>The best place to get fluffy new best friend</h2>
    <p>
      Hi {name}! 
    </p>
    <p>
      If Alice has 30 apples but ate halve, and give the halve of the remaining
      to Simon, how many apples will Simon have?
      Ans: {30/2/2} apples
    </p>
    <img src={dog}/>
  </>)
}

// So that other JS files can use the function, we have to
// export it
export default App;