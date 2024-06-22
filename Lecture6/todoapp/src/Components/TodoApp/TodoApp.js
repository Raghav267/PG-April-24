import React, { useState } from 'react'
import TodoList from '../TodoList/TodoList'
import Form from '../Form/Form'
import styles from "./TodoApp.module.css"
import { v4 as uuid } from "uuid"

const TodoApp = () => {


    const dummyList = [
        {
            id: "1",
            text: "Go to Gym",
            completed: false
        },
        {
            id: "2",
            text: "Go to School",
            completed: false
        }
    ];

    const [initailtodos, setTodod] = useState(dummyList);

    const addTodo = (newTodod) => {
        setTodod((prevstate) => {
            return [...prevstate, { id: uuid(), text: newTodod, completed: false }]
        })
    };

    const deleteTodo = (todoId) => {
        setTodod((prevstate) => {
            return prevstate.filter((todo) => todo.id !== todoId);
        })
    }

    return (
        <section className={styles.todoapp}>
            <Form addTodo={addTodo} />
            <TodoList initailtodos={initailtodos} deleteTodo={deleteTodo} />
        </section>
    )
}

export default TodoApp
