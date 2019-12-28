import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import List from './components/list/List';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <div>
        <List />
      </div>
    </div>
  );
}

export default App;
