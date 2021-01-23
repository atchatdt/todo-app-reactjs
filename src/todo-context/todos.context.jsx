import { createContext } from 'react'

const TodoContext = createContext({
    todoList: [],
    toggleItem: () => { },
    addItem: () => { },
    onDone: () => { },
    onDeleteTodo: () => { },
    filterItem: () => { },
    toggleAll: () => { }
})

export default TodoContext