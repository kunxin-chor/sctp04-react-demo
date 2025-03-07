import { useCounter } from "./CounterStore"

export default function Display() {
    const { count } = useCounter();
    return (<>
        <h2>The counter is now {count}</h2>
    </>)
}