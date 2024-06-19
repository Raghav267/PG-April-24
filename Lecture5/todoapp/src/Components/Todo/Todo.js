import React from 'react'
import { MdDeleteOutline } from "react-icons/md";

const Todo = ({ id, text, completed }) => {
    return (
        <li>

            <input type="checkbox" value={completed} />
            <span>{text}</span>
            <span><MdDeleteOutline /></span>
        </li>
    )
}

export default Todo
