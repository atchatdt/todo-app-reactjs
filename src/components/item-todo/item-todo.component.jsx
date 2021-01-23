import React, { useContext } from 'react';

import TodosContext from '../../todo-context/todos.context';
import './item-todo.styles.css'

const ItemTodo = ({ item }) => {
  const { onDone, onDeleteTodo } = useContext(TodosContext);
  const changeStatus = () => onDone(item.id)
  const clickDelete = () => onDeleteTodo(item.id)
  return (
    <div className="item-todo">
      <div className="blog-name-check">
        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" className="check-item" checked={item.status} onChange={changeStatus} />
        <div className={`${item.status ? 'todo-final ' : ''}name-todo`}>{item.name}</div>
      </div>
      <div className="delete-todo" onClick={clickDelete}><span>X</span></div>
    </div>
  )
}

export default ItemTodo
