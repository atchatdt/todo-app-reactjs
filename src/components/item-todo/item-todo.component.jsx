import React from 'react'

import './item-todo.styles.css'

const ItemTodo = () => {
  return (
    <div className="item-todo">
      <div className="blog-name-check">
        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" className="check-item" />
        <div className="name-todo">Đi chơi</div>
      </div>
      <div className="delete-todo"><span>X</span></div>
    </div>
  )
}

export default ItemTodo
