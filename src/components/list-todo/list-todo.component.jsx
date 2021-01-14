import React, { useState } from 'react'
import ItemTodo from "../item-todo/item-todo.component";

import './list-todo.styles.css';

const ListItem = () => {
    const [listTodo] = useState([1, 2, 3])
    return (
        <div className="list-todo">
            {
                listTodo.map((item, idx) => <ItemTodo key={idx} />)
            }
        </div>
    )
}

export default ListItem;