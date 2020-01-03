import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import List from './components/list/List';
import AddBook from './components/addBooks/AddBook';

function App() {
  console.log(1);
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <div>
        <AddBook />
      </div>
      <div>
        <List />
      </div>
    </div>
  );
}

export default App;
