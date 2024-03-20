import logo from './logo.svg';
import './App.css';
import { AddTodo } from './components/AddTodo';
import { TodoList } from './components/TodoList';
import { useEffect, useState } from 'react';
import { DeleteAllToDo } from './components/DeleteAllToDo';

function App() {
  const [todolist, settodolist] = useState([])

  useEffect(() => {
    const values = JSON.parse(localStorage.getItem("list"))
    if (values && values?.length > 0) {
      settodolist(values)
    }
  }, [])

  return (
    <div className="App">
      <header className="App-header">
          <AddTodo settodolist = {settodolist} todolist = {todolist}/>
          <TodoList todolist = {todolist}/>
         {!todolist || todolist.length == 0 ? null :<DeleteAllToDo settodolist={settodolist} />}
      </header>
    </div>
  );
}

export default App;
