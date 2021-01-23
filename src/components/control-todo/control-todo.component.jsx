import React, { useContext, useState } from 'react';

import TodosContext from '../../todo-context/todos.context';

import './control-todo.styles.css'

const ControlTodo = () => {
    const { filterItem, toggleAll } = useContext(TodosContext)

    // tab = 1 => all
    // tab = 2 => done
    // tab = 3 => active

    const [activeTab, setActiveTab] = useState(1)
    const handeFilter = (status, check, active) => () => {
        filterItem(status, check)
        setActiveTab(active)
    }
    const handleAllItem = () => {
        toggleAll()
    }
    return (
        <div className="blog-control">
            <div className="toggleall" onClick={handleAllItem}><span>Toggle All</span></div>
            <div className="blog-filter">
                <div className="filter">Filter</div>
                <div className="list-control">
                    <div className={`${activeTab === 1 ? 'item-control-active ' : ''}item-control`} onClick={handeFilter(true, 2, 1)}>All</div>
                    <div className={`${activeTab === 2 ? 'item-control-active ' : ''}item-control`} onClick={handeFilter(true, 1, 2)}>Done</div>
                    <div className={`${activeTab === 3 ? 'item-control-active ' : ''}item-control`} onClick={handeFilter(false, 1, 3)}>Actice</div>
                </div>
            </div>
        </div>
    )
}

export default ControlTodo