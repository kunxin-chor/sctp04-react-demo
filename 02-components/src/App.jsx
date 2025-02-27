
import Alert from "./Alert"


export default function App() {


  function sayHello() {
    return <h2>Hello How Are You?</h2>
  }

  return (
    <>
      <h1>Hello World</h1>
      {
        sayHello()
      }

      {/* Render an instance of the Alert component */}
      <Alert message="Danger ahead" bgcolor="pink"/>
      <Alert message="Withdrawal amount exceeds bank account's balance" bgcolor="orange"/>
      <Alert message="Download successful" bgcolor="lightgreen"/>
   </>
  )
}