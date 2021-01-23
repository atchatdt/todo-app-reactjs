import React, { useContext } from 'react'
import ItemTodo from "../item-todo/item-todo.component";
import TodosContext from '../../todo-context/todos.context';

import './list-todo.styles.css';

const ListItem = () => {
    const { todoList } = useContext(TodosContext)
    return (
        <div className="list-todo">
            {
                (todoList.length > 0)?
                (todoList.map((item, idx) => <ItemTodo key={idx} item={item} />)):
                <div className="empty">Không có công việc nào</div>
            }
        </div>
    )
}

export default ListItem;