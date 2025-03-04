import { useState } from "react"

// Dice is a managed component
// A managed component is one which its data
// and functionality is given by a parent component
export default function Dice(props) {

    return (
        <div style={{
            "width": "50px",
            "height": "50px",
            "border":"1px solid black"
        }}
        onClick={()=>{
            props.rollDice()
        }}
        >
            {props.diceValue}
        </div>
        
    )
}