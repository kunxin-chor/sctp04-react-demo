import { atom, useAtom } from "jotai";

// in jotai, an atom is a piece of data that we are sharing
// -> it's a "shared state"
const counterAtom = atom(0);

export const useCounter = () => {
    const [count, setCount] = useAtom(counterAtom);

    // define helper functions that update the atom
    const increment = () => {
        // the setter function in jotai is asynchronous
        setCount((prevValue)=>{
            return prevValue + 1
        });
    }

    const decrement = () => {
        // the setter function in jotai is asynchronous
        setCount((prevValue)=>{
            // return the new value of what count should be
            return prevValue - 1
        });
    }

    return {
        count, increment, decrement
    }
}