import React from 'react'
import Todo from '../Todo/Todo'

const TodoList = ({ initailtodos, deleteTodo }) => {

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
                            deleteTodo={deleteTodo}
                        />
                    )
                })
            }
        </ul>

    )
}

export default TodoList
