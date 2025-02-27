// Create a component in React
// 1. The first character of the function name must be uppercase
// 2. It must return JSX
// 3. The function not inside any other function
// A component function can recieve props
// props is an object where the keys are attributes for that component instance
export default function Alert(props) {
    return <div style={{
      "backgroundColor": props.bgcolor,
      "padding": "5px",
      "margin": "5px"
    }}>
     {props.message}
    </div>
  }
  
