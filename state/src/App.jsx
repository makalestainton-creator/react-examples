import { useState } from 'react';
import './App.css';

const COLORS = ['pink', 'gold', 'dodgerblue', 'silver', 'plum'];

function App() {
  const [backgroundColor, setBackgroundColor] = useState(COLORS[0]);
  const [bgChangeCount, setBgChangeCount] = useState(0);

  const onButtonClick = (color) => () => {
    setBackgroundColor(color);
    setBgChangeCount((n) => n + 1);
  };

  return (
    <div
      className="App"
      style={{
        backgroundColor,
      }}
    >
      {COLORS.map((color) => (
        <button
          type="button"
          key={color}
          onClick={onButtonClick(color)}
          className={backgroundColor === color ? 'selected' : ''}
        >
          {color}
        </button>
      ))}
      <p>You have changed the background {bgChangeCount} times.</p>
    </div>
  );
}

export default App;
