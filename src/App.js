import Board from './Board';
import Button from './Button';
import { useState } from 'react';

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
    <div>
      <div>
        <Button onClick={handleRollClick}>Throw</Button>
        <Button onClick={handleClearClick}>Go first</Button>
      </div>
      <div>
        <Board name='me' color='blue'  gameHistory={myHistory} />
        <Board name='opponent' color='red' gameHistory={otherHistory} />
      </div>
    </div>
  )
}

export default App;