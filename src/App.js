import React from 'react';
import './App.css';
import Title from './Title';
import POPOSList from './POPOSList';
import Counter from './Counter';

function App() {
  return (
    <div className="App">
      <Title />
      <POPOSList />
      <Counter value={0} step={1} />
      <Counter value={10} step={5} />
      <Counter value={1000} step={10} />
    </div>
  );
}

export default App;