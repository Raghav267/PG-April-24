import React from 'react'
import { MdDeleteOutline } from "react-icons/md";
import { IoArrowUp } from "react-icons/io5";
import styles from './Todo.module.css';

const Todo = ({ id, text, completed, deleteTodo }) => {
    return (
        <li className={styles.li}>

            <input type="checkbox" value={completed} />
            <span>{text}</span>
            <span onClick={() => deleteTodo(id)}><MdDeleteOutline /></span>
            <span><IoArrowUp /></span>
            <span>DownButton</span>
        </li>
    )
}

export default Todo
