import React, { useState } from 'react'
import "./ToDoList.css"
const ToDoList = () => {

    const [tasks, setTasks] = useState(["guna"]);
    const [newTask, setNewTask] = useState("");

    const handleInputChange = (event: any) => {
        setNewTask(event.target.value)
        console.log("cvkmmmbn", event.target.value);
    }

    const addTask = () => {
        if(newTask.trim() !== "") {
            setTasks(t => ([...t,newTask]));
            setNewTask("");
        }
    }

    const deleteTask = (index:any) => {
        const updateTasks = tasks.filter((_,i) => i !== index);
        setTasks(updateTasks);
    }

    const moveTaskUp = (index:any) => {
        if ( index > 0 ) {
            const updatedTasks = [...tasks];
            [updatedTasks[index],updatedTasks[index - 1]] = [updatedTasks[index - 1],updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    const moveTaskDown = (index:any) => {
        if ( index < tasks.length - 1 ) {
            const updatedTasks = [...tasks];
            [updatedTasks[index],updatedTasks[index + 1]] = [updatedTasks[index + 1],updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }


    return (
        <div className='to-do-list'>
            <h1>To-Do-List</h1>
            <div>
                <input type='text' placeholder='Enter a task...' value={newTask} onChange={handleInputChange} />
                <button className='add-button' onClick={addTask}>Add</button>
            </div>
            <ol>
                {tasks.map((task, index) =>
                    <li key={index}>
                        <span className='text'>{task}</span>
                        <button className='delete-button' onClick={() => deleteTask(index)}>Delete</button>
                        <button className='move-up' onClick={() => moveTaskUp(index)}>👆</button>
                        <button className='move-up' onClick={() => moveTaskDown(index)}>👇</button>

                    </li>
                )}
            </ol>
        </div>
    )
}

export default ToDoList;
