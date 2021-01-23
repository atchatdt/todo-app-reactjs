import React, { useContext, useState } from 'react';

import TodosContext from '../../todo-context/todos.context';

import './control-todo.styles.css'

const ControlTodo = () => {
    const { filterItem } = useContext(TodosContext)
    const [activeTab, setActiveTab] = useState(1)
    const handeFilter = (status, check, active) => () => {
        filterItem(status, check)
        setActiveTab(active)
    }
    return (
        <div className="blog-filter">
            <div className="filter">Filter</div>
            <div className="list-control">
                <div className={`${activeTab === 1 ? 'item-control-active ' : ''}item-control`} onClick={handeFilter(true, 2, 1)}>All</div>
                <div className={`${activeTab === 2 ? 'item-control-active ' : ''}item-control`} onClick={handeFilter(true, 1, 2)}>Done</div>
                <div className={`${activeTab === 3 ? 'item-control-active ' : ''}item-control`} onClick={handeFilter(false, 1, 3)}>Actice</div>
            </div>
        </div>
    )
}

export default ControlTodo