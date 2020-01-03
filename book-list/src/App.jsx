import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import LoadList from './container/loadList/LoadList';
import AddBook from './container/addBooks/AddBook';

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
        <LoadList />
      </div>
    </div>
  );
}

export default App;
