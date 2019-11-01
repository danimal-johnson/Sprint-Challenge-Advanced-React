import React from 'react';
import Players from './Players';
import './App.css';
import { useDarkMode } from './hooks/useDarkMode';

function App() {
  const [darkMode, setDarkMode] = useDarkMode(false);
  const toggleMode = async e => {
    e.preventDefault();
    console.log("before", darkMode);
    await setDarkMode(!darkMode);
    console.log("after", darkMode);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Womens' World Cup Search Rank</h1>
        <button onClick={toggleMode}>Toggle Dark</button>
      </header>
      <Players />
    </div>
  );
}

export default App;
