export const addItemTodoList = (todoList, item) => {
    console.log({item,todoList})
    let check = todoList.find(todo => todo.name.toLowerCase() === item.name.toLowerCase())
    if (!check) {
        todoList.push(item)
    }
    return todoList
}