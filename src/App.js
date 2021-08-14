import { useState } from 'react';
import Button from './Button';
import Dice from './Dice';

function random(n) {
  return Math.ceil(Math.random() * n);
}

function App() {
  const [num, setNum] = useState(1);
  const [sum, setSum] = useState(0);
  const [gameHistory, setGameHistory] = useState([]);


  const handleRollClick = () => {
    const nextNum = random(6);
    setNum(nextNum);
    setSum(sum + nextNum);
    setGameHistory([...gameHistory,nextNum]);
  };

  const handleClearClick = () => {
    setNum(1);
    setSum(0);
    setGameHistory([]);
  }

  return (
    <div>
      <div>
        <Button onClick={handleRollClick}>Throw</Button>
        <Button onClick={handleClearClick}>Go first</Button>
      </div>
      <div>
        <h2>me</h2>
        <Dice color='blue' num={num} />
        <h2>score</h2>
        <p>{sum}</p>
        <h2>Record</h2>
        <p>{gameHistory.join(', ')}</p>
      </div>
    </div>
  );
}

export default App;