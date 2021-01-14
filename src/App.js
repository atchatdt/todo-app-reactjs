import './App.css';

import TodoAdd from './components/todo-add/todo-add.component';
import ListTodo from './components/list-todo/list-todo.component';
import ControlTodo from './components/control-todo/control-todo.component';

function App() {
  return (
    <div className="App">
      <div className="title-app">Todo App</div>
      <div className="pre-view">
        <TodoAdd />
        <ListTodo />
        <ControlTodo />
      </div>
    </div>
  );
}

export default App;
