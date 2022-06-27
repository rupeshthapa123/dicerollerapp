import {useState} from 'react';
// import './index.css';
import './App.css';

const App = ()=> {
const [diceNumber, setDiceNumber] = useState(2)
const [diceNumber2, setDiceNumber2] = useState(1)
const refreshDice = () =>{
  const randno = Math.floor(Math.random() * 6) +1
  setDiceNumber(randno)
  const randno2 = Math.floor(Math.random() * 6) +1
  setDiceNumber2(randno2)
}

  return (
    <div>
      <center>
     <img alt='' width={300} height={300} src={require(`./assets/${diceNumber}.png`)}></img>
     <img alt='' width={300} height={300} src={require(`./assets/${diceNumber2}.png`)}></img>
     <br></br>
     <button onClick={()=>refreshDice()} className='button'>Roll</button>
     </center>
    </div>
  );
}

export default App;
