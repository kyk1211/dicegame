import Board from './Board';
import Button from './Button';
import { useState } from 'react';
import './App.css';

function random(n) {
  return Math.ceil(Math.random() * n);
}

function App() {
  const [myHistory, setMyHistory] = useState([]);
  const [otherHistory, setOtherHistory] = useState([]);

  const handleRollClick = () => {
    const nextMyNum = random(6);
    const nextOtherNum = random(6);
    setMyHistory([...myHistory,nextMyNum]);
    setOtherHistory([...otherHistory,nextOtherNum]);
  };

  const handleClearClick = () => {
    setMyHistory([]);
    setOtherHistory([]);
  }

  return (
    <div className='App'>
      <div>
        <Button className= 'App-button' color='blue' onClick={handleRollClick}>Throw</Button>
        <Button className= 'App-button' color='red' onClick={handleClearClick}>Go first</Button>
      </div>
      <div>
        <Board name='me' color='blue'  gameHistory={myHistory} />
        <Board name='opponent' color='red' gameHistory={otherHistory} />
      </div>
    </div>
  )
}

export default App;