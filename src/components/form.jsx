// REACT
import { useState } from "react";
//CSS
import "./form.css";

export const Form = () => {

const [data, setData] = useState([])
const [task, setTask] = useState([])

const handleSubmit = (e) => {
    e.preventDefault()
    if ( task.length < 1 ) {
        setTask ([data])
        setData ("")
        e.target.reset()
    } else {
        setTask ([...task, data])
        setData ("")
        e.target.reset()
    }
}

const handleInputChange = (e) => {
    let inputValue = e.target.value
    setData ({task: inputValue, id: task.length + 1});
}

const deleteTask = (e) => {
    // console.log (e.target.id)
    let buttonId = parseInt(e.target.id)
    console.log (buttonId)

    for (let i = 0; i < task.length; i++) {
        if (task[i].id === buttonId) {
            const tasksFiltred = task.filter (task => task.id !== buttonId)
            setTask (tasksFiltred)
            break
        } else {
            console.log("ID not finded")
        }
    }
}

    return (
        <div className = "formContainer">
            <h1>TO DO LIST</h1>
            <form className = "formSubmit" onSubmit={handleSubmit}>
                <input className="formField" type="text" onChange={handleInputChange} />
                <button className = " formButton"type="submit">ADD</button>
            </form>
            {task.map ((task) => <div className = "listItemsContainer" key={task.id}>
                <li className="listItem">{task.task}</li>
                <button className= "listButton " id={task.id} onClick={deleteTask}>DONE</button>
            </div>)}
        </div>
    )
}