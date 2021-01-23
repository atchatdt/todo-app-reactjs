import { useState, useEffect } from 'react'

import TodoContext from './todos.context';

const TodosProvider = ({ children }) => {
    const [todoList, settodoList] = useState([])
    useEffect(() => {
        if (localStorage) {
            let todos = localStorage.getItem('todos')
            if (todos) {
                settodoList(JSON.parse(todos))
            }
        }
    }, [])
    const addItem = item => {
        let checkItemExists = todoList.find(todo => todo.name.toLowerCase() === item.name.toLowerCase())
        if (!checkItemExists) {
            let listResult = [].concat(todoList, item)
            settodoList(listResult)
            localStorage.setItem('todos', JSON.stringify(listResult))
        }
    }
    const onDone = id => {
        for (let i = 0; i < todoList.length; i++) {
            if (todoList[i].id === id) {
                todoList[i].status = !todoList[i].status
            }
        }
        localStorage.setItem('todos', JSON.stringify(todoList))
        settodoList([].concat(todoList))
    }
    const onDeleteTodo = id => {
        for (let i = 0; i < todoList.length; i++) {
            if (todoList[i].id === id) {
                todoList.splice(i, 1);
                break
            }
        }
        localStorage.setItem('todos', JSON.stringify(todoList))
        settodoList([].concat(todoList))
    }

    const filterItem = (status, check = 1) => {
        let todos = localStorage.getItem('todos')

        if (todos) {
            todos = JSON.parse(todos)
            if (check === 2) {
                settodoList([].concat(todos))
            } else {
                let listFilter = todos.filter(item => item.status === status)
                settodoList([].concat(listFilter))
            }
        }
    }
    return (
        <TodoContext.Provider
            value={{
                todoList,
                addItem,
                onDone,
                onDeleteTodo,
                filterItem
            }}
        >
            {children}
        </TodoContext.Provider>
    )
}

export default TodosProvider