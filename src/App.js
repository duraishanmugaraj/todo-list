import React, { useState } from 'react';
import './App.css';
import Input from './Components/Input';
import NavBar from './Components/NavBar';
import Card from "./Components/Card"
import todos from './defaultTodo';
function App() {

  const [doLists, setDoLists] = useState(todos)

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
  return (
    <div className="main" >
      <NavBar />
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
