import sushi from "./assets/sushi.jpg"
import "./style.css";

export default function App() {
  return (
    <>
      <h1>Sakaura Japanese Restraurant</h1>
      <h2>Hello World</h2>
      {/* Calculate and show the area of circle with radius 100 */}
      <p>Area of circle with radius 100 = {22/7*100}</p>
      <img src={sushi}/>
      <h2>Random Image</h2>
      <img src="https://picsum.photos/seed/picsum/200/300"/>
    </>
  )
}