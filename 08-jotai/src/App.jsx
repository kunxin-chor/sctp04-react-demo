import { useCounter } from "./CounterStore"
import Display from "./Display";

export default function App() {
  const {count, increment, decrement} = useCounter();
  return (
    <>
      <h1>Simple Counter</h1>
      <div>
        {count}
      </div>
      
      <button onClick={()=>{
        increment();
      }}>Increase</button>

      <button onClick={()=>{
        decrement();
      }}>
        Decrease
      </button>

      <Display/>
    </>
  )
}