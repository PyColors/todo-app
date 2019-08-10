import React from 'react';

const Todos = ({ todos, deleteTodo }) => {
    const todosList = todos.length ? (
        todos.map(todo => {
            return (
                <div key={todo.id}>
                    <span onClick={() => { deleteTodo(todo.id) }}>{todo.content}</span>
                </div>
            )
        })
    ) : (
            <p>There are no todo here</p>
        )


    return (
        <div>{todosList}</div>
    )
}

export default Todos;