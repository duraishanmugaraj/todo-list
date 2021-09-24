import React, { useState } from 'react';
import Input from './Components/Input';
import NavBar from './Components/NavBar';
import Card from "./Components/Card"
import todos from './defaultTodo';
import './App.css';
function App() {

  const [doLists, setDoLists] = useState(todos)
  const [currentTime, setCurrentTime] = useState()

  const deleteHandler = (id) => {
    setDoLists(prevState => prevState.filter(todo => todo.id !== id));
  }

  const inputHandler = (value) => {
    const new_value = {
      todo: value,
      id: Math.random()
    }
    setDoLists(prevState => [new_value, ...prevState])
  }

  const time = () => {
    let d = new Date().toLocaleTimeString();
    setCurrentTime(d)
  }
  setInterval(time, 1000);

  return (
    <div className="main" >
      <NavBar />
      <h1 className="text-center">{currentTime}</h1>
      <div className="fluid-container row align-items-center justify-content-center">
        <div className="glass text-center">
          <div className="content">
            <Input add={inputHandler} />
            {doLists.map(list => <Card data={list.todo} key={list.id} id={list.id} delete={deleteHandler} />)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
