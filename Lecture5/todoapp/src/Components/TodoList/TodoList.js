import React from 'react'
import Todo from '../Todo/Todo'

const TodoList = ({ initailtodos }) => {

    return (
        <ul>
            {
                initailtodos.map((todo) => {
                    return (
                        <Todo
                            key={todo.id}
                            id={todo.id}
                            text={todo.text}
                            completed={todo.completed}
                        />
                    )
                })
            }
        </ul>

    )
}

export default TodoList
