import React, { useState, useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';

import './todo-add.styles.css';
import TodosContext from '../../todo-context/todos.context';

const TodoAdd = () => {
  const [todo, setTodo] = useState('')
  const { addItem } = useContext(TodosContext)

  const handleAddTodo = e => {
    if (e.charCode === 13) {
      if (todo.trim().length > 0) {
        addItem({ id: uuidv4(), name: todo, status: false })
        setTodo('')
      }
    }
  }

  const handleChange = e => {
    setTodo(e.target.value)
  }
  return (<input type="text" name="todo" placeholder="Enter todo name here" className="input-todo" onKeyPress={handleAddTodo} onChange={handleChange} value={todo}/>)
};
export default TodoAdd;
