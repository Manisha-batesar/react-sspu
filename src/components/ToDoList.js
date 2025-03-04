import React, { useState } from 'react'

const ToDoList = () => {
  const [todo, setTodo] = useState('');
  const [todoList, setTodoList] = useState([]);

  const addTodo = () => {
    setTodoList((prev) => [...prev, todo])
  }
  return (
    <div>
      <input type='text' onChange={(e) => setTodo(e.target.value)}/>
      <button onClick={addTodo}>Add todo</button>
      <ul>
      {
        todoList.map((todo) => {
          return <li key={todo}>{todo}</li>
        })
      }
      </ul>
    </div>
  )
}

export default ToDoList