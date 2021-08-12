import Button from './Button';
import Dice from './Dice';
 

function App() {
  return (
    <div>
      <div>
        <Button>throw</Button>
        <Button>go first</Button>
      </div>
      <Dice color='red' num={2} />
    </div>
  );
}

export default App;