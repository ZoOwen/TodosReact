import React from 'react';
import logo from './logo.svg';
import './App.scss';
import TodosCb from './components/TodosCb';
import Todosfb from './components/Todosfb';
function App() {
  return (
    <div className="App">
      <TodosCb />
      <br/>
      <br/>
      <Todosfb/>

    </div>
  );
}

export default App;
