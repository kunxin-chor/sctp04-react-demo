// 1. component functions are not
// inside other functions

// 2. first alphabet is upper case

// 3. return JSX

// The first parameter of any Component function is the props
export default function Shout(props) {
    return <div>{props.msg.toUpperCase()}</div>
  }

  