import Dice from "./Dice";
import {useState} from 'react';
export default function App() {

    const [dice1, setDice1] = useState(1);
    const [dice2, setDice2] = useState(1);

    const rollDice1 = () => {
        setDice1(Math.floor(Math.random()*6)+1)
    }

    const rollDice2 = () => {
        setDice2(Math.floor(Math.random()*6)+1)
    }

    return (
        <>
            <h1>Lift Up State Example</h1>
            <div style={{ display: "flex" }}>
                <Dice diceValue={dice1} rollDice={rollDice1}/>
                <Dice diceValue={dice2} rollDice={rollDice2}/>
            </div>
            <div>
                Sum of the Dice = {dice1 + dice2}
            </div>

        </>
    )
}