
import Shout from './Shout';
import AddTwo from './AddTwo';

export default function App() {
  return (
    <>
    <h1>Hello World</h1>
    <Shout msg="The quick brown fox"/>
    <Shout msg="Jack and Jill"/>
    <Shout msg="Humpty Dumpty had a great fall"/>
    <AddTwo number1={3} number2={5}/>
    </>
  )
}