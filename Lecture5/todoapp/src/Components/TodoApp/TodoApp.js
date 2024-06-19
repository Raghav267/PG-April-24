import React from 'react'
import styles from './TodoApp.module.css'
import TodoList from '../TodoList/TodoList'
import Form from '../Form/Form'
// import styles from

const TodoApp = () => {


    const initailtodos = [
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

    return (
        <section>
            <Form />
            <TodoList initailtodos={initailtodos} />
        </section>
    )
}

export default TodoApp
